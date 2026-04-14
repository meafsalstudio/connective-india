import React from 'react';
import '../styles/components/PageBanner.scss';

const PageBanner = ({ title, subtitle, label, bgImage }) => {
  return (
    <section 
      className="page-banner"
      style={bgImage ? { '--banner-bg': `url(${bgImage})` } : {}}
    >
      <div className="banner-container">
        {label && (
          <div className="banner-label">
            <span className="label-dot"></span>
            {label}
          </div>
        )}
        <h1>{title}</h1>
        {subtitle && <p className="banner-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageBanner;
