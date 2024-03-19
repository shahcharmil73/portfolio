import React from 'react';

const Timeline = ({ items }) => (
  <div className="timeline">
    <div className="timeline-line"></div>
    {items.map((item, index) => (
      <div key={index} className="timeline-item">
        <div className="timeline-item-content">
          <span className="date">{item.date}</span>
          <h3 className="title">{item.title}</h3>
          <p className="description">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Timeline;
