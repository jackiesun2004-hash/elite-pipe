(function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector("[data-nav-links]");
  const year = document.querySelector("[data-year]");
  const form = document.querySelector("[data-inquiry-form]");
  const formNote = document.querySelector("[data-form-note]");

  if (window.lucide) {
    window.lucide.createIcons();
  }

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  if (form && formNote) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const subject = encodeURIComponent(`Pipe inquiry from ${data.get("name") || "website visitor"}`);
      const body = encodeURIComponent(
        [
          `Name: ${data.get("name") || ""}`,
          `Email: ${data.get("email") || ""}`,
          `Product: ${data.get("product") || ""}`,
          "",
          "Message:",
          data.get("message") || "",
        ].join("\n"),
      );

      formNote.textContent = "Opening your email app with the inquiry details.";
      window.location.href = `mailto:elitepipeca@gmail.com?subject=${subject}&body=${body}`;
    });
  }
})();
