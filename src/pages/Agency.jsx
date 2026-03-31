import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Agency.css'
import { useNavigate } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const images = [
  '/Images/image1.jpg', '/Images/image2.jpg', '/Images/image3.jpg',
  '/Images/image4.jpg', '/Images/image5.jpg', '/Images/image6.jpg',
]

const stats = [
  { number: '12+', label: 'Years Experience' },
  { number: '200+', label: 'Models Represented' },
  { number: '50+', label: 'Brand Partners' },
  { number: '30+', label: 'Countries Worldwide' },
]

const team = [
  { name: 'Marie Leclerc', role: 'Founder & Creative Director', img: '/Images/Founder.jpg' },
  { name: 'Jean Dubois', role: 'Head of Talent', img: '/Images/Talent.jpg' },
  { name: 'Sophie Martin', role: 'Brand Partnerships', img: '/Images/Partnership.jpg' },
]

const Agency = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [animClass, setAnimClass] = useState('slide-left')
  const statsRef = useRef([])
  const teamRef = useRef([])
  const storyRef = useRef(null)
  const navigate = useNavigate()

  // image slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimClass(prev => prev === 'slide-left' ? 'slide-top' : 'slide-left')
      setCurrentImage(prev => (prev + 1) % images.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  // gsap animations
  useEffect(() => {
    // story section
    gsap.fromTo(storyRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: storyRef.current, start: 'top 80%' }
      }
    )

    // stats
    statsRef.current.filter(Boolean).forEach((stat, i) => {
      gsap.fromTo(stat,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, delay: i * 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: stat, start: 'top 90%' }
        }
      )
    })

    // team cards
    teamRef.current.filter(Boolean).forEach((card, i) => {
      gsap.fromTo(card,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 1, delay: i * 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 90%' }
        }
      )
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <div className='agency-page'>

      {/* hero section */}
      <div className='agency-hero'>
        <div className='agency-image'>
          <img
            src={images[currentImage]}
            alt='agency'
            key={currentImage}
            className={animClass}
          />
        </div>
        <div className='agency-hero-text'>
          <p className='agency-label'>Est. 2012 — Paris</p>
          <h1>Soixan7e<br />Douze</h1>
          <p className='agency-tagline'>
            Where talent meets elegance. A premier modelling agency redefining the standards of fashion and beauty.
          </p>
        </div>
      </div>

      {/* stats section */}
      <div className='agency-stats'>
        {stats.map((stat, index) => (
          <div
            className='stat-item'
            key={index}
            ref={el => statsRef.current[index] = el}
          >
            <h2>{stat.number}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* story section */}
      <div className='agency-story' ref={storyRef}>
        <div className='story-left'>
          <p className='section-label'>Our Story</p>
          <h2>Born in Paris.<br />Known Worldwide.</h2>
        </div>
        <div className='story-right'>
          <p>
            Founded in 2012 in the heart of Paris, Soixan7e Douze was born from a passion for authentic beauty and a commitment to elevating talent. We represent the most sought-after models across editorial, runway, and commercial work.
          </p>
          <p>
            Our approach is personal. We build lasting relationships between talent and brands, ensuring every collaboration is a perfect match of vision, identity, and artistry.
          </p>
          <button className='story-btn' onClick={() => navigate('/projects')}>Our Models →</button>
        </div>
      </div>

      {/* team section */}
      <div className='agency-team'>
        <p className='section-label'>The People Behind</p>
        <h2 className='team-heading'>Our Team</h2>
        <div className='team-grid'>
          {team.map((member, index) => (
            <div
              className='team-card'
              key={index}
              ref={el => teamRef.current[index] = el}
            >
              <div className='team-image'>
                <img src={member.img} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* values section */}
      <div className='agency-values'>
        <div className='value-item'>
          <h3>Authenticity</h3>
          <p>We celebrate individuality and unique beauty in all its forms.</p>
        </div>
        <div className='value-item'>
          <h3>Excellence</h3>
          <p>Every booking, every shoot, every campaign — delivered to perfection.</p>
        </div>
        <div className='value-item'>
          <h3>Diversity</h3>
          <p>Representing talent from over 30 countries across the globe.</p>
        </div>
        <div className='value-item'>
          <h3>Integrity</h3>
          <p>Honest, transparent and dedicated to the success of our talent.</p>
        </div>
      </div>

    </div>
  )
}

export default Agency