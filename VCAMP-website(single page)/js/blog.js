/**
 * ITU VCAMP - Blog/Build Progress Handler
 * Displays blog posts from mockData
 */

class BlogHandler {
    constructor() {
        this.posts = window.mockData?.blog || [];
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.renderPosts();
        this.setupFilters();
    }

    setupFilters() {
        const filterButtons = document.querySelectorAll('.blog-filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentFilter = btn.dataset.filter;
                this.renderPosts();
            });
        });
    }

    getTimeAgo(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const diffWeeks = Math.floor(diffDays / 7);

        if (diffWeeks > 0) {
            return `${diffWeeks} ${window.i18n?.t('weeksAgo') || 'weeks ago'}`;
        } else {
            return `${diffDays} ${window.i18n?.t('daysAgo') || 'days ago'}`;
        }
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    }

    renderPosts() {
        const container = document.getElementById('blogPosts');
        if (!container) return;

        let filteredPosts = this.posts;
        
        if (this.currentFilter !== 'all') {
            filteredPosts = this.posts.filter(post => 
                post.category.toLowerCase() === this.currentFilter.toLowerCase()
            );
        }

        // Sort by date (newest first)
        filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

        if (filteredPosts.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 60px; color: var(--gray-500);">
                    <p>No posts found in this category.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = filteredPosts.map(post => `
            <article class="blog-post" style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--gray-800); border-radius: 16px; padding: 40px; margin-bottom: 40px;">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 20px;">
                    <div>
                        <span style="display: inline-block; padding: 6px 14px; background: rgba(255, 255, 255, 0.05); border-radius: 20px; font-family: var(--font-mono); font-size: 0.75rem; color: var(--gray-400); margin-bottom: 15px;">
                            ${post.category}
                        </span>
                        <h2 style="font-family: var(--font-display); font-size: 1.8rem; color: var(--white); margin-bottom: 10px;">
                            ${post.title}
                        </h2>
                    </div>
                    <div style="text-align: right;">
                        <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--gray-500);">
                            ${this.formatDate(post.date)}
                        </div>
                        <div style="font-size: 0.75rem; color: var(--gray-600); margin-top: 5px;">
                            ${this.getTimeAgo(post.date)}
                        </div>
                    </div>
                </div>
                
                ${post.images && post.images.length > 0 ? `
                    <div style="aspect-ratio: 16/9; background: rgba(255, 255, 255, 0.03); border-radius: 12px; overflow: hidden; margin-bottom: 25px; position: relative;">
                        <img src="https://images.unsplash.com/photo-${post.id % 2 === 0 ? '1473968512647-3e447244af8f' : '1507003211169-0a1dd7228f2d'}?w=1200&q=80" alt="${post.title}" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.9;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center; background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%);">
                            <i class="fas fa-image" style="font-size: 3rem; color: var(--gray-600);"></i>
                        </div>
                    </div>
                ` : ''}
                
                <p style="color: var(--gray-400); line-height: 1.8; font-size: 1.05rem; margin-bottom: 25px;">
                    ${post.content}
                </p>
                
                ${post.challenges ? `
                    <div style="background: rgba(255, 255, 255, 0.02); border-left: 3px solid var(--gray-600); padding: 20px; border-radius: 4px; margin-bottom: 20px;">
                        <h3 style="font-family: var(--font-heading); font-size: 1rem; color: var(--white); margin-bottom: 10px;">
                            <i class="fas fa-exclamation-triangle" style="margin-right: 8px; color: var(--gray-500);"></i>
                            Challenges
                        </h3>
                        <p style="color: var(--gray-400); font-size: 0.95rem;">${post.challenges}</p>
                    </div>
                ` : ''}
                
                ${post.solutions ? `
                    <div style="background: rgba(255, 255, 255, 0.02); border-left: 3px solid var(--white); padding: 20px; border-radius: 4px;">
                        <h3 style="font-family: var(--font-heading); font-size: 1rem; color: var(--white); margin-bottom: 10px;">
                            <i class="fas fa-check-circle" style="margin-right: 8px; color: var(--white);"></i>
                            Solutions
                        </h3>
                        <p style="color: var(--gray-400); font-size: 0.95rem;">${post.solutions}</p>
                    </div>
                ` : ''}
            </article>
        `).join('');
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('blogPosts')) {
        new BlogHandler();
    }
});
