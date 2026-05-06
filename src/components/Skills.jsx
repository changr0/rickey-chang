import './Skills.css';

const Skills = () => {
    const skillsData = [
        {
            title: 'Web Technologies',
            skills: ['HTML', 'CSS']
        },
        {
            title: 'Programming Languages',
            skills: ['JavaScript']
        },
        {
            title: 'Frameworks & Libraries',
            skills: ['React']
        }
        // More skill categories in the future
    ];

    return (
        <section className = "skills-section">
            <h2 className = "section-title"><b>SKILLS</b></h2>
            <div className = "skills-container">
                {skillsData.map((category, index) => (
                    <div key = {index} className = "skill-category">
                        <h3>{category.title}</h3>
                        <div className = "skills-list">
                            {category.skills.map((skill, i) => (
                                <div key={i} className = "skill-item">{skill}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
