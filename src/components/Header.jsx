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
            <div className = "header-signs-container">
                <div className="neon-sign">
                    Brandon
                </div>
                <div className="broken-neon-sign">
                    Hui
                </div>
            </div>
            <div className="holo-panel-container">
                {activeTab && (
                <div className={`holo-panel ${isPanelOn ? 'on' : 'off'}`}>
                    {activeTab === 'experience' && (
                        <div className = "panel-content">
                            <h2>experience</h2>
                            <p>—— Software Engineer for RAS@Pitt ——</p>
                            <p1>Developing and simulating a rover with ROS 2 Humble, C++ and Python.</p1>
                            <p>Collaborated with multiple different mechanical and electrical engineers to integrate software with hardware.</p>

                            <p2>—— Software Developer for ScottyLabs @ CMU ——</p2>
                            <p>Developing a finance portal utilizing Python, Flask, NodeJS, Puppeteer, and Redis for backend, React for frontend, and PostgreSQL for the database.</p>
                            <p>Working with peers from both Pitt and CMU to develop and test software.</p>
                        </div>
                    )}
                    {activeTab === 'about' && (
                        <div className = "panel-content">
                            <h2>about me</h2>
                            <p>Hey! I'm Brandon Hui, a sophomore at the University of Pittsburgh studying computer science and philosophy. I dream of working in software, focusing on mostly backend development, IT, 
                                and AI. I am currently working on a finance portal for Carnegie Mellon University to allow clubs to be able to interact with their committes and resources.
                            </p>
                            <p>Outside of programming, I love to play video games, discover new music, and hanging out with friends! I've recently been addicted to Terraria, and am in the midst of completing the Calamity mod.
                                I've also rediscovered my love for jazz. Hope you enjoy looking around!
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
                <div className="clickable-buttons">
                    <div className="clickable-neon-sign" onClick = {() => handleTabClick('experience')}>
                        experience
                    </div>
                    <div className="clickable-neon-sign" onClick = {() => handleTabClick('about')}>
                        about
                    </div>
                    <div className="clickable-neon-sign" onClick = {() => handleTabClick('contact')}>
                        contact
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header