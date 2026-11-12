// Minimal UI helper; no external dependencies.
document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('back-to-top');
    if (!button) return;
    function updateVisibility() {
        button.hidden = window.scrollY < 420;
    }
    window.addEventListener('scroll', updateVisibility, { passive: true });
    button.addEventListener('click', function () {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
    updateVisibility();
});
