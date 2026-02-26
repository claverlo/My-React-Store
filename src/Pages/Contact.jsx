import { IconPhoneCall, IconMailFast, IconAddressBook } from '@tabler/icons-react';

function Contact() {
    return (
        <div className="position-relative min-vh-100 pt-5 pb-5">

            <img
                src="https://static.vecteezy.com/system/resources/previews/022/252/108/non_2x/portrait-of-a-male-gamer-playing-online-games-on-a-computer-cyber-sport-concept-generative-ai-free-photo.jpg"
                className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                alt=""
            />

            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

            <div className="container position-relative d-flex justify-content-center align-items-center py-5">

                <div className="bg-white rounded-4 shadow-lg p-5 text-center" style={{ maxWidth: "600px", width: "100%" }}>

                    <h1 className="display-4 fw-bold mb-4">
                        Contact Us
                    </h1>

                    <div className="fs-5 fw-semibold">

                        <p className="mb-3">
                            Owner: Leomar Claveria
                        </p>

                        <p className="mb-3">
                            <IconPhoneCall stroke={2} size={22} className="me-2" />
                            Phone: 1-800-555-1234
                        </p>

                        <p className="mb-3">
                            <IconMailFast stroke={2} size={22} className="me-2" />
                            Email: support@primegamingsupply.com
                        </p>

                        <p className="mb-0">
                            <IconAddressBook stroke={2} size={22} className="me-2" />
                            Address: 123 Gaming Blvd, Suite 400, San Diego, CA 92101
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Contact;