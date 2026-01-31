import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../api/client';
import Navbar from '../components/Navbar';
import '../styles/TitleDetails.css';

function TitleDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTitleDetails();
  }, [id]);

  const fetchTitleDetails = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await api(`/api/titles/${id}`);
      setTitle(response);
    } catch (err) {
      console.error('Error fetching title details:', err);
      setError('Failed to load title details');
    } finally {
      setLoading(false);
    }
  };

  const handleWatch = () => {
    navigate(`/watch/${id}`);
  };

  if (loading) {
    return (
      <div className="title-details-page">
        <Navbar />
        <div className="title-details-loading">
          <div className="loading-spinner"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (error || !title) {
    return (
      <div className="title-details-page">
        <Navbar />
        <div className="title-details-error">
          <h2>{error || 'Title not found'}</h2>
          <button className="back-btn" onClick={() => navigate('/')}>
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="title-details-page">
      <Navbar />
      
      {/* Hero backdrop */}
      <div
        className="title-details-backdrop"
        style={{
          backgroundImage: `url(${title.thumbnailUrl})`,
        }}
      >
        <div className="backdrop-overlay"></div>
      </div>

      {/* Main content */}
      <div className="title-details-container">
        <div className="title-details-content">
          {/* Thumbnail and info side-by-side */}
          <div className="details-layout">
            <div className="details-poster">
              <img
                src={title.thumbnailUrl}
                alt={title.name}
                className="poster-image"
              />
            </div>

            <div className="details-info">
              <h1 className="details-title">{title.name}</h1>

              {/* Quick meta info */}
              <div className="quick-meta">
                <span className="type-badge">
                  {title.type === 'SERIES' ? '📺 Series' : '🎬 Movie'}
                </span>
                {title.rating && (
                  <span className="rating-badge">
                    ⭐ {title.rating}/10
                  </span>
                )}
                {title.duration && title.type === 'MOVIE' && (
                  <span className="duration-badge">
                    ⏱️ {title.duration} min
                  </span>
                )}
              </div>

              {/* Play button */}
              <button className="watch-btn" onClick={handleWatch}>
                ▶ Play Now
              </button>

              {/* Detailed info grid */}
              <div className="details-grid">
                {title.releaseDate && (
                  <div className="detail-item">
                    <span className="detail-label">Release Date:</span>
                    <span className="detail-value">{formatDate(title.releaseDate)}</span>
                  </div>
                )}

                {title.languages && (
                  <div className="detail-item">
                    <span className="detail-label">Languages:</span>
                    <span className="detail-value">{title.languages}</span>
                  </div>
                )}

                {title.cast && (
                  <div className="detail-item detail-full">
                    <span className="detail-label">Cast:</span>
                    <span className="detail-value">{title.cast}</span>
                  </div>
                )}

                {title.description && (
                  <div className="detail-item detail-full">
                    <span className="detail-label">Description:</span>
                    <p className="detail-description">{title.description}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back button */}
      <div className="details-footer">
        <button className="back-btn" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

export default TitleDetails;
