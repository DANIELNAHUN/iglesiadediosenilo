## Exploration: glassmorphism-buttons-campana

### Current State
The project is a minimal Vue 3 SPA with a single WelcomeView component. No router, no state management, no additional dependencies beyond Vue 3 and Tailwind CSS. The landing page displays a logo, a bible quote, and footer with location and schedule. The design uses warm gold primary color (HSL 35 30% 45%) and Inter/Fraunces fonts. The existing button style (from afiche-generator-frontend skill) is a solid primary button with layered shadows.

### Affected Areas
- `src/views/WelcomeView.vue` — Add two glassmorphism buttons (Ubicación, Campañas)
- `src/components/GlassButton.vue` — New reusable glassmorphism button component (optional)
- `src/router/index.js` — New router configuration (create)
- `src/views/CampanaView.vue` — New view for campaign page with split layout (create)
- `src/main.js` — Update to use router
- `src/App.vue` — Update to include router-view
- `package.json` — Add vue-router, leaflet, vue-leaflet dependencies
- `src/style.css` — Possibly add glassmorphism utility classes

### Approaches
1. **Inline glassmorphism with Tailwind arbitrary values** — Use Tailwind classes directly on buttons in WelcomeView.vue
   - Pros: No extra component, quick implementation
   - Cons: Duplication if more glass buttons needed, harder to maintain consistency
   - Effort: Low

2. **Create a reusable GlassButton component** — Create src/components/GlassButton.vue with props for label, href, etc.
   - Pros: Reusable, consistent styling, easy to update
   - Cons: Slightly more initial work
   - Effort: Low

3. **Use vue-router with lazy-loaded routes** — Install vue-router, create router with lazy-loaded CampanaView
   - Pros: Better code splitting, faster initial load
   - Cons: Adds dependency, slight complexity
   - Effort: Medium

4. **Use leaflet directly (without vue-leaflet)** — Import leaflet and initialize map manually in CampanaView
   - Pros: Full control, smaller bundle (no wrapper)
   - Cons: More boilerplate, need to handle reactivity manually
   - Effort: Medium

5. **Use vue-leaflet** — Use vue-leaflet wrapper for declarative map components
   - Pros: Easier integration with Vue, less boilerplate
   - Cons: Extra dependency, may have compatibility issues with Vue 3
   - Effort: Low

### Recommendation
**Recommended approach**: Combine options 2, 3, and 5.
- Create a reusable GlassButton component for consistency.
- Use vue-router with lazy-loaded routes for the campaign page.
- Use vue-leaflet for map integration (simpler).
- Extract event info from Formato1.html and embed directly in CampanaView (static content).

Reason: This balances reusability, maintainability, and development speed. The glassmorphism button component can be reused elsewhere. Vue-router is necessary for the new route. Vue-leaflet reduces boilerplate.

### Risks
- **Bundle size increase**: Adding vue-router (~10KB gzipped) and leaflet (~40KB gzipped) will increase bundle size. Mitigate with lazy loading.
- **Backdrop-filter support**: Glassmorphism relies on backdrop-filter which is supported in modern browsers but not in older ones. Use @supports or provide fallback.
- **Responsive split layout**: Need to ensure the split layout (event info + map) works on mobile (stacked). Use Tailwind responsive grid.
- **Leaflet CSS conflicts**: Import leaflet CSS in component to avoid Tailwind resets. Use scoped styles.
- **Content extraction**: The Formato1.html includes a large base64 image. Including it will increase page weight. Consider using a placeholder or external image.

### Ready for Proposal
Yes — the exploration is clear. The orchestrator should tell the user: "We'll add two glassmorphism buttons to the landing page (Ubicación and Campañas) and create a new /campana route with a split layout: event info on the left, interactive Leaflet map on the right. The map will show the event location and reference points. We'll use vue-router and vue-leaflet as dependencies. The glassmorphism effect will use the existing warm gold primary color with transparency and backdrop blur."