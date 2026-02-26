import { useState } from 'react'

function About() {

    return (
        <div className="position-relative min-vh-100 pt-5 pb-5">

            <img
                src="https://static.vecteezy.com/system/resources/previews/022/252/108/non_2x/portrait-of-a-male-gamer-playing-online-games-on-a-computer-cyber-sport-concept-generative-ai-free-photo.jpg"
                className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                alt=""
            />

            <div className="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-50"></div>

            <div className="container position-relative d-flex justify-content-center">

                <div className="bg-white p-5 rounded shadow-lg text-center" style={{ maxWidth: "800px" }}>
                    
                    <h1 className="display-4 fw-bold mb-4">
                        About Prime Gaming Supply
                    </h1>

                    <div className="fs-5 fw-semibold">

                        <p className="mb-3">
                            Prime Gaming Supply was created with one goal in mind: delivering high quality gaming accessories that combine performance, style, and reliability.
                        </p>

                        <p className="mb-0">
                            In today’s competitive gaming environment, every detail matters. From the precision of your mouse to the comfort of your headset, the right equipment can completely change your experience. We believe gamers deserve tools that enhance their performance and give them confidence every time they sit down to play.
                        </p>

                        <p className="mt-3 mb-0">
                            Prime Gaming Supply is more than just an online store. It represents innovation, modern web development, and a commitment to user focused design.
                        </p>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default About;