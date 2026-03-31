import React from 'react'
import './Projects.css'

const projects = [
  { img: '/Images/image1.jpg', name: 'Sofia Laurent' },
  { img: '/Images/image2.jpg', name: 'Isabelle Moreau' },
  { img: '/Images/image3.jpg', name: 'Camille Dubois' },
  { img: '/Images/image4.jpg', name: 'Elena Marchetti' },
  { img: '/Images/image5.jpg', name: 'Valentina Cruz' },
  { img: '/Images/image6.jpg', name: 'Aria Fontaine' },
  { img: '/Images/image7.jpg', name: 'Zara Bellini' },
  { img: '/Images/image8.jpg', name: 'Natalie Rousseau' },
  { img: '/Images/image9.jpg', name: 'Luna Ferreira' },
  { img: '/Images/image10.jpg', name: 'Ana de Armas' },
  { img: '/Images/image11.jpg', name: 'Alexandra Daddario' },
  { img: '/Images/image12.jpg', name: 'Jade Leclerc' },
]

const Projects = () => {
  return (
    <>
      <div className='projects-container'>
        <h1>Models</h1>
      </div>

      <div className='image-container'>
        {projects.map((project, index) => (
          <div className='image-box' key={index}>
            <img src={project.img} alt={project.name} />
            <div className='image-overlay'>
              <h2>{project.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Projects