import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useNavigate } from 'react-router-dom'
import './Projects.css'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  { img: '/Images/image1.jpg', name: 'Sofia Laurent', category: 'Editorial', height: "5'10\"", location: 'Paris' },
  { img: '/Images/image2.jpg', name: 'Isabelle Moreau', category: 'Runway', height: "5'11\"", location: 'Milan' },
  { img: '/Images/image3.jpg', name: 'Camille Dubois', category: 'Commercial', height: "5'9\"", location: 'London' },
  { img: '/Images/image4.jpg', name: 'Elena Marchetti', category: 'Editorial', height: "5'10\"", location: 'Rome' },
  { img: '/Images/image5.jpg', name: 'Valentina Cruz', category: 'Runway', height: "5'11\"", location: 'Madrid' },
  { img: '/Images/image6.jpg', name: 'Aria Fontaine', category: 'Commercial', height: "5'9\"", location: 'Paris' },
  { img: '/Images/image7.jpg', name: 'Zara Bellini', category: 'Editorial', height: "5'10\"", location: 'Milan' },
  { img: '/Images/image8.jpg', name: 'Natalie Rousseau', category: 'Runway', height: "5'11\"", location: 'Paris' },
  { img: '/Images/image9.jpg', name: 'Luna Ferreira', category: 'Commercial', height: "5'9\"", location: 'Lisbon' },
  { img: '/Images/image10.jpg', name: 'Ana de Armas', category: 'Editorial', height: "5'10\"", location: 'Barcelona' },
  { img: '/Images/image11.jpg', name: 'Alexandra Daddario', category: 'Runway', height: "5'11\"", location: 'New York' },
  { img: '/Images/image12.jpg', name: 'Jade Leclerc', category: 'Commercial', height: "5'9\"", location: 'Paris' },
]

const categories = ['All', 'Editorial', 'Runway', 'Commercial']

const Projects = () => {
  const navigate = useNavigate()
  const boxesRef = useRef([])
  const [filter, setFilter] = useState('All')

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter)

  useEffect(() => {
    const boxes = boxesRef.current.filter(Boolean)
    boxes.forEach((box) => {
      gsap.fromTo(box,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: box,
            start: 'top 100%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [filter])

  return (
    <>
      <div className='projects-container'>
        <h1>Models</h1>

        {/* filter tabs */}
        <div className='filter-tabs'>
          {categories.map(cat => (
            <button
              key={cat}
              className={`tab ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* results count */}
        <p className='results-count'>{filteredProjects.length} Models</p>
      </div>

      <div className='image-container'>
        {filteredProjects.map((project, index) => (
          <div
            className='image-box'
            key={index}
            ref={(el) => (boxesRef.current[index] = el)}
            onClick={() => navigate(`/model/${index}`)}
          >
            <img src={project.img} alt={project.name} />
            <div className='image-overlay'>
              <h2>{project.name}</h2>
              <p>{project.location} · {project.height}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Projects