/**
 * ITU VCAMP - Site Search Functionality
 */

class SiteSearch {
    constructor() {
        this.searchData = [];
        this.results = [];
        this.init();
    }

    init() {
        this.loadSearchData();
        this.setupSearchTriggers();
        this.createSearchModal();
    }

    loadSearchData() {
        this.searchData = [
            { title: 'ITU VCAMP', url: 'index.html', content: 'Vision Community And Making Project ITU Entrepreneurship Team', category: 'Home' },
            { title: 'Our Team', url: 'team.html', content: 'Team Leader developers designers business development members Gaffar Dulkadir Kerem Kayabas', category: 'Team' },
            { title: 'VCAMP-26 Vehicle', url: 'vehicle.html', content: 'Autonomous Unmanned Aerial System drone specifications flight time 45 minutes speed 80 km/h', category: 'Project' },
            { title: 'Projects', url: 'projects.html', content: 'AI Shell Agent Wedo BlockTrace portfolio innovation', category: 'Projects' },
            { title: 'Contact', url: 'contact.html', content: 'Contact email address Ayazaga Campus Istanbul', category: 'Contact' }
        ];
    }

    setupSearchTriggers() {
        // Bind to all elements with class .search-trigger
        document.addEventListener('click', (e) => {
            if (e.target.closest('.search-trigger')) {
                this.openSearchModal();
            }
        });

        // Keyboard shortcut (Ctrl/Cmd + K)
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                this.openSearchModal();
            }
        });
    }

    createSearchModal() {
        if (document.getElementById('searchModal')) return;

        const modal = document.createElement('div');
        modal.id = 'searchModal';
        modal.className = 'search-modal';
        modal.innerHTML = `
            <div class="search-modal-overlay"></div>
            <div class="search-modal-content">
                <div class="search-input-wrapper">
                    <i class="fas fa-search"></i>
                    <input type="text" id="searchInput" placeholder="Search..." autocomplete="off">
                    <button class="search-close" aria-label="Close search">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div id="searchResults" class="search-results"></div>
            </div>
        `;
        document.body.appendChild(modal);

        // Event Listeners
        modal.querySelector('.search-close').addEventListener('click', () => this.closeSearchModal());
        modal.querySelector('.search-modal-overlay').addEventListener('click', () => this.closeSearchModal());

        const searchInput = modal.querySelector('#searchInput');
        searchInput.addEventListener('input', (e) => this.performSearch(e.target.value));

        // Close on escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                this.closeSearchModal();
            }
        });
    }

    openSearchModal() {
        const modal = document.getElementById('searchModal');
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            setTimeout(() => modal.querySelector('#searchInput').focus(), 100);
        }
    }

    closeSearchModal() {
        const modal = document.getElementById('searchModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            const input = modal.querySelector('#searchInput');
            input.value = '';
            this.clearResults();
        }
    }

    performSearch(query) {
        if (!query || query.trim().length < 2) {
            this.clearResults();
            return;
        }

        const searchTerm = query.toLowerCase().trim();
        this.results = this.searchData.filter(item => {
            const searchableText = (item.title + ' ' + item.content + ' ' + item.category).toLowerCase();
            return searchableText.includes(searchTerm);
        });

        this.displayResults();
    }

    displayResults() {
        const resultsContainer = document.getElementById('searchResults');
        if (!resultsContainer) return;

        if (this.results.length === 0) {
            resultsContainer.innerHTML = `
                <div class="search-no-results">
                    <p>No results found</p>
                </div>
            `;
            return;
        }

        resultsContainer.innerHTML = this.results.map((result, index) => `
            <a href="${result.url}" class="search-result-item">
                <div class="search-result-category">${result.category}</div>
                <div class="search-result-title">${this.highlightMatch(result.title, document.getElementById('searchInput').value)}</div>
                <div class="search-result-content">${this.highlightMatch(result.content.substring(0, 60), document.getElementById('searchInput').value)}...</div>
            </a>
        `).join('');
    }

    highlightMatch(text, query) {
        if (!query) return text;
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    clearResults() {
        const resultsContainer = document.getElementById('searchResults');
        if (resultsContainer) resultsContainer.innerHTML = '';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new SiteSearch();
});
