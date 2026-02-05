import { useState } from "react";
import myGif from "./assets/dudu-rose-bubu-dudu-gift.gif";
import yesImage from "./assets/tp.jpeg";

function App() {
  const [noPosition, setNoPosition] = useState("normal");
  const [yesClicked, setYesClicked] = useState(false);

  const handleNoClick = () => {
  if (noPosition === "normal") {
    setNoPosition("topRight");
  } else if (noPosition === "topRight") {
    setNoPosition("bottomLeft");
  } else if (noPosition === "bottomLeft") {
    setNoPosition("topLeft");
  } else if (noPosition === "topLeft") {
    setNoPosition("bottomRight");
  } else if (noPosition === "bottomRight") {
    setNoPosition("behindYes");
  }
};


  const handleYesClick = () => {
    setYesClicked(true);
  };

  return (
    <div className="container">
      {/* 🎉 Golden confetti after YES */}
      {yesClicked && <Confetti />}

      {!yesClicked ? (
        <>
          <img src={myGif} alt="GIF" className="center-image" />

          <h2 className="text">Will u be my valentine?</h2>

          <div className="button-area">
            <button className="btn yes" onClick={handleYesClick}>
              Yes
            </button>

            <button
              className={`btn no ${noPosition}`}
              onClick={handleNoClick}
            >
              No
            </button>
          </div>
        </>
      ) : (
        <>
          <img src={yesImage} alt="Love" className="center-image" />

          <h2 className="text success-text">
            HEHE I Knew it ! 💖
          </h2>

          <p className="success-para">
            I really love you so much papa ❤️  
            You don’t know how much I adore you.  
            I may not express everything perfectly,  
            but you are the one girl I love unconditionally.  
            I saw a reel and got this idea, so I made this for you 😁
          </p>
        </>
      )}
    </div>
  );
}

/* 🎉 Golden Confetti Component */
function Confetti() {
  return (
    <div className="confetti-container">
      {Array.from({ length: 40 }).map((_, i) => (
        <span
          key={i}
          className="confetti"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${2 + Math.random() * 3}s`,
            animationDelay: `${Math.random() * 2}s`
          }}
        ></span>
      ))}
    </div>
  );
}

export default App;
