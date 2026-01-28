/**
 * ITU VCAMP - Projects Page Handler
 * Displays project cards with animated interactions and detail modals
 */

class ProjectsHandler {
    constructor() {
        this.projects = [];
        this.currentProject = null;
        this.loadProjects();
    }

    loadProjects() {
        // Wait for mockData to be available
        if (window.mockData && window.mockData.projects) {
            this.projects = window.mockData.projects;
            this.init();
        } else {
            // Retry after a short delay
            setTimeout(() => {
                if (window.mockData && window.mockData.projects) {
                    this.projects = window.mockData.projects;
                    this.init();
                } else {
                    console.error('mockData not available');
                    // Fallback: use inline data
                    this.projects = this.getFallbackProjects();
                    this.init();
                }
            }, 100);
        }
    }

    getFallbackProjects() {
        return [
            {
                id: 'suas26',
                name: 'SUAS 26 Autonomous Vehicle',
                shortName: 'SUAS 26',
                category: 'Aerospace',
                status: 'active',
                year: '2025',
                location: 'Istanbul',
                description: 'Autonomous Unmanned Aerial System designed for SUAS 26 competition. Features advanced autonomous flight capabilities, high-endurance design, and comprehensive sensor suite.',
                fullDescription: 'Our SUAS 26 vehicle represents a culmination of engineering excellence, designed specifically for autonomous operations in challenging environments. Built with modular architecture and redundant systems, it ensures reliability and performance throughout mission execution.',
                icon: 'fa-drone',
                color: '#00D9FF',
                tech: ['Pixhawk 4', 'Carbon Fiber', '4K Camera', 'RTK GPS', '900MHz Telemetry'],
                specifications: {
                    maxFlightTime: '45 minutes',
                    maxSpeed: '80 km/h',
                    weight: '2.5 kg',
                    wingspan: '1.2 m',
                    maxAltitude: '120 m',
                    payload: '500 g'
                },
                sections: {
                    vehicle: { title: 'Vehicle Overview', content: 'Complete vehicle specifications, design philosophy, and technical details.', hasContent: true },
                    design: { title: 'Design Documentation', content: 'Design decisions, CAD models, system architecture, and engineering work.', hasContent: true },
                    progress: { title: 'Build Progress', content: 'Weekly development updates, milestones, challenges, and solutions.', hasContent: true },
                    testing: { title: 'Testing & Procedures', content: 'Test procedures, results, safety protocols, and validation reports.', hasContent: true }
                },
                images: [
                    { id: 1, title: 'Full Vehicle Assembly', description: 'Complete vehicle ready for flight testing' },
                    { id: 2, title: 'Electronics Bay', description: 'Internal electronics and wiring layout' },
                    { id: 3, title: 'Wing Assembly', description: 'Carbon fiber wing structure' }
                ],
                achievements: [
                    '42 minutes flight time achieved',
                    'Waypoint accuracy: ±2.5 meters',
                    'Communication range: 8.5 km'
                ]
            },
            {
                id: 'ai-shell',
                name: 'AI Shell Agent',
                shortName: 'AI Shell',
                category: 'AI/IoT',
                status: 'active',
                year: '2025',
                location: 'Istanbul',
                description: 'Implementation of AI language model on a physical device. An innovative solution that facilitates user interaction with AI in daily life.',
                fullDescription: 'AI Shell Agent brings advanced language models to physical devices, enabling seamless interaction between users and AI in everyday scenarios. The project focuses on creating an intuitive interface for AI-powered assistance.',
                icon: 'fa-robot',
                color: '#FF6B6B',
                tech: ['Python', 'AI/ML', 'IoT', 'NLP', 'TensorFlow'],
                specifications: {
                    processor: 'Raspberry Pi 4',
                    model: 'GPT-based',
                    responseTime: '< 2s',
                    languages: 'Multi-language'
                },
                sections: {
                    overview: { title: 'Project Overview', content: 'Complete project description and goals.', hasContent: true },
                    technology: { title: 'Technology Stack', content: 'Technical implementation details and architecture.', hasContent: true }
                },
                achievements: [
                    'Real-time AI processing',
                    'Multi-language support',
                    'Low-latency response'
                ]
            },
            {
                id: 'wedo',
                name: 'Wedo - Ne Yapsak?',
                shortName: 'Wedo',
                category: 'Social Platform',
                status: 'development',
                year: '2025',
                location: 'Istanbul',
                description: 'Event and social life technologies platform. An intelligent recommendation system that helps users discover events around them.',
                fullDescription: 'Wedo is a comprehensive platform that connects people with local events and social activities. Using AI-powered recommendations, it helps users discover and participate in events that match their interests.',
                icon: 'fa-calendar-alt',
                color: '#4ECDC4',
                tech: ['React', 'Node.js', 'AI', 'MongoDB', 'Express'],
                specifications: {
                    platform: 'Web & Mobile',
                    users: 'Beta Testing',
                    events: '1000+',
                    cities: '5'
                },
                sections: {
                    overview: { title: 'Project Overview', content: 'Platform features and user experience.', hasContent: true },
                    features: { title: 'Key Features', content: 'Main functionalities and capabilities.', hasContent: true }
                },
                achievements: [
                    '1000+ events listed',
                    'Beta launch successful',
                    '5 cities coverage'
                ]
            },
            {
                id: 'smart-campus',
                name: 'Smart Campus Platform',
                shortName: 'Smart Campus',
                category: 'IoT/Platform',
                status: 'development',
                year: '2024',
                location: 'Istanbul',
                description: 'IoT-based smart campus solution for university management. Real-time monitoring and automation of campus facilities.',
                fullDescription: 'Smart Campus Platform integrates IoT sensors and automation systems to create an intelligent university campus. The platform provides real-time monitoring of energy consumption, facility usage, and environmental conditions.',
                icon: 'fa-university',
                color: '#9B59B6',
                tech: ['IoT', 'Node.js', 'React', 'MongoDB', 'MQTT'],
                specifications: {
                    sensors: '50+',
                    buildings: '10',
                    energySavings: '25%',
                    status: 'Pilot Phase'
                },
                sections: {
                    overview: { title: 'Project Overview', content: 'Platform architecture and capabilities.', hasContent: true },
                    features: { title: 'Key Features', content: 'Main functionalities and use cases.', hasContent: true }
                },
                achievements: [
                    '25% energy savings achieved',
                    '10 buildings connected',
                    'Pilot phase successful'
                ]
            },
            {
                id: 'blockchain-trace',
                name: 'Blockchain Supply Chain',
                shortName: 'BlockTrace',
                category: 'Blockchain',
                status: 'development',
                year: '2024',
                location: 'Istanbul',
                description: 'Blockchain-based supply chain traceability solution. Ensures transparency and authenticity in product tracking.',
                fullDescription: 'BlockTrace leverages blockchain technology to provide end-to-end traceability in supply chains. The solution ensures product authenticity and prevents counterfeiting.',
                icon: 'fa-link',
                color: '#E67E22',
                tech: ['Blockchain', 'Solidity', 'Web3', 'React', 'Node.js'],
                specifications: {
                    blockchain: 'Ethereum',
                    transactions: '1000+',
                    products: '500+',
                    status: 'Beta'
                },
                sections: {
                    overview: { title: 'Project Overview', content: 'Blockchain architecture and use cases.', hasContent: true },
                    technology: { title: 'Technology Stack', content: 'Blockchain implementation details.', hasContent: true }
                },
                achievements: [
                    '1000+ transactions processed',
                    '500+ products tracked',
                    'Beta testing completed'
                ]
            }
        ];
    }

