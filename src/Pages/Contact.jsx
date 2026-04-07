import { IconPhone, IconMessageCircle, IconDeviceMobile, IconMail } from '@tabler/icons-react';
import background from "../Images/contact.png";

function Contact() {
    return (
        <div className="container-fluid p-0">

            
            <div className="w-100" style={{ height: "100vh" }}>
                <img
                    src={background}
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                    alt=""
                />
            </div>

        
            <div 
                className="py-5"
                style={{
                    backgroundImage: "url('/Images/net.png')",
                    backgroundRepeat: "repeat-y",
                    backgroundPosition: "left, right",
                    backgroundSize: "120px"
                }}
            >

                <div className="container d-flex justify-content-center">

                    <div className="bg-white rounded-4 shadow-lg p-5 w-100">

                    

                        <div className="row text-center mt-4">

                            <div className="col-md-3 mb-4">
                                <IconPhone size={60} stroke={2} className="mb-3" />
                                <h6 className="fw-bold">CALL US</h6>
                                <p>
                                    1-800-800-8000<br/>
                                    24/7 Support
                                </p>
                            </div>

                            <div className="col-md-3 mb-4">
                                <IconMessageCircle size={60} stroke={2} className="mb-3" />
                                <h6 className="fw-bold">CHAT WITH US</h6>
                                <p>
                                    Ask our chatbot or chat live.<br/>
                                    24/7 Support
                                </p>
                            </div>

                            <div className="col-md-3 mb-4">
                                <IconDeviceMobile size={60} stroke={2} className="mb-3" />
                                <h6 className="fw-bold">SOCIAL CHANNELS</h6>
                                <p>
                                    X - @HoopsAuthority<br/>
                                    Instagram - @HoopsAuthorityOfficial<br/>
                                    YouTube - @HoopsAuthority<br/>
                                    Facebook - Hoops Authority
                                </p>
                            </div>

                            <div className="col-md-3 mb-4">
                                <IconMail size={60} stroke={2} className="mb-3" />
                                <h6 className="fw-bold">EMAIL US</h6>
                                <p>
                                    support@hoopsauthority.com<br/>
                                    We usually reply within 24 hours
                                </p>
                            </div>

                        </div>

                        <hr className="mt-4 mb-4" />

                        <div className="text-center">
                            <h5 className="fw-bold mb-2">Our Location</h5>

                            <p className="mb-3">
                                <a 
                                    href="https://www.google.com/maps?q=1095+K+St+Suite+B+San+Diego+CA+92101"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-decoration-none fw-semibold"
                                >
                                    1095 K St Suite B, San Diego, CA 92101
                                </a>
                            </p>

                            <iframe
                                src="https://www.google.com/maps?q=1095+K+St+Suite+B+San+Diego+CA+92101&output=embed"
                                width="100%"
                                height="200"
                                style={{ border: 0, borderRadius: "12px" }}
                                loading="lazy"
                            ></iframe>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Contact;