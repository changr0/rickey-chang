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
                    Recent IT graduate specializing in front-end development. I build clean and accessible web applications using React and JavaScript.
                </p>

                <div className = "hero-buttons">
                    <a href = "/resume.pdf" target = "_blank" rel = "noopener noreferrer" className = "button-primary">Resume</a>
                    <a href = "https://github.com/changr0" target = "_blank" rel = "noopener noreferrer" className = "button-primary">GitHub</a>
                    <a href = "https://www.linkedin.com/in/rickey-chang-48b396192/" target = "_blank" rel = "noopener noreferrer" className = "button-primary">LinkedIn</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;