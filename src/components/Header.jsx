import React, { useState } from 'react'
import '../index.css'

function Header() {
    const [activeTab, setActiveTab] = useState(null);
    const [isPanelOn, setIsPanelOn] = useState(false);
    const [hasClickedPanel, setHasClickedPanel] = useState(false);
    const [showIntroMessage, setShowIntroMessage] = useState(false);
    const [showMainContent, setShowMainContent] = useState(false);
    const [isFading, setIsFading] = useState(false);

    const handleTabClick = (tab) => {
        if (tab == activeTab) {
            return;
        }

        setIsFading(true);
        setTimeout(() => {
            setActiveTab(tab);
            setIsFading(false);

        }, 300)
    }

    const handlePanelClick = (tab) => {
        if (!hasClickedPanel) {
            setIsPanelOn(true);
            setHasClickedPanel(true);
            setShowIntroMessage(true);

            setTimeout(() => {
                setShowIntroMessage(false);
                setTimeout(() => {
                    setShowMainContent(true);
                    setActiveTab('experience');
                }, 700)
            }, 2000)
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
                {!hasClickedPanel && (
                    <div className = "click-here">
                        click here :D
                    </div>
                )}

                {hasClickedPanel && (
                    <>
                    {showIntroMessage && (
                        <div className = "intro-message">
                            Welcome!
                        </div>
                    )}
                    {showMainContent && (
                        <div className="panel-inner fade-in-main">
                            <div className={`panel-content ${isFading ? 'fade-out-main' : 'fade-in-main'}`}>
                                {activeTab === 'experience' && (
                                <>
                                    <h1>experience</h1>
                                    <h3><span className = "header-font">———— <b>Software Engineer for RAS@Pitt</b> ————</span></h3>
                                    <p>Developed and simulated a rover with ROS 2 Humble and Python.</p>
                                    <p>Implemented interfaces for the rover's sensors, motors, and camera to carry out various tasks.</p>
                                    <p>Collaborated with mechanical and electrical engineers to integrate software with hardware.</p>
                                    <h3><span className = "header-font">——— <b>Software Developer for ScottyLabs @ CMU</b> ———</span></h3>
                                    <p>Developing a finance portal utilizing Python, Flask, NodeJS, Puppeteer, and Redis for backend, React for frontend, and PostgreSQL for the database.</p>
                                    <p>Working with peers from both Pitt and CMU to develop and test software.</p>
                                </>
                                )}
                                {activeTab === 'projects' && (
                                <>
                                    <h1>projects</h1>
                                    <h3><span className = "header-font">———— <a href = "https://github.com/cryogonal/SimliarSongRecommender" className = "github-link">Similar Song Recommender</a> ————</span></h3>
                                    <p>Created a Discord bot that recommends similar songs based on user input.</p>
                                    <p>Integrated the Spotify API using Spotipy and utilized Last.fm's API to fetch song metadata.</p>
                                    <p>Utilized Google's AI Gemini to generate a short insight of a given song and gives recommendations based on audio features along with a respective Spotify link.</p>
                                </>
                                )}
                                {activeTab === 'about' && (
                                <>
                                    <h1>about me</h1>
                                    <p>Hey! I'm Brandon Hui, a junior at the University of Pittsburgh studying computer science and philosophy. I dream of working in software, focusing on backend development, IT, and AI.</p>
                                    <p>Outside of programming, I love to play video games, discover new music, and hang out with friends! I've recently been addicted to Terraria and am currently trying to complete the Calamity mod.</p>
                                    <p>Hope you enjoy looking around! And while you're at it, check out my <a href="/cryogonal-portfolio/Brandon_Hui_Resume.pdf" 
                                                                                                            target="_blank"
                                                                                                            rel="noopener noreferrer"
                                                                                                            className = "resume-link">resume</a>.</p>
                                </>
                                )}
                                {activeTab === 'contact' && (
                                <>
                                    <h1>contact me</h1>
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
                                <div className="clickable-neon-sign" onClick={() => handleTabClick('projects')}>
                                projects
                                </div>
                                <div className="clickable-neon-sign" onClick={() => handleTabClick('about')}>
                                about
                                </div>
                                <div className="clickable-neon-sign" onClick={() => handleTabClick('contact')}>
                                contact
                                </div>
                            </div>
                        </div>
                    )}
                    </>
                )}
            </div>
        </div>
    </>
)

}



export default Header