import { useState } from 'react'


function About() {
    //const [state, setState] = useState(initialValue);
    const [isEmailVisible, setIsEmailVisible] = useState(false);

    function showEmail() {
        console.log("Clicking show email")
        setIsEmailVisible(true)
    }

    function hideEmail() {
        console.log("Clicking hide email")
        setIsEmailVisible(false)
    }

    return (
        <div className='text-center'>
            <h1>About Page</h1>

            {
                isEmailVisible == true
                    ? <p className='fs-4 text-secondary'>leopac84@icloud.com</p>
                    : <p>Click the button bellow to see my email address</p>
            }

            <button className='btn btn-dark me-4' onClick={showEmail}>Show Email</button>
            <button className='btn btn-secondary' onClick={hideEmail}>Hide Email</button>
        </div>
    )
}

export default About;