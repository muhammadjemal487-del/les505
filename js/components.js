/* ============================================================
   Shared Components - Ethio Excellence Academy
   Reusable navbar and footer rendered via JavaScript to
   eliminate HTML duplication across pages.
   ============================================================ */

/**
 * Renders the shared navbar into an element with id="shared-navbar".
 * @param {string} activePage - The key of the currently active page
 *   ("home" | "about" | "courses" | "contact").
 */
function renderNavbar(activePage) {
    const links = [
        { key: "home",    href: "index.html",   label: "Home" },
        { key: "about",   href: "about.html",   label: "About Us" },
        { key: "courses", href: "course.html",   label: "Courses" },
        { key: "contact", href: "contact.html",  label: "Contact" },
    ];

    const navItems = links.map(function (link) {
        var activeClass = link.key === activePage
            ? ' fw-bold" style="color: var(--accent-gold) !important;'
            : '"';
        return '<li class="nav-item">' +
            '<a class="nav-link text-white px-3' + activeClass + ' href="' + link.href + '">' +
            link.label + '</a></li>';
    }).join("\n");

    var html =
        '<nav class="navbar navbar-expand-lg navbar-dark sticky-top">' +
        '  <div class="container">' +
        '    <a class="navbar-brand" href="index.html">ETHIO EXCELLENCE</a>' +
        '    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">' +
        '      <span class="navbar-toggler-icon"></span>' +
        '    </button>' +
        '    <div class="collapse navbar-collapse" id="navbarNav">' +
        '      <ul class="navbar-nav ms-auto">' + navItems + '</ul>' +
        '    </div>' +
        '  </div>' +
        '</nav>';

    var el = document.getElementById("shared-navbar");
    if (el) el.innerHTML = html;
}

/**
 * Renders the shared footer into an element with id="shared-footer".
 * @param {string} [departmentName] - Optional department suffix
 *   (e.g. "Computer Science Department"). When omitted the generic
 *   academy footer is rendered.
 */
function renderFooter(departmentName) {
    var inner;
    if (departmentName) {
        inner = '<p class="mb-0">&copy; 2026 Ethio Excellence Academy | ' + departmentName + '</p>';
    } else {
        inner =
            '<h3 class="fw-bold mb-3">ETHIO EXCELLENCE ACADEMY</h3>' +
            '<p class="small opacity-50">Integrity. Innovation. Excellence.</p>' +
            '<p class="small mb-0 text-white-50">&copy; 2026 Ethio Excellence. All rights reserved.</p>';
    }

    var html = '<footer><div class="container">' + inner + '</div></footer>';

    var el = document.getElementById("shared-footer");
    if (el) el.innerHTML = html;
}
