import React from "react"

export default function Footer(props) {
    const d = new Date();
    let year = d.getFullYear();
    
    return (
        <footer>
            <svg width="40" height="60" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 11.4846L11.4846 0V32.3249L23.6415 20.1681H39.8319L18.2073 41.7927L36.4146 60H22.9692L11.4846 48.5154L0 60V43.8095V11.4846Z" className="footerLogo"/>
            </svg>
            <div className="footerCopyright">
                <svg width="40" height="60" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 11.4846L11.4846 0V32.3249L23.6415 20.1681H39.8319L18.2073 41.7927L36.4146 60H22.9692L11.4846 48.5154L0 60V43.8095V11.4846Z" className="footerSecondlogo"/>
                </svg>
                <p>©KaiPereira {year || 2022} - All Rights Reserved </p>
            </div>
            <div className="footerSocials">
                <a href="https://hashnode.com/@KaiP" className="footerSocial footerHashnode" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-hashnode"></i>
                </a>
                <a href="https://www.linkedin.com/in/kai-pereira-ba5632237/" className="footerSocial footerLinkedIn" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/KaiPereira" className="footerSocial footerGithub" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-github"></i>
                </a>
            </div>
        </footer>
    )
}