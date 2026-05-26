(function () {
  const base = document.body.dataset.base || "";
  const LOGO_NAV = 120;
  const LOGO_FOOT = 96;

  const logo = (size) =>
    `<img src="${base}assets/mptennis-logo.png" alt="MPTennis" class="logo-img" style="height:${size}px;width:auto;display:block;">`;

  const navHTML = `
    <nav class="nav nav-scrolled" id="site-nav">
      <div class="nav-inner">
        <a href="${base}index.html" aria-label="MPTennis">${logo(LOGO_NAV)}</a>
        <ul class="nav-links" id="site-nav-links">
          <li><a href="${base}index.html#system">The system</a></li>
          <li><a href="${base}index.html#access">Three ways</a></li>
          <li><a href="https://youtube.com/@mptennis" target="_blank" rel="noopener">YouTube</a></li>
          <li><a href="${base}blog/">Blog</a></li>
          <li><a href="${base}tools/swingweight-estimator.html">Tools</a></li>
          <li><a href="${base}shop/">Shop</a></li>
          <li><a href="${base}index.html#about">About</a></li>
          <li class="nav-mobile-cta"><a href="https://youtube.com/@mptennis" target="_blank" rel="noopener">Watch free</a></li>
          <li class="nav-mobile-cta"><a href="https://www.acetenniscoach.ca" target="_blank" rel="noopener" class="nav-mobile-cta-solid">Try Ace free</a></li>
        </ul>
        <div class="nav-cta">
          <a href="https://youtube.com/@mptennis" target="_blank" rel="noopener" class="nav-link-quiet">Watch free</a>
          <a href="https://www.acetenniscoach.ca" target="_blank" rel="noopener" class="cta cta-solid" style="text-decoration:none;">Try Ace free</a>
        </div>
        <button class="nav-hamburger" id="nav-hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>`;

  const footHTML = `
    <footer class="footer">
      <div class="footer-inner">
        ${logo(LOGO_FOOT)}
        <div class="footer-newsletter">
          <span class="footer-h">Newsletter</span>
          <p class="footer-news-sub">Get our 7 favourite drills — free. New tactics + gear notes most weeks.</p>
          <a href="https://go.mptennis.ca/7drills" target="_blank" rel="noopener" class="footer-news-cta">Get the 7 drills →</a>
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

  // Inject nav and footer FIRST
  document.querySelectorAll("[data-site-nav]").forEach((el) => {
    el.outerHTML = navHTML;
  });
  document.querySelectorAll("[data-site-footer]").forEach((el) => {
    el.outerHTML = footHTML;
  });

  // THEN attach hamburger event AFTER injection
  function attachHamburger() {
    const btn = document.getElementById("nav-hamburger");
    const nav = document.getElementById("site-nav");
    if (btn && nav) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        nav.classList.toggle("nav-open");
      });
      document.addEventListener("click", function (e) {
        if (nav.classList.contains("nav-open") && !nav.contains(e.target)) {
          nav.classList.remove("nav-open");
        }
      });
    } else {
      setTimeout(attachHamburger, 50);
    }
  }
  attachHamburger();

})();
