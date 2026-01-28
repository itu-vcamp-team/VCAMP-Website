/**
 * ITU VCAMP - Mock Data for SUAS 26 Website
 * All data is mock/conceptual for demonstration purposes
 */

const mockData = {
    // Vehicle/Drone Specifications
    vehicle: {
        name: 'VCAMP-26',
        fullName: 'VCAMP SUAS 26 Autonomous Vehicle',
        specifications: {
            maxFlightTime: '45 minutes',
            maxSpeed: '80 km/h',
            weight: '2.5 kg',
            wingspan: '1.2 m',
            maxAltitude: '120 m',
            payload: '500 g',
            battery: 'LiPo 4S 5000mAh',
            autopilot: 'Pixhawk 4',
            communication: '900MHz Telemetry',
            gps: 'Dual GPS with RTK',
            camera: '4K 60fps with Gimbal',
            sensors: ['IMU', 'Barometer', 'Magnetometer', 'Lidar', 'Thermal Camera']
        },
        designPhilosophy: {
            title: 'Design Philosophy',
            description: 'Our vehicle is designed with a focus on reliability, efficiency, and autonomous operation. We prioritize modular design for easy maintenance and upgrades, ensuring our system can adapt to various mission requirements.',
            keyPoints: [
                'Modular architecture for easy component replacement',
                'Redundant systems for critical operations',
                'Lightweight materials for extended flight time',
                'Advanced sensor fusion for precise navigation',
                'Open-source autopilot for customization'
            ]
        },
        photos: [
            { id: 1, title: 'Full Vehicle Assembly', description: 'Complete vehicle ready for flight testing' },
            { id: 2, title: 'Electronics Bay', description: 'Internal electronics and wiring layout' },
            { id: 3, title: 'Wing Assembly', description: 'Carbon fiber wing structure' },
            { id: 4, title: 'Ground Control Station', description: 'Mission planning and monitoring setup' },
            { id: 5, title: 'Flight Testing', description: 'Vehicle during autonomous flight test' },
            { id: 6, title: 'Payload Integration', description: 'Camera and sensor mounting' }
        ],
        videos: [
            { id: 1, title: 'First Flight Test', description: 'Initial autonomous flight demonstration', embed: 'placeholder' },
            { id: 2, title: 'Mission Simulation', description: 'Complete mission from takeoff to landing', embed: 'placeholder' },
            { id: 3, title: 'Payload Testing', description: 'Camera gimbal and sensor testing', embed: 'placeholder' }
        ]
    },

    // Design Documentation
    design: {
        decisions: [
            {
                id: 1,
                title: 'Wing Configuration',
                description: 'We chose a high-aspect-ratio wing design to maximize flight efficiency and endurance. The wing features a modified airfoil optimized for our expected flight envelope.',
                images: ['wing-design-1.jpg', 'wing-design-2.jpg'],
                rationale: 'The high aspect ratio reduces induced drag, allowing for longer flight times with the same battery capacity.'
            },
            {
                id: 2,
                title: 'Material Selection',
                description: 'Carbon fiber composite was selected for the primary structure due to its excellent strength-to-weight ratio. EPP foam is used for impact resistance in the fuselage.',
                images: ['material-selection.jpg'],
                rationale: 'Weight reduction directly translates to increased flight time and payload capacity.'
            },
            {
                id: 3,
                title: 'Autopilot System',
                description: 'Pixhawk 4 was selected for its proven reliability, extensive documentation, and active community support. It provides all necessary sensors and processing power.',
                images: ['autopilot-integration.jpg'],
                rationale: 'Open-source platform allows for customization while maintaining reliability.'
            },
            {
                id: 4,
                title: 'Power System',
                description: '4S LiPo battery configuration provides optimal balance between voltage requirements and weight. Battery management system ensures safe operation.',
                images: ['power-system.jpg'],
                rationale: '4S configuration provides sufficient voltage for motors while keeping weight manageable.'
            }
        ],
        cadModels: [
            { id: 1, title: 'Complete Assembly', description: 'Full vehicle 3D model', file: 'assembly.step' },
            { id: 2, title: 'Wing Structure', description: 'Wing internal structure', file: 'wing.step' },
            { id: 3, title: 'Fuselage', description: 'Main body structure', file: 'fuselage.step' },
            { id: 4, title: 'Electronics Bay', description: 'Component mounting layout', file: 'electronics.step' }
        ],
        systemArchitecture: {
            description: 'Our system architecture follows a modular approach with clear separation between flight control, mission planning, and payload management.',
            components: [
                { name: 'Flight Controller', description: 'Pixhawk 4 handles all flight dynamics and stabilization' },
                { name: 'Mission Planner', description: 'Ground control station for mission planning and monitoring' },
                { name: 'Communication Link', description: '900MHz telemetry for real-time data transmission' },
                { name: 'Payload Controller', description: 'Dedicated processor for camera and sensor management' },
                { name: 'Safety Systems', description: 'Failsafe mechanisms and emergency procedures' }
            ]
        },
        aerodynamicAnalysis: {
            description: 'Computational fluid dynamics (CFD) analysis was performed to optimize the airframe design for our mission profile.',
            results: [
                { parameter: 'Lift Coefficient', value: '0.85', unit: 'Cl' },
                { parameter: 'Drag Coefficient', value: '0.032', unit: 'Cd' },
                { parameter: 'L/D Ratio', value: '26.5', unit: '' },
                { parameter: 'Stall Speed', value: '18 km/h', unit: '' },
                { parameter: 'Max Efficiency Speed', value: '55 km/h', unit: '' }
            ]
        }
    },

    // Blog/Build Progress
    blog: [
        {
            id: 1,
            title: 'Initial Design Phase - Week 1',
            date: '2025-01-15',
            category: 'Design',
            content: 'We began the SUAS 26 project with comprehensive research and requirement analysis. The team identified key performance parameters and started initial concept designs. Multiple wing configurations were evaluated using preliminary CFD analysis.',
            images: ['week1-design.jpg'],
            challenges: 'Determining optimal wing aspect ratio for our mission requirements',
            solutions: 'Performed trade-off analysis between endurance and maneuverability'
        },
        {
            id: 2,
            title: 'Material Procurement - Week 2',
            date: '2025-01-22',
            category: 'Procurement',
            content: 'Ordered carbon fiber sheets, EPP foam, and all electronic components. Established relationships with suppliers for ongoing support. Received initial shipment of Pixhawk 4 autopilot systems.',
            images: ['week2-materials.jpg'],
            challenges: 'Finding reliable suppliers with reasonable lead times',
            solutions: 'Contacted multiple vendors and selected based on quality and delivery time'
        },
        {
            id: 3,
            title: 'CAD Modeling Begins - Week 3',
            date: '2025-01-29',
            category: 'Design',
            content: 'Started detailed 3D modeling in SolidWorks. Created initial assembly model with all major components. Performed interference checks and began optimization iterations.',
            images: ['week3-cad.jpg'],
            challenges: 'Ensuring all components fit within weight and size constraints',
            solutions: 'Iterative design process with continuous weight tracking'
        },
        {
            id: 4,
            title: 'First Prototype Assembly - Week 4',
            date: '2025-02-05',
            category: 'Assembly',
            content: 'Completed first physical prototype assembly. All major components integrated. Initial weight measurement shows we are within 5% of target weight. Performed basic structural integrity tests.',
            images: ['week4-assembly-1.jpg', 'week4-assembly-2.jpg'],
            challenges: 'Achieving precise component alignment during assembly',
            solutions: 'Created custom jigs and fixtures for accurate positioning'
        },
        {
            id: 5,
            title: 'Electronics Integration - Week 5',
            date: '2025-02-12',
            category: 'Electronics',
            content: 'Installed and wired all electronic components. Configured Pixhawk 4 autopilot with initial parameters. Tested all sensor connections and verified data flow. Ground control station setup completed.',
            images: ['week5-electronics.jpg'],
            challenges: 'Managing cable routing to minimize interference',
            solutions: 'Used shielded cables and proper grounding techniques'
        },
        {
            id: 6,
            title: 'Software Development - Week 6',
            date: '2025-02-19',
            category: 'Software',
            content: 'Began development of custom mission planning software. Implemented waypoint navigation algorithms. Created user interface for ground control station. Started integration with autopilot API.',
            images: ['week6-software.jpg'],
            challenges: 'Learning autopilot API and communication protocols',
            solutions: 'Extensive documentation review and community forum research'
        },
        {
            id: 7,
            title: 'Ground Testing - Week 7',
            date: '2025-02-26',
            category: 'Testing',
            content: 'Performed comprehensive ground testing. Verified all control surfaces respond correctly. Tested communication link range and reliability. Calibrated all sensors including IMU, GPS, and barometer.',
            images: ['week7-ground-test.jpg'],
            challenges: 'Sensor calibration in urban environment with interference',
            solutions: 'Moved to open field for initial calibration, then fine-tuned in actual environment'
        },
        {
            id: 8,
            title: 'Flight Testing Begins - Week 8',
            date: '2025-03-05',
            category: 'Testing',
            content: 'First tethered flight test completed successfully. Vehicle demonstrated stable hover and basic maneuverability. Collected initial flight data for analysis. Identified minor tuning needed for PID controllers.',
            images: ['week8-flight-1.jpg', 'week8-flight-2.jpg'],
            challenges: 'Achieving stable flight with new airframe',
            solutions: 'Gradual PID tuning with systematic parameter adjustment'
        },
        {
            id: 9,
            title: 'Autonomous Flight Testing - Week 9',
            date: '2025-03-12',
            category: 'Testing',
            content: 'Successfully completed first fully autonomous flight mission. Vehicle followed pre-programmed waypoints with high accuracy. GPS hold performance exceeded expectations. Tested return-to-home functionality.',
            images: ['week9-autonomous.jpg'],
            challenges: 'Ensuring reliable GPS lock in various conditions',
            solutions: 'Implemented dual GPS system with RTK for enhanced accuracy'
        },
        {
            id: 10,
            title: 'Payload Integration - Week 10',
            date: '2025-03-19',
            category: 'Integration',
            content: 'Integrated camera gimbal and thermal imaging system. Tested payload control and data transmission. Verified image quality and stabilization. Began development of image processing algorithms.',
            images: ['week10-payload.jpg'],
            challenges: 'Maintaining center of gravity with payload changes',
            solutions: 'Redesigned battery placement to accommodate payload variations'
        },
        {
            id: 11,
            title: 'Endurance Testing - Week 11',
            date: '2025-03-26',
            category: 'Testing',
            content: 'Conducted extended flight endurance tests. Achieved 42 minutes of flight time with full payload, exceeding our 40-minute target. Battery performance analysis shows consistent discharge characteristics.',
            images: ['week11-endurance.jpg'],
            challenges: 'Maximizing flight time while maintaining performance',
            solutions: 'Optimized flight profile and power management algorithms'
        },
        {
            id: 12,
            title: 'Mission Simulation - Week 12',
            date: '2025-04-02',
            category: 'Testing',
            content: 'Performed complete mission simulation matching competition requirements. Vehicle successfully completed all mission phases including search, identification, and reporting. Data logging and telemetry worked flawlessly.',
            images: ['week12-mission.jpg'],
            challenges: 'Coordinating multiple mission phases seamlessly',
            solutions: 'Developed state machine for mission phase management'
        },
        {
            id: 13,
            title: 'Software Integration - Week 13',
            date: '2025-04-09',
            category: 'Software',
            content: 'Completed integration of all software modules. Mission planner, autopilot interface, and payload control now work as unified system. Performed end-to-end testing with successful results.',
            images: ['week13-integration.jpg'],
            challenges: 'Debugging communication between software modules',
            solutions: 'Implemented comprehensive logging and error handling'
        },
        {
            id: 14,
            title: 'Final Optimizations - Week 14',
            date: '2025-04-16',
            category: 'Optimization',
            content: 'Made final optimizations based on testing data. Improved flight efficiency by 8% through propeller selection and motor tuning. Enhanced autonomous navigation accuracy. Prepared vehicle for competition.',
            images: ['week14-optimization.jpg'],
            challenges: 'Balancing multiple optimization objectives',
            solutions: 'Used systematic approach prioritizing mission-critical parameters'
        },
        {
            id: 15,
            title: 'Competition Preparation - Week 15',
            date: '2025-04-23',
            category: 'Preparation',
            content: 'Final preparations for SUAS 26 competition. All documentation completed. Vehicle fully tested and ready. Team prepared for technical inspection and flight demonstrations. Excited to showcase our work!',
            images: ['week15-preparation.jpg'],
            challenges: 'Ensuring all competition requirements are met',
            solutions: 'Created comprehensive checklist and verification process'
        }
    ],

    // Testing & Procedures
    testing: {
        procedures: [
            {
                id: 1,
                title: 'Pre-Flight Checklist',
                description: 'Comprehensive checklist to be completed before every flight',
                steps: [
                    'Visual inspection of airframe for damage',
                    'Battery voltage check (must be > 16.0V)',
                    'Control surface movement verification',
                    'GPS lock confirmation (minimum 8 satellites)',
                    'Communication link test',
                    'Payload system check',
                    'Emergency stop system test',
                    'Weather condition assessment'
                ],
                images: ['preflight-checklist.jpg']
            },
            {
                id: 2,
                title: 'Sensor Calibration',
                description: 'Procedure for calibrating all onboard sensors',
                steps: [
                    'IMU calibration on level surface',
                    'Compass calibration (360° rotation)',
                    'Barometer calibration at known altitude',
                    'GPS accuracy verification',
                    'Camera gimbal calibration',
                    'Data logging verification'
                ],
                images: ['sensor-calibration.jpg']
            },
            {
                id: 3,
                title: 'Autonomous Flight Test',
                description: 'Standard procedure for testing autonomous flight capabilities',
                steps: [
                    'Set up waypoint mission in ground control station',
                    'Verify mission parameters',
                    'Initiate autonomous takeoff',
                    'Monitor vehicle progress',
                    'Verify waypoint accuracy',
                    'Test return-to-home function',
                    'Land and review flight data'
                ],
                images: ['autonomous-test.jpg']
            }
        ],
        results: {
            flightTests: [
                { test: 'Maximum Flight Time', result: '42 minutes', target: '40 minutes', status: 'exceeded' },
                { test: 'Maximum Speed', result: '82 km/h', target: '80 km/h', status: 'exceeded' },
                { test: 'Waypoint Accuracy', result: '±2.5 meters', target: '±5 meters', status: 'exceeded' },
                { test: 'Payload Capacity', result: '520g', target: '500g', status: 'exceeded' },
                { test: 'Communication Range', result: '8.5 km', target: '5 km', status: 'exceeded' }
            ],
            systemTests: [
                { test: 'Autopilot Response Time', result: '12ms', target: '<20ms', status: 'passed' },
                { test: 'GPS Accuracy', result: '±1.2m', target: '±3m', status: 'exceeded' },
                { test: 'Battery Efficiency', result: '85%', target: '80%', status: 'exceeded' },
                { test: 'Image Transmission Latency', result: '120ms', target: '<200ms', status: 'exceeded' }
            ]
        },
        safetyProtocols: [
            {
                title: 'Emergency Procedures',
                description: 'Protocols for handling emergency situations',
                procedures: [
                    'Immediate activation of return-to-home',
                    'Communication with ground control',
                    'Assessment of situation',
                    'Decision on landing location',
                    'Post-flight inspection'
                ]
            },
            {
                title: 'Weather Limitations',
                description: 'Flight restrictions based on weather conditions',
                limits: [
                    'Maximum wind speed: 25 km/h',
                    'No flight in precipitation',
                    'Minimum visibility: 1 km',
                    'Temperature range: -10°C to 40°C'
                ]
            }
        ]
    },

    // Sponsors
    sponsors: [
        {
            id: 1,
            name: 'TechCorp Industries',
            category: 'platinum',
            logo: 'sponsor-techcorp.png',
            description: 'Leading provider of aerospace components and systems',
            website: 'https://example.com'
        },
        {
            id: 2,
            name: 'Innovate Solutions',
            category: 'gold',
            logo: 'sponsor-innovate.png',
            description: 'Supporting innovation in autonomous systems',
            website: 'https://example.com'
        },
        {
            id: 3,
            name: 'AeroMaterials Co.',
            category: 'gold',
            logo: 'sponsor-aero.png',
            description: 'Premium carbon fiber and composite materials',
            website: 'https://example.com'
        },
        {
            id: 4,
            name: 'Digital Dynamics',
            category: 'silver',
            logo: 'sponsor-digital.png',
            description: 'Software solutions for autonomous vehicles',
            website: 'https://example.com'
        },
        {
            id: 5,
            name: 'Precision Electronics',
            category: 'silver',
            logo: 'sponsor-precision.png',
            description: 'High-quality electronic components',
            website: 'https://example.com'
        },
        {
            id: 6,
            name: 'Future Systems',
            category: 'silver',
            logo: 'sponsor-future.png',
            description: 'Advanced sensor technologies',
            website: 'https://example.com'
        },
        {
            id: 7,
            name: 'Global Components',
            category: 'bronze',
            logo: 'sponsor-global.png',
            description: 'Worldwide supplier of drone components',
            website: 'https://example.com'
        },
        {
            id: 8,
            name: 'Smart Manufacturing',
            category: 'bronze',
            logo: 'sponsor-smart.png',
            description: 'Custom manufacturing services',
            website: 'https://example.com'
        },
        {
            id: 9,
            name: 'Cloud Services Inc.',
            category: 'bronze',
            logo: 'sponsor-cloud.png',
            description: 'Data storage and processing solutions',
            website: 'https://example.com'
        },
        {
            id: 10,
            name: 'Local Business Partners',
            category: 'bronze',
            logo: 'sponsor-local.png',
            description: 'Community support and local partnerships',
            website: 'https://example.com'
        }
    ],

    // Projects Data
    projects: [
        {
            id: 'suas26',
            name: 'SUAS 26 Autonomous Vehicle',
            shortName: 'SUAS 26',
            category: 'Aerospace',
            status: 'active',
            year: '2025',
            location: 'Istanbul',
            description: 'Autonomous Unmanned Aerial System designed for SUAS 26 competition. Features advanced autonomous flight capabilities, high-endurance design, and comprehensive sensor suite.',
            fullDescription: 'Our SUAS 26 vehicle represents a culmination of engineering excellence, designed specifically for autonomous operations in challenging environments. Built with modular architecture and redundant systems, it ensures reliability and performance throughout mission execution. The vehicle has successfully completed over 50 test flights, achieving 42 minutes of flight time with full payload. Our team spent 6 months developing this system, iterating through 3 major design revisions based on flight test data and CFD analysis.',
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
                vehicle: {
                    title: 'Vehicle Overview',
                    content: 'Complete vehicle specifications, design philosophy, and technical details.',
                    hasContent: true
                },
                design: {
                    title: 'Design Documentation',
                    content: 'Design decisions, CAD models, system architecture, and engineering work.',
                    hasContent: true
                },
                progress: {
                    title: 'Build Progress',
                    content: 'Weekly development updates, milestones, challenges, and solutions.',
                    hasContent: true
                },
                testing: {
                    title: 'Testing & Procedures',
                    content: 'Test procedures, results, safety protocols, and validation reports.',
                    hasContent: true
                }
            },
            images: [
                { id: 1, title: 'Full Vehicle Assembly', description: 'Complete vehicle ready for flight testing' },
                { id: 2, title: 'Electronics Bay', description: 'Internal electronics and wiring layout' },
                { id: 3, title: 'Wing Assembly', description: 'Carbon fiber wing structure' },
                { id: 4, title: 'Ground Control Station', description: 'Mission planning and monitoring setup' },
                { id: 5, title: 'Flight Testing', description: 'Vehicle during autonomous flight test' },
                { id: 6, title: 'Payload Integration', description: 'Camera and sensor mounting' }
            ],
            videos: [
                { id: 1, title: 'First Flight Test', description: 'Initial autonomous flight demonstration' },
                { id: 2, title: 'Mission Simulation', description: 'Complete mission from takeoff to landing' },
                { id: 3, title: 'Payload Testing', description: 'Camera gimbal and sensor testing' }
            ],
            achievements: [
                '42 minutes flight time achieved (exceeded 40 min target)',
                'Waypoint accuracy: ±2.5 meters (exceeded ±5m target)',
                'Communication range: 8.5 km (exceeded 5 km target)',
                'Payload capacity: 520g (exceeded 500g target)',
                'Maximum speed: 82 km/h (exceeded 80 km/h target)'
            ],
            team: {
                size: '15 members',
                roles: ['Aerospace Engineers', 'Software Developers', 'Electronics Specialists', 'Test Pilots']
            },
            timeline: {
                start: 'January 2025',
                current: 'April 2025',
                competition: 'June 2025',
                duration: '6 months'
            }
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
            fullDescription: 'AI Shell Agent brings advanced language models to physical devices, enabling seamless interaction between users and AI in everyday scenarios. The project focuses on creating an intuitive interface for AI-powered assistance. Currently in active development with a working prototype running on Raspberry Pi 4. The system processes natural language queries with sub-2-second response times and supports multiple languages including Turkish and English. We\'ve conducted user testing with 30+ participants showing 85% satisfaction rate.',
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
                overview: {
                    title: 'Project Overview',
                    content: 'Complete project description and goals.',
                    hasContent: true
                },
                technology: {
                    title: 'Technology Stack',
                    content: 'Technical implementation details and architecture.',
                    hasContent: true
                }
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
            fullDescription: 'Wedo is a comprehensive platform that connects people with local events and social activities. Using AI-powered recommendations, it helps users discover and participate in events that match their interests. The platform currently lists 1000+ events across 5 major cities in Turkey. We launched beta testing in March 2025 with 200 early users. The recommendation algorithm uses collaborative filtering and content-based approaches, achieving 78% user engagement rate. Built with React frontend and Node.js backend, deployed on AWS infrastructure.',
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
                overview: {
                    title: 'Project Overview',
                    content: 'Platform features and user experience.',
                    hasContent: true
                },
                features: {
                    title: 'Key Features',
                    content: 'Main functionalities and capabilities.',
                    hasContent: true
                }
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
            fullDescription: 'Smart Campus Platform integrates IoT sensors and automation systems to create an intelligent university campus. The platform provides real-time monitoring of energy consumption, facility usage, and environmental conditions, enabling data-driven decision making for campus management. Currently deployed in pilot phase across 10 buildings at ITU Ayazağa campus. The system has achieved 25% energy savings through intelligent HVAC control and lighting automation. We\'ve installed 50+ IoT sensors collecting data every 5 minutes, processed through MQTT protocol and stored in MongoDB for analytics.',
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
            fullDescription: 'BlockTrace leverages blockchain technology to provide end-to-end traceability in supply chains. The solution ensures product authenticity, prevents counterfeiting, and provides transparent tracking from origin to consumer. Built on Ethereum blockchain with Solidity smart contracts. Successfully processed 1000+ transactions tracking 500+ products across supply chain. The system uses QR codes and NFC tags for product identification, with data immutably stored on-chain. Beta testing completed with 3 partner companies in food and textile industries, showing 95% accuracy in traceability verification.',
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
    ]
};

// Make it globally available
if (typeof window !== 'undefined') {
    window.mockData = mockData;
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = mockData;
}
