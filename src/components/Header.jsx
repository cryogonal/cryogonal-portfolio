import React, { useState } from 'react'
import '../index.css'

function Header() {
    const [activeTab, setActiveTab] = useState(null);
    const [isPanelOn, setIsPanelOn] = useState(false);
    const [hasClickedPanel, setHasClickedPanel] = useState(false);

    const handleTabClick = (tab) => {
        setIsPanelOn(true);
        setActiveTab(tab);
    }

    const handlePanelClick = (tab) => {
        if (!hasClickedPanel) {
            setIsPanelOn(true);
            setHasClickedPanel(true);
            setActiveTab('experience');
        }
    }

    return (
    <>
        <div className="header-signs-container">
            <div className="neon-sign">Brandon</div>
            <div className="broken-neon-sign">Hui</div>
        </div>

        <div className="holo-panel-container">
            <div
                className={`holo-panel ${isPanelOn ? 'on' : 'off'}`}
                onClick={!hasClickedPanel ? handlePanelClick : undefined}
                style={{ cursor: !hasClickedPanel ? 'pointer' : 'default' }}
            >

                {hasClickedPanel && (
                    <>
                        <div className="panel-inner">
                            <div className="panel-content">
                                {activeTab === 'experience' && (
                                <>
                                    <h2>experience</h2>
                                    <p>—— Software Engineer for RAS@Pitt ——</p>
                                    <p>Developing and simulating a rover with ROS 2 Humble, C++ and Python.</p>
                                    <p>Collaborated with mechanical and electrical engineers to integrate software with hardware.</p>
                                    <p>—— Software Developer for ScottyLabs @ CMU ——</p>
                                    <p>Developing a finance portal utilizing Python, Flask, NodeJS, Puppeteer, and Redis for backend, React for frontend, and PostgreSQL for the database.</p>
                                    <p>Working with peers from both Pitt and CMU to develop and test software.</p>
                                </>
                                )}
                                {activeTab === 'about' && (
                                <>
                                    <h2>about me</h2>
                                    <p>Hey! I'm Brandon Hui, a junior at the University of Pittsburgh studying computer science and philosophy. I dream of working in software, focusing on backend development, IT, and AI.</p>
                                    <p>Outside of programming, I love to play video games, discover new music, and hang out with friends! I've recently been addicted to Terraria and am currently trying to complete the Calamity mod.</p>
                                    <p>Hope you enjoy looking around!</p>
                                </>
                                )}
                                {activeTab === 'contact' && (
                                <>
                                    <h2>contact me</h2>
                                    <p>
                                    <a href="mailto:huibrandon727@gmail.com" className="email-link">
                                        my email!
                                    </a>
                                    </p>
                                </>
                                )}
                            </div>

                            <div className="panel-buttons">
                                <div className="clickable-neon-sign" onClick={() => handleTabClick('experience')}>
                                experience
                                </div>
                                <div className="clickable-neon-sign" onClick={() => handleTabClick('about')}>
                                about
                                </div>
                                <div className="clickable-neon-sign" onClick={() => handleTabClick('contact')}>
                                contact
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    </>
)

}

export default Header