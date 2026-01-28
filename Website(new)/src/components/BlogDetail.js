import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { blogPosts } from '../data/blogData';
import './BlogDetail.css';

const BlogDetail = () => {
  const { language } = useLanguage();
  const { blogId } = useParams();
  const navigate = useNavigate();

  const post = blogPosts.find(p => p.id === parseInt(blogId));

  const translations = {
    tr: {
      blogeDon: "Blog'a Dön",
      blogBulunamadi: 'Blog yazısı bulunamadı',
      kategori: 'Kategori',
      tarih: 'Tarih'
    },
    en: {
      blogeDon: 'Back to Blog',
      blogBulunamadi: 'Blog post not found',
      kategori: 'Category',
      tarih: 'Date'
    }
  };

  const t = translations[language];

  if (!post) {
    return (
      <div className="blog-detail-page">
        <div className="blog-not-found">
          <h2>{t.blogBulunamadi}</h2>
          <button onClick={() => navigate('/blog')}>{t.blogeDon}</button>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-detail-page">
      <div className="blog-detail-container">
        <button className="blog-back-button" onClick={() => navigate('/blog')}>
          ← {t.blogeDon}
        </button>

        <div className="blog-detail-header">
          <div className="blog-detail-meta">
            <span className="blog-detail-category">{post.category}</span>
            <span className="blog-detail-date">{post.date}</span>
          </div>
          <h1 className="blog-detail-title">{post.title}</h1>
          {post.image && (
            <div className="blog-detail-image">
              <img src={post.image} alt={post.title} />
            </div>
          )}
        </div>

        <div className="blog-detail-content">
          <div className="blog-content-text">
            {post.content ? (
              post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="blog-paragraph">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="blog-paragraph">{post.excerpt}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
