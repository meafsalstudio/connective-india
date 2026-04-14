import React from 'react';
import { FaMapMarkerAlt, FaBriefcase, FaClock, FaArrowRight } from 'react-icons/fa';

const JobListing = ({ title, location, type, description, applicationLink }) => {
    return (
        <div className="job-listing">
            <div className="job-info">
                <h3>{title}</h3>
                <div className="job-meta">
                    <span>
                        <FaMapMarkerAlt /> {location}
                    </span>
                    <span>
                        <FaBriefcase /> {type}
                    </span>
                    <span>
                        <FaClock /> Posted 2 days ago
                    </span>
                </div>
            </div>
            <div className="job-action">
                <a href={applicationLink || "#"} className="btn-apply">
                    View Details
                </a>
            </div>
        </div>
    );
};

export default JobListing;
