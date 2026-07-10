Verification Checklist — Number One Landing

Quick steps to verify language bar, testimonials, and mobile menu.

1) Start local server
- (Recommended) From project folder run:

  python -m http.server 8000

- Open: http://localhost:8000/home.html, http://localhost:8000/product.html, http://localhost:8000/review.html

2) Language bar (side panel)
- On each page, click the globe icon in the left side panel.
- Expected: dropdown appears; language links show (English / 中文 / Melayu).
- Click a language link. Expected: visible text on the page updates (elements with data-i18n change).
- Check: the side icon highlights when open and the dropdown closes after selecting a language.

3) Testimonials (review page)
- Open http://localhost:8000/review.html
- Click any testimonial card (the whole card). Expected: the hidden testimonial body expands; clicking again collapses it.
- Check browser console for errors if expansion doesn't work.

4) Mobile menu (product page)
- Open http://localhost:8000/product.html
- Use responsive/device toolbar (Chrome DevTools) or resize to narrow width.
- Click the hamburger icon. Expected: mobile menu slides in and overlay appears.
- Click the contact dropdown within the mobile menu. Expected: submenu toggles open/closed.
- Click outside or the close (X). Expected: menu closes and scrolling is restored.

5) Other quick checks
- Splash screen: reload product page — splash should hide after ~3s and page becomes scrollable.
- WhatsApp order modal: click the green WhatsApp button. Expected: modal opens; try filling fields and press Submit (it opens WhatsApp URL).
- Lightbox: click gallery images — expected: lightbox overlay appears and closes on click (X).

6) Troubleshooting notes
- If language text does not change:
  - Open DevTools → Console and check for JS errors.
  - In console try `setLanguage('zh')` to test manually.
  - Ensure `script.js` is loaded (Network tab) and no 404.
- If mobile menu doesn't open: ensure the hamburger element exists and `script.js` loaded.
- If dropdowns don't show on click, verify `.side-dropdown-wrapper.open` is added (Elements tab).

7) Quick local commands (PowerShell)
- Start server:

  python -m http.server 8000

- Stop server: Ctrl+C in the terminal running the server.

If you want, I can run a quick automated checklist in the repository (static checks) or prepare a short video showing the behavior. Which would you like next?
