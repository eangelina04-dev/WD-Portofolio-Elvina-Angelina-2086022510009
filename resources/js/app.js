const menu = document.getElementById('collapseMenu');
const openBtn = document.getElementById('toggleOpen');
const closeBtn = document.getElementById('toggleClose');

function openMenu() {
    menu.classList.remove('hidden');
    openBtn.setAttribute('aria-expanded', 'true');
    menu.focus();
}

function closeMenu() {
    menu.classList.add('hidden');
    openBtn.setAttribute('aria-expanded', 'false');
    openBtn.focus();
}

if (menu && openBtn && closeBtn) {
    openBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !menu.classList.contains('hidden')) {
            closeMenu();
        }
    });
}