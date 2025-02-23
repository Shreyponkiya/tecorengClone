import React, { useEffect, useState, useRef } from 'react';
import "./Development.css";

const DevelopmentProcess = () => {
  const [isBallVisible, setIsBallVisible] = useState(false);
  const [ballStyle, setBallStyle] = useState({
    transform: 'translate3d(30px, 70px, 0px) rotate(0deg)',
    animation: 'fall 4s ease-out 1, roll 10s linear infinite, bounce 2s ease-in-out infinite',
  });

  const containerRef = useRef(null);

  const steps = [
    { title: "Research and Analysis", description: "Idea, Consultation, Research, Goal Definition, & Requirements Gathering", imageSrc: "asset 40.webp", position: "left" },
    { title: "Design", description: "System Architecture Design, Wireframing, UI/UX Designing, & Prototyping", imageSrc: "asset 41.webp", position: "right" },
    { title: "Development", description: "Functional Implementation, Software Coding & Optimization", imageSrc: "asset 42.webp", position: "left" },
    { title: "Testing", description: "Quality Assurance, Troubleshooting, & Testing", imageSrc: "asset 43.webp", position: "right" },
    { title: "Deployment", description: "Launch, Beta Live, & Live", imageSrc: "asset 44.webp", position: "left" },
    { title: "Evaluation", description: "Performance Evaluation, & Analytics Implementation", imageSrc: "asset 45.webp", position: "right" },
    { title: "Maintenance", description: "Monitoring, Feedback, Analysis, & Complete Support", imageSrc: "asset 46.webp", position: "left" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const ball = document.querySelector('.rolling-ball');
      if (ball) {
        const ballPosition = ball.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsBallVisible(ballPosition <= windowHeight);
      }

      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      let progress = (viewportHeight - containerRect.top) / (containerRect.height + viewportHeight);
      progress = Math.max(0, Math.min(1, progress));

      const path = [
        { x: 30, y: 70 },      
        { x: 1100, y: 400 },     
        { x: -10, y: 700 },      
        { x: 1100, y: 900 },     
        { x: -10, y: 1280 },     
        { x: 1100, y: 1550 },    
        { x: 50, y: 1800 },     
        { x: 850, y: 2000 },    
        { x: 890, y: 2130 }
      ];

      const totalSegments = path.length - 1;
      const currentSegment = Math.floor(progress * totalSegments);
      const segmentProgress = (progress * totalSegments) % 1;

      if (currentSegment < 0 || currentSegment >= totalSegments) return;

      const start = path[currentSegment];
      const end = path[currentSegment + 1];

      const x = start.x + (end.x - start.x) * segmentProgress;
      const y = start.y + (end.y - start.y) * segmentProgress;

      // Rotate effect
      const rotation = 2.37289 + (progress * 360);

      // Update ball position
      setBallStyle({
        transform: `translate3d(${x}px, ${y}px, 0px) rotate(${rotation}deg)`,
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="development-container" ref={containerRef}>
      <h1 className="development-heading text-6xl">Our Development Process</h1>

      <div className="ball-container">
        <img src="asset 38.svg" alt="Ball Entry" className="ball-entry" />
        <img src="asset 39.svg" alt="Ball" className={`rolling-ball ${isBallVisible ? 'visible' : ''}`} style={ballStyle} />
      </div>

      {steps.map((step, index) => (
        <div key={index} className={`development-step ${step.position}`}>
          <div className="development-box">
            {step.position === 'left' ? (
              <>
                <div className="image-container">
                  <img src={step.imageSrc} alt={step.title} className="step-image" />
                </div>
                <div className="text-container">
                  <h2>{step.title}</h2>
                  <p>{step.description}</p>
                </div>
              </>
            ) : (
              <>
                <div className="text-container">
                  <h2>{step.title}</h2>
                  <p>{step.description}</p>
                </div>
                <div className="image-container">
                  <img src={step.imageSrc} alt={step.title} className="step-image" />
                </div>
              </>
            )}
          </div>
        </div>
      ))}

      <div className="ballexit-container ml-[50rem] mt-[-10rem]">
        <img src="asset 47.webp" alt="Ball Exit" className="ballexit-image" />
      </div>
    </div>
  );
};

export default DevelopmentProcess;