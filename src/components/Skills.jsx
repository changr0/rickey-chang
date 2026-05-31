import './Skills.css';

const Skills = () => {
    const skillsData = [
        {
            category: "Front-End Development",
            items: [
                {name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML"},
                {name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS"},
                {name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
                {name: "React", url: "https://react.dev/"}
            ]
        },
        {
            category: "Tools & Frameworks",
            items: [
                {name: "Vite", url: "https://vite.dev/"},
                {name: "GitHub", url: "https://github.com/"}
            ]
        }
    ];

    return (
        <section className = "skills-section" id = "skills">
            <h2 className = "section-title">Skills</h2>
            <div className = "skills-container">
                {skillsData.map((category, index) => (
                    <div key = {index} className = "skill-category">
                        <h3>{category.category}</h3>
                        <div className = "skill-list">
                            {category.items.map((skill, i) => (
                                <a 
                                    key={i} 
                                    className = "skill-item" 
                                    href = {skill.url} 
                                    target = "_blank" 
                                    rel = "noopener noreferrer">
                                    {skill.name}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
