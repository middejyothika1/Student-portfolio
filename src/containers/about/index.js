import React from "react";
import Pageheader from "../../components/pageheadercontent";
 import {BsInfoCircleFill} from "react-icons/bs";
 import "./style.css";
 const personaldetails=[
  
    {
        label:"Name",
        value:"Midde Jyothika"
    },
    {
        label:"Age",
        value:"22"
    },
    {
        label:"Address",
        value:"Bengaluru"
    },
    {
        label:"Email",
        value:"middejyothika451@gmail.com"
    },
    {
        label:"MoboleNumber",
        value:"+91 8125208291"
    },
 ]
 const jobsummary="I am a passionate and enthusiastic React.js developer with a strong foundation in front-end development and modern JavaScript frameworks. I specialize in building interactive and responsive user interfaces using React.js, ensuring an intuitive and seamless user experience. As a fresher, I bring a strong willingness to learn, adaptability to new challenges, and a commitment to delivering high-quality solutions."
 

const About=()=>{
    return(
        <section id="about" className="about">
            <Pageheader
            headerText="About Me"
            icon={<BsInfoCircleFill size={40}/>}
            />
            
            <div className="about-content">
                <h3>React Js Developer</h3>
                <p>{jobsummary}</p>
                <h3>Personal Information</h3>
            </div>
            <ul>
                {
                    personaldetails.map((item,i)=>(
                        <li key={i}>
                            <span>{item.label}</span>
                            <span>{item.value}</span>
                        </li>
                    ))
                }
            </ul>
            
                
            

        </section>
        
    )
}
export default About