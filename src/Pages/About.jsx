import { useState } from 'react'

function About() {

    const [isEmailVisible, setIsEmailVisible] = useState(false);

    function showEmail() {
        setIsEmailVisible(true)
    }

    function hideEmail() {
        setIsEmailVisible(false)
    }

    return (
        <div className="position-relative min-vh-100 pt-5 pb-5">

            <img
                src="https://static.vecteezy.com/system/resources/previews/022/252/108/non_2x/portrait-of-a-male-gamer-playing-online-games-on-a-computer-cyber-sport-concept-generative-ai-free-photo.jpg"
                className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                alt=""
            />

            <div className="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-75"></div>

            <div className="container position-relative text-center">

                <h1>About Page</h1>

                {
                    isEmailVisible
                        ? <p className='fs-4 text-secondary'>leopac84@icloud.com</p>
                        : <p>Click the button below to see my email address</p>
                }

                <button className='btn btn-dark me-4' onClick={showEmail}>
                    Show Email
                </button>

                <button className='btn btn-secondary' onClick={hideEmail}>
                    Hide Email
                </button>

            </div>
        </div>
    )
}

export default About;