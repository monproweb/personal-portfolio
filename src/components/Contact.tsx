import React from 'react';

function Contact() {
    return (
        <div className="contact-section">
            <section id="contact" className="contact-section">
                <div className="contact-section-header">
                    <h2>Let's work together...</h2>
                    <p>How do you take your coffee?</p>
                </div>
                <div className="contact-links">
                    <a
                        href="https://facebook.com/monproweb"
                        rel="noreferrer"
                        target="_blank"
                        className="btn contact-details"
                    ><i className="fab fa-facebook-square"></i> Facebook</a
                    >
                    <a
                        id="profile-link"
                        href="https://github.com/monproweb"
                        rel="noreferrer"
                        target="_blank"
                        className="btn contact-details"
                    ><i className="fab fa-github"></i> GitHub</a
                    >
                    <a
                        href="https://twitter.com/monproweb"
                        rel="noreferrer"
                        target="_blank"
                        className="btn contact-details"
                    ><i className="fab fa-twitter"></i> Twitter</a
                    >
                    <a href="mailto:thomas.erhel@gmail.com" className="btn contact-details"
                    ><i className="fas fa-at"></i> Send a mail</a
                    >
                    <a href="https://discord.gg/dTKzrxnZfq" className="btn contact-details"
                    ><i className="fab fa-discord"></i> Discord</a
                    >
                </div>
            </section>
        </div>
    );
}

export default Contact;
