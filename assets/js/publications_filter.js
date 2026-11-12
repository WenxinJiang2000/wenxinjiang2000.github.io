// Small, dependency-free enhancement for the Publications page.
// Without JavaScript the full publication list remains visible.
document.addEventListener('DOMContentLoaded', function () {
    const root = document.querySelector('.publication-collection');
    if (!root) return;

    const tools = document.getElementById('publication-tools');
    const search = document.getElementById('publication-search');
    const counter = document.getElementById('publication-result-count');
    const empty = document.getElementById('publication-no-results');
    const entries = Array.from(root.querySelectorAll('[data-publication-entry]'));
    const sections = Array.from(root.querySelectorAll('[data-publication-year-section]'));
    const filters = Array.from(root.querySelectorAll('[data-publication-filter]'));
    const yearLinks = Array.from(root.querySelectorAll('[data-publication-year-link]'));
    if (!tools || !search || !counter || !empty || !entries.length) return;

    let selectedYear = 'all';
    const normalizedText = new Map(entries.map(entry => [
        entry,
        (entry.textContent || '').toLocaleLowerCase().replace(/\s+/g, ' ').trim()
    ]));

    function update() {
        const query = search.value.toLocaleLowerCase().trim();
        let visibleCount = 0;
        for (const entry of entries) {
            const matchesYear = selectedYear === 'all' || entry.dataset.publicationYear === selectedYear;
            const matchesSearch = !query || normalizedText.get(entry).includes(query);
            const isVisible = matchesYear && matchesSearch;
            entry.hidden = !isVisible;
            if (isVisible) visibleCount += 1;
        }
        for (const section of sections) {
            const year = section.dataset.publicationYearSection;
            const hasVisible = entries.some(entry => !entry.hidden && entry.dataset.publicationYear === year);
            section.hidden = !hasVisible;
        }
        for (const link of yearLinks) {
            const year = link.dataset.publicationYearLink;
            const isVisible = sections.some(section => section.dataset.publicationYearSection === year && !section.hidden);
            link.hidden = !isVisible;
        }
        counter.textContent = `Showing ${visibleCount} of ${entries.length} publications`;
        empty.hidden = visibleCount !== 0;
    }

    for (const button of filters) {
        button.addEventListener('click', function () {
            selectedYear = button.dataset.publicationFilter;
            for (const other of filters) {
                const active = other === button;
                other.classList.toggle('is-active', active);
                other.setAttribute('aria-pressed', String(active));
            }
            update();
        });
    }
    search.addEventListener('input', update);
    tools.hidden = false;
    update();
});
