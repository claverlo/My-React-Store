import background from "../Images/aboutus.jpg";

function About() {
return (
    <div className="container py-5">

    <div className="row align-items-center">

        <div className="col-md-7">

        <h1 className="fw-bold mb-4">Why Shop With Us?</h1>

        <hr />

            <h4 className="fw-bold mt-4">Why Shop With Us?</h4>
        <p>
            At Hoops Authority, we offer a wide selection of premium basketball gear including shoes, jerseys, and accessories inspired by the NBA. Our goal is to bring style, performance, and authenticity together in one place so you can represent the game on and off the court. Every product we offer is carefully selected to match the energy of basketball culture.
        </p>

        <hr />

        <h4 className="fw-bold mt-4">Customer Experience</h4>
        <p>
            We are committed to making your experience simple and smooth. From fast shipping to responsive support, we treat every customer like part of the Hoops Authority family. Whether you're a casual fan or a serious hooper, we make sure you get what you need without the hassle.
        </p>

        <hr />

        <h4 className="fw-bold mt-4">Reliable Quality</h4>
        <p>
            We stand behind everything we sell. From durable basketball shoes to high-quality jerseys and accessories, our products are built to last. Hoops Authority ensures you get gear that looks good and performs even better, whether you're playing or just repping your favorite team.
        </p>

        <hr />

        <h4 className="fw-bold mt-4">Our Location</h4>
        <p>
        <a 
        href="https://www.google.com/maps?q=San+Diego+Global+Knowledge+University+San+Diego+CA"
        target="_blank"
        rel="noopener noreferrer"
            >
        1095 K St Suite B, San Diego, CA 92101
        </a>
        </p>

        </div>

        <div className="col-md-5">
        <img
            src={background}
            alt="about"
            className="img-fluid rounded shadow"
        />
        </div>

    </div>

    </div>
);
}

export default About;