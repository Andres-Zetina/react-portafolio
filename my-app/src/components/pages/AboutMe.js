import React from "react";
import profileImg from '../../images/profileImg.jpeg'
import Typed from 'react-typed';

export default function AboutMe(){
    

    return (
        <div>
            <style type='text/css'>{aboutcss}</style>
            <div className="about-container">
                <h1 className="text-center name-header">
                    <Typed strings={['Andres Zetina']} typeSpeed={60} backSpeed={50} loop={false} showCursor={false}  />
                </h1>
                <br/>
                <div className="content-container">
                    <div className="text-container">
                        <h4 className="about-text">
                            As a highly motivated web developer, I'm excited to expand my knowledge and technical skills. Fluent in both English and Spanish, I am a versatile communicator who can collaborate effectively with team members from different backgrounds.
                            <br/>
                            <br/>
                            I recently completed the Georgia Tech Full Stack Web Development Bootcamp, where I gained hands-on experience building full-stack web applications. Throughout the program, I was able to work with my team to deliver high-quality apps within the time constraints.
                            <br/>
                            <br/>
                            I am looking forward to applying my skills and experience to take on new challenges in the web development field.
                        </h4>
                    </div>
                    <div className="image-container">
                        <img src={profileImg} alt="profile image" className="profile-image"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const aboutcss = `
.about-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.name-header {
    margin-top: px;
    font-size: 75px;
}

.content-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    margin-top: 10px;
}

.text-container {
    width: 80%;
    margin-right: 100px;
}

.about-text {
    text-align: left;
    margin: 0;
}

.image-container {
    width: 35%;
}

.profile-image {
    width: 100%;
}
`
