import React from 'react';
import { SocialIcon } from 'react-social-icons';

const AboutPage = () => {
    return(
        <>
        <h1>About Me!</h1>
    <p>
        This project is built by Dhruv Parmar for learning purpose with the help of Linkedin Learning.
    </p>
    <p>
    The front end is developed using React. Nodejs, Expressjs, Postman & Firebase
    is used for backend, APIs and user authentication. Database used is MongoDB..
    Dummy blogs are added for testing purposes. More articles can be added by making changes
    in the code. Get the code here: <a href="https://github.com/dhruvv173/Blogs">Link</a>
    </p>
    <p>
        Connect with me here: <br/>
       <SocialIcon url="https://www.linkedin.com/in/dhruvparmar1703/" />
       <SocialIcon url="https://github.com/dhruvv173" />
       <SocialIcon url="mailto:dhruv.parmar_19@sakec.ac.in" />
    </p>
    </>
    )
}

export default AboutPage;
