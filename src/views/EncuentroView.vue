<template>
  <div class="encuentro-page">
    <div class="a4-sheet">
      <div class="afiche" v-for="i in 4" :key="i">
        <div class="afiche-content">
          <!-- Título superior -->
          <h1 class="titulo-superior">¡VEN TÚ Y TU FAMILIA!</h1>

          <!-- Título curvo con paloma -->
          <div class="titulo-curvo-container">
            <svg class="titulo-curvo-svg" viewBox="0 0 260 140" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <path id="arco-titulo" d="M 10,130 A 90,90 0 0,1 250,130" fill="none" />
              </defs>
              <text>
                <textPath href="#arco-titulo" startOffset="50%" text-anchor="middle" class="titulo-curvo-texto">
                  2DO ENCUENTRO EVANGELÍSTICO
                </textPath>
              </text>
            </svg>
            <img :src="palomaUrl" alt="Paloma" class="paloma-imagen" />
          </div>

          <h1 class="titulo-inferior">ILO - TACNA - MOQUEGUA</h1>

          <div class="entrada">
            <!-- Versículo 1 -->
            <p class="versiculo-principal">"LO QUE HEMOS VISTO Y OÍDO ESO OS PREDICAMOS"</p>
            <!-- Tema -->
            <p class="tema">SANIDADES, PRODIGIOS Y MILAGROS</p>
          </div>


          <!-- Versículo 2 -->
          <div class="segundo-versiculo">
            <p class="versiculo-secundario">"AL QUE CREE TODO LE ES POSIBLE"</p>
            <p class="referencia-biblica">(San Marcos 9:23)</p>
          </div>

          <!-- Fecha y hora -->
          <div class="fecha-hora">
            <p class="fecha">{{ fechaEvento }}</p>
            <p class="hora">DESDE LAS {{ horaEvento }}</p>
          </div>

          <!-- Lugar -->
          <div class="lugar">
            <p class="lugar-principal">{{ lugarEvento }}</p>
            <p class="lugar-secundario">{{ referenciaEvento }}</p>
          </div>

          <!-- Llamado final -->
          <h3 class="llamado-final">¡PREPÁRATE, CRISTO VIENE!</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import palomaUrl from '../components/encuentro_evangelistico/paloma-wbg.png'

// Props editables para el afiche
const props = defineProps({
  fechaEvento: { type: String, default: 'SÁBADO 18 DE JULIO' },
  horaEvento: { type: String, default: '4:00PM' },
  lugarEvento: { type: String, default: 'COLISEO DEL COLEGIO MIGUEL GRAU' },
  referenciaEvento: { type: String, default: 'PAMPA INALAMBRICA, ILO' }
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap');
</style>

<style scoped>
.encuentro-page {
  min-height: 100vh;
  background: #f5f5f5;
  padding: 2cm;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-family: 'Open Sans', sans-serif;
}

.a4-sheet {
  width: 21cm;
  height: 29.7cm;
  background: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.afiche {
  width: 10.5cm;
  height: 14.85cm;
  padding: 0.4cm 0.5cm;
  border-right: 1px dashed #ccc;
  border-bottom: 1px dashed #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  page-break-inside: avoid;
}

.afiche:nth-child(2n) {
  border-right: none;
}

.afiche:nth-child(n+3) {
  border-bottom: none;
}

.afiche-content {
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* ── Tipografía ── */

.titulo-superior {
  font-size: 17.5pt;
  font-weight: 700;
  color: #1a2332;
  margin: 0 0 0.2cm 0;
  line-height: 1.1;
  letter-spacing: 0.5px;
}

.titulo-inferior {
  font-size: 17.5pt;
  font-weight: 700;
  color: #4863b3;
  margin: -0.7cm 0 0 0;
  line-height: 1.1;
  letter-spacing: 0.5px;
}

.titulo-curvo-container {
  position: relative;
  width: 100%;
  height: 5cm;
  margin: 0;
}

.titulo-curvo-svg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: visible;
}

.titulo-curvo-texto {
  font-size: 15.5pt;
  font-weight: 700;
  fill: #4863b3;
  font-family: 'Open Sans', sans-serif;
}

.paloma-imagen {
  width: 4cm;
  height: auto;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -20%);
}

.versiculo-principal {
  font-size: 8pt;
  font-weight: 700;
  color: #1a2332;
  margin: 0;
  line-height: 1.2;
}

.tema {
  font-size: 12pt;
  font-weight: 700;
  color: #e63946;
  margin: 0;
  line-height: 1.2;
  letter-spacing: 0.3px;
}

.versiculo-secundario {
  font-size: 12pt;
  font-weight: 700;
  color: #1a2332;
  margin: 0;
  line-height: 1.2;
}

.referencia-biblica {
  font-size: 10pt;
  font-weight: 700;
  color: #1a2332;
  margin: 0;
}

.fecha-hora {
  margin: 0;
}

.fecha,
.hora {
  font-size: 12pt;
  font-weight: 800;
  color: #4863b3;
  margin: 0;
  line-height: 1.4;
}

.lugar {
  margin: 0;
}

.lugar-principal,
.lugar-secundario {
  font-size: 12pt;
  font-weight: 800;
  color: #e63946;
  margin: 0;
  line-height: 1.3;
}

.llamado-final {
  font-size: 17.5pt;
  font-weight: 700;
  color: #1a2332;
  margin: 0;
  line-height: 1.1;
  letter-spacing: 0.3px;
}

/* ── Print ── */

@media print {
  .encuentro-page {
    padding: 0;
    background: white;
  }

  .a4-sheet {
    box-shadow: none;
    width: 21cm;
    height: 29.7cm;
  }

  .afiche {
    border-right: 1px dashed #ccc;
  }
}
</style>
