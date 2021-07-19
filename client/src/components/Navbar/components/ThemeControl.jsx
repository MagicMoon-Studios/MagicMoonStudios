import { useEffect } from 'react';
import './ThemeControl.css'
const ThemeControl = () => {
    const theme_dark = () => {
        const themecheck = document.getElementById('switch');
        const starts=document.getElementById('stars');
        const sun=document.getElementById('sun');
        const dayNight=document.getElementById('day-night');
        const moon=document.getElementById('moon');
        const toggleWrapper=document.getElementById('toggle-wrapper')
        const localthemecon = localStorage.getItem('theme');
        themecheck.addEventListener('click', () => {
          document.body.classList.toggle('dark-theme');
          starts.classList.toggle('active');
          sun.classList.toggle('active');
          dayNight.classList.toggle('active');
          moon.classList.toggle('active');
          toggleWrapper.classList.toggle('active');
          if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'true');
          } else {
            localStorage.setItem('theme', 'false');
          }
        })
        if (localthemecon === 'true') {
          document.body.classList.add('dark-theme');
          starts.classList.add('active');
          sun.classList.add('active');
          dayNight.classList.add('active');
          moon.classList.add('active');
          toggleWrapper.classList.add('active');
        } else {
          document.body.classList.remove('dark-theme');
          starts.classList.remove('active');
          sun.classList.remove('active');
          dayNight.classList.remove('active');
          moon.classList.remove('active');
          toggleWrapper.classList.remove('active');
        }
    
      }
    useEffect(()=>{
        theme_dark()
    },[])
    return (
        <>
            <div className="">
                <label >
                    <input type="checkbox" id="switch" />
                    <div className="toggle-wrapper" id="toggle-wrapper">
                        <div className="day-night" id="day-night"></div>
                        <div className="tree-left">
                            <div className="tree"></div>
                            <div className="trunk">
                                <div className="branch"></div>
                                <div className="branch"></div>
                            </div>
                        </div>
                        <div className="tree-right">
                            <div className="tree-back">
                                <div className="trunk"></div>
                            </div>
                            <div className="tree-front">
                                <div className="trunk"></div>
                            </div>
                        </div>
                        <div className="moon" id="moon"></div>
                        <div className="stars" id="stars">
                            <div className="star big-star">
                                <div className="vertical"></div>
                                <div className="horizontal"></div>
                            </div>
                            <div className="star small-star">
                                <div className="vertical"></div>
                                <div className="horizontal"></div>
                            </div>
                        </div>
                        <div className="sun" id="sun"></div>
                        <div className="hills">
                            <div className="hill-left"></div>
                            <div className="hill-right"></div>
                        </div>
                    </div>
                </label>
            </div>
        </>
    )
}

export default ThemeControl
