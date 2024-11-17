import React from "react";
import "./style.css"
import { useNavigate } from "react-router-dom";

const Home=()=>{
    const navigate=useNavigate();
    console.log(navigate);
    const handlenavigatecontctmepage=()=>{
        navigate("/contact")

    }
    return(
        <section id="home" className="home">
            <div className="home_text-wrapper">
                <h1>
                    Hello, I'am Jyothika
                    <br/>
                    React Js Developer

                </h1>
            </div>
            
            <div className="home_contact-me">
                <button onClick={handlenavigatecontctmepage}>Hire Me</button>
            </div>
        </section>
    )
}
export default Home