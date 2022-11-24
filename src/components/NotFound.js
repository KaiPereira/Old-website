import React from "react"
import 'aos/dist/aos.css';
import Aos from "aos"
import { Link } from "react-router-dom";

export default function NotFound(props) {
    React.useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])

    return (
        <main>
            <div className="notFoundMain">
                <div className="contactBallOneContainer">
                    <div className="contactBallOne" data-aos="fade-up" data-aos-once="true" data-aos-delay="500"></div>
                </div>
                <div className="contactBallTwoContainer">
                    <div className="contactBallTwo" data-aos="fade-up" data-aos-once="true" data-aos-delay="500"></div>
                </div>
                <div className="mainSettings contactSettings" data-aos="fade-up" data-aos-once="true" data-aos-delay="1200">
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
                <div className="notFoundText">
                    <h1 data-aos="fade-up" data-aos-once="true" data-aos-delay="500"><span>4</span>0<span>4</span></h1>
                    <p data-aos="fade-up" data-aos-once="true" data-aos-delay="700">Page Not Found</p>
                    <div data-aos="fade-up" data-aos-once="true" data-aos-delay="900">
                        <Link to="/" className="notFoundButton">Back</Link>
                    </div>
                </div>
            </div>
        </main>
    )
}