<template>
  <div class="a6-block">
    <div class="block-content">
      <div class="verses-container">
        <p class="large-title">CRISTO VIENE</p>

        <p class="main-text">
          "POR TANTO, TAMBIÉN VOSOTROS ESTAD PREPARADOS; PORQUE EL HIJO DEL
          HOMBRE VENDRÁ A LA HORA QUE NO PENSÁIS" - San Mateo 24:44
        </p>

        <div class="separator"></div>

        <p class="main-text">
          "PORQUE EL DÍA Y LA HORA NADIE SABE, NI AUN LOS ÁNGELES DE LOS
          CIELOS, SINO SOLO MI PADRE" - San Mateo 24:36
        </p>

        <div class="separator"></div>

        <p class="main-text">
          "PORQUE ES NECESARIO QUE TODOS NOSOTROS COMPADEZCAMOS ANTE EL
          TRIBUNAL DE CRISTO, PARA QUE CADA UNO RECIBA SEGÚN LO QUE HAYA
          HECHO MIENTRAS ESTABA EN EL CUERPO, SEA BUENO O SEA MALO" - 2 Corintios 5:10
        </p>

        <div class="separator"></div>

        <p class="large-title">¡VEN A JESÚS YA!</p>

        <p class="main-text">
          "EL QUE EN ÉL CREE, NO ES CONDENADO; PERO EL QUE NO CREE, YA HA
          SIDO CONDENADO, PORQUE NO HA CREÍDO EN EL NOMBRE DEL UNIGÉNITO HIJO
          DE DIOS" - San Juan 3:18
        </p>

        <div class="separator"></div>

        <p class="main-text">
          "CRISTO DIJO "YO SOY EL CAMINO, Y LA VERDAD, Y LA VIDA; NADIE
          VIENE AL PADRE, SINO POR MÍ"
        </p>
        <div class="bible-ref">San Juan 14:6</div>

        <div class="separator"></div>

        <p class="main-text">
          "Y EN NINGÚ OTRO HAY SALVACIÓN; PORQUE NO HAY OTRO NOMBRE BAJO EL
          CIELO, DADO A LOS HOMBRES, EN QUE PODAMOS SER SALVOS" (JESUCRISTO)
        </p>
        <div class="bible-ref">Hechos 4:12</div>
      </div>

      <div>
        <p class="info-text">SANIDADES, PRODIGIOS Y MILAGROS</p>

        <table class="schedule-table">
          <tbody>
            <tr>
              <td>HORARIOS<br />DE<br />CULTOS</td>
              <td>
                LUNES A SÁBADO<br />
                <span class="time">6:30 PM A 8:30 PM</span><br />
                DOMINGOS: 9:00 AM A 12:00 PM
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

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

.verses-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.large-title {
  font-size: var(--cc-font-size-title);
  font-weight: var(--cc-font-weight-bold);
  text-align: center;
  margin: var(--cc-gap-title) 0;
  color: var(--cc-color-primary);
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
  padding: 0.1cm 0.4cm;
  font-size: var(--cc-font-size-ref);
  display: block;
  width: fit-content;
  margin: 0;
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

.schedule-table {
  border-collapse: collapse;
  width: 85%;
  margin: 0.3cm auto 0 auto;
  border: 1px solid var(--cc-color-border);
}

.schedule-table td {
  border: 1px solid var(--cc-color-border);
  padding: 0.15cm 0.3cm;
  text-align: center;
  font-size: var(--cc-font-size-schedule);
  font-weight: var(--cc-font-weight-bold);
  color: var(--cc-color-primary);
}

.schedule-table .time {
  font-size: var(--cc-font-size-schedule-time);
}
</style>
