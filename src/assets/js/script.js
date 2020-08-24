function toggleMenu() {
    let body = document.querySelector("body");
    let hasCollapsed = body.classList.contains("sidebar-menu-collapsed");
    if (hasCollapsed) {
        body.classList.remove("sidebar-menu-collapsed");
        body.classList.add("noscroll");
    } else {
        body.classList.remove("noscroll");
        body.classList.add("sidebar-menu-collapsed");
    };
}