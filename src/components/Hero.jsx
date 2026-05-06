import './Hero.css';

const Hero = () => {
    return (
        <section className = "hero-container">
            <div className = "hero-content">
                <span className = "hero-badge">Aspiring Developer</span>

                < h1 className = "hero-title">
                    Hi, Im <span className = "highlight">Rickey Chang</span>
                </h1>

                <p className = "hero-description">
                    I recently received my <b>Associate Degree</b> from <b>Milwaukee Area Technical College </b>
                    and will be continuing my education at the <b>University of Wisconsin-Milwaukee</b> for a <b>Bachelor's Degree</b>.
                    I am passionate about creating visually appealing and user-friendly websites. 
                    I have experience with <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and <b>React</b>. 
                    I am always eager to learn new technologies and improve my skills as a developer.
                </p>

                <div className = "hero-buttons">
                    <a href = "/resume.pdf" target = "_blank" rel = "noopener noreferrer" className = "button-primary">View Resume</a>
                    <a href = "https://github.com/changr0" target = "_blank" rel = "noopener noreferrer" className = "button-secondary">GitHub Profile</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;