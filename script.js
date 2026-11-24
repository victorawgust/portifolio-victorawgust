document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const closeDrawer = document.getElementById('close-drawer');
    const drawer = document.getElementById('drawer');
    const drawerLinks = document.querySelectorAll('.drawer-link');
    const topicButtons = document.querySelectorAll('.era-btn');

    // Abre e fecha o menu fullscreen
    function setDrawer(open) {
        drawer.classList.toggle('open', open);
        document.body.style.overflow = open ? 'hidden' : '';
    }

    menuBtn.addEventListener('click', () => setDrawer(true));
    closeDrawer.addEventListener('click', () => setDrawer(false));

    drawerLinks.forEach(link => {
        link.addEventListener('click', () => setDrawer(false));
    });

    // Abre ou fecha o conteúdo + foto de cada tópico ao clicar
    topicButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const panel = document.getElementById(btn.dataset.target);
            const isOpen = panel.classList.toggle('open');
            btn.classList.toggle('active', isOpen);
            btn.textContent = isOpen ? 'FECHAR TÓPICO' : 'ABRIR TÓPICO';
        });
    });

    // Fecha menu com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawer.classList.contains('open')) {
            setDrawer(false);
        }
    });
});