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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="lightgrey" fill-opacity="1" d="M0,96L48,122.7C96,149,192,203,288,202.7C384,203,480,149,576,149.3C672,149,768,203,864,197.3C960,192,1056,128,1152,90.7C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
        

        <div className="curved">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,96L48,122.7C96,149,192,203,288,202.7C384,203,480,149,576,149.3C672,149,768,203,864,197.3C960,192,1056,128,1152,90.7C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
        </div>
        )
    }
}

export default LandingPage;