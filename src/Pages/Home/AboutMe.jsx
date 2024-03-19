import React from 'react';
import Timeline from './TimelineItem';
import Footer from './Footer';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const educationTimeline = [
  {
    date: 'August 2022 - May 2024',
    title: 'Master of Science, Computer Science',
    description: 'Binghamton University, State University of New York',
  },
  {
    date: 'August 2019 - May 2022',
    title: 'Bachelor of Engineering, Information Technology',
    description: 'University of Mumbai, Mumbai, India',
  },
  {
    date: 'August 2016 - May 2019',
    title: 'Polytechnic Diploma, Information Technology',
    description: 'Shri Bhagubhai Mafatlal Polytechnic, Mumbai, India',
  },
];

export default function AboutMe() {
  return (
    <div>
   < div className="about--section">
      <div className="about--section--img">
        <img src="./img/em1.jpg" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title"></p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            A passionate and driven computer science Engineer with a strong foundation in both theoretical concepts and practical applications, I have honed my skills in full-stack development, cloud computing, embedded systems, and UI/UX design. My journey in the field of technology has been fueled by relentless curiosity and a desire to innovate. I am committed to leveraging my skills and knowledge to create meaningful and impactful solutions that address real-world challenges.
          </p>
          <p className="hero--section-description">
            What truly fuels my passion is the opportunity to leverage technology to solve real-world problems and make a positive impact.
          </p>
          
          <hr style={{color:'black'}}>
      </hr>
     
     <h1 className='skills-section-heading'>MY EDUCATION</h1>
    <Timeline items={educationTimeline} />
        </div>

 
        
      </div>

     

   
    </div>
    <Footer />
</div>


  );
  
}


