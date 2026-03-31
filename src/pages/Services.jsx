import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useNavigate } from 'react-router-dom'
import './Services.css'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    number: '01',
    title: 'Editorial Modelling',
    description: 'High fashion editorial shoots for leading magazines, lookbooks and digital campaigns. Our models bring your creative vision to life with elegance and precision.',
    img: '/Images/EditorialModelling.jpg'
  },
  {
    number: '02',
    title: 'Runway & Couture',
    description: 'Experienced runway models for haute couture, prêt-à-porter and fashion week shows. Trained in movement, posture and presentation for the highest standards.',
    img: '/Images/Runaway.jpg'
  },
  {
    number: '03',
    title: 'Commercial Campaigns',
    description: 'Versatile models for advertising campaigns, brand activations, TV commercials and digital media. We match the right talent to your brand identity.',
    img: '/Images/Campaigns.jpg'
  },
  {
    number: '04',
    title: 'Luxury & Brand Events',
    description: 'Sophisticated brand ambassadors for luxury product launches, exclusive events and high-profile brand activations across the globe.',
    img: '/Images/Brand.jpg'
  },
  {
    number: '05',
    title: 'Beauty & Cosmetics',
    description: 'Specialist beauty models for cosmetic brands, skincare campaigns and hair editorials. Expert in conveying emotion and beauty through close-up work.',
    img: '/Images/Cosmetics.jpg'
  },
  {
    number: '06',
    title: 'Talent Development',
    description: 'Comprehensive training and development programs for new talent. From posing and movement coaching to portfolio development and personal branding.',
    img: '/Images/image12.jpg'
  },
]

const Services = () => {
  const headingRef = useRef(null)
  const cardsRef = useRef([])
  const navigate = useNavigate()

  useEffect(() => {
    // heading animation
    gsap.fromTo(
      headingRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
    )

    // cards animation
    cardsRef.current.filter(Boolean).forEach((card) => {
      gsap.fromTo(
        card,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className='services-page'>

      {/* hero section */}
      <div className='services-hero' ref={headingRef}>
        <p className='services-label'>What We Offer</p>
        <h1>Our <span className='italic'>Services</span></h1>
        <p className='services-sub'>
          A full suite of modelling and talent services for brands, agencies and creatives worldwide.
        </p>
      </div>

      {/* services grid */}
      <div className='services-grid'>
        {services.map((service, index) => (
          <div
            className='service-card'
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div className='service-image'>
              <img src={service.img} alt={service.title} />
            </div>
            <div className='service-content'>
              <span className='service-number'>{service.number}</span>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <div className='service-btn'>
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* bottom cta */}
      <div className='services-cta'>
        <h2>Ready to work with us?</h2>
        <button className='cta-btn' onClick={() => navigate('/contact')}>Get In Touch</button>
      </div>

    </div>
  )
}

export default Services