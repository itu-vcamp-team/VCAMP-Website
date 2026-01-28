import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { projectTranslations } from '../data/projectData';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { language } = useLanguage();
  const { projectId } = useParams();
  const navigate = useNavigate();

  const t = projectTranslations[language];

  const projectMap = {
    'aios': t.projects.aios,
    'teknofest-havacilik': t.projects.teknofestHavacilik,
    'mesane-kanseri': t.projects.mesaneKanseri,
    'teknofest-saglik': t.projects.teknofestSaglik,
    'suas-26': t.projects.suas26,
    'ai-tool-pool': t.projects.aiToolPool
  };

  const project = projectMap[projectId];

  // Use image from data if available, fallback to previous logic if needed (though data now has images)
  const imageSrc = project?.image;

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="project-not-found">
          <h2>{t.projeBulunamadi}</h2>
          <button onClick={() => navigate('/projects')}>{t.projelereDon}</button>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <div className="project-detail-container">
        <button className="back-button" onClick={() => navigate('/projects')}>
          ← {t.projelereDon}
        </button>

        <div className="project-detail-header">
          <h1 className="project-detail-title">{project.title}</h1>
          {imageSrc && (
            <div className="project-detail-image">
              <img src={imageSrc} alt={project.title} />
            </div>
          )}
        </div>

        <div className="project-detail-content">
          <div className="project-description">
            <p className="project-main-description">{project.description}</p>
          </div>

          <div className="project-details">
            <h2>{t.projeDetaylari}</h2>
            <ul className="details-list">
              {project.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>

          <div className="project-features">
            <h2>{t.ozellikler}</h2>
            <div className="features-grid">
              {project.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* SUAS 26 Specific Sections */}

          {project.timeline && (
            <div className="project-section timeline-section">
              <h2>{t.gelisimSureci}</h2>
              <div className="timeline">
                {project.timeline.map((item, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-date">{item.date}</div>
                    <div className="timeline-content">
                      <h3>{item.title}</h3>
                      <p>{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.gallery && (
            <div className="project-section gallery-section">
              <h2>{t.galeri}</h2>
              <div className="gallery-grid">
                {project.gallery.map((item, index) => (
                  <div key={index} className="gallery-item">
                    {item.type === 'video' ? (
                      <div className="video-container">
                        <iframe
                          src={item.url}
                          title={item.caption}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    ) : (
                      <img src={item.url} alt={item.caption} />
                    )}
                    <span className="gallery-caption">{item.caption}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.documents && (
            <div className="project-section documents-section">
              <h2>{t.dokumanlar}</h2>
              <div className="documents-list">
                {project.documents.map((doc, index) => (
                  <div key={index} className="document-item">
                    <div className="doc-icon">{doc.type}</div>
                    <div className="doc-info">
                      <h3>{doc.title}</h3>
                      <span className="doc-date">{doc.date}</span>
                    </div>
                    <button className="doc-download-btn">{t.indir}</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.team && (
            <div className="project-section pd-team-section">
              <h2>{t.ekip}</h2>
              <div className="team-grid">
                {project.team.map((member, index) => (
                  <div key={index} className="team-member-card">
                    <div className="member-avatar">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sponsors Section Removed as per request */}

        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

