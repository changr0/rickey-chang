import './Contact.css';

const Contact = () => {
    return (
        <section className = "contact-section" id="contact">
            <div className = "contact-container">
                <h2 className = "section-title">Contact Me</h2>

                <div className = "contact-content">
                    <p className = "contact-message">
                        I am currently open to entry-level opportunities, professional collaborations, and freelance projects. If you have any questions, would like to discuss potential opportunities.
                        Please feel free to reach out to me through the contact form below or connect with me on LinkedIn. I look forward to hearing from you!
                    </p>

                    <div className = "contact-info">
                        <a href="mailto:rickeychang0@gmail.com" className = "contact-btn">Email Me</a>
                    </div>
                </div>
            </div>

            <footer className = "portfolio-footer">
                <p>&copy; {new Date().getFullYear()} Designed & Built by Rickey Chang</p>
            </footer>
        </section>
    );
}

export default Contact;