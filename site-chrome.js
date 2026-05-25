/* MPTennis shared site chrome — renders the real Nav + Footer into
   any page that has [data-site-nav] / [data-site-footer] placeholders.
   Pages must also load styles.css and the brand fonts.

   Pass data attributes to control behavior:
     <body data-base="../">      // path prefix to project root (default "")
*/
(function () {
  const base = document.body.dataset.base || "";

  // Single-image MPTennis lockup (full mark — letters + TENNIS text + ball)
  const logo = (size) => `<img src="${base}assets/mptennis-logo.png" alt="MPTennis" class="logo-img" style="height:${size}px;width:auto;display:block;">`;
  const LOGO_NAV = 140;
  const LOGO_FOOT = 112;

  // ─── Nav ───
  const navHTML = `
    <nav class="nav nav-scrolled" id="site-nav">
      <div class="nav-inner">
        <a href="${base}index.html" aria-label="MPTennis">${logo(LOGO_NAV)}</a>
        <ul class="nav-links">
          <li><a href="${base}index.html#system">The system</a></li>
          <li><a href="${base}index.html#access">Three ways</a></li>
          <li><a href="${base}index.html#youtube">YouTube</a></li>
          <li><a href="${base}blog/">Blog</a></li>
          <li><a href="${base}tools/swingweight-estimator.html">Tools</a></li>
          <li><a href="${base}shop/">Shop</a></li>
          <li><a href="${base}index.html#about">About</a></li>
        </ul>
        <button class="nav-hamburger" id="nav-hamburger" aria-label="Menu"><span></span><span></span><span></span></button><div class="nav-cta">
          <a href="https://youtube.com/@mptennis" target="_blank" rel="noopener" class="nav-link-quiet">Watch free</a>
          <a href="https://www.acetenniscoach.ca/" target="_blank" rel="noopener" class="cta cta-solid">
            <span>Try Ace free</span>
          </a>
        </div>
      </div>
    </nav>`;

  // ─── Footer ───
  const footerHTML = `
    <footer class="footer">
      <div class="footer-inner">
        ${logo(LOGO_FOOT)}
        <div class="footer-newsletter">
          <span class="footer-h">Newsletter</span>
          <p class="footer-news-sub">
            Get our 7 favourite drills — free. New tactics + gear notes most weeks.
          </p>
          <a href="https://go.mptennis.ca/7drills" target="_blank" rel="noopener" class="footer-news-cta">
            Get the 7 drills →
          </a>
        </div>
        <div class="footer-cols">
          <div>
            <span class="footer-h">Ace</span>
            <a href="https://www.acetenniscoach.ca/" target="_blank" rel="noopener">Try free</a>
            <a href="https://www.acetenniscoach.ca/" target="_blank" rel="noopener">Pricing</a>
            <a href="https://www.acetenniscoach.ca/" target="_blank" rel="noopener">FAQ</a>
          </div>
          <div>
            <span class="footer-h">Watch &amp; Read</span>
            <a href="https://youtube.com/@mptennis" target="_blank" rel="noopener">YouTube</a>
            <a href="https://www.instagram.com/mptennisnb/" target="_blank" rel="noopener">Instagram</a>
            <a href="https://www.facebook.com/mptennisnb" target="_blank" rel="noopener">Facebook</a>
            <a href="${base}blog/">Blog</a>
          </div>
          <div>
            <span class="footer-h">In person</span>
            <a href="https://rothesaytennis.com" target="_blank" rel="noopener">Rothesay TC</a>
            <a href="mailto:chris@mptennis.ca">help@mptennis.ca</a>
          </div>
        </div>
        <div class="footer-fine">
          <span>© 2026 MPTennis</span>
          <span>One system. Three ways in.</span>
        </div>
      </div>
    </footer>`;

  // Inject into placeholders
  document.addEventListener('click', function(e) {
    const btn = document.getElementById('nav-hamburger');
    const nav = document.getElementById('site-nav');
    if (btn && btn.contains(e.target)) {
      nav.classList.toggle('nav-open');
      nav.classList.remove('nav-open');
    }
  });
  document.querySelectorAll("[data-site-nav]").forEach((el) => {
    el.outerHTML = navHTML;
  });
  document.querySelectorAll("[data-site-footer]").forEach((el) => {
    el.outerHTML = footerHTML;
  });
})();
