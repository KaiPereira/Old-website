import './App.css';
import React from "react"
import {useEffect} from "react"
import {
  Routes,
  Route,
} from "react-router-dom";
import Nav from "./components/Nav"
import MainPage from "./components/MainPage"
import Footer from "./components/Footer"
import ContactPage from "./components/ContactPage"
import NotFound from "./components/NotFound"

function App() {
  function getDefaultMode() {
    let savedMode = true;
    if (localStorage.getItem('websiteMode')) {
      savedMode = JSON.parse(localStorage.getItem('websiteMode')).modeState;
    }
    return savedMode ? true : false;
  }

  const [paletteState, changePaletteState] = React.useState(localStorage.getItem('websiteColor') || "#00E5FF")
  const [modeState, changeModeState] = React.useState(getDefaultMode())
  const [menuState, changeMenuState] = React.useState(true)

  function changeMenu() {
    changeMenuState(!menuState)
  }

  function changeMode() {
    changeModeState(!modeState)
    let websiteModeJson = {
      modeState: !modeState
    }
    localStorage.setItem('websiteMode', JSON.stringify(websiteModeJson));
  }

  function changePallete(palette) {
    changePaletteState(palette)
    localStorage.setItem('websiteColor', palette);
  }

  useEffect(() => {
    const favicon = document.getElementById("favicon")

    if (paletteState === "#00E5FF") {
      favicon.href="FaviconBlue.png"
    } else if (paletteState === "#00FF66") {
      favicon.href="FaviconGreen.png"
    } else if (paletteState === "#FF0099") {
      favicon.href="FaviconMagenta.png"
    } else if (paletteState === "#FF003D") {
      favicon.href="FaviconRed.png"
    } else if (paletteState === "#DBFF00") {
      favicon.href="FaviconYellow.png"
    } else if (paletteState === "#FFB800") {
      favicon.href="FaviconOrange.png"
    } else {
      favicon.href="FaviconPurple.png"
    }
  })
  document.documentElement.style.setProperty('--main-color', paletteState)
  modeState ? document.documentElement.style.setProperty('--lighter-background', '#2b2b2b') : document.documentElement.style.setProperty('--lighter-background', '#fff')
  modeState ? document.documentElement.style.setProperty('--white-color', '#fff') : document.documentElement.style.setProperty('--white-color', '#4a4a4a')
  modeState ? document.documentElement.style.setProperty('--background-color', '#222') : document.documentElement.style.setProperty('--background-color', '#fff')
  !menuState ? document.body.style.overflow = "hidden" : document.body.style.overflow = "initial"
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Nav 
            menuState={menuState}
            changeMenu={changeMenu}
            modeState={modeState}
          />
          <MainPage 
            changeMode={changeMode}
            modeState={modeState}
            changePallete={changePallete}
            paletteState={paletteState}
          />
          <Footer 
            modeState={modeState}
          />
        </>
      } />
      <Route path="/contact" element={
        <>
          <Nav 
            menuState={menuState}
            changeMenu={changeMenu}
            modeState={modeState}
          />
          <ContactPage 
            changeMode={changeMode}
            modeState={modeState}
            changePallete={changePallete}
            paletteState={paletteState}
          />
          <Footer 
            modeState={modeState}
          />
        </>
      } />
      <Route path='*' element={
        <>
          <Nav 
            menuState={menuState}
            changeMenu={changeMenu}
            modeState={modeState}
          />
          <NotFound 
            changeMode={changeMode}
            modeState={modeState}
            changePallete={changePallete}
            paletteState={paletteState}
          />
          <Footer 
            modeState={modeState}
          />
        </>
      } />
    </Routes>
  );
}

export default App;
