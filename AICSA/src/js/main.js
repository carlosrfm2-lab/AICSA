// Set current year in footer
document.addEventListener("DOMContentLoaded", () => {
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Contact Form Handling
    const quoteForm = document.getElementById("quoteForm");
    const DEST_EMAIL = "gerencia_aicsa@outlook.com";

    if (quoteForm) {
        quoteForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const formData = new FormData(quoteForm);
            const name = formData.get("name")?.trim() || "";
            const company = formData.get("company")?.trim() || "";
            const phone = formData.get("phone")?.trim() || "";
            const email = formData.get("email")?.trim() || "";
            const msg = formData.get("msg")?.trim() || "";

            const subject = encodeURIComponent("Solicitud de cotización - AICSA");
            const body = encodeURIComponent(
                `Nombre: ${name}\nEmpresa: ${company}\nTeléfono: ${phone}\nCorreo: ${email}\n\nDetalle:\n${msg}\n\n(Enviado desde la web de AICSA)`
            );

            window.location.href = `mailto:${DEST_EMAIL}?subject=${subject}&body=${body}`;
        });
    }

    // Header Scroll Effect
    const header = document.querySelector(".topbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Reveal Animations on Scroll
    const reveal = () => {
        const reveals = document.querySelectorAll(".reveal");
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    };

    window.addEventListener("scroll", reveal);
    reveal(); // Initial check

    // Smooth Scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for sticky topbar
                    behavior: 'smooth'
                });
            }
        });
    });
});
