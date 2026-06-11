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
  coords: [-17.64, -71.34], // placeholder — Ilo city center
  address: 'Ilo, Urb José Olaya D-28',
}

export const referencePoints = [
  {
    id: 1,
    name: 'Parque del Pueblo',
    coords: [-17.642, -71.338],
    icon: 'park',
  },
  {
    id: 2,
    name: 'Óvalo José Gálvez',
    coords: [-17.645, -71.342],
    icon: 'ovalo',
  },
  {
    id: 3,
    name: 'Mercado Pacocha',
    coords: [-17.638, -71.336],
    icon: 'mercado',
  },
  {
    id: 4,
    name: 'Municipalidad de Ilo',
    coords: [-17.641, -71.340],
    icon: 'gobierno',
  },
  {
    id: 5,
    name: 'Iglesia Central (evento)',
    coords: [-17.64, -71.34],
    icon: 'iglesia',
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
