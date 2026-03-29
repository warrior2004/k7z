import React from 'react'
import './Video.css'
import { useNavigate } from 'react-router-dom'

const Video = () => {
    const navigate = useNavigate()
    return (
        <div className='video'>
            <video autoPlay loop muted src="public/Hero.mp4"></video>
            <div className="video-text">
                <span className='first'>L'étincelle</span>
                <span className='second'>qui <div className='small-video'><video autoPlay loop muted src="public/Hero.mp4"></video></div> génère</span>
                <span className='third'>
                    la <span className='creative'>Creative</span>
                </span>
                <div className="buttons">
                    <button className='btn-primary' onClick={() => navigate('/projects')}>Projects</button>
                    <button className='btn-secondary' onClick={() => navigate('/agency')}>Agency</button>
                </div>
            </div>
        </div>
    )
}

export default Video