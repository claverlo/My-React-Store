function Home() {
  return (
    <div
      className="d-flex justify-content-center text-white position-relative"
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/previews/022/252/108/non_2x/portrait-of-a-male-gamer-playing-online-games-on-a-computer-cyber-sport-concept-generative-ai-free-photo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <h1
        className="display-3 fw-bold position-absolute"
        style={{ top: "2%" }}
      >
        Welcome Gamers 🎮
      </h1>
    </div>
  );
}

export default Home;