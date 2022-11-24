import React from "react"
import { Link } from "react-router-dom";

export default function Nav(props) {
    const [style1, changeStyle1] = React.useState(true)
    const [style2, changeStyle2] = React.useState(true)
    const [style3, changeStyle3] = React.useState(true)

    function enterChange(style) {
        style(false)
    }
    function exitChange(style) {
        style(true)
    }
    return (
        <>
            <nav>
                <Link to="/" className="navLogo">
                    <svg width="40" height="60" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 11.4846L11.4846 0V32.3249L23.6415 20.1681H39.8319L18.2073 41.7927L36.4146 60H22.9692L11.4846 48.5154L0 60V43.8095V11.4846Z" className="navLogo"/>
                    </svg>
                </Link>
                <div className="navElements">
                    <div className="navElement">
                        <div className="navElementTextAlign">
                            <a href="/#home" onMouseEnter={() => enterChange(changeStyle1)} onMouseLeave={() => exitChange(changeStyle1)}>Home</a>
                        </div>
                        <div className={style1 ? "navElementHover" : "navElementHover navElementHoverEffect"}></div>
                    </div>
                    <div className="navElement">
                        <div className="navElementTextAlign">
                            <a href="/#about" onMouseEnter={() => enterChange(changeStyle2)} onMouseLeave={() => exitChange(changeStyle2)}>About</a>
                        </div>
                        <div className={style2 ? "navElementHover" : "navElementHover navElementHoverEffect"}></div>
                    </div>
                    <div className="navElement">
                        <div className="navElementTextAlign">
                            <a href="/#skills" onMouseEnter={() => enterChange(changeStyle3)} onMouseLeave={() => exitChange(changeStyle3)}>Skills</a>
                        </div>
                        <div className={style3 ? "navElementHover" : "navElementHover navElementHoverEffect"}></div>
                    </div>
                    <Link to="/contact" className="navContactUs">Contact Us</Link>
                </div>
                {props.menuState ? <i className="fa-solid fa-bars navDropdownIcons" onClick={props.changeMenu}></i> : <i className="fa-solid fa-x navDropdownIcons" onClick={props.changeMenu}></i>}
            </nav>
            <div className="navDropdownAlign">
                <div className={props.menuState ? "navDropdown" : "navDropdown navDropdownOpen"}>
                    <div className="navDropdownElementContainer navDropdownElementContainer1">
                        <a href="/#home" className="navDropdownElementEffect" onClick={props.changeMenu}>
                            <p>Home</p>
                        </a>
                    </div>
                    <div className="navDropdownElementContainer">
                        <a href="/#about" className="navDropdownElementEffect" onClick={props.changeMenu}>
                            <p>About</p>
                        </a>
                    </div>
                    <div className="navDropdownElementContainer">
                        <a href="/#skills" className="navDropdownElementEffect" onClick={props.changeMenu}>
                            <p>Skills</p>
                        </a>
                    </div>
                    <div className="navDropdownContact">
                        <Link to="/contact" className="navDropdownContactButton" onClick={props.changeMenu}>Contact Us</Link>
                    </div>
                </div>
            </div>
        </>
    )
}