import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Contact.css'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const headingRef = useRef(null)
  const formRef = useRef(null)
  const infoRef = useRef(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    gsap.fromTo(headingRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
    )
    gsap.fromTo(formRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3,
        scrollTrigger: { trigger: formRef.current, start: 'top 90%' }
      }
    )
    gsap.fromTo(infoRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5,
        scrollTrigger: { trigger: infoRef.current, start: 'top 90%' }
      }
    )
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className='contact-page'>

      {/* hero */}
      <div className='contact-hero' ref={headingRef}>
        <p className='contact-label'>Get In Touch</p>
        <h1>Let's Work <br /><span className='italic'>Together</span></h1>
        <p className='contact-sub'>
          Whether you're a brand, photographer or aspiring model — we'd love to hear from you.
        </p>
      </div>

      {/* main content */}
      <div className='contact-content'>

        {/* form */}
        <div className='contact-form-wrapper' ref={formRef}>
          {submitted ? (
            <div className='success-message'>
              <h2>Message Sent ✓</h2>
              <p>Thank you for reaching out. We'll get back to you within 48 hours.</p>
              <button className='reset-btn' onClick={() => setSubmitted(false)}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form className='contact-form' onSubmit={handleSubmit}>
              <div className='form-row'>
                <div className='form-group'>
                  <label>Full Name</label>
                  <input
                    type='text'
                    name='name'
                    placeholder='Sofia Laurent'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label>Email Address</label>
                  <input
                    type='email'
                    name='email'
                    placeholder='sofia@example.com'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className='form-group'>
                <label>Subject</label>
                <select name='subject' value={formData.subject} onChange={handleChange} required>
                  <option value=''>Select a subject</option>
                  <option value='booking'>Model Booking</option>
                  <option value='partnership'>Brand Partnership</option>
                  <option value='join'>Join the Agency</option>
                  <option value='press'>Press Enquiry</option>
                  <option value='other'>Other</option>
                </select>
              </div>

              <div className='form-group'>
                <label>Message</label>
                <textarea
                  name='message'
                  placeholder='Tell us about your project...'
                  rows='6'
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type='submit' className='submit-btn'>
                <span>Send Message</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </form>
          )}
        </div>

        {/* contact info */}
        <div className='contact-info' ref={infoRef}>
          <div className='info-block'>
            <p className='info-label'>Visit Us</p>
            <p>72 Rue du Faubourg<br />Saint-Honoré<br />Paris, 75008</p>
          </div>
          <div className='info-block'>
            <p className='info-label'>Email Us</p>
            <p>bookings@soixan7edouze.com</p>
            <p>press@soixan7edouze.com</p>
          </div>
          <div className='info-block'>
            <p className='info-label'>Call Us</p>
            <p>+33 1 42 68 53 00</p>
            <p>Mon – Fri, 9am – 6pm CET</p>
          </div>
          <div className='info-block'>
            <p className='info-label'>Follow Us</p>
            <div className='social-links'>
              <a href='#'>Instagram</a>
              <a href='#'>LinkedIn</a>
              <a href='#'>Pinterest</a>
            </div>
          </div>

          {/* office image */}
          <div className='office-image'>
            <img src='/Images/Studio.jpg' alt='Our Office' />
            <p>Our Paris Studio</p>
          </div>
        </div>

      </div>

      {/* bottom bar */}
      <div className='contact-bottom'>
        <p>© 2024 Soixan7e Douze. All rights reserved.</p>
        <p>Paris · Milan · London · New York</p>
      </div>

    </div>
  )
}

export default Contact