    init() {
        this.renderProjects();
        this.createDetailModal();
    }

    renderProjects() {
        const container = document.getElementById('projectsContainer');
        if (!container) return;

        if (this.projects.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 60px; color: var(--gray-500);">
                    <i class="fas fa-folder-open" style="font-size: 3rem; margin-bottom: 20px; opacity: 0.5;"></i>
                    <p>No projects available at the moment.</p>
                </div>
            `;
            return;
        }

        // Sort projects: SUAS 26 first, then active, then development
        const sortedProjects = [...this.projects].sort((a, b) => {
            if (a.id === 'suas26') return -1;
            if (b.id === 'suas26') return 1;
            if (a.status === 'active' && b.status !== 'active') return -1;
            if (a.status !== 'active' && b.status === 'active') return 1;
            return 0;
        });

        container.innerHTML = sortedProjects.map((project, index) => {
            const statusClass = project.status === 'active' ? 'active' : 'development';
            const statusText = project.status === 'active' 
                ? (window.i18n?.t('activeProject') || 'Active Project')
                : (window.i18n?.t('inDevelopment') || 'In Development');
            const isFeatured = project.id === 'suas26';

            // Get project image based on project ID
            const projectImages = {
                'suas26': 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200&q=80',
                'ai-shell': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
                'wedo': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
                'smart-campus': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80',
                'blockchain-trace': 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&q=80'
            };
            const projectImage = projectImages[project.id] || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80';

            return `
                <div class="project-card-enhanced ${isFeatured ? 'featured-project' : ''}" data-project-id="${project.id}" style="animation-delay: ${index * 0.1}s; animation: fadeInUp 0.6s ease forwards; position: relative; overflow: hidden;">
                    <div class="project-hero-image" style="position: absolute; top: 0; left: 0; width: 100%; height: 200px; z-index: 0; opacity: 0.15;">
                        <img src="${projectImage}" alt="${project.name}" style="width: 100%; height: 100%; object-fit: cover; filter: blur(2px);" onerror="this.style.display='none';">
                    </div>
                    <div style="position: relative; z-index: 1;">
                        <div class="project-card-header-enhanced">
                            <div class="project-icon-enhanced" style="background: linear-gradient(135deg, ${project.color}30, ${project.color}10); border: 2px solid ${project.color}50; backdrop-filter: blur(10px); box-shadow: 0 4px 15px ${project.color}20;">
                                <i class="fas ${project.icon}" style="color: ${project.color};"></i>
                            </div>
                            <span class="project-tag-enhanced ${statusClass}" style="font-weight: 600; letter-spacing: 0.5px;">${statusText}</span>
                        </div>
                        <div class="project-card-content-enhanced">
                            <h3 style="background: linear-gradient(135deg, var(--white), ${project.color}); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">${project.name}</h3>
                            <p style="line-height: 1.8;">${project.description}</p>
                        <div class="project-meta-enhanced">
                            <span style="display: flex; align-items: center; gap: 6px;"><i class="fas fa-calendar" style="color: ${project.color};"></i> ${project.year}</span>
                            <span style="display: flex; align-items: center; gap: 6px;"><i class="fas fa-map-marker-alt" style="color: ${project.color};"></i> ${project.location}</span>
                            <span style="display: flex; align-items: center; gap: 6px;"><i class="fas fa-tag" style="color: ${project.color};"></i> ${project.category}</span>
                            ${project.team ? `<span style="display: flex; align-items: center; gap: 6px;"><i class="fas fa-users" style="color: ${project.color};"></i> ${project.team.size}</span>` : ''}
                        </div>
                        <div class="project-tech-enhanced">
                            ${project.tech.slice(0, 4).map(tech => `<span style="transition: all 0.3s ease;" onmouseover="this.style.background='${project.color}20'; this.style.borderColor='${project.color}40'; this.style.color='var(--white)';" onmouseout="this.style.background='rgba(255, 255, 255, 0.05)'; this.style.borderColor='rgba(255, 255, 255, 0.1)'; this.style.color='var(--gray-400)';"}>${tech}</span>`).join('')}
                            ${project.tech.length > 4 ? `<span style="opacity: 0.7;">+${project.tech.length - 4} more</span>` : ''}
                        </div>
                        ${project.achievements && project.achievements.length > 0 ? `
                            <div class="project-achievements-preview" style="background: linear-gradient(135deg, ${project.color}15, ${project.color}05); border-left: 3px solid ${project.color}; border: 1px solid ${project.color}20;">
                                <div style="width: 32px; height: 32px; background: ${project.color}; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                    <i class="fas fa-trophy" style="color: var(--white); font-size: 0.9rem;"></i>
                                </div>
                                <span style="color: var(--gray-300); font-weight: 500;">${project.achievements[0]}</span>
                            </div>
                        ` : ''}
                        ${project.timeline ? `
                            <div class="project-timeline-preview" style="background: linear-gradient(135deg, ${project.color}10, ${project.color}05); border-left: 3px solid ${project.color}; border: 1px solid ${project.color}20;">
                                <div style="width: 28px; height: 28px; background: ${project.color}30; border-radius: 6px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                    <i class="fas fa-calendar-alt" style="color: ${project.color}; font-size: 0.85rem;"></i>
                                </div>
                                <div style="flex: 1; display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                                    <span style="color: var(--gray-300); font-weight: 500;">${project.timeline.duration}</span>
                                    <span style="color: var(--gray-500);">•</span>
                                    <span style="color: var(--gray-300);">${project.timeline.current}</span>
                                    ${project.timeline.competition ? `
                                        <span style="color: var(--gray-500);">→</span>
                                        <span style="color: ${project.color}; font-weight: 600;">${project.timeline.competition}</span>
                                    ` : ''}
                                </div>
                            </div>
                        ` : ''}
                        ${project.sections && Object.keys(project.sections).length > 0 ? `
                            <div class="project-links-enhanced">
                                ${this.renderProjectLinks(project)}
                            </div>
                        ` : ''}
                    </div>
                    <div class="project-card-overlay">
                        <button class="view-details-btn" data-project-id="${project.id}">
                            <span>${window.i18n?.t('viewDetails') || 'View Details'}</span>
                            <i class="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            `;
        }).join('');

