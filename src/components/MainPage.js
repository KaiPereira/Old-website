import React from "react"
import Aos from "aos"
import 'aos/dist/aos.css';
import useIsInViewport from 'use-is-in-viewport'

export default function MainPage(props) {
    const [isInViewport1, targetRef1] = useIsInViewport({ threshold: 50 })
    const [isInViewport2, targetRef2] = useIsInViewport({ threshold: 50 })
    const [isInViewport3, targetRef3] = useIsInViewport({ threshold: 50 })
    const [isInViewport4, targetRef4] = useIsInViewport({ threshold: 50 })
    const [isInViewport5, targetRef5] = useIsInViewport({ threshold: 50 })

    if (isInViewport1) {
        targetRef1(false)
    }
    if (isInViewport2) {
        targetRef2(false)
    }
    if (isInViewport3) {
        targetRef3(false)
    }
    if (isInViewport4) {
        targetRef4(false)
    }
    if (isInViewport5) {
        targetRef5(false)
    }

    React.useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])

    return (
        <main>
            <section className="mainSection" id="home">
                <div className="mainSettings" data-aos="fade-up" data-aos-once="true" data-aos-delay="1100">
                    {props.modeState ? <i className="fa-regular fa-moon mainSettingIcon" onClick={props.changeMode}></i> : <i class="fa-regular fa-sun mainSettingIcon" onClick={props.changeMode}></i>}
                    <div className="mainSettingMove">   
                        <div className="mainSettingsAlign">
                            <div className="mainSettingColor"></div>   
                            <i className="fa-solid fa-angle-down mainSettingsArrow"></i>
                        </div>     
                        <div className="colorDropdown">
                            <div className="colorDropdownContentContainer">
                                <div className="colorDropdownColor" style={{background: "#00E5FF"}} onClick={() => props.changePallete("#00E5FF")}></div> 
                                <div className="colorDropdownColor" style={{background: "#00FF66"}} onClick={() => props.changePallete("#00FF66")}></div>  
                                <div className="colorDropdownColor" style={{background: "#FF0099"}} onClick={() => props.changePallete("#FF0099")}></div>  
                                <div className="colorDropdownColor" style={{background: "#FF003D"}} onClick={() => props.changePallete("#FF003D")}></div>  
                                <div className="colorDropdownColor" style={{background: "#DBFF00"}} onClick={() => props.changePallete("#DBFF00")}></div>  
                                <div className="colorDropdownColor" style={{background: "#FFB800"}} onClick={() => props.changePallete("#FFB800")}></div>  
                                <div className="colorDropdownColor" style={{background: "#AD00FF"}} onClick={() => props.changePallete("#AD00FF")}></div>     
                            </div>    
                        </div> 
                    </div>
                </div>
                <div className="mainInfo">
                    <p data-aos="fade-up" data-aos-once="true" data-aos-delay="500">Kai Pereira</p>
                    <h1 data-aos="fade-up" data-aos-once="true" data-aos-delay="700">Student <br/><span>+</span><br className="alignHeader" /> Developer</h1>
                    <div data-aos="fade-up" data-aos-once="true" data-aos-delay="900"></div>
                </div>
            </section>
            <div className="mainArrow">
                <i className="fa-solid fa-angle-down mainArrowIcon"></i>
            </div>
            <section className="aboutSection" id="about">
                <h2 data-aos="fade-up" data-aos-once="true">About</h2>
                <div className="aboutInfo">
                    <div className="aboutInfoImageContainer" data-aos="fade-up" data-aos-once="true">
                        <div className="aboutInfoImage"></div>
                        <div className="aboutInfoImageArt"></div>
                    </div>
                    <div className="aboutInfoInformation" data-aos="fade-up" data-aos-once="true" data-aos-delay="300">
                        <div className="aboutInfoInformationAlign">
                            <div className="aboutInformationDetailsContainer">
                                <div className="aboutInformationDetail aboutInformationDetail1">
                                    <p className="aboutInformationDetailHeader">Name</p>
                                    <p className="aboutInformationDetailInfo">Kai Pereira</p>
                                </div>
                                <div className="aboutInformationDetail aboutInformationDetail2">
                                    <p className="aboutInformationDetailHeader">Birth</p>
                                    <p className="aboutInformationDetailInfo">2008, Feb 24</p>
                                </div>
                                <div className="aboutInformationDetail aboutInformationDetail3">
                                    <p className="aboutInformationDetailHeader">Residence</p>
                                    <p className="aboutInformationDetailInfo">Canada, BC</p>
                                </div>
                                <div className="aboutInformationDetail aboutInformationDetail4">
                                    <p className="aboutInformationDetailHeader">Email</p>
                                    <p className="aboutInformationDetailInfo">kaipereira2020@gmail.com</p>
                                </div>
                            </div>
                            <p className="aboutInformationDescription">Hi my name is Kai, I’m a passionate fullstack developer and designer. I have been programming/coding for the past year and I am extremely dedicated. I have aquired the necessary skills to fulfill most projects and I enjoy every part of the process from start to end.</p>
                            <a href="https://www.linkedin.com/in/kai-pereira-ba5632237/" className="aboutInformationResume" target="_blank" rel="noreferrer">Resume</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="skillsSection" id="skills">
                <h3 data-aos="fade-up" data-aos-once="true">Skills</h3>
                <div className="skillsContainer">
                    <div className="skillsSkill">
                        <p className="skillHeader">CSS3</p>
                        <div className="svg-item" ref={targetRef1}>
                            <svg width="83%" height="83%" viewBox="0 0 40 40" className="donut">
                                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="donutText">85%</text>
                                <circle className="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#fff"></circle>
                                <circle className="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="6"></circle>
                                <circle className={isInViewport1 ? 'donut-segment donut-segment-1' : ''} cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="6" strokeDasharray="85 15" strokeDashoffset="25" style={{"--stroke": "85 15"}}></circle>
                            </svg>
                        </div>
                    </div>
                    <div className="skillsSkill">
                        <p className="skillHeader">React</p>
                        <div className="svg-item" ref={targetRef2}>
                            <svg width="83%" height="83%" viewBox="0 0 40 40" className="donut">
                                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="donutText">80%</text>
                                <circle className="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#fff"></circle>
                                <circle className="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="6"></circle>
                                <circle className={isInViewport2 ? 'donut-segment donut-segment-2' : ''} cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="6" strokeDasharray="80 20" strokeDashoffset="25" style={{"--stroke": "80 20"}}></circle>
                            </svg>
                        </div>
                    </div>
                    <div className="skillsSkill">
                        <p className="skillHeader">MongoDB</p>
                        <div className="svg-item" ref={targetRef3}>
                            <svg width="83%" height="83%" viewBox="0 0 40 40" className="donut">
                                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="donutText">60%</text>
                                <circle className="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#fff"></circle>
                                <circle className="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="6"></circle>
                                <circle className={isInViewport3 ? 'donut-segment donut-segment-3' : ''} cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="6" strokeDasharray="60 40" strokeDashoffset="25" style={{"--stroke": "60 40"}}></circle>
                            </svg>
                        </div>
                    </div>
                    <div className="skillsSkill">
                        <p className="skillHeader" ref={targetRef4}>Node.js</p>
                        <div className="svg-item">
                            <svg width="83%" height="83%" viewBox="0 0 40 40" className="donut">
                                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="donutText">60%</text>
                                <circle className="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#fff"></circle>
                                <circle className="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="6"></circle>
                                <circle className={isInViewport4 ? 'donut-segment donut-segment-4' : ''} cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="6" strokeDasharray="60 40" strokeDashoffset="25" style={{"--stroke": "60 40"}}></circle>
                            </svg>
                        </div>
                    </div>
                    <div className="skillsSkill">
                        <p className="skillHeader">Express.js</p>
                        <div className="svg-item" ref={targetRef5}>
                            <svg width="83%" height="83%" viewBox="0 0 40 40" className="donut">
                                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="donutText">65%</text>
                                <circle className="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#fff"></circle>
                                <circle className="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="6"></circle>
                                <circle className={isInViewport5 ? 'donut-segment donut-segment-5' : ''} cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="6" strokeDasharray="65 35" strokeDashoffset="25" style={{"--stroke": "65 35"}}></circle>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
            <section className="portfolioSection">
                <h4 data-aos="fade-up" data-aos-once="true">Portfolio</h4>
                <div className="portfolioPages">
                    <div data-aos="fade-up" data-aos-once="true" data-aos-delay="100">
                        <a className="portfolioPage" href="https://bon-sushi.netlify.app/" alt="Bon Sushi Portfolio" target="_blank" rel="noreferrer">
                            <img src="portfolio1.png" alt="portfolio project" className="portfolioImage" />
                            <p>Bon Sushi</p>
                        </a>
                    </div>
                    <div data-aos="fade-up" data-aos-once="true" data-aos-delay="200">
                        <a className="portfolioPage" href="https://eltonpereira.com/" alt="Elton Pereira Portfolio" target="_blank" rel="noreferrer">
                            <img src="portfolio2.png" alt="portfolio project" className="portfolioImage" />
                            <p>Elton Pereira</p>
                        </a>
                    </div>
                    <div data-aos="fade-up" data-aos-once="true" data-aos-delay="300">
                        <div className="portfolioPage"></div>
                    </div>   
                </div>
            </section>
            <section className="servicesSection">
                <h5 data-aos="fade-up" data-aos-once="true">Services</h5>
                <div className="services">
                    <div className="service" data-aos="fade-up" data-aos-once="true" data-aos-delay="100">
                        <i className="fa-solid fa-globe serviceIcon"></i>
                        <p className="serviceHeader">Website Development</p>
                        <p className="serviceDescription">We will build a professional responsive website with search engine optimisation for your needs</p>
                    </div>
                    <div className="service" data-aos="fade-up" data-aos-once="true" data-aos-delay="200">
                        <i className="fa-solid fa-layer-group serviceIcon"></i>
                        <p className="serviceHeader">Web Application</p>
                        <p className="serviceDescription">We will build a professional medium sized fullstack application for whatever purposes</p>
                    </div>
                </div>
            </section>
        </main>
    )
}