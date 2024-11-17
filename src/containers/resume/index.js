import React from "react";
import Pageheader from "../../components/pageheadercontent";
import { BsInfoCircleFill } from "react-icons/bs";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./style.css";

const data = {
    experience: [
        {
            title: "ReactJs developer",
            subtitle: "London, UK",
            description: "Web development, Database, Backend development"
        },
        {
            title: "Frontend Developer",
            subtitle: "New York, USA",
            description: "UI/UX design, Performance optimization"
        },
        {
            title: "Software Engineer",
            subtitle: "Berlin, Germany",
            description: "Agile development, Cloud services"
        },
    ],
    education: [
        {
            title: "Secondary School",
            subTitle: "KGBV School",
            description: "10th Grade"
        },
        {
            title: "Higher Secondary",
            subTitle: "RGUKT University",
            description: "12th Grade in MPC"
        },
        {
            title: "B.Tech",
            subTitle: "RGUKT University",
            description: "Electronics Communication Engineering"
        },
    ]
};

const Resume = () => {
    return (
        <section id="resume" className="resume">
            <Pageheader
                headerText="Resume"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="timeline-container">
                {/* Experience Section */}
                <div className="timeline_experience">
                    <h3 className="experience-headertest">Experience</h3>
                    <VerticalTimeline layout="1-column" lineColor="yellow">
                        {data.experience.map((item, i) => (
                            <VerticalTimelineElement
                                key={i}
                                className="timeline-item"
                                contentStyle={{ background: "#f4f4f4", color: "#000" }}
                                contentArrowStyle={{ borderRight: "7px solid #f4f4f4" }}
                                iconStyle={{ background: "yellow", color: "#fff" }}
                            >
                                <div className="title-wrapper">
                                    <h3 className="vertical-timeline-element-title">{item.title}</h3>
                                    <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>

                {/* Education Section */}
                <div className="timeline_education">
                    <h3 className="education-headertest">Education</h3>
                    <VerticalTimeline layout="1-column" lineColor="yellow">
                        {data.education.map((item, i) => (
                            <VerticalTimelineElement
                                key={i}
                                className="timeline-item"
                                contentStyle={{ background: "#f4f4f4", color: "#000" }}
                                contentArrowStyle={{ borderRight: "7px solid #f4f4f4" }}
                                iconStyle={{ background: "yellow", color: "#fff" }}
                            >
                                <div className="title-wrapper">
                                    <h3 className="vertical-timeline-element-title">{item.title}</h3>
                                    <h4 className="vertical-timeline-element-subtitle">{item.subTitle}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    );
};

export default Resume;
