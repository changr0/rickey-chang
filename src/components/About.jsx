import './About.css';

const About = () => {
    return (
        <section className = "about-section" id="about">
            <div className = "about-container">
                <h2 className = "section-title">About Me</h2>
                <div className = "about-content">
                    <div className = "about-text">
                        <p>

                        </p>
                        <p>
                            
                        </p>
                    </div>
                    <div className = "about-details">
                        <div className = "detail-box">
                            <h4>Education</h4>
                            <p>Milwaukee Area Technical College</p>
                            <p>Associate of Applied Science (AAS) in IT - Web and Software Development | May 2026</p>
                        </div>
                        <div className = "detail-box">
                            <h4>Location</h4>
                            <p>Milwaukee, WI</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;