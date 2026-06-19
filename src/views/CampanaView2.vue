<template>
  <main
    class="campana min-h-screen bg-background px-6 py-10 md:py-14 text-foreground"
  >
    <div class="campana__shell mx-auto flex w-full max-w-7xl flex-col gap-8 md:flex-row md:gap-10">
      <!-- Left: campaign content -->
      <section
        class="campana__content flex flex-1 flex-col items-center justify-center text-center"
        aria-labelledby="campana-title"
      >
        <h1
          id="campana-title"
          class="font-serif-display text-balance text-[clamp(1.75rem,4.5vw,2.75rem)] font-semibold leading-tight text-foreground"
        >
          {{ campaignContent.title }}
        </h1>

        <img
          v-if="campaignImageUrl"
          :src="campaignImageUrl"
          :alt="campaignContent.title"
          class="campana__image my-6 w-full max-w-md rounded-xl border border-border object-cover shadow-sm"
        />

        <p class="font-serif-display italic text-sm text-muted-foreground">
          {{ campaignContent.tagline }}
        </p>

        <p class="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#EE0000]">
          {{ campaignContent.highlights }}
        </p>

        <p class="mt-4 font-serif-display italic text-sm text-foreground/80">
          {{ campaignContent.verse }}
        </p>
        <p class="text-xs tracking-[0.15em] uppercase text-muted-foreground">
          {{ campaignContent.verseReference }}
        </p>

        <p class="mt-5 text-base font-semibold text-[#EE0000]">
          {{ campaignContent.date }}
        </p>
        <p class="text-sm font-medium tracking-wide text-[#00B0F0]">
          {{ campaignContent.time }}
        </p>

        <p class="mt-2 text-sm font-semibold text-[#EE0000]">
          {{ campaignContent.place }}
        </p>
        <p class="text-xs text-muted-foreground">
          {{ campaignContent.reference }}
        </p>

        <p class="mt-6 font-serif-display text-balance text-[clamp(1.25rem,3vw,1.75rem)] font-semibold text-foreground">
          {{ campaignContent.closing }}
        </p>
      </section>

      <!-- Right: interactive map -->
      <section
        class="campana__map flex-1"
        aria-label="Mapa de ubicación de la iglesia"
      >
        <LeafletMap
          :event-location="eventLocation"
          :reference-points="referencePoints"
        />
      </section>
    </div>
  </main>
</template>

<script setup>

import { campaignContent, eventLocation, referencePoints } from '../data/campana-data.js'
import LeafletMap from '../components/LeafletMap.vue'

const campaignImageUrl = ''
</script>

<style scoped>
.campana {
  /* The page already has bg-background; ensure full-height layout on
     short viewports. */
  min-height: 100vh;
}

.campana__content {
  /* Allow long content to wrap gracefully on small screens. */
  word-break: break-word;
}

.campana__map {
  /* On mobile, the map sits below the content; give it a fixed
     height so Leaflet has a stable container to mount into. */
  height: 360px;
}

@media (min-width: 768px) {
  .campana__map {
    /* On desktop, the map fills its half of the split and follows the
       content's natural height. */
    height: auto;
    min-height: 520px;
  }
}
</style>
