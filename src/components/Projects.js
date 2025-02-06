import React, { useState, useEffect } from 'react';
import '../styles/Projects.css'; // Import external CSS

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [expandedCards, setExpandedCards] = useState({});
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    fetch('/projects.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error loading projects:', error));
  }, []);

  const toggleReadMore = (index) => {
    setExpandedCards((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const openModal = (imageUrl, description) => {
    setModalData({ imageUrl, description });
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div className="projects-wrapper">
      <h1>/DEV Projects</h1>
      <p>Below is a collection of some open-source and private projects I've worked on.</p>

      {projects.map((project, index) => (
        <div className={`project-card ${expandedCards[index] ? 'expanded-card' : ''}`} key={index}>
          {/* Left Column - Project Cover Image */}
          <div className="project-image-wrapper" onClick={() => openModal(project.image, project.title)}>
            <img className="project-image" src={project.image} alt={project.title} />
          </div>

          {/* Right Column - Content */}
          <div className="project-content">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-metadata">
                <span className="project-date">{project.date}</span>
                <p className="project-collaborators">Collaborators: {project.collaborators.join(', ')}</p>
                <p className="project-sponsors">Special Thanks: {project.sponsors}</p>
              </div>
            </div>

            <p className="project-subtitle"><strong>{project.subtitle}</strong></p>

            {/* Description */}
            <div className="description-container">
              <p className={`project-description ${expandedCards[index] ? 'expanded' : ''}`}>
                {project.description}
              </p>
            </div>

            {/* Media Section and Read More */}
            {expandedCards[index] && project.media && (
              <div className="media-container">
                {project.media.map((media, i) => (
                  <div key={i} className="media-item">
                    <img
                      className="project-media"
                      src={media.url}
                      alt="Project media"
                      onClick={() => openModal(media.url, media.description)}
                    />
                    <p className="media-description">{media.description}</p>
                  </div>
                ))}
              </div>
            )}
            <button className="read-more-btn" onClick={() => toggleReadMore(index)}>
              {expandedCards[index] ? '...Read Less' : 'Read More...'}
            </button>
          </div>
        </div>
      ))}

      {/* Modal for Enlarged Image */}
      {modalData && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalData.imageUrl} alt="Expanded view" />
            <p className="modal-description">{modalData.description}</p>
            <button className="close-btn" onClick={closeModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
