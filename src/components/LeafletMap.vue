<template>
  <div class="leaflet-map">
    <l-map
      :zoom="zoom"
      :center="resolvedCenter"
      :use-global-leaflet="false"
      :options="{ scrollWheelZoom: false }"
      class="leaflet-map__container"
      @click="onMapClick"
      @ready="onMapReady"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
        :attribution="attribution"
      />

      <!-- Reference points -->
      <l-marker
        v-for="point in referencePoints"
        :key="`ref-${point.id}`"
        :lat-lng="point.coords"
        :icon="getIconForType(point.icon, point.name)"
      >
        <l-popup>
          <strong>{{ point.name }}</strong>
        </l-popup>
      </l-marker>

      <!-- Polylines from each reference point to the event location -->
      <l-polyline
        v-for="point in referencePoints"
        :key="`line-${point.id}`"
        :lat-lngs="[point.coords, eventLocation.coords]"
        :color="routeColor"
        :weight="2"
        :dash-array="'6, 8'"
        :opacity="0.7"
      />

      <!-- Event location marker (visually distinct) -->
      <l-marker
        :lat-lng="eventLocation.coords"
        :icon="eventIcon"
      >
        <l-popup>
          <strong>{{ eventLocation.name }}</strong><br />
          <span v-if="eventLocation.address">{{ eventLocation.address }}</span>
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import {
  LMap,
  LTileLayer,
  LMarker,
  LPopup,
  LPolyline,
} from '@vue-leaflet/vue-leaflet'

// Fix default-icon paths broken by Vite bundling (not used here — we use
// divIcon — but kept as a safety net for any future default-icon usage).
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

const props = defineProps({
  /**
   * Event location: { name: String, coords: [lat, lng], address?: String }.
   * Rendered with a distinct, larger icon.
   */
  eventLocation: {
    type: Object,
    required: true,
  },
  /**
   * Reference points surrounding the event.
   * Shape: { id, name, coords: [lat, lng], icon: IconType }[].
   */
  referencePoints: {
    type: Array,
    required: true,
  },
  /** Initial center; falls back to eventLocation.coords. */
  center: {
    type: Array,
    default: null,
  },
  /** Initial zoom level. */
  zoom: {
    type: Number,
    default: 16,
  },
  /** Color of the polyline routes connecting refs to the event. */
  routeColor: {
    type: String,
    default: '#957850', // warm-gold accent matching the brand
  },
})

const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

const resolvedCenter = computed(() => {
  if (Array.isArray(props.center) && props.center.length === 2) {
    return props.center
  }
  return props.eventLocation.coords
})

/**
 * Map a reference-point icon type to its emoji glyph.
 * Keeping this as the single source of truth so the legend (future) and
 * the marker can never drift apart.
 */
const ICON_GLYPHS = Object.freeze({
  park: '\u{1F333}', // 🌳
  ovalo: null, // show name only
  mercado: '\u{1F6D2}', // 🛒
  gobierno: '\u{1F3DB}', // 🏛️
  iglesia: '\u{26EA}', // ⛪
})

/** Size multipliers per icon type (1 = default, 2 = double). */
const ICON_SCALE = Object.freeze({
  park: 2,
  gobierno: 2,
})

function getIconForType(type, name) {
  const glyph = ICON_GLYPHS[type] ?? '\u{1F4CD}' // 📍 fallback
  const scale = ICON_SCALE[type] ?? 1

  if (glyph === null) {
    // No icon — render the place name as a plain label
    return L.divIcon({
      className: 'leaflet-map__label',
      html: `<span class="leaflet-map__label-text">${name ?? ''}</span>`,
      iconSize: [120, 24],
      iconAnchor: [60, 12],
      popupAnchor: [0, -12],
    })
  }

  const size = 32 * scale
  const half = size / 2
  return L.divIcon({
    className: 'leaflet-map__pin',
    html: `<span class="leaflet-map__pin-glyph" aria-hidden="true" style="font-size:${28 * scale}px">${glyph}</span>`,
    iconSize: [size, size],
    iconAnchor: [half, half],
    popupAnchor: [0, -half],
  })
}

const eventIcon = computed(() =>
  L.divIcon({
    className: 'leaflet-map__pin leaflet-map__pin--event',
    html:
      '<span class="leaflet-map__pin-glyph" aria-hidden="true">\u{2728}</span>',
    iconSize: [44, 44],
    iconAnchor: [22, 22],
    popupAnchor: [0, -22],
  }),
)

/**
 * Stub click handler — keeps the l-map `@click` binding valid in case
 * future consumers want to wire analytics or custom behaviour.
 */
function onMapClick() {
  // intentional no-op
}

/**
 * When the map is ready, compute the bounding box of ALL markers
 * (reference points + event location) and fit the view so every
 * pin is visible with a comfortable padding.
 */
function onMapReady(map) {
  const allCoords = [
    props.eventLocation.coords,
    ...props.referencePoints.map((p) => p.coords),
  ]
  map.fitBounds(allCoords, { padding: [40, 40] })
}
</script>

<style scoped>
/*
 * Leaflet's own stylesheet is imported in <script setup> so Vite bundles
 * it once and scopes it to this component's lifetime. We intentionally
 * avoid importing it globally in src/style.css because Tailwind's
 * preflight resets break Leaflet's tile/control layout otherwise.
 *
 * The scoped block below handles only what Leaflet cannot: the
 * emoji-pin visuals and the container's responsive sizing.
 */
.leaflet-map {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 320px;
  border-radius: 12px;
  overflow: hidden;
  /* Match the glass-card vibe from the design system. */
  background-color: hsl(var(--background));
  border: 1px solid var(--border);
}

.leaflet-map__container {
  width: 100%;
  height: 100%;
  min-height: 320px;
}

/* Reset Tailwind's preflight that would hide our pin glyph. */
.leaflet-map :deep(.leaflet-map__pin) {
  background: transparent;
  border: 0;
}

.leaflet-map :deep(.leaflet-map__pin-glyph) {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 28px;
  line-height: 1;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.35));
}

.leaflet-map :deep(.leaflet-map__pin--event) {
  z-index: 1000;
}

.leaflet-map :deep(.leaflet-map__pin--event .leaflet-map__pin-glyph) {
  font-size: 38px;
  filter: drop-shadow(0 2px 4px rgba(149, 120, 80, 0.55));
}

/* Label-only markers (no icon, just the place name) */
.leaflet-map :deep(.leaflet-map__label) {
  background: transparent;
  border: 0;
}

.leaflet-map :deep(.leaflet-map__label-text) {
  display: block;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  color: #333;
  white-space: nowrap;
  text-shadow: 0 1px 3px rgba(255, 255, 255, 0.8);
  pointer-events: none;
}
</style>
