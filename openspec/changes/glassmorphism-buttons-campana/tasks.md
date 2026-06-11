# Tasks: Glassmorphism Buttons & Campaign Page

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | 420–500 |
| 400-line budget risk | Medium |
| Chained PRs recommended | No |
| Suggested split | Single PR with glassmorphism foundation first |
| Delivery strategy | ask-on-risk |
| Chain strategy | pending |

Decision needed before apply: No
Chained PRs recommended: No
Chain strategy: single-pr
400-line budget risk: Medium

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Foundation + GlassButton + Router | PR 1 | packages, router, GlassButton, style tokens |
| 2 | CampanaView + LeafletMap + WelcomeView wiring | PR 1 (continued) | Depends on Unit 1; same PR acceptable at ~450 lines |

## Phase 1: Foundation & Infrastructure

- [x] 1.1 Install dependencies: `vue-router@4` in `package.json` (leaflet + @vue-leaflet/vue-leaflet deferred to PR#2)
- [x] 1.2 Create `src/router/index.js` with routes: `/` → WelcomeView, `/campana` → CampanaView (lazy-loaded via `() => import(...)`)
- [x] 1.3 Modify `src/main.js`: import router, register with `app.use(router)`
- [x] 1.4 Modify `src/App.vue`: replace `<WelcomeView />` import with `<router-view />`
- [x] 1.5 Add glassmorphism CSS variables to `src/style.css`: `--glass-bg`, `--glass-border`, `--glass-blur`, `--glass-shadow`

## Phase 2: GlassButton Component

- [x] 2.1 Create `src/components/GlassButton.vue` with props: `label` (String, required), `to` (String, required)
- [x] 2.2 Implement glassmorphism styles: `backdrop-filter: blur(var(--glass-blur))`, semi-transparent bg, `border-radius: 12px`, warm gold accent at 15% opacity
- [x] 2.3 Add `@supports` fallback for browsers without `backdrop-filter` (solid background)
- [x] 2.4 Use `<router-link :to="to">` for navigation, slot or prop for label

## Phase 3: LeafletMap Component

- [x] 3.1 Create `src/components/LeafletMap.vue` with props: `eventLocation` (Object, required), `referencePoints` (Array, required), `center` (Array, optional, defaults to eventLocation.coords), `zoom` (Number, default 15), `routeColor` (String, default '#957850' — brand warm-gold)
- [x] 3.2 Implement `referencePoints` prop with icon type mapping: `park` → 🌳, `ovalo` → 🏟️, `mercado` → 🛒, `gobierno` → 🏛️, `iglesia` → ⛪
- [x] 3.3 Create `getIconForType(type)` function returning appropriate emoji `L.divIcon` per reference point type; unknown types fall back to 📍
- [x] 3.4 Render Leaflet markers for event location (distinct sparkle icon) and each reference point using `@vue-leaflet/vue-leaflet`'s `l-map`, `l-tile-layer`, `l-marker`, `l-popup` components
- [x] 3.5 Render `l-polyline` routes from each reference point to the event location with configurable `routeColor`, dashed (6,8) at 0.7 opacity
- [x] 3.6 Import `leaflet/dist/leaflet.css` inside `<script setup>` so Vite bundles it once with the component (scoped to the component lifetime), preventing Tailwind's preflight from clobbering Leaflet's tile/control layout. Component `<style scoped>` uses `:deep()` only for the pin visuals.

> **Note**: 3.1 originally listed five props (`center`, `zoom`, `markers`, `routes`, `referencePoints`). The shipped API collapses this to `eventLocation` + `referencePoints` + `center/zoom/routeColor` overrides, because the event location and routes are derived from the two main props. This is the same semantic — no lost functionality, simpler surface for the view in PR#3.

## Phase 4: CampanaView & WelcomeView

- [ ] 4.1 Create `src/views/CampanaView.vue` with 50/50 flex split layout (`flex-col md:flex-row`), left: campaign content from Formato1.html, right: LeafletMap
- [ ] 4.2 Extract campaign text into CampanaView data: title "¡VEN TÚ Y TU FAMILIA!", subtitle, verse (Marcos 9:23), closing "¡PREPÁRATE, CRISTO VIENE!"
- [ ] 4.3 Define referencePoints array in CampanaView with configurable icon types (park, ovalo, mercado, gobierno, iglesia)
- [ ] 4.4 Modify `src/views/WelcomeView.vue`: add two GlassButton instances below the quote — "Ubicación de la Iglesia Central" (to Google Maps link) and "Campañas" (to `/campana`)

## Phase 5: Verification

- [ ] 5.1 Run `npm run build` — verify no errors, lazy-loaded chunk for CampanaView appears in output
- [ ] 5.2 Manual test: click "Campañas" button → navigates to `/campana` with split layout
- [ ] 5.3 Manual test: map renders with event marker, reference points with correct icons, polyline routes visible
- [ ] 5.4 Manual test: responsive stacking on mobile (< 768px) — content stacks vertically
- [ ] 5.5 Manual test: GlassButton hover/focus states, backdrop-filter effect visible
