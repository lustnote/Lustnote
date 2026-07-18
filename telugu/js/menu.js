/* =========================
   TOP NAVBAR DROPDOWN MENU
========================= */

const menuBtn = document.querySelector('button[aria-label="Menu"]');

if (menuBtn) {
  menuBtn.addEventListener("click", toggleMenu);
}

function toggleMenu() {

  let existing = document.getElementById("mobileMenu");

  if (existing) {
    existing.remove();
    return;
  }

  const menu = document.createElement("div");
  menu.id = "mobileMenu";

  menu.innerHTML = `
    <div class="fixed inset-0 z-50">

      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/70 backdrop-blur-sm menu-overlay"></div>

      <!-- Top Menu -->
      <div class="absolute top-0 left-0 w-full bg-background border-b border-white/10 p-6 animate-fade-up">

        <div class="flex justify-between items-center mb-6">
          <h2 class="text-lg font-semibold">LustNote</h2>

          <button id="closeMenuBtn"
            class="text-xl hover:text-red-400 transition">
            ✖
          </button>
        </div>

        <div class="flex flex-col gap-4 text-lg">

          <a href="../../index.html">Home</a>

          <a href="../../index.html">
            Languages
          </a>

          <a href="../../telugu/telugu-category-list.html">
            Categories
          </a>

          <a href="../../about.html">
            About
          </a>

          <a href="../../contactus.html">
            Contact Us
          </a>

        </div>

      </div>

    </div>
  `;

  document.body.appendChild(menu);

  // Close Button
  document
    .getElementById("closeMenuBtn")
    .addEventListener("click", closeMenu);

  // Overlay Click
  menu
    .querySelector(".menu-overlay")
    .addEventListener("click", closeMenu);
}

function closeMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu) {
    menu.remove();
  }
}
