<template>
  <div class="encuentro-a4-page">
    <div class="a4-full">
      <div class="afiche-full">
        <div class="afiche-content">
          <!-- Título superior -->
          <h1 class="titulo-superior">¡VEN TÚ Y TU FAMILIA!</h1>

          <!-- Título curvo con paloma -->
          <div class="titulo-curvo-container">
            <svg class="titulo-curvo-svg" viewBox="0 0 260 140" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <path id="arco-titulo-a4" d="M 10,130 A 90,90 0 0,1 250,130" fill="none" />
              </defs>
              <text>
                <textPath href="#arco-titulo-a4" startOffset="50%" text-anchor="middle" class="titulo-curvo-texto">
                  2DO ENCUENTRO EVANGELÍSTICO
                </textPath>
              </text>
            </svg>
            <img :src="palomaUrl" alt="Paloma" class="paloma-imagen" />
          </div>

          <h1 class="titulo-inferior">ILO - TACNA - MOQUEGUA</h1>

          <div class="entrada">
            <p class="versiculo-principal">"LO QUE HEMOS VISTO Y OÍDO ESO OS PREDICAMOS"</p>
            <p class="tema">SANIDADES, PRODIGIOS Y MILAGROS</p>
          </div>

          <div class="segundo-versiculo">
            <p class="versiculo-secundario">"AL QUE CREE TODO LE ES POSIBLE"</p>
            <p class="referencia-biblica">(San Marcos 9:23)</p>
          </div>

          <div class="fecha-hora">
            <p class="fecha">{{ fechaEvento }}</p>
            <p class="hora">DESDE LAS {{ horaEvento }}</p>
          </div>

          <div class="lugar">
            <p class="lugar-principal">{{ lugarEvento }}</p>
            <p class="lugar-secundario">{{ referenciaEvento }}</p>
          </div>

          <h3 class="llamado-final">¡PREPÁRATE, CRISTO VIENE!</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import palomaUrl from '../components/encuentro_evangelistico/paloma-wbg.png'

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
.encuentro-a4-page {
  min-height: 100vh;
  background: #f5f5f5;
  padding: 2cm;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-family: 'Open Sans', sans-serif;
}

.a4-full {
  width: 21cm;
  height: 29.7cm;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.afiche-full {
  width: 100%;
  height: 100%;
  padding: 1.5cm 2cm;
  display: flex;
  align-items: center;
  justify-content: center;
}

.afiche-content {
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* ── Tipografía (2x del afiche 4-up) ── */

.titulo-superior {
  font-size: 35pt;
  font-weight: 700;
  color: #1a2332;
  margin: 0 0 1cm 0 ;
  line-height: 1.1;
  letter-spacing: 1px;
}

.titulo-inferior {
  font-size: 35pt;
  font-weight: 700;
  color: #1a2332;
  margin: 0;
  line-height: 1.1;
  letter-spacing: 1px;
}

.titulo-curvo-container {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}

.titulo-curvo-svg {
  width: 100%;
  height: auto;
  max-height: 100%;
  overflow: visible;
}

.titulo-curvo-texto {
  font-size: 17pt;
  font-weight: 700;
  fill: #1a2332;
  font-family: 'Open Sans', sans-serif;
}

.paloma-imagen {
  position: absolute;
  width: 8cm;
  height: auto;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -15%);
}

.versiculo-principal {
  font-size: 16pt;
  font-weight: 700;
  color: #1a2332;
  margin: 0;
  line-height: 1.2;
}

.tema {
  font-size: 24pt;
  font-weight: 700;
  color: #1a2332;
  margin: 0;
  line-height: 1.2;
  letter-spacing: 0.5px;
}

.versiculo-secundario {
  font-size: 24pt;
  font-weight: 700;
  color: #1a2332;
  margin: 0;
  line-height: 1.2;
}

.referencia-biblica {
  font-size: 20pt;
  font-weight: 700;
  color: #1a2332;
  margin: 0;
}

.fecha-hora {
  margin: 0;
}

.fecha,
.hora {
  font-size: 24pt;
  font-weight: 800;
  color: #1a2332;
  margin: 0;
  line-height: 1.4;
}

.lugar {
  margin: 0;
}

.lugar-principal,
.lugar-secundario {
  font-size: 24pt;
  font-weight: 800;
  color: #1a2332;
  margin: 0;
  line-height: 1.3;
}

.llamado-final {
  font-size: 34pt;
  font-weight: 700;
  color: #1a2332;
  margin: 0;
  line-height: 1.1;
  letter-spacing: 0.5px;
}

/* ── Print ── */

@media print {
  .encuentro-a4-page {
    padding: 0;
    background: white;
  }

  .a4-full {
    box-shadow: none;
    width: 21cm;
    height: 29.7cm;
  }
}
</style>
