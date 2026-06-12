/**
 * Campana (Campaign) data — placeholder content for the campaign view.
 *
 * Coordinates are placeholders in Ilo, Peru (the church's city) and the
 * reference points are common landmarks around the city. Real values will
 * be supplied by the team when the actual campaign is announced.
 *
 * Coords use Leaflet convention: [lat, lng].
 */

export const eventLocation = {
  name: 'Iglesia del Verbo de Dios en Ilo',
  coords: [-17.64633369642713, -71.33054927050277], // placeholder — Ilo city center
  address: 'Ilo, Urb José Olaya D-28',
}

export const referencePoints = [
  {
    id: 1,
    name: 'Plaza de la bandera',
    coords: [-17.648428594542782, -71.32656262667811],
    icon: 'park',
  },
  {
    id: 2,
    name: 'Óvalo Av. Pedro Huillca',
    coords: [-17.64747778373899, -71.32870840343541],
    icon: 'ovalo',
  },
  {
    id: 3,
    name: 'Mercado Nuevo Ilo',
    coords: [-17.650463155346774, -71.32838653253836],
    icon: 'mercado',
  },
  {
    id: 4,
    name: 'Agencia municipal de Ilo',
    coords: [-17.64987016410707, -71.33072543624542],
    icon: 'gobierno',
  },
  {
    id: 5,
    name: 'Iglesia Central (evento)',
    coords: [-17.64633369642713, -71.33054927050277],
    icon: 'iglesia',
  },
  {
    id: 6,
    name: 'Óvalo Nuevo Ilo',
    coords: [-17.650739200330598, -71.32939505381401],
    icon: 'ovalo',
  },
]

/**
 * Campaign content extracted from Formato1.html.
 * Fields with {{...}} are placeholders for runtime substitution.
 */
export const campaignContent = {
  title: '¡VEN TÚ Y TU FAMILIA!',
  tagline: '“LO QUE HEMOS VISTO Y OÍDO ESO OS PREDICAMOS”',
  highlights: 'SANIDADES, PRODIGIOS Y MILAGROS',
  verse: '“AL QUE CREE TODO LE ES POSIBLE”',
  verseReference: '(San Marcos 9:23)',
  date: '{{fecha_evento}}',
  time: 'DESDE LAS {{hora_evento}}',
  place: '{{lugar_evento}}',
  reference: '{{referencia_evento}}',
  closing: '¡PREPÁRATE, CRISTO VIENE!',
}
