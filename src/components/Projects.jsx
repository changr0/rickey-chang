import './Projects.css';

const Projects = () => {
    const projectData = [
        {
            id: 1,
            title: 'Project 1',
            description: "This is project one.",
            technologies: ["HTML", "CSS", "JavaScript"],
            githubLink: 'https://github.com/changr0',
            demoLink: ''
        },
        {
            id: 2,
            title: 'Project 2',
            description: "This is project two.",
            technologies: ["HTML", "CSS", "JavaScript"],
            githubLink: 'https://github.com/changr0',
            demoLink: ''
        },
        // More projects in the future
    ];

    return (
        <section className = "projects-section" id = "projects">
            <h2 className = "section-title">Projects</h2>
            <div className = "projects-container">
                {projectData.map((project) => (
                    <div key = {project.id} className = "project-card">
                        <div className = "card-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className = "technologies">
                                {project.technologies.map((item, index) => (
                                    <span key = {index} className = "technology">{item}</span>
                                ))}
                            </div>
                            <div className = "project-links">
                                <a href = {project.githubLink} target = "_blank" rel = "noopener noreferrer" className = "button-primary">GitHub</a>
                                <a href = {project.demoLink} target = "_blank" rel = "noopener noreferrer" className = "button-secondary">Live Demo</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
