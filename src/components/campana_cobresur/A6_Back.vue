<template>
  <div class="a6-block">
    <div class="block-content">
      <div class="verses-container">
        <p class="large-title">CRISTO VIENE</p>

        <p class="main-text">
          "POR TANTO, TAMBIÉN VOSOTROS ESTAD PREPARADOS; PORQUE EL HIJO DEL
          HOMBRE VENDRÁ A LA HORA QUE NO PENSÁIS"
        </p>
        <div class="bible-ref">San Mateo 24:44</div>

        <div class="separator"></div>

        <p class="main-text">
          "PORQUE EL DÍA Y LA HORA NADIE SABE, NI AUN LOS ÁNGELES DE LOS
          CIELOS, SINO SOLO MI PADRE"
        </p>
        <div class="bible-ref">San Mateo 24:36</div>

        <div class="separator"></div>

        <p class="main-text">
          "PORQUE ES NECESARIO QUE TODOS NOSOTROS COMPADEZCAMOS ANTE EL
          TRIBUNAL DE CRISTO, PARA QUE CADA UNO RECIBA SEGÚN LO QUE HAYA
          HECHO MIENTRAS ESTABA EN EL CUERPO, SEA BUENO O SEA MALO"
        </p>
        <div class="bible-ref">2 Corintios 5:10</div>

        <div class="separator"></div>

        <p class="large-title">¡VEN A JESÚS YA!</p>

        <p class="main-text">
          "EL QUE EN ÉL CREE, NO ES CONDENADO; PERO EL QUE NO CREE, YA HA
          SIDO CONDENADO, PORQUE NO HA CREÍDO EN EL NOMBRE DEL UNIGÉNITO HIJO
          DE DIOS"
        </p>
        <div class="bible-ref">San Juan 3:18</div>

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

.verses-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.large-title {
  font-size: 12pt;
  font-weight: bold;
  text-align: center;
  margin: 0.3cm 0;
  color: #000000;
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
  padding: 0.1cm 0.4cm;
  font-size: 6.5pt;
  display: block;
  width: fit-content;
  margin: 0 auto;
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

.schedule-table {
  border-collapse: collapse;
  width: 85%;
  margin: 0.3cm auto 0 auto;
  border: 1px solid #000000;
}

.schedule-table td {
  border: 1px solid #000000;
  padding: 0.15cm 0.3cm;
  text-align: center;
  font-size: 6pt;
  font-weight: bold;
  color: #000000;
}

.schedule-table .time {
  font-size: 7.5pt;
}
</style>
