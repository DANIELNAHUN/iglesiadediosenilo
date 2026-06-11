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

- [ ] 3.1 Create `src/components/LeafletMap.vue` with props: `center` (Array, default `[-17.64, -71.34]`), `zoom` (Number, default 15), `markers` (Array), `routes` (Array), `referencePoints` (Array)
- [ ] 3.2 Implement `referencePoints` prop with icon type mapping: `park` → 🌳, `ovalo` → 🏟️, `mercado` → 🛒, `gobierno` → 🏛️, `iglesia` → ⛪
- [ ] 3.3 Create `getIconForType(type)` function returning appropriate emoji/SVG marker per reference point type
- [ ] 3.4 Render Leaflet markers for event location and each reference point using `@vue-leaflet/vue-leaflet` components
- [ ] 3.5 Render polyline routes from reference points to event location with configurable color (default: primary gold dashed)
- [ ] 3.6 Import Leaflet CSS in component `<style>` block (scoped) to avoid Tailwind preflight conflicts

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
