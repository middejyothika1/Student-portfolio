import React from "react";
import Pageheader from "../../components/pageheadercontent";
import { BsInfoCircleFill } from "react-icons/bs";
import "./style.css"

const skillsdata = [
    {
        label: "FRONT END",
        data: [
            { skillsName: "HTML", percentage: 90 },
            { skillsName: "CSS", percentage: 90 },
            { skillsName: "JAVASCRIPT", percentage: 80 },
            { skillsName: "BOOTSTRAP", percentage: 90 },
            { skillsName: "REACT JS", percentage: 80 },
            { skillsName: "REDUX", percentage: 80 },
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <Pageheader
                headerText="My Skills"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="skills_content-wrapper">
                {skillsdata.map((item, i) => (
                    <div key={i} className="skills_content-wrapper_inner-content">
                        <h3 className="category-text">{item.label}</h3>
                        <div>
                            {item.data.map((skillItem, j) => (
                                <div className="progress-wrapper" key={j}>
                                    <p>{skillItem.skillsName}</p>
                                    <h2>{skillItem.percentage}%</h2>
                                    <div className="progress-bar">
                                        <div
                                            className="progress-fill"
                                            style={{ width: `${skillItem.percentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;


