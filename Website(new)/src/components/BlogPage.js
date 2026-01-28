import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { blogPosts } from '../data/blogData';
import './BlogPage.css';

const BlogPage = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  
  const translations = {
    tr: {
      anaSayfayaDon: 'Ana Sayfaya Dön',
      blog: 'Blog',
      blogSubtitle: 'Tüm blog yazılarımızı buradan okuyabilirsiniz',
      devaminiOku: 'Devamını Oku',
      blogPosts: blogPosts
    },
    en: {
      anaSayfayaDon: 'Back to Home',
      blog: 'Blog',
      blogSubtitle: 'You can read all our blog posts here',
      devaminiOku: 'Read More',
      blogPosts: [
        {
          id: 1,
          title: 'Our Project Development Process',
          excerpt: 'We share how we develop our projects and what methodologies we use as VCAMP.',
          date: 'January 15, 2025',
          category: 'Development',
          image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop'
        },
        {
          id: 2,
          title: 'Meet Our New Members',
          excerpt: 'Discover our new members who joined our team and their contributions to our projects.',
          date: 'January 10, 2025',
          category: 'Team',
          image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop'
        },
        {
          id: 3,
          title: 'TEKNOFEST Preparations',
          excerpt: 'Details about our preparations and projects we developed for the TEKNOFEST competition.',
          date: 'January 5, 2025',
          category: 'Competition',
          image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop'
        },
        {
          id: 4,
          title: 'Vehicle Design Decisions',
          excerpt: 'Critical decisions we made in our vehicle design and the engineering logic behind these decisions.',
          date: 'December 28, 2024',
          category: 'Design',
          image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=400&fit=crop'
        },
        {
          id: 5,
          title: 'Our Testing Processes',
          excerpt: 'Testing processes of the systems we developed and our quality control approaches.',
          date: 'December 20, 2024',
          category: 'Testing',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
        },
        {
          id: 6,
          title: 'Cooperation with Our Sponsors',
          excerpt: 'Our partnerships with our sponsors and the contributions of these partnerships to our projects.',
          date: 'December 15, 2024',
          category: 'Sponsorship',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop'
        },
        {
          id: 7,
          title: 'Our Vehicle Development Process',
          excerpt: 'Challenges we faced in our vehicle development process and our solution approaches.',
          date: 'December 10, 2024',
          category: 'Development',
          image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=400&fit=crop'
        },
        {
          id: 8,
          title: 'Competition Preparations',
          excerpt: 'Our final preparations and tests before the competition.',
          date: 'December 5, 2024',
          category: 'Competition',
          image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop'
        },
        {
          id: 9,
          title: 'Team Meetings',
          excerpt: 'Our regular team meetings and project management approach.',
          date: 'December 1, 2024',
          category: 'Team',
          image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop'
        }
      ]
    }
  };
  
  const t = translations[language];

  return (
    <div className="blog-page">
      <div className="blog-page-container">
        <button className="blog-back-button" onClick={() => navigate('/')}>
          ← {t.anaSayfayaDon}
        </button>
        
        <div className="blog-page-header">
          <h1 className="blog-page-title">{t.blog}</h1>
          <p className="blog-page-subtitle">{t.blogSubtitle}</p>
        </div>
        
        <div className="blog-page-grid">
          {t.blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="blog-page-card"
              onClick={() => navigate(`/blog/${post.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <div className="blog-page-card-image">
                <img src={post.image} alt={post.title} />
                <div className="blog-page-card-category">{post.category}</div>
              </div>
              <div className="blog-page-card-content">
                <div className="blog-page-card-date">{post.date}</div>
                <h3 className="blog-page-card-title">{post.title}</h3>
                <p className="blog-page-card-excerpt">{post.excerpt}</p>
                <button 
                  className="blog-page-card-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/blog/${post.id}`);
                  }}
                >
                  {t.devaminiOku}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