        // Add click handlers
        container.querySelectorAll('.project-card-enhanced').forEach(card => {
            // Make cards visible after render
            setTimeout(() => {
                card.classList.add('visible');
            }, 100);

            card.addEventListener('click', (e) => {
                if (!e.target.closest('.project-links-enhanced a') && !e.target.closest('.view-details-btn')) {
                    const projectId = card.dataset.projectId;
                    this.openProjectDetail(projectId);
                }
            });
        });

        container.querySelectorAll('.view-details-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const projectId = btn.dataset.projectId;
                this.openProjectDetail(projectId);
            });
        });
    }

    renderProjectLinks(project) {
        if (!project.sections) return '';

        const links = [];
        const sectionIcons = {
            vehicle: 'fa-drone',
            design: 'fa-drafting-compass',
            progress: 'fa-chart-line',
            testing: 'fa-vial',
            overview: 'fa-info-circle',
            technology: 'fa-microchip',
            features: 'fa-star'
        };

        Object.keys(project.sections).forEach(key => {
            const section = project.sections[key];
            if (section.hasContent) {
                const icon = sectionIcons[key] || 'fa-file-alt';
                links.push(`
                    <a href="#" class="project-link-item" data-section="${key}" data-project="${project.id}">
                        <i class="fas ${icon}"></i>
                        <span>${section.title}</span>
                        <i class="fas fa-chevron-right"></i>
                    </a>
                `);
            }
        });

        return links.join('');
    }

    createDetailModal() {
        const modal = document.createElement('div');
        modal.id = 'projectDetailModal';
        modal.className = 'project-detail-modal';
        modal.innerHTML = `
            <div class="project-modal-overlay"></div>
            <div class="project-modal-content">
                <button class="project-modal-close" aria-label="Close">
                    <i class="fas fa-times"></i>
                </button>
                <div id="projectDetailContent"></div>
            </div>
        `;
        document.body.appendChild(modal);

        // Close handlers
        modal.querySelector('.project-modal-close').addEventListener('click', () => {
            this.closeProjectDetail();
        });

        modal.querySelector('.project-modal-overlay').addEventListener('click', () => {
            this.closeProjectDetail();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                this.closeProjectDetail();
            }
        });
    }

    openProjectDetail(projectId) {
        const project = this.projects.find(p => p.id === projectId);
        if (!project) return;

        this.currentProject = project;
        const modal = document.getElementById('projectDetailModal');
        const content = document.getElementById('projectDetailContent');

        // Render project detail
        content.innerHTML = this.renderProjectDetail(project);

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Add section link handlers
        content.querySelectorAll('.section-link, .project-link-item').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = link.dataset.section;
                this.showSectionContent(section, project);
            });
        });

        if (window.audioManager) {
            window.audioManager.playClickSound();
        }
    }

    closeProjectDetail() {
        const modal = document.getElementById('projectDetailModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            this.currentProject = null;
        }
    }

    scrollToSection(sectionKey) {
        const section = document.querySelector(`[data-section="${sectionKey}"]`);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    showSectionContent(sectionKey, project) {
        if (project.id !== 'suas26') {
            // For other projects, just scroll to section
            this.scrollToSection(sectionKey);
            return;
        }

        // For SUAS 26, show detailed content from mockData
        const mockData = window.mockData;
        let sectionContent = '';

        switch(sectionKey) {
            case 'vehicle':
                sectionContent = this.renderVehicleSection(mockData.vehicle);
                break;
            case 'design':
                sectionContent = this.renderDesignSection(mockData.design);
                break;
            case 'progress':
                sectionContent = this.renderProgressSection(mockData.blog);
                break;
            case 'testing':
                sectionContent = this.renderTestingSection(mockData.testing);
                break;
            default:
                this.scrollToSection(sectionKey);
                return;
        }

        // Create section modal
        this.showSectionModal(sectionContent, project.sections[sectionKey]?.title || 'Details');
    }

    showSectionModal(content, title) {
        let sectionModal = document.getElementById('sectionDetailModal');
        if (!sectionModal) {
            sectionModal = document.createElement('div');
            sectionModal.id = 'sectionDetailModal';
            sectionModal.className = 'section-detail-modal';
            sectionModal.innerHTML = `
                <div class="section-modal-overlay"></div>
                <div class="section-modal-content">
                    <button class="section-modal-close" aria-label="Close">
                        <i class="fas fa-times"></i>
                    </button>
                    <div id="sectionDetailContent"></div>
                </div>
            `;
            document.body.appendChild(sectionModal);

            sectionModal.querySelector('.section-modal-close').addEventListener('click', () => {
                sectionModal.classList.remove('active');
            });
            sectionModal.querySelector('.section-modal-overlay').addEventListener('click', () => {
                sectionModal.classList.remove('active');
            });
        }

        document.getElementById('sectionDetailContent').innerHTML = `
            <h2>${title}</h2>
            ${content}
        `;
        sectionModal.classList.add('active');
    }

    renderVehicleSection(vehicleData) {
        return `
            <div class="section-detail-content">
                <div style="margin-bottom: 30px;">
                    <img src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200&q=80" alt="${vehicleData.fullName}" style="width: 100%; border-radius: 12px; margin-bottom: 25px; border: 1px solid var(--gray-800);" onerror="this.style.display='none';">
                </div>
                <h3>${vehicleData.fullName}</h3>
                <p style="font-size: 1.1rem; line-height: 1.8; color: var(--gray-300); margin-bottom: 30px;">${vehicleData.designPhilosophy.description}</p>
                <div class="specs-grid-detail" style="margin-top: 30px;">
                    ${Object.entries(vehicleData.specifications).slice(0, 6).map(([key, value]) => `
                        <div class="spec-item-detail" style="border-left: 3px solid #00D9FF;">
                            <span class="spec-label">${this.formatSpecKey(key)}</span>
                            <span class="spec-value" style="color: #00D9FF;">${value}</span>
                        </div>
                    `).join('')}
                </div>
                <div style="margin-top: 40px;">
                    <h4 style="color: var(--white); margin-bottom: 20px; font-size: 1.3rem;">Key Design Points</h4>
                    <ul style="list-style: none; padding: 0; display: grid; gap: 15px; margin-top: 15px;">
                        ${vehicleData.designPhilosophy.keyPoints.map(point => `
                            <li style="padding: 20px; background: rgba(255, 255, 255, 0.02); border: 1px solid var(--gray-800); border-left: 3px solid #00D9FF; border-radius: 8px; display: flex; align-items: center; gap: 15px; transition: all 0.3s ease;" onmouseover="this.style.background='rgba(0, 217, 255, 0.05)'; this.style.borderColor='rgba(0, 217, 255, 0.3)';" onmouseout="this.style.background='rgba(255, 255, 255, 0.02)'; this.style.borderColor='var(--gray-800)';">
                                <i class="fas fa-check-circle" style="color: #00D9FF; font-size: 1.1rem;"></i>
                                <span style="color: var(--gray-300);">${point}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `;
    }

    renderDesignSection(designData) {
        const designImages = [
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
            'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
            'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80'
        ];
        return `
            <div class="section-detail-content">
                <h3>Design Decisions</h3>
                <div style="display: grid; gap: 30px; margin-top: 20px;">
                    ${designData.decisions.map((decision, idx) => `
                        <div style="padding: 0; background: rgba(255, 255, 255, 0.02); border: 1px solid var(--gray-800); border-radius: 12px; overflow: hidden;">
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0;">
                                <div style="aspect-ratio: 16/9; overflow: hidden; position: relative;">
                                    <img src="${designImages[idx] || designImages[0]}" alt="${decision.title}" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.9;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                                    <div style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center; background: rgba(255, 255, 255, 0.03);">
                                        <i class="fas fa-image" style="font-size: 3rem; color: var(--gray-600);"></i>
                                    </div>
                                </div>
                                <div style="padding: 25px;">
                                    <h4 style="color: var(--white); margin-bottom: 10px; font-size: 1.2rem;">${decision.title}</h4>
                                    <p style="color: var(--gray-400); margin-bottom: 15px; line-height: 1.7;">${decision.description}</p>
                                    <div style="background: rgba(255, 255, 255, 0.02); border-left: 3px solid #00D9FF; padding: 15px; border-radius: 4px;">
                                        <strong style="color: var(--gray-300);">Rationale:</strong>
                                        <p style="color: var(--gray-400); margin-top: 5px; line-height: 1.6;">${decision.rationale}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderProgressSection(blogData) {
        const progressImages = [
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
            'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
            'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80'
        ];
        return `
            <div class="section-detail-content">
                <h3>Build Progress Timeline</h3>
                <div style="display: grid; gap: 25px; margin-top: 20px;">
                    ${blogData.slice(0, 5).map((blog, idx) => `
                        <div style="padding: 0; background: rgba(255, 255, 255, 0.02); border: 1px solid var(--gray-800); border-radius: 12px; overflow: hidden;">
                            <div style="display: grid; grid-template-columns: 200px 1fr; gap: 0;">
                                <div style="overflow: hidden; position: relative;">
                                    <img src="${progressImages[idx] || progressImages[0]}" alt="${blog.title}" style="width: 100%; height: 100%; object-fit: cover; min-height: 150px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                                    <div style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center; background: rgba(255, 255, 255, 0.03); min-height: 150px;">
                                        <i class="fas fa-image" style="font-size: 2rem; color: var(--gray-600);"></i>
                                    </div>
                                </div>
                                <div style="padding: 20px;">
                                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
                                        <h4 style="color: var(--white); font-size: 1.1rem;">${blog.title}</h4>
                                        <span style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--gray-500); white-space: nowrap; margin-left: 15px;">${new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                                    </div>
                                    <p style="color: var(--gray-400); line-height: 1.7; margin-bottom: 15px;">${blog.content.substring(0, 200)}...</p>
                                    ${blog.challenges ? `
                                        <div style="padding: 12px; background: rgba(245, 158, 11, 0.1); border-left: 3px solid #F59E0B; border-radius: 4px; margin-bottom: 10px;">
                                            <strong style="color: #F59E0B; font-size: 0.85rem;">Challenge:</strong>
                                            <p style="color: var(--gray-400); font-size: 0.9rem; margin-top: 5px;">${blog.challenges}</p>
                                        </div>
                                    ` : ''}
                                    ${blog.solutions ? `
                                        <div style="padding: 12px; background: rgba(16, 185, 129, 0.1); border-left: 3px solid #10B981; border-radius: 4px;">
                                            <strong style="color: #10B981; font-size: 0.85rem;">Solution:</strong>
                                            <p style="color: var(--gray-400); font-size: 0.9rem; margin-top: 5px;">${blog.solutions}</p>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderTestingSection(testingData) {
        return `
            <div class="section-detail-content">
                <div style="margin-bottom: 30px;">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80" alt="Testing" style="width: 100%; border-radius: 12px; border: 1px solid var(--gray-800);" onerror="this.style.display='none';">
                </div>
                <h3>Test Results</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px;">
                    <div>
                        <h4 style="color: var(--white); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                            <i class="fas fa-plane" style="color: #00D9FF;"></i>
                            Flight Tests
                        </h4>
                        <div style="display: grid; gap: 10px;">
                            ${testingData.results.flightTests.map(test => `
                                <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px; background: rgba(255, 255, 255, 0.02); border: 1px solid var(--gray-800); border-left: 3px solid #10B981; border-radius: 8px; transition: all 0.3s ease;" onmouseover="this.style.background='rgba(16, 185, 129, 0.05)'; this.style.borderColor='rgba(16, 185, 129, 0.3)';" onmouseout="this.style.background='rgba(255, 255, 255, 0.02)'; this.style.borderColor='var(--gray-800)';">
                                    <span style="color: var(--gray-400);">${test.test}</span>
                                    <div style="display: flex; align-items: center; gap: 10px;">
                                        <span style="color: var(--white); font-weight: 700; font-family: var(--font-display);">${test.result}</span>
                                        <span style="font-size: 0.75rem; color: #10B981;">✓</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div>
                        <h4 style="color: var(--white); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                            <i class="fas fa-microchip" style="color: #00D9FF;"></i>
                            System Tests
                        </h4>
                        <div style="display: grid; gap: 10px;">
                            ${testingData.results.systemTests.map(test => `
                                <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px; background: rgba(255, 255, 255, 0.02); border: 1px solid var(--gray-800); border-left: 3px solid #10B981; border-radius: 8px; transition: all 0.3s ease;" onmouseover="this.style.background='rgba(16, 185, 129, 0.05)'; this.style.borderColor='rgba(16, 185, 129, 0.3)';" onmouseout="this.style.background='rgba(255, 255, 255, 0.02)'; this.style.borderColor='var(--gray-800)';">
                                    <span style="color: var(--gray-400);">${test.test}</span>
                                    <div style="display: flex; align-items: center; gap: 10px;">
                                        <span style="color: var(--white); font-weight: 700; font-family: var(--font-display);">${test.result}</span>
                                        <span style="font-size: 0.75rem; color: #10B981;">✓</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    renderProjectDetail(project) {
        const statusClass = project.status === 'active' ? 'active' : 'development';
        const statusText = project.status === 'active' 
            ? (window.i18n?.t('activeProject') || 'Active Project')
            : (window.i18n?.t('inDevelopment') || 'In Development');

        return `
            <div class="project-detail-header" style="position: relative; padding-bottom: 30px; border-bottom: 1px solid var(--gray-800);">
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 200px; z-index: 0; opacity: 0.1; overflow: hidden; border-radius: 12px;">
                    <img src="${projectImage}" alt="${project.name}" style="width: 100%; height: 100%; object-fit: cover; filter: blur(5px);" onerror="this.style.display='none';">
                </div>
                <div style="position: relative; z-index: 1; display: flex; align-items: center; gap: 25px;">
                    <div class="project-detail-icon" style="background: linear-gradient(135deg, ${project.color}30, ${project.color}10); border: 2px solid ${project.color}50; box-shadow: 0 8px 25px ${project.color}30; backdrop-filter: blur(10px);">
                        <i class="fas ${project.icon}" style="color: ${project.color}; font-size: 3rem;"></i>
                    </div>
                    <div class="project-detail-title-section" style="flex: 1;">
                        <h2 style="margin-bottom: 10px;">${project.name}</h2>
                        <span class="project-tag-enhanced ${statusClass}" style="font-size: 0.85rem;">${statusText}</span>
                        ${project.timeline ? `
                            <div style="margin-top: 15px; display: flex; gap: 20px; flex-wrap: wrap;">
                                <span style="font-size: 0.9rem; color: var(--gray-400); display: flex; align-items: center; gap: 6px;">
                                    <i class="fas fa-calendar" style="color: ${project.color};"></i>
                                    ${project.timeline.start} - ${project.timeline.current}
                                </span>
                                ${project.team ? `
                                    <span style="font-size: 0.9rem; color: var(--gray-400); display: flex; align-items: center; gap: 6px;">
                                        <i class="fas fa-users" style="color: ${project.color};"></i>
                                        ${project.team.size}
                                    </span>
                                ` : ''}
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>

            <div class="project-detail-description">
                <p style="font-size: 1.15rem; line-height: 1.9; color: var(--gray-300);">${project.fullDescription}</p>
                ${project.id === 'suas26' ? `
                    <div style="margin-top: 30px; padding: 25px; background: linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(0, 217, 255, 0.05)); border: 1px solid rgba(0, 217, 255, 0.2); border-radius: 12px;">
                        <h4 style="color: var(--white); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                            <i class="fas fa-star" style="color: #00D9FF;"></i>
                            Project Highlights
                        </h4>
                        <ul style="list-style: none; padding: 0; display: grid; gap: 12px; margin: 0;">
                            <li style="display: flex; align-items: center; gap: 10px; color: var(--gray-300);">
                                <i class="fas fa-check-circle" style="color: #00D9FF; font-size: 0.9rem;"></i>
                                <span>42 minutes flight time achieved (exceeded 40 min target)</span>
                            </li>
                            <li style="display: flex; align-items: center; gap: 10px; color: var(--gray-300);">
                                <i class="fas fa-check-circle" style="color: #00D9FF; font-size: 0.9rem;"></i>
                                <span>Waypoint accuracy: ±2.5 meters (exceeded ±5m target)</span>
                            </li>
                            <li style="display: flex; align-items: center; gap: 10px; color: var(--gray-300);">
                                <i class="fas fa-check-circle" style="color: #00D9FF; font-size: 0.9rem;"></i>
                                <span>Communication range: 8.5 km (exceeded 5 km target)</span>
                            </li>
                        </ul>
                    </div>
                ` : ''}
            </div>

            <div class="project-detail-specs">
                <h3 style="display: flex; align-items: center; gap: 10px; margin-bottom: 25px;">
                    <i class="fas fa-list-ul" style="color: ${project.color};"></i>
                    ${window.i18n?.t('specifications') || 'Specifications'}
                </h3>
                <div class="specs-grid-detail">
                    ${Object.entries(project.specifications).map(([key, value]) => `
                        <div class="spec-item-detail" style="border-left: 3px solid ${project.color}; transition: all 0.3s ease;" onmouseover="this.style.background='${project.color}10'; this.style.borderLeftColor='${project.color}'; this.style.transform='translateY(-3px)';" onmouseout="this.style.background='rgba(255, 255, 255, 0.02)'; this.style.transform='translateY(0)';">
                            <span class="spec-label">${this.formatSpecKey(key)}</span>
                            <span class="spec-value" style="color: ${project.color}; font-weight: 700;">${value}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            ${project.tech ? `
                <div class="project-detail-tech">
                    <h3 style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
                        <i class="fas fa-code" style="color: ${project.color};"></i>
                        Technology Stack
                    </h3>
                    <div class="tech-tags-detail">
                        ${project.tech.map(tech => `<span style="transition: all 0.3s ease; border: 1px solid ${project.color}30;" onmouseover="this.style.background='${project.color}20'; this.style.borderColor='${project.color}50'; this.style.color='var(--white)'; this.style.transform='translateY(-2px)';" onmouseout="this.style.background='rgba(255, 255, 255, 0.05)'; this.style.borderColor='var(--gray-800)'; this.style.color='var(--gray-300)'; this.style.transform='translateY(0)';"}>${tech}</span>`).join('')}
                    </div>
                </div>
            ` : ''}

            ${project.achievements ? `
                <div class="project-detail-achievements">
                    <h3 style="display: flex; align-items: center; gap: 10px; margin-bottom: 25px;">
                        <i class="fas fa-trophy" style="color: ${project.color};"></i>
                        Key Achievements
                    </h3>
                    <ul>
                        ${project.achievements.map(achievement => `
                            <li style="padding: 18px; background: linear-gradient(135deg, ${project.color}10, ${project.color}05); border: 1px solid ${project.color}20; border-left: 4px solid ${project.color}; border-radius: 8px; margin-bottom: 12px; transition: all 0.3s ease;" onmouseover="this.style.background='linear-gradient(135deg, ${project.color}15, ${project.color}08)'; this.style.borderColor='${project.color}30'; this.style.transform='translateX(5px)';" onmouseout="this.style.background='linear-gradient(135deg, ${project.color}10, ${project.color}05)'; this.style.borderColor='${project.color}20'; this.style.transform='translateX(0)';">
                                <i class="fas fa-check-circle" style="color: ${project.color}; margin-right: 12px; font-size: 1.1rem;"></i>
                                <span style="color: var(--gray-300); line-height: 1.6;">${achievement}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            ` : ''}

            ${project.sections ? `
                <div class="project-detail-sections">
                    <h3>Documentation & Details</h3>
                    <div class="sections-grid">
                        ${Object.entries(project.sections).map(([key, section], idx) => {
                            const sectionImages = {
                                'suas26': {
                                    'vehicle': 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&q=80',
                                    'design': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
                                    'progress': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
                                    'testing': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80'
                                }
                            };
                            const sectionImg = sectionImages[project.id]?.[key] || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80';
                            return `
                                <div class="section-card" data-section="${key}" style="overflow: hidden; padding: 0;">
                                    <div style="aspect-ratio: 16/9; overflow: hidden; position: relative;">
                                        <img src="${sectionImg}" alt="${section.title}" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.8; transition: transform 0.4s ease;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" onmouseover="this.style.transform='scale(1.1)';" onmouseout="this.style.transform='scale(1)';">
                                        <div style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center; background: linear-gradient(135deg, ${project.color}20, ${project.color}05);">
                                            <i class="fas fa-${this.getSectionIcon(key)}" style="color: ${project.color}; font-size: 2.5rem;"></i>
                                        </div>
                                    </div>
                                    <div style="padding: 25px;">
                                        <div class="section-icon" style="margin-top: -40px; margin-bottom: 15px; position: relative; z-index: 1;">
                                            <div style="width: 50px; height: 50px; background: ${project.color}; border-radius: 10px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px ${project.color}40;">
                                                <i class="fas fa-${this.getSectionIcon(key)}" style="color: var(--white); font-size: 1.5rem;"></i>
                                            </div>
                                        </div>
                                        <h4 style="color: var(--white); margin-bottom: 10px; font-size: 1.2rem;">${section.title}</h4>
                                        <p style="color: var(--gray-400); line-height: 1.7; margin-bottom: 15px; font-size: 0.95rem;">${section.content}</p>
                                        ${section.hasContent ? `
                                            <a href="#" class="section-link" data-section="${key}" style="color: ${project.color}; font-weight: 600;">
                                                ${window.i18n?.t('viewDetails') || 'View Details'} <i class="fas fa-arrow-right"></i>
                                            </a>
                                        ` : ''}
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            ` : ''}

            ${project.images ? `
                <div class="project-detail-gallery">
                    <h3>${window.i18n?.t('gallery') || 'Gallery'}</h3>
                    <div class="gallery-grid-detail">
                        ${project.images.map((img, idx) => {
                            const galleryImages = {
                                'suas26': [
                                    'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80',
                                    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
                                    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
                                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80'
                                ],
                                'ai-shell': [
                                    'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
                                    'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&q=80',
                                    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80'
                                ],
                                'wedo': [
                                    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
                                    'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80',
                                    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80'
                                ]
                            };
                            const imgUrl = galleryImages[project.id]?.[idx] || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80';
                            return `
                                <div class="gallery-item-detail">
                                    <div class="gallery-placeholder" style="overflow: hidden; border-radius: 12px;">
                                        <img src="${imgUrl}" alt="${img.title}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" onmouseover="this.style.transform='scale(1.05)';" onmouseout="this.style.transform='scale(1)';">
                                        <div style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center; background: rgba(255, 255, 255, 0.03);">
                                            <i class="fas fa-image" style="font-size: 2.5rem; color: var(--gray-600);"></i>
                                        </div>
                                    </div>
                                    <p style="margin-top: 10px; color: var(--gray-400); font-size: 0.9rem;">${img.title}</p>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            ` : ''}

            ${project.videos ? `
                <div class="project-detail-videos">
                    <h3>${window.i18n?.t('videos') || 'Videos'}</h3>
                    <div class="videos-grid-detail">
                        ${project.videos.map((video, idx) => {
                            const videoIds = {
                                'suas26': ['dQw4w9WgXcQ', 'jNQXAC9IVRw', 'dQw4w9WgXcQ'],
                                'ai-shell': ['dQw4w9WgXcQ', 'jNQXAC9IVRw'],
                                'wedo': ['dQw4w9WgXcQ']
                            };
                            const videoId = videoIds[project.id]?.[idx] || 'dQw4w9WgXcQ';
                            return `
                                <div class="video-item-detail" style="padding: 0; overflow: hidden;">
                                    <div class="video-placeholder" style="aspect-ratio: 16/9; position: relative; background: #000; border-radius: 12px 12px 0 0;">
                                        <iframe src="https://www.youtube.com/embed/${videoId}?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
                                    </div>
                                    <div style="padding: 20px;">
                                        <h4 style="font-family: var(--font-heading); font-size: 1rem; color: var(--white); margin-bottom: 8px;">${video.title}</h4>
                                        <p style="font-size: 0.85rem; color: var(--gray-500);">${video.description}</p>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            ` : ''}

            ${project.timeline ? `
                <div class="project-detail-timeline">
                    <h3>Project Timeline</h3>
                    <div class="timeline-grid">
                        <div class="timeline-item">
                            <span class="timeline-label">Start Date</span>
                            <span class="timeline-value">${project.timeline.start}</span>
                        </div>
                        <div class="timeline-item">
                            <span class="timeline-label">Current Phase</span>
                            <span class="timeline-value">${project.timeline.current}</span>
                        </div>
                        ${project.timeline.competition ? `
                            <div class="timeline-item">
                                <span class="timeline-label">Competition</span>
                                <span class="timeline-value">${project.timeline.competition}</span>
                            </div>
                        ` : ''}
                        <div class="timeline-item">
                            <span class="timeline-label">Duration</span>
                            <span class="timeline-value">${project.timeline.duration}</span>
                        </div>
                    </div>
                </div>
            ` : ''}

            ${project.team ? `
                <div class="project-detail-team">
                    <h3>Project Team</h3>
                    <div class="team-info-detail">
                        <div class="team-stat">
                            <span class="team-label">Team Size</span>
                            <span class="team-value">${project.team.size}</span>
                        </div>
                        ${project.team.roles ? `
                            <div class="team-roles">
                                <span class="team-label">Roles</span>
                                <div class="roles-list">
                                    ${project.team.roles.map(role => `<span class="role-tag">${role}</span>`).join('')}
                                </div>
                            </div>
                        ` : ''}
                    </div>
                </div>
            ` : ''}
        `;
    }

    formatSpecKey(key) {
        return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    }

    getSectionIcon(sectionKey) {
        const icons = {
            vehicle: 'drone',
            design: 'drafting-compass',
            progress: 'chart-line',
            testing: 'vial',
            overview: 'info-circle',
            technology: 'microchip',
            features: 'star'
        };
        return icons[sectionKey] || 'file-alt';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('projectsContainer')) {
        // Small delay to ensure mockData is loaded
        setTimeout(() => {
            new ProjectsHandler();
        }, 50);
    }
});

// Also try to initialize immediately if DOM is already ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (document.getElementById('projectsContainer')) {
            setTimeout(() => {
                new ProjectsHandler();
            }, 50);
        }
    });
} else {
    // DOM is already ready
    if (document.getElementById('projectsContainer')) {
        setTimeout(() => {
            new ProjectsHandler();
        }, 50);
    }
}
