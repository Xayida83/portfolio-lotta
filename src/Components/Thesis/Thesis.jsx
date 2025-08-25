import React from 'react'
import './Thesis.css'
import presentation from '../../assets/Examensarbete.pptx'
import theme_pattern from '../../assets/theme_pattern.svg'
import videoDemo from '../../assets/Memostream demo –  Clipchamp.mp4'


export const Thesis = () => {
  return (
    <section id="thesis" className="thesis" aria-labelledby="thesis-heading">
      <div className="thesis-heading">
        <h2>Thesis</h2>
        <img src={theme_pattern} alt="theme pattern" />
      </div>
      
      <div className="thesis-content">
        <div className="thesis-video-container">
          <h3>Project video</h3>
          <div className="video-wrapper">
            <video 
              controls
              aria-label="Demonstration av examensarbetet"
            >
              <source src={videoDemo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>    
        <div className="thesis-presentation">
        <h3>MemoStream – Final Project</h3>
          <p>
MemoStream is a web-based platform that makes it easy to share stories, memories, and media online – without needing technical skills. Users send their content (text, images, audio) via email, and it’s automatically published to a personal webpage.</p>
<p>
The project was inspired by a neighbor who’s been emailing weekly newsletters with rich stories and media for over a decade. MemoStream aims to make that kind of digital sharing accessible, scalable, and long-lasting.</p>
          <a 
            href={presentation}
            download="Examensarbete.pptx"
            className="thesis-download-button"
            aria-label="Ladda ner PowerPoint-presentation"
          >
            Download PowerPoint presentation
          </a>
        </div>
      </div>
    </section>
  )
} 