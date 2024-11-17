import React, { useState } from "react";
import Pageheader from "../../components/pageheadercontent";
import { BsInfoCircleFill } from "react-icons/bs";
import "./style.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", phone: "" });
    };

    return (
        <section id="contact" className="contact">
            <Pageheader headerText="Contact" icon={<BsInfoCircleFill size={40} />} />
            <div className="contact_content">
                <h3 className="contact_content_headertext">Let's Talk</h3>
                <form className="contact_form" onSubmit={handleSubmit}>
                    <div className="form_group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="form_group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="form_group">
                        <label htmlFor="phone">Phone:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>
                    <button type="submit" className="submit_button">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
