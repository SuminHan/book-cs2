// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="index.html">Introduction</a></span></li><li class="chapter-item "><li class="part-title">국내반</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="kor/lecture01.html"><strong aria-hidden="true">1.</strong> Lists / Strings</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="kor/lecture01-topics.html"><strong aria-hidden="true">1.1.</strong> Topics Covered</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="kor/lecture01-problems.html"><strong aria-hidden="true">1.2.</strong> Problem Set</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="kor/lecture02.html"><strong aria-hidden="true">2.</strong> Loops</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="kor/lecture02-topics.html"><strong aria-hidden="true">2.1.</strong> Topics Covered</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="kor/lecture02-problems.html"><strong aria-hidden="true">2.2.</strong> Problem Set</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="kor/lecture03.html"><strong aria-hidden="true">3.</strong> Multi-Dimensional Lists</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="kor/lecture03-topics.html"><strong aria-hidden="true">3.1.</strong> Topics Covered</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="kor/lecture03-problems.html"><strong aria-hidden="true">3.2.</strong> Problem Set</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="kor/lecture04.html"><strong aria-hidden="true">4.</strong> Pile of Cubes</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="kor/lecture04-topics.html"><strong aria-hidden="true">4.1.</strong> Topics Covered</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="kor/lecture04-problems.html"><strong aria-hidden="true">4.2.</strong> Problem Set</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="kor/lecture05.html"><strong aria-hidden="true">5.</strong> Gaussian Elimination</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="kor/lecture05-topics.html"><strong aria-hidden="true">5.1.</strong> Topics Covered</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="kor/lecture05-problems.html"><strong aria-hidden="true">5.2.</strong> Problem Set</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="kor/lecture06.html"><strong aria-hidden="true">6.</strong> Spring Equilibrium (optional)</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="kor/lecture06-topics.html"><strong aria-hidden="true">6.1.</strong> Topics Covered</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="kor/lecture06-problems.html"><strong aria-hidden="true">6.2.</strong> Problem Set</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="kor/lecture07.html"><strong aria-hidden="true">7.</strong> Classes &amp; Objects</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="kor/lecture07-topics.html"><strong aria-hidden="true">7.1.</strong> Topics Covered</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="kor/lecture07-problems.html"><strong aria-hidden="true">7.2.</strong> Problem Set</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="kor/lecture08.html"><strong aria-hidden="true">8.</strong> Stable Matching I</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="kor/lecture08-topics.html"><strong aria-hidden="true">8.1.</strong> Topics Covered</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="kor/lecture08-problems.html"><strong aria-hidden="true">8.2.</strong> Problem Set</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="kor/lecture09.html"><strong aria-hidden="true">9.</strong> Stable Matching II</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="kor/lecture09-topics.html"><strong aria-hidden="true">9.1.</strong> Topics Covered</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="kor/lecture09-problems.html"><strong aria-hidden="true">9.2.</strong> Problem Set</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="kor/lecture10.html"><strong aria-hidden="true">10.</strong> Poker Hands</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="kor/lecture10-topics.html"><strong aria-hidden="true">10.1.</strong> Topics Covered</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="kor/lecture10-problems.html"><strong aria-hidden="true">10.2.</strong> Problem Set</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="kor/lecture11.html"><strong aria-hidden="true">11.</strong> Art Gallery Problem</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="kor/lecture11-topics.html"><strong aria-hidden="true">11.1.</strong> Topics Covered</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="kor/lecture11-problems.html"><strong aria-hidden="true">11.2.</strong> Problem Set</a></span></li></ol><li class="chapter-item "><li class="spacer"></li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="general/number-representation.html">A.1. How Numbers Live in Memory</a></span></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            // Check both with and without the '.html' suffix to be robust against pretty URLs
            if (link.href.replace(/\.html$/, '') === current_page.replace(/\.html$/, '')
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);

