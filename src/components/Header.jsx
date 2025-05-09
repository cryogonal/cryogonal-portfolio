import React, { useState } from 'react'
import '../index.css'

function Header() {
    const [activeTab, setActiveTab] = useState(null);
    const [isPanelOn, setIsPanelOn] = useState(false);

    const handleTabClick = (tab) => {
        setIsPanelOn(true);
        setActiveTab(tab);
    }

    return (
        <>
            <div className="neon-sign">
                Brandon
            </div>
            <div className="broken-neon-sign">
                Hui
            </div>
            <div className="clickable-neon-sign" onClick = {() => handleTabClick('experience')}>
                experience
            </div>
            <div className="clickable-neon-sign" onClick = {() => handleTabClick('about')}>
                about
            </div>
            <div className="clickable-neon-sign" onClick = {() => handleTabClick('contact')}>
                contact
            </div>

            {activeTab && (
                <div className={`holo-panel ${isPanelOn ? 'on' : 'off'}`}>
                    {activeTab === 'experience' && (
                        <div className = "panel-content">
                            <h2>experience</h2>
                            <p>Software Engineer for RAS@Pitt</p>
                            <p>Developing and simulating a rover with ROS 2 Humble, C++ and python.</p>
                            <p>Collaborated with multiple different mechanical and electrical engineers to integrate software with hardware.</p>
                            <p>more to be added :D</p>
                        </div>
                    )}
                    {activeTab === 'about' && (
                        <div className = "panel-content">
                            <h2>about me</h2>
                            <p>Hey! I'm Brandon Hui, a sophomore at the University of Pittsburgh studying computer science and philosophy. I dream of working in software, 
                                and am working to make it a reality. I am always willing to learn and grow, and I am always open to new opportunities.
                            </p>
                        </div>
                    )}
                    {activeTab === 'contact' && (
                        <div className = "panel-content">
                            <h2>contact me</h2>
                            <p>
                                <a href="mailto:huibrandon727@gmail.com" className = "email-link">
                                    my email!
                                </a>
                            </p>
                        </div>
                    )}
                </div>
            )}
            
        </>
    )
}

export default Header