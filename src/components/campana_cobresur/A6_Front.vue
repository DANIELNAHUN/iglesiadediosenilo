<template>
  <div class="a6-block">


    <div class="block-content">
       
      <!-- DATOS CAMPAÑA -->
      <div class="campaign-data">
        <svg class="campaign-title-svg" viewBox="0 0 260 80" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <path id="arc" d="M 20,70 A 120,60 0 0,1 240,70" fill="none" />
          </defs>
          <text>
            <textPath href="#arc" startOffset="50%" text-anchor="middle" class="campaign-title-text">
              CAMPAÑA EVANGELÍSTICA
            </textPath>
          </text>
        </svg>
        <p class="campaign-date">SÁBADO 20 DE JUNIO</p>
        <p class="campaign-time">DESDE LAS 4 DE LA TARDE</p>
        <p class="campaign-place">LUGAR: LOZA DEPORTIVA COBRESUR</p>
      </div>

      <div>
        <p class="info-text">ESTAMOS ORANDO POR TI</p>
        <p class="subtitle">NO DEMORES POR TU SALVACIÓN</p>

        <div class="map-container">
          <img :src="croquisUrl" alt="Croquis - Loza Deportiva Cobresur" />
        </div>

        <p class="location-title">UBÍQUENOS EN:</p>
        <p class="location-text">COBRESUR C-6 (ANEXO COBRESUR)</p>
        <p class="location-text">JOSE OLAYA D-28 (TEMPLO CENTRAL)</p>
      </div>

      <div class="separator"></div>    

       <div>
        <p class="main-text">
          JESÚS NO VINO PARA CONDENAR AL MUNDO, SINO PARA SALVARLO
        </p>
        <div class="bible-ref">San Mateo 11:28</div>
      </div>

    </div>
  </div>
</template>

<script setup>
import croquisUrl from './croquis.png'
</script>

<style scoped>
.a6-block {
  width: 10.5cm;
  height: 14.85cm;
  padding: 0.4cm 0.5cm;
  border: 1px dashed #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
  page-break-inside: avoid;
}

.block-content {
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.main-text {
  font-size: 5.5pt;
  line-height: 1.25;
  text-align: center;
  margin-bottom: 0.15cm;
  font-weight: bold;
  color: #000000;
}

.bible-ref {
  border: 1.5px solid #000000;
  padding: 0.08cm 0.4cm;
  font-size: 6.5pt;
  display: inline-block;
  margin: 0.15cm auto;
  font-weight: bold;
  color: #000000;
}

.separator {
  height: 0.2cm;
}

.info-text {
  font-size: 7pt;
  font-weight: bold;
  text-align: center;
  margin-top: 0.2cm;
  color: #000000;
  letter-spacing: 0.5px;
}

.subtitle {
  font-size: 11pt;
  font-weight: bold;
  text-align: center;
  margin: 0.1cm 0 0.2cm 0;
  color: #000000;
}

.map-container {
  width: 7cm;
  height: 5cm;
  margin: 0.2cm auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #000000;
  border-radius: 15px;
  overflow: hidden;
  flex-shrink: 0;
}

.map-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
}

.location-title {
  font-size: 8pt;
  font-weight: bold;
  text-align: center;
  margin-top: 0.3cm;
  color: #000000;
}

.location-text {
  font-size: 7.5pt;
  font-weight: bold;
  text-align: center;
  line-height: 1.3;
  color: #000000;
}

/* Campaign data */
.campaign-data {
  text-align: center;
  margin: 0.2cm 0;
}

.campaign-title-svg {
  width: 7cm;
  height: auto;
  display: block;
  margin: 0 auto 0.1cm auto;
}

.campaign-title-text {
  font-size: 14pt;
  font-weight: bold;
  fill: #000000;
  font-family: 'Arial', sans-serif;
}

.campaign-date {
  font-size: 10pt;
  font-weight: bold;
  text-align: center;
  color: #000000;
  margin: 0.1cm 0;
}

.campaign-time {
  font-size: 10pt;
  font-weight: bold;
  text-align: center;
  color: #000000;
  margin: 0.1cm 0;
}

.campaign-place {
  font-size: 10pt;
  font-weight: bold;
  text-align: center;
  color: #000000;
  margin: 0.1cm 0;
}
</style>
