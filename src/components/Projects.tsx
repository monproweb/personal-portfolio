import React from 'react';
import TributePage from '../images/tribute-page.png';
import SurveyForm from '../images/survey-form.png';
import TechnicalDocumentationPage from '../images/technical-documentation-page.png';
import ProductLandingPage from '../images/product-landing-page.png';
import ReactMorpion from '../images/react-morpion.png';
import ReactPendu from '../images/react-pendu.png';

function Projects() {
    return (
        <div className="projects-section">
            <section id="projects" className="projects-section">
                <h2 className="projects-section-header">These are some of my projects</h2>

                <div className="projects-grid">
                    <a
                        href="https://github.com/monproweb/tribute-page/"
                        rel="noreferrer"
                        target="_blank"
                        className="project project-tile"
                    >
                        <img
                            className="project-image"
                            src={TributePage}
                            alt="project"
                        />
                        <p className="project-title">
                            <span className="code">&lt;</span>
        Tribute Page
        <span className="code">&#47;&gt;</span>
                        </p>
                    </a>
                    <a
                        href="https://github.com/monproweb/survey-form/"
                        rel="noreferrer"
                        target="_blank"
                        className="project project-tile"
                    >
                        <img
                            className="project-image"
                            src={SurveyForm}
                            alt="project"
                        />
                        <p className="project-title">
                            <span className="code">&lt;</span>
        Survey Form
        <span className="code">&#47;&gt;</span>
                        </p>
                    </a>
                    <a
                        href="https://github.com/monproweb/technical-documentation-page/"
                        rel="noreferrer"
                        target="_blank"
                        className="project project-tile"
                    >
                        <img
                            className="project-image"
                            src={TechnicalDocumentationPage}
                            alt="project"
                        />
                        <p className="project-title">
                            <span className="code">&lt;</span>
        Technical Documentation Page
        <span className="code">&#47;&gt;</span>
                        </p>
                    </a>
                    <a
                        href="https://github.com/monproweb/product-landing-page/"
                        rel="noreferrer"
                        target="_blank"
                        className="project project-tile"
                    >
                        <img
                            className="project-image"
                            src={ProductLandingPage}
                            alt="project"
                        />
                        <p className="project-title">
                            <span className="code">&lt;</span>
        Product Landing Page
        <span className="code">&#47;&gt;</span>
                        </p>
                    </a>
                    <a
                        href="https://github.com/monproweb/react-morpion/"
                        rel="noreferrer"
                        target="_blank"
                        className="project project-tile"
                    >
                        <img
                            className="project-image"
                            src={ReactMorpion}
                            alt="project"
                        />
                        <p className="project-title">
                            <span className="code">&lt;</span>
        React Morpion
        <span className="code">&#47;&gt;</span>
                        </p>
                    </a>
                    <a
                        href="https://github.com/monproweb/react-pendu/"
                        rel="noreferrer"
                        target="_blank"
                        className="project project-tile"
                    >
                        <img
                            className="project-image"
                            src={ReactPendu}
                            alt="project"
                        />
                        <p className="project-title">
                            <span className="code">&lt;</span>
        React Pendu
        <span className="code">&#47;&gt;</span>
                        </p>
                    </a>
                </div>

                <a
                    href="https://github.com/monproweb/"
                    rel="noreferrer"
                    className="btn btn-show-all"
                    target="_blank"
                >Show all<i className="fas fa-chevron-right"></i
                ></a>
            </section>
        </div>
    );
}

export default Projects;
