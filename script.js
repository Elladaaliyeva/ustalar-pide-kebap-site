document.addEventListener("DOMContentLoaded", function () {
    // Navbar açılan menyuların göstərilməsi
    let dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("mouseenter", function () {
            let menu = this.querySelector(".dropdown-menu");
            if (menu) {
                menu.style.display = "block";
            }
        });

        dropdown.addEventListener("mouseleave", function () {
            let menu = this.querySelector(".dropdown-menu");
            if (menu) {
                menu.style.display = "none";
            }
        });
    });

    // Alt menyuların (Pide, Dürüm, Kebap vs.) açılması
    let submenus = document.querySelectorAll(".has-submenu");

    submenus.forEach(submenu => {
        submenu.addEventListener("mouseenter", function () {
            let subMenu = this.querySelector(".submenu");
            if (subMenu) {
                subMenu.style.display = "block";
            }
        });

        submenu.addEventListener("mouseleave", function () {
            let subMenu = this.querySelector(".submenu");
            if (subMenu) {
                subMenu.style.display = "none";
            }
        });
    });

    // Şəkillər üzərinə gəldikdə böyütmə effekti
    let images = document.querySelectorAll(".gallery-container img, .dropdown-menu img");

    images.forEach(img => {
        img.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.1)";
            this.style.transition = "0.3s ease";
        });

        img.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });

    // Sosial media ikonlarının yeni səhifədə açılması
    let socialLinks = document.querySelectorAll(".contact-info a");

    socialLinks.forEach(link => {
        link.setAttribute("target", "_blank"); // Linklər yeni pəncərədə açılsın
    });
});