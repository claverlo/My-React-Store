import background from "../Images/background.jpg";
import video from "../Images/mainvideo.mp4";
import nikeVideo from "../Images/nikeshoe.mp4";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

function Home() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const videoRef = useRef(null);

  const videos = [nikeVideo, video];

  function next() {
    setIndex((prev) => (prev + 1) % videos.length);
  }

  function prev() {
    setIndex((prev) => (prev - 1 + videos.length) % videos.length);
  }

  const grid = [
    { img: "src/Images/10.avif", label: "SHOES" },
    { img: "src/Images/1.avif", label: "JERSEYS" },
    { img: "src/Images/15.avif", label: "COLLECTIBLES" },
    { img: "src/Images/14.avif", label: "SALES" },
    { img: "src/Images/19.avif", label: "ACCESSORIES" },
    { img: "src/Images/hat1.avif", label: "HATS" }
  ];

  return (
    <div style={{ background: "#e1d9d9" }}>

      <style>
        {`
          @keyframes blinkRed {
            0% { opacity: 1; }
            50% { opacity: 0.4; }
            100% { opacity: 1; }
          }

          .blink-btn {
            animation: blinkRed 3s infinite;
          }

          .blink-img {
            cursor: pointer;
            transition: transform 0.3s, filter 0.3s;
            animation: blinkRed 3s infinite;
          }

          .blink-img:hover {
            transform: scale(1.08);
            filter: brightness(1.2);
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
          position: "relative",
          marginBottom: "2px"
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
              fontSize: ".8rem",
              fontWeight: "700",
              borderRadius: "12px",
              background: "red",
              color: "white"
            }}
            onClick={() => navigate("/catalog")}
          >
            <div>SHOP NOW</div>
            <div style={{ fontSize: "1rem", fontWeight: "500" }}>
              Use code "COHORT65" for 65% OFF your first order
            </div>
          </button>
        </div>
      </div>

      <div
        style={{
          height: "100vh",
          position: "relative",
          marginBottom: "1px"
        }}
      >
        <button className="arrow left" onClick={prev}>‹</button>
        <button className="arrow right" onClick={next}>›</button>

        <video
          ref={videoRef}
          key={index}
          src={videos[index]}
          autoPlay
          muted={false}
          playsInline
          onLoadedMetadata={() => {
            if (videoRef.current) {
              videoRef.current.volume = volume;
            }
          }}
          onEnded={next}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => {
            const val = parseFloat(e.target.value);
            setVolume(val);
            if (videoRef.current) {
              videoRef.current.volume = val;
            }
          }}
          style={{
            position: "absolute",
            bottom: "20px",
            right: "80px",
            width: "120px",
            zIndex: 3
          }}
        />
      </div>

      <div
        style={{
          background: "#fff",
          padding: "40px 20px",
          marginBottom: "40px"
        }}
      >
        <div
          style={{
            width: "100%",
            padding: "0 20px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px"
          }}
        >
          {grid.map((item, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                height: "180px"
              }}
              onClick={() => navigate(`/catalog?category=${item.label === "JERSEYS" ? "Jersey" : item.label}`)}
            >
              <img
                src={item.img}
                className="blink-img"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "2px"
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "8px",
                  left: "50%",
                  transform: "translateX(-80%) scale(0.85)",
                  color: "white",
                  fontWeight: "700",
                  background: "rgba(0,0,0,0.7)",
                  padding: "1px 10px",
                  borderRadius: "1px",
                  fontSize: "0.9rem"
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Home;