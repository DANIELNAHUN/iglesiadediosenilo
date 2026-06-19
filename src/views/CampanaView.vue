<template>
  <main class="campana min-h-screen bg-background flex flex-col items-center justify-center px-6 py-16 md:py-24">
    <!-- Header: title -->
    <transition appear name="fade-in">
      <header class="text-center space-y-3">
        <p class="text-[11px] font-semibold uppercase tracking-[0.35em] text-muted-foreground">
          Iglesia del Verbo de Dios en Ilo
        </p>
        <h1
          id="campana-title"
          class="font-serif-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.1] text-foreground text-balance"
        >
          Campaña Evangelística
        </h1>
      </header>
    </transition>

    <!-- Divider -->
    <transition appear name="fade-in">
      <div class="my-10 style-delay-1 h-px w-16 bg-border" aria-hidden="true" />
    </transition>

    <!-- Details -->
    <transition appear name="slide-up">
      <section class="text-center space-y-8 style-delay-1" aria-labelledby="campana-title">
        <!-- Date -->
        <div class="space-y-1">
          <p class="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Fecha
          </p>
          <p class="font-serif-display text-[clamp(1.25rem,3vw,1.75rem)] font-semibold text-foreground">
            Sábado 20 de Junio
          </p>
        </div>

        <!-- Place -->
        <div class="space-y-1">
          <p class="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Lugar
          </p>
          <p class="font-serif-display text-[clamp(1.25rem,3vw,1.75rem)] font-semibold text-foreground">
            Loza Deportiva Cobresur
          </p>
        </div>       
      </section>
    </transition>

    <!-- Divider -->
    <transition appear name="fade-in">
      <div class="my-12 style-delay-2 h-px w-16 bg-border" aria-hidden="true" />
    </transition>

    <!-- Map -->
    <transition appear name="slide-up">
      <section
        class="w-full max-w-2xl style-delay-2"
        aria-label="Mapa de ubicación del evento"
      >
        <div class="campana__map rounded-2xl border border-border overflow-hidden shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1074.5388287369383!2d-71.32927481004663!3d-17.64113769694547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91445b003028b799%3A0xe1e9962e920926e6!2sLOZA%20DEPORTIVA%20COBRESUR!5e0!3m2!1ses-419!2spe!4v1781905827020!5m2!1ses-419!2spe"
            width="100%"
            height="320"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Loza Deportiva Cobresur — mapa"
          ></iframe>
        </div>
      </section>
    </transition>

    <!-- Divider -->
    <transition appear name="fade-in">
      <div class="my-12 h-px w-16 bg-border" aria-hidden="true" />
    </transition>

    <!-- Annex -->
    <transition appear name="slide-up">
      <section class="text-center space-y-3">
        <p class="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Anexo
        </p>
        <p class="font-serif-display text-[clamp(1.1rem,2.5vw,1.5rem)] font-semibold text-foreground">
          Cobresur C6
        </p>
        <p class="text-sm text-muted-foreground">
          Templo cercano a la zona del evento
        </p>
         <!-- CTA -->
        <GlassButton
          to="https://maps.app.goo.gl/ytdKVrGcJrYZXy8F7"
          external
          label="📍 Cómo llegar"
        />
      </section>
    </transition>
  </main>
</template>

<script setup>
import GlassButton from '../components/GlassButton.vue'
</script>

<style scoped>
.campana {
  min-height: 100vh;
}

.campana__map {
  background-color: hsl(var(--border));
}

@media (min-width: 768px) {
  .campana__map iframe {
    height: 400px;
  }
}
</style>
