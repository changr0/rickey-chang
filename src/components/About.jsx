import './About.css';

const About = () => {
    return (
        <section className = "about-section" id="about">
            <div className = "about-container">
                <h2 className = "section-title">About Me</h2>
                <div className = "about-content">
                    <div className = "about-text">
                        <p>
                            I recently received my Associate Degree from Milwaukee Area Technical College and will be continuing my education at the University of Wisconsin-Milwaukee for a Bachelor's Degree.
                            I am passionate and dedicated about front-end development with a strong foundation in web development technologies.
                        </p>
                        <p>
                            With my skills in <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and <b>React</b>, I am eager to contribute to a dynamic team and grow as a professional in the field of web development.
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