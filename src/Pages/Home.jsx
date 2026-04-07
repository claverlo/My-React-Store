import background from "../Images/background.jpg";
import video from "../Images/mainvideo.mp4";
import nikeVideo from "../Images/nikeshoe.mp4";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const videos = [nikeVideo, video];

  function next() {
    setIndex((prev) => (prev + 1) % videos.length);
  }

  function prev() {
    setIndex((prev) => (prev - 1 + videos.length) % videos.length);
  }

  return (
    <div>

      <style>
        {`
          @keyframes blinkRed {
            0% { background-color: red; color: white; }
            50% { background-color: darkred; color: white; }
            100% { background-color: red; color: white; }
          }

          .blink-btn {
            animation: blinkRed 1s infinite;
          }

          .arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            font-size: 3rem;
            color: white;
            background: rgba(0,0,0,0.5);
            border: none;
            cursor: pointer;
            padding: 10px 20px;
            z-index: 2;
          }

          .left { left: 20px; }
          .right { right: 20px; }
        `}
      </style>

      <div
        style={{
          height: "100vh",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)"
          }}
        >
          <button
            className="btn blink-btn"
            style={{
              padding: "20px 60px",
              fontSize: "2rem",
              fontWeight: "700",
              borderRadius: "12px",
              textAlign: "center",
              lineHeight: "1.3"
            }}
            onClick={() => navigate("/catalog")}
          >
            <div>SHOP NOW</div>
            <div style={{ fontSize: "1rem", fontWeight: "500" }}>
              (Use code "COHORT65" for 65% OFF your first order)
            </div>
          </button>
        </div>
      </div>

      <div style={{ height: "100vh", position: "relative" }}>

        <button className="arrow left" onClick={prev}>‹</button>
        <button className="arrow right" onClick={next}>›</button>

        <video
          key={index}
          src={videos[index]}
          autoPlay
          muted
          playsInline
          onEnded={next}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />

      </div>

    </div>
  );
}

export default Home;