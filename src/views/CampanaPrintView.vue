<template>
  <main class="campana-print min-h-screen bg-gray-200">
    <!-- Botón de impresión -->
    <div class="print-controls no-print">
      <button @click="generatePDF" class="print-btn" :disabled="isGenerating">
        <svg v-if="!isGenerating" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/>
          <rect x="6" y="14" width="12" height="8"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"/>
          <path d="M12 2a10 10 0 0 1 10 10" stroke-opacity="1"/>
        </svg>
        {{ isGenerating ? 'Generando...' : 'Generar PDF' }}
      </button>
    </div>

    <!-- Contenido para PDF -->
    <div ref="printContent" class="pdf-content">
      <Formato1 />
      <Formato2 />
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'
import Formato1 from '../components/Pagina1.vue'
import Formato2 from '../components/Pagina2.vue'

const printContent = ref(null)
const isGenerating = ref(false)

// A6 dimensions in cm
const A6_W = 10.5
const A6_H = 14.85

/**
 * Espera a que una imagen esté cargada
 */
const waitForImage = (img) => {
  if (img.complete && img.naturalWidth > 0) return Promise.resolve()
  return new Promise((resolve) => {
    img.onload = resolve
    img.onerror = resolve
    // Timeout de seguridad
    setTimeout(resolve, 3000)
  })
}

/**
 * Convierte una imagen a escala de grises usando canvas
 */
const toGrayscale = (img) => {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas')
    canvas.width = img.naturalWidth || img.width
    canvas.height = img.naturalHeight || img.height
    const ctx = canvas.getContext('2d')
    ctx.filter = 'grayscale(100%)'
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    resolve(canvas.toDataURL('image/png'))
  })
}

/**
 * Convierte un SVG a imagen preservando estilos inline
 * (resuelve textPath + preserva fuente)
 */
const svgToImage = (svg) => {
  return new Promise((resolve, reject) => {
    const clone = svg.cloneNode(true)
    clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg')

    // Inline estilos computados en todos los elementos de texto
    const textEls = clone.querySelectorAll('text, textPath')
    const origTextEls = svg.querySelectorAll('text, textPath')
    textEls.forEach((el, i) => {
      const computed = window.getComputedStyle(origTextEls[i])
      const attrs = ['font-family', 'font-size', 'font-weight', 'fill', 'letter-spacing']
      attrs.forEach(attr => {
        const cssProp = attr.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
        const val = computed[cssProp] || computed.getPropertyValue(attr)
        if (val) el.setAttribute(attr, val)
      })
    })

    const svgString = new XMLSerializer().serializeToString(clone)
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const img = new Image()
    img.onload = () => {
      URL.revokeObjectURL(url)
      const canvas = document.createElement('canvas')
      const w = svg.clientWidth || img.naturalWidth
      const h = svg.clientHeight || img.naturalHeight
      canvas.width = w * 3
      canvas.height = h * 3
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      resolve(canvas.toDataURL('image/png'))
    }
    img.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error('SVG to image failed'))
    }
    img.src = url
  })
}

const generatePDF = async () => {
  isGenerating.value = true
  const element = printContent.value

  document.body.classList.add('pdf-generation')

  const restoreFns = []

  try {
    const blocks = element.querySelectorAll('.a6-block')
    if (blocks.length === 0) return

    // --- Pre-procesar cada bloque ---
    for (const block of blocks) {
      // 1. Grayscale: esperar carga + convertir
      const imgs = block.querySelectorAll('.map-container img')
      for (const img of imgs) {
        await waitForImage(img)
        const originalSrc = img.src
        try {
          const graySrc = await toGrayscale(img)
          img.src = graySrc
          restoreFns.push(() => { img.src = originalSrc })
        } catch { /* dejar original */ }
      }

      // 2. SVG: convertir a imagen con fuente preservada
      const svgs = block.querySelectorAll('svg')
      for (const svg of svgs) {
        const parent = svg.parentNode
        try {
          const imgSrc = await svgToImage(svg)
          const imgEl = document.createElement('img')
          imgEl.src = imgSrc
          imgEl.style.width = '7cm'
          imgEl.style.height = 'auto'
          imgEl.style.display = 'block'
          imgEl.style.margin = '0 auto 0.1cm auto'
          parent.replaceChild(imgEl, svg)
          restoreFns.push(() => { parent.replaceChild(svg, imgEl) })
        } catch { /* dejar SVG original */ }
      }
    }

    // --- Capturar bloques ---
    const canvases = []
    for (const block of blocks) {
      const canvas = await html2canvas(block, {
        scale: 3,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false
      })
      canvases.push(canvas)
    }

    // Restaurar DOM
    restoreFns.forEach(fn => fn())
    restoreFns.length = 0

    // --- Crear PDF ---
    const pdf = new jsPDF({ unit: 'cm', format: 'a4', orientation: 'portrait' })

    for (let i = 0; i < canvases.length; i++) {
      if (i > 0 && i % 4 === 0) pdf.addPage()

      const col = i % 2
      const row = Math.floor(i / 2) % 2
      const x = col * A6_W
      const y = row * A6_H

      pdf.addImage(canvases[i].toDataURL('image/png'), 'PNG', x, y, A6_W, A6_H)
    }

    pdf.save('campana-evangelistica.pdf')
  } finally {
    restoreFns.forEach(fn => fn())
    document.body.classList.remove('pdf-generation')
    isGenerating.value = false
  }
}
</script>

<style scoped>
.campana-print {
  font-family: 'Arial', sans-serif;
  color: #2b2d6e;
}

.print-controls {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

.print-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: #2b2d6e;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(43, 45, 110, 0.3);
  transition: all 0.2s ease;
}

.print-btn:hover:not(:disabled) {
  background: #1a1c4a;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(43, 45, 110, 0.4);
}

.print-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.pdf-content {
  padding: 0;
  margin: 0;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* Estilos para captura de PDF — eliminan bordes, sombras y márgenes */
:global(.pdf-generation) :deep(.print-container) {
  margin: 0 !important;
  box-shadow: none !important;
  background: transparent !important;
}

:global(.pdf-generation) :deep(.a6-block) {
  border: none !important;
}

:global(.pdf-generation) :deep(.a6-grid) {
  border: none !important;
}

@media print {
  .no-print {
    display: none !important;
  }
}
</style>
