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

<style>
@import './campana_cobresur.css';
</style>

<style scoped>
.a6-block {
  width: var(--cc-block-width);
  height: var(--cc-block-height);
  padding: var(--cc-padding-block);
  border: 1px dashed var(--cc-color-border-light);
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
  font-size: var(--cc-font-size-body);
  line-height: var(--cc-line-height-body);
  text-align: center;
  margin-bottom: var(--cc-gap-body);
  font-weight: var(--cc-font-weight-bold);
  color: var(--cc-color-primary);
}

.bible-ref {
  border: 1.5px solid var(--cc-color-border);
  padding: 0.08cm 0.4cm;
  font-size: var(--cc-font-size-ref);
  display: inline-block;
  margin: 0.15cm auto;
  font-weight: var(--cc-font-weight-bold);
  color: var(--cc-color-primary);
}

.separator {
  height: var(--cc-gap-separator);
}

.info-text {
  font-size: var(--cc-font-size-info);
  font-weight: var(--cc-font-weight-bold);
  text-align: center;
  margin-top: 0.2cm;
  color: var(--cc-color-primary);
  letter-spacing: 0.5px;
}

.subtitle {
  font-size: var(--cc-font-size-subtitle);
  font-weight: var(--cc-font-weight-bold);
  text-align: center;
  margin: 0.1cm 0 0.2cm 0;
  color: var(--cc-color-primary);
}

.map-container {
  width: var(--cc-map-width);
  height: var(--cc-map-height);
  margin: 0.2cm auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--cc-color-border);
  border-radius: var(--cc-map-radius);
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
  font-weight: var(--cc-font-weight-bold);
  text-align: center;
  margin-top: 0.3cm;
  color: var(--cc-color-primary);
}

.location-text {
  font-size: var(--cc-font-size-location);
  font-weight: var(--cc-font-weight-bold);
  text-align: center;
  line-height: var(--cc-line-height-location);
  color: var(--cc-color-primary);
}

.campaign-data {
  text-align: center;
  margin: 0.2cm 0;
}

.campaign-title-svg {
  width: var(--cc-map-width);
  height: auto;
  display: block;
  margin: 0 auto 0.1cm auto;
}

.campaign-title-text {
  font-size: var(--cc-font-size-campaign-title);
  font-weight: var(--cc-font-weight-bold);
  fill: var(--cc-color-primary);
  font-family: var(--cc-font-family);
}

.campaign-date,
.campaign-time,
.campaign-place {
  font-size: var(--cc-font-size-campaign);
  font-weight: var(--cc-font-weight-bold);
  text-align: center;
  color: var(--cc-color-primary);
  margin: 0.1cm 0;
}
</style>
