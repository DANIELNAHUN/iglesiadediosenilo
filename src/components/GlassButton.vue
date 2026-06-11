<template>
  <router-link
    :to="to"
    class="glass-button"
    :aria-label="label"
  >
    <span class="glass-button__label">{{ label }}</span>
    <slot />
  </router-link>
</template>

<script setup>
defineProps({
  /** Destination path passed to <router-link> */
  to: {
    type: String,
    required: true
  },
  /** Button label text */
  label: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.glass-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 0.75rem 1.75rem;
  border-radius: 12px;

  background-color: var(--glass-bg);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);

  color: hsl(var(--foreground));
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  text-decoration: none;

  /* Default state: no blur (faster paint, no flicker when unsupported).
     Enhanced state via @supports below. */
  transition:
    background-color 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.glass-button__label {
  line-height: 1;
}

.glass-button:hover {
  background-color: rgba(255, 255, 255, 0.25);
  transform: translateY(-1px);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.14);
}

.glass-button:focus-visible {
  outline: 2px solid hsl(var(--primary));
  outline-offset: 3px;
}

.glass-button:active {
  transform: translateY(0);
}

/* Enhanced: backdrop blur when supported.
   Also adds the warm gold accent overlay per design. */
@supports ((-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px))) {
  .glass-button {
    -webkit-backdrop-filter: blur(var(--glass-blur));
    backdrop-filter: blur(var(--glass-blur));
    background-image: linear-gradient(
      135deg,
      rgba(180, 140, 80, 0.15),
      rgba(255, 255, 255, 0.05)
    );
  }
}
</style>
