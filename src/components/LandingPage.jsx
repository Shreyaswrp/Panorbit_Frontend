import React from "react";
import "../style/landingpage.css";

class LandingPage extends React.Component
{
    render()
    {
        return (
        <div className="Container">

        <div className="blue-bg"></div>
        
        <div className="upper-svg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,64L48,96C96,128,192,192,288,197.3C384,203,480,149,576,154.7C672,160,768,224,864,234.7C960,245,1056,203,1152,154.7C1248,107,1344,53,1392,26.7L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </div>
        
        <div className="curved">
        <h1></h1>
        <p></p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="blue" fill-opacity="1" d="M0,64L48,96C96,128,192,192,288,197.3C384,203,480,149,576,154.7C672,160,768,224,864,234.7C960,245,1056,203,1152,154.7C1248,107,1344,53,1392,26.7L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>

        </div>
        )
    }
}

export default LandingPage;