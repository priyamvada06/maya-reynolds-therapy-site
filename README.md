# Dr. Maya Reynolds, PsyD — Therapy Website

A responsive Next.js + Tailwind CSS website for the fictional therapist profile supplied in the assignment.

## Pages
- `/` — redesigned therapist homepage
- `/reference-clone` — separate reference-layout exercise page

## Run locally
1. Install Node.js (LTS).
2. Extract this ZIP and open the folder in VS Code.
3. In the terminal, run `npm install`.
4. Run `npm run dev`.
5. Open `http://localhost:3000`.

## Before publishing — required cleanup
1. **Replace the sample portrait images.** The portrait/interior images currently use Unsplash sample URLs. Use the approved Dr. Maya Reynolds portrait (if supplied) and the actual office photos from the assignment's Google Drive folder. Download the permitted images, place them in `public/images/`, and update the `Image` `src` values in `app/page.tsx` to `/images/filename.jpg`.
2. **Verify the office address.** The profile says `123th Street 45 W, Santa Monica, CA 90401`; verify that exact wording before publishing.
3. **Replace the placeholder email.** `hello@mayareynoldstherapy.example` is intentionally nonfunctional. Do not publish it as a real contact method.
4. Verify all wording and links against the assignment instructions.
5. If the recruiter expects an exact clone of the reference site, compare the original page side-by-side and refine the `/reference-clone` route.


## 5-minute walkthrough outline
- 0:00–0:30 — Introduce the goal and show the homepage.
- 0:30–1:30 — Explain the calming palette, typography, hierarchy, and primary CTA.
- 1:30–2:30 — Show the three specialties and explain the profile-based copy.
- 2:30–3:15 — Walk through the therapist bio and evidence-based approach.
- 3:15–4:00 — Show the Our Office gallery, location, and telehealth information.
- 4:00–4:40 — Open FAQs and show the contact section.
- 4:40–5:00 — Resize to mobile width and show responsive navigation/layout.

## Notes
- This is a front-end demo only; the contact CTA uses a placeholder email and there is no booking backend.
- The therapist profile is fictional. Do not represent this demo as a real clinical practice.
