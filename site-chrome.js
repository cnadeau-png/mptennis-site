/* Shared menu, footer and glass background for every page except the home page.
   The home page (index.html) has its own copy of this look built in. */
(function () {
  const base = document.body.getAttribute("data-base") || "";
  const logo = (h) =>
    `<img src="${base}assets/home/logo-light.png" alt="MPTennis" width="900" height="76" style="height:${h}px;width:auto;display:block;">`;

  const bgHTML = `
    <div class="glass-bg" aria-hidden="true">
      <div class="blob court"></div><div class="blob ball"></div><div class="blob night"></div>
      <div class="ribs"></div><div class="grain"></div>
    </div>`;

  const navHTML = `
    <header class="lnav" id="site-nav">
      <div class="lnav-inner">
        <a href="${base}index.html" aria-label="MPTennis home" class="lnav-logo">${logo(26)}</a>
        <ul class="lnav-links" id="lnav-links">
          <li><a href="${base}index.html#gear">Gear tests</a></li>
          <li><a href="${base}index.html#matches">On court</a></li>
          <li><a href="${base}blog/">Blog</a></li>
          <li><a href="${base}tools/swingweight-estimator.html">Tools</a></li>
          <li><a href="${base}shop/">Shop</a></li>
          <li><a href="${base}inner-circle/">Inner Circle</a></li>
          <li><a href="${base}index.html#about">About</a></li>
        </ul>
        <a href="https://youtube.com/@mptennis?sub_confirmation=1" target="_blank" rel="noopener" class="lnav-sub">Subscribe</a>
        <button class="lnav-menu" id="nav-hamburger" aria-expanded="false" aria-controls="lnav-links">Menu</button>
      </div>
    </header>`;

  const footHTML = `
    <footer class="lfoot">
      <div class="lfoot-inner">
        <a href="${base}index.html" aria-label="MPTennis home">${logo(18)}</a>
        <nav>
          <a href="https://youtube.com/@mptennis" target="_blank" rel="noopener">YouTube</a>
          <a href="https://www.instagram.com/mptennisnb/" target="_blank" rel="noopener">Instagram</a>
          <a href="https://www.facebook.com/mptennisnb" target="_blank" rel="noopener">Facebook</a>
          <a href="${base}blog/">Blog</a>
          <a href="${base}shop/">Shop</a>
          <a href="https://go.mptennis.ca/7drills" target="_blank" rel="noopener">7 free drills</a>
          <a href="mailto:chris@mptennis.ca">chris@mptennis.ca</a>
        </nav>
        <small>© 2026 MPTennis</small>
      </div>
    </footer>`;

  document.body.insertAdjacentHTML("afterbegin", bgHTML);
  document.querySelectorAll("[data-site-nav]").forEach((el) => { el.outerHTML = navHTML; });
  document.querySelectorAll("[data-site-footer]").forEach((el) => { el.outerHTML = footHTML; });

  const nav = document.getElementById("site-nav");
  const btn = document.getElementById("nav-hamburger");
  const links = document.getElementById("lnav-links");
  if (btn && links) {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = links.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
    });
    document.addEventListener("click", (e) => {
      if (links.classList.contains("open") && !nav.contains(e.target)) {
        links.classList.remove("open");
        btn.setAttribute("aria-expanded", false);
      }
    });
  }
  const onScroll = () => nav && nav.classList.toggle("solid", window.scrollY > 20);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
