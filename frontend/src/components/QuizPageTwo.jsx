import React, { useState,useEffect,useRef } from "react";
import { FaSearch, FaRegBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import './DashboardPage.css'; 
const BANNER_BG_IMG = '/static/Frame (2).png';       
const WELCOME_BEAR_IMG = '/static/beargif.gif';        
const CONGRATS_BADGE_IMG = '/static/congrats.png';   
const NOUNS_BG_IMG = '/static/nouns (2).png';    
const STATEMENTS_BG_IMG = '/static/statement.png'; 
const SPELLINGS_BG_IMG = '/static/spelling.png';   
const COMPREHENSION_BG_IMG = '/static/comp.png';   
const FOOTER_IMG = '/static/Group 21.png';      
const USER_AVATAR_IMG = '/static/avatar1.png';    


const SearchIcon = FaSearch;
const BellIcon = FaRegBell;
const ArrowDownIcon = IoIosArrowDown;
const OptionsIcon = () => <span>[...]</span>; 
const QuizPageTwo = () => {
  const navigate = useNavigate();
  const [droppedWords, setDroppedWords] = useState({
    people: [],
    places: [],
    things: [],
  });
  
  const [isFirstCorrect, setIsFirstCorrect] = useState(true);
  const [isFirstWrong, setIsFirstWrong] = useState(true);
  const audioRef = useRef(null);

  const playDropAudio = (src) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    audioRef.current = new Audio(src);
    audioRef.current.play();
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/logout');
  };
  const buttonStyle = {
    background: 'linear-gradient(to right,rgb(37, 188, 202),rgb(135, 239, 241))', // red to pink
    color: '#fff',
    padding: '10px 24px',
    fontWeight: '600',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
  };

  const handleMouseOver = (e) => {
    e.target.style.background = 'linear-gradient(to right,rgb(37, 188, 202),rgb(135, 239, 241))';
  };

  const handleMouseOut = (e) => {
    e.target.style.background = 'linear-gradient(to right,rgb(46, 148, 167),rgb(114, 215, 224))';
  };



  
  const correctAnswers = {
    people: ["teacher", "girl", "bird"],
    places: ["river", "castle", "playground"],
    things: ["table", "ball", "train", "flower"],
  };
  const wordBank = [
    "table", "river", "ball", "teacher", "castle",
    "train", "girl", "playground", "flower", "bird"
  ];

   const [username, setUsername] = useState('');
    
      useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
          setUsername(storedUsername);
        }
      }, []);
 
  
  
  // Pre-create audio objects
  const audioFiles = useRef({
    firstCorrect: new Audio("/static/firstcorrect.mp3"),
    wrongFirst: new Audio("/static/needhelp.mp3"),
    thirdCorrect: new Audio("/static/2-3correct1.mp3"),
    wrongThird: new Audio("/static/needhelp.mp3"),
    allCorrect: new Audio("/static/findall.mp3")
  });

  const playAudio = (audioKey) => {
    // Stop all audio files
    Object.values(audioFiles.current).forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });

    // Play the requested audio
    const audio = audioFiles.current[audioKey];
    if (audio) {
      audio.play();
    }
  };

  const handleClick = (word) => {
    setLastInteractionTime(Date.now());
    const isCorrect = correctAnswers.includes(word);
    
    // Only count the attempt if this word hasn't been selected before
    if (!selected[word]) {
      setAttemptCount(prev => prev + 1);
    }
    
    // Update the selected state
    setSelected((prev) => {
      if (prev[word]) return prev;
      const newSelected = { ...prev, [word]: isCorrect ? "correct" : "wrong" };
      
      // Count total correct answers so far
      const correctSelections = Object.values(newSelected).filter(result => result === "correct").length;
      
      // Handle audio based on attempt count and correctness
      if (attemptCount === 0) { // First attempt
        if (isCorrect) {
          playAudio('firstCorrect');
        } else {
          playAudio('wrongFirst');
        }
      } else if (attemptCount === 2) { // Third attempt
        if (isCorrect) {
          playAudio('thirdCorrect');
        } else {
          playAudio('wrongThird');
        }
      }
      
      // Play findall.mp3 if all 5 answers are correct
      if (correctSelections === 5) {
        playAudio('allCorrect');
      }
      
      return newSelected;
    });

    // Find the bear image element and update its src
    const bearImg = document.querySelector('.bear-img');
    if (bearImg) {
      bearImg.src = isCorrect ? '/static/polar bear face 1.gif' : '/static/polar bearface 2.gif';
      
      // Reset back to original bear image after 2 seconds
      setTimeout(() => {
        bearImg.src = '/static/bear.png';
      }, 2000);
    }
  };

  
  const getRemainingWords = () => {
    const used = new Set([
      ...droppedWords.people,
      ...droppedWords.places,
      ...droppedWords.things,
    ]);
    return wordBank.filter(word => !used.has(word));
  };

  const handleDrop = (category) => (e) => {
    e.preventDefault();
    const word = e.dataTransfer.getData("text/plain");

    setDroppedWords((prev) => {
      // Check if word is already in any category
      const isWordUsed = Object.values(prev).some((words) =>
        words.includes(word)
      );
      if (isWordUsed) return prev;

      // Check if the answer is correct for this category
      const isCorrect = correctAnswers[category].includes(word);

      // Change the bear image based on correct/wrong answer
      const bearImg = document.querySelector('.bear-img');
      if (bearImg) {
        bearImg.src = isCorrect ? '/static/polar bear face 1.gif' : '/static/polar bearface 2.gif';
        
        // Reset back to original bear image after 2 seconds
        setTimeout(() => {
          bearImg.src = '/static/bear.png';
        }, 2000);
      }

      // Play audio based on correct/wrong answer
      if (isCorrect && isFirstCorrect) {
        playDropAudio("/static/firstcorrect.mp3");
        setIsFirstCorrect(false);
      } else if (!isCorrect && isFirstWrong) {
        playDropAudio("/static/a.mp3");
        setIsFirstWrong(false);
      }

      const newDroppedWords = {
        ...prev,
        [category]: [...prev[category], word],
      };

      // Check if all words have been dropped
      const totalDroppedWords = Object.values(newDroppedWords).flat().length;
      if (totalDroppedWords === wordBank.length) {
        setTimeout(() => {
          playDropAudio("/static/next.mp3");
        }, 1000);
      }

      return newDroppedWords;
    });
  };

  const handleWordRemove = (category, word) => {
    setDroppedWords((prev) => {
      const updated = {
        ...prev,
        [category]: prev[category].filter((w) => w !== word),
      };
      return updated;
    });
  };

  const getWordColor = (word, category) => {
    return correctAnswers[category].includes(word) ? "green" : "red";
  };

  const remainingWords = getRemainingWords();
  return (
    <div
      style={{
        backgroundColor: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Comic Neue', sans-serif",
      }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Sen:wght@800&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Comic+Neue&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');

          .quiz-footer img {
            width: 100%;
            height: auto;
            display: block;
          }

          .quiz-content {
            flex: 1;
            position: relative;
            display: flex;
          }

          .header-tex{
            position: absolute;
            top: 0px;
            right: 20px;
            align-items: center;
            margin-top:5px;
            margin-right:0px;
            margin-left:0px;
            color: rgb(34, 123, 153);
            
          
          }
          .image-row {
            position: absolute;
            top: 0;
            left: 0;
          }

          .tree-img {
            width: 150px;
            height: 240px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 4;
            margin-left: 90px;
            padding-top: 245px;
          }

          .underscore-img {
            width: 230px;
            height: 330px;
            position: absolute;
            top: 0;
            left: 129px;
            z-index: 2;
            padding-top: 125px;
          }

          .header-text {
            position: absolute;
            top: 0px;
            right: 20px;
            align-items: center;
            margin-top:5px;
            margin-right:570px;
            margin-left:0px;
            
          
          }

          .profile-section {
            position: absolute;
            top: 10px;
            left: 10px;
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 10;
          }

          .profile-icon {
            margin-top:0px;
            height: 40px;
            margin-left:25px;
            object-fit: cover;
          }

          .username {
            font-family: 'Comic Neue', sans-serif;
            font-size: 16px;
            font-weight: bold;
            color: black;
          }

          .header-left {
            position: absolute;
            top: 45px;
            left: 10px;
            text-align: center;
            z-index: 10;
          }

          .header-icon {
            width: 80px;
            height: 70px;
            display: block;
            margin-left: 10px;
            padding-top:15px;
          }

           .home-link {
            font-family: 'Comic Neue', sans-serif;
            font-size: 20px;
            color: black;
            text-decoration: none;
            font-weight: bold;
            margin-top: 0px;
            margin-left:20px;
            display: block;
          }

          .bear-img {
            width: 390px;
            height: 375px;
            position: absolute;
            top: 0;
            left: 193px;
            z-index: 3;
            padding-top: 115px;
          }

          .quiz-task {
            margin-left:800px;
            margin-top: 15px;
            margin-right: 0px;
            text-align: left;
            max-width: 700px;
            font-size: 20px;
            font-family: 'Comic Neue', sans-serif;
          }

          .quiz-task strong {
            font-weight: bold;
          }

          .circle-highlight {
            border: 3px solid #FFBF00;
            border-radius: 40px;
            padding: 2px 6px;
            display: inline-block;
          }

          .word-box {
            margin-top: 30px;
            padding: 20px;
            background-color:white;
            border-radius: 30px;
            border: 2px solid grey;
            font-weight: bolder;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          }

          .word-options {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 30px;
            font-weight: bolder;
           font-family: 'Comic Neue', sans-serif;
          }

          .word-row {
            display: flex;
            gap: 30px;
            flex-wrap: wrap;
            justify-content: center;
          }

          .word-button {
            border-radius: 10px;
            border: 2px solid #333;
            background-color: white;
            border-color: rgb(192, 202, 209);
            cursor: pointer;
            font-size: 20px;
            font-weight: bolder;
            font-family: 'Comic Neue', sans-serif;
            transition: background-color 0.3s ease, color 0.3s ease;
          }

          .word-button.correct {
            color: black;
            font-size: 20px;
            font-weight: bolder;
            font-family: 'Comic Neue', sans-serif;
            border-color: #4caf50;
          }

          .word-button.wrong {
            color: black;
            font-size: 20px;
            font-weight: bolder;
            font-family: 'Comic Neue', sans-serif;
            border-color:rgba(240, 44, 14, 0.85);
          }

          .quiz-header {
            position: relative;
            width: 100%;
            height: 25vh;
            overflow: hidden;
            display: flex;
            align-items: center;
          }

           .header-bg {
            padding-top: 35px;
            width: 100%;
            height: 15vh;
            object-fit: cover;
            display: block;
          }

         .group-icon {
            position: absolute;
            top: 60px;
            right: 40px;
            width: 40vh;
            height: auto;
            z-index: 5;
          }
            .previous-button {
            font-family: 'Sen', sans-serif;
            font-weight: 800;
            font-size: 14px;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 6px;
            border:2px solid rgb(19, 150, 194);
            transition: background-color 0.3s ease;
          background-color: rgb(249, 250, 250);
            margin-top: 0;
            margin-bottom:0px;
          }
          .next-button {
            font-family: 'Sen', sans-serif;
            font-weight: 800;
            color: white;
            font-size: 15px;
            background-color: rgb(118, 207, 236);
            border: rgb(118, 207, 236);
            padding: 10px 25px;
            margin-top: 50px;
            margin-left: 90px;
            cursor: pointer;
            border-radius: 6px;
            transition: background-color 0.3s ease;
          }
             .header-actions1 {
  position: absolute;
  top: 0;
  left:700px;
  right: 0;
  height: 90%;
  display: flex;

  gap: 0.5rem;
  padding: 1rem;
  z-index: 2;
}
.button-wrapper{
margin-top:0px;
padding-top:0px;
}
.user-info {
    display: flex;
   
    gap: 0.5rem;
  }
  
  .user-avatar {
    width: 32px;
    height: 32px;
    border-radius: 9999px;
    object-fit: cover;
  }
  
  .user-name {
   font-size: 0.95rem; font-weight: 900; color: #2d3748;
  }
  
  .icon-button {
    background: transparent;
    border: none;
    cursor: pointer;
    color: black;
  }
  
  .icon-button.small {
    padding: 0 4px;
  }
  

          .header-text {
           
            margin-bottom: 0px;
            color: rgb(34, 123, 153);
          }

          .next-button:hover {
            background-color: #0AAAE1;
          }
        `}
      </style>

      <div className="profile-section">
        <img src="young.png" alt="Profile" className="profile-icon" />
        
      </div>

      <div className="header-text"><img src="nounsheader.png" alt=""></img>
      <div className="header-actions1">
    <button className="icon-button"><SearchIcon /></button>
    <button className="icon-button"><BellIcon /></button>
    
    <div className="user-info">
    <button
      style={buttonStyle}
      onClick={handleLogout}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      Logout
    </button>
      <img src={USER_AVATAR_IMG} alt="User Avatar" className="user-avatar" />
      <span className="user-name">{username.toUpperCase() || "Guest"}</span>
      <button className="icon-button small"><ArrowDownIcon /></button>
    </div>
  </div>
      
      </div>
      
      <header className="quiz-header">
        <div className="header-left">
          <img src="igloo.png" alt="Igloo" className="header-icon" />
          <a href="/nouns" className="home-link">Home</a>
        </div>
        <img src="Frame.jpg" alt="Header Background" className="header-bg" />
        <img src="Q2.png" alt="Overlay Icon" className="group-icon" />
      </header>

      <main className="quiz-content">
        <div className="image-row">
          <img src="tree_icon 2.png" alt="Tree" className="tree-img" />
          <img src="_.png" alt="Underscore" className="underscore-img" />
          <img src="bear.png" alt="Bear" className="bear-img" />
        </div>

        
         

         
        <div className="quiz-task">
          <p>
            2. Read the 10 words below. Drag each word into the correct box:{" "}
            <br />
            <strong>People, Places or Things.</strong> (The first one is done for you)

            {/* First Row */}
           
      {/* Drag Area */}
{getRemainingWords().length === 0 ? (
  <div style={{
    fontSize: '24px',
    fontWeight: 'bold',
    
    marginTop: '40px',
    marginLeft:'10px',
    fontFamily: "'Comic Neue', sans-serif",
    color: 'green'
  }}>
    You got all answers!!!
  </div>
) : (
  <>
    {/* Top Row of Words */}
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '25px',
      backgroundColor: 'white',
      borderRadius: '40px',
      padding: '6px',
      maxWidth:'400px',
      marginTop: '20px',
      flexWrap: 'wrap',
      border: '2px solid #ccc'
    }}>
      {getRemainingWords().slice(0, 5).map(word => (
        <div
          key={word}
          draggable
          onDragStart={(e) => e.dataTransfer.setData("text/plain", word)}
          style={{
            padding: "2px 2px",
            border: "2px solid #999",
            borderRadius: "10px",
            backgroundColor: "white",
            cursor: "grab",
            fontWeight: "bold",
            fontSize: "15px",
            fontFamily: "'Comic Neue', sans-serif"
          }}
        >
          {word}
        </div>
      ))}
    </div>

    {/* Bottom Row of Words */}
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '25px',
      backgroundColor: 'white',
      borderRadius: '40px',
      padding: '6px',
      marginTop: '10px',
      maxWidth:'400px',
      flexWrap: 'wrap',
      border: '2px solid #ccc'
    }}>
      {getRemainingWords().slice(5).map(word => (
        <div
          key={word}
          draggable
          onDragStart={(e) => e.dataTransfer.setData("text/plain", word)}
          style={{
            padding: "2px 2px",
            border: "2px solid #999",
            borderRadius: "10px",
            backgroundColor: "white",
            cursor: "grab",
            fontWeight: "bold",
            fontSize: "15px",
            fontFamily: "'Comic Neue', sans-serif"
          }}
        >
          {word}
        </div>
      ))}
    </div>

    {/* Drop Zones */}
    <div style={{
      display: 'flex',
      // justifyContent: 'center',
      gap: '10px',
      marginTop: '30px',
      marginLeft:'0px',
      flexWrap: 'wrap'
    }}>
      {/* People Card */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop("people")}
        style={{
          position: 'relative',
          backgroundColor: '#B5EBFB',
          padding: '20px',
          borderRadius: '20px',
          minWidth: '150px',
          minHeight: '120px',
          textAlign: 'center'
        }}>
        <div style={{
          position: 'absolute',
          top: '-15px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#00cccc',
          borderRadius: '25px',
          padding: '5px 15px',
          fontWeight: 'bold',
          fontFamily: "'Comic Neue', sans-serif",
          color: 'white',
          fontSize: "15px",
          boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
        }}>People</div>
        <div style={{
          fontFamily: "'Comic Neue', sans-serif",
          fontWeight: 'bold',
          color:'green',
          fontSize: "15px",
        }}>farmer</div>
        {droppedWords.people.map((word) => (
          <div
            key={word}
            style={{
              fontWeight: "bold",
              fontSize: "15px",
              fontFamily: "'Comic Neue', sans-serif",
              color: correctAnswers.people.includes(word) ? "green" : "red"
            }}
          >
            {word}
          </div>
        ))}
      </div>

      {/* Places Card */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop("places")}
        style={{
          position: 'relative',
          backgroundColor: '#E7E0EC',
          padding: '20px',
          borderRadius: '20px',
          minWidth: '150px',
          minHeight: '120px',
          textAlign: 'center'
        }}>
        <div style={{
          position: 'absolute',
          top: '-15px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#262161',
          borderRadius: '25px',
          padding: '5px 15px',
          fontWeight: 'bold',
          fontFamily: "'Comic Neue', sans-serif",
          color: 'white',
          fontSize: "15px",
          boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
        }}>Places</div>
        {droppedWords.places.map((word) => (
          <div
            key={word}
            style={{
              fontWeight: "bold",
              fontSize: "15px",
              fontFamily: "'Comic Neue', sans-serif",
              color: correctAnswers.places.includes(word) ? "green" : "red"
            }}
          >
            {word}
          </div>
        ))}
      </div>

      {/* Things Card */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop("things")}
        style={{
          position: 'relative',
          backgroundColor: '#FFF8DC',
          padding: '20px',
          borderRadius: '20px',
          minWidth: '150px',
          minHeight: '120px',
          textAlign: 'center'
        }}>
        <div style={{
          position: 'absolute',
          top: '-15px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#FFC24F',
          borderRadius: '25px',
          padding: '5px 15px',
          fontWeight: 'bold',
          fontFamily: "'Comic Neue', sans-serif",
          color: 'white',
          fontSize: "15px",
          boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
        }}>Things</div>
        {droppedWords.things.map((word) => (
          <div
            key={word}
            style={{
              fontWeight: "bold",
              fontSize: "15px",
              fontFamily: "'Comic Neue', sans-serif",
              color: correctAnswers.things.includes(word) ? "green" : "red"
            }}
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  </>
)}


          </p>

          <div className="button-wrapper">
            <button
              className="previous-button"
              onClick={() => (window.location.href = "/quizone")}
            >
              PREVIOUS QUESTION
            </button>
            <button
              className="next-button"
              onClick={() => (window.location.href = "/quizthree")}
            >
              NEXT QUESTION
            </button>
          </div>
        </div>
      </main>

      <footer className="quiz-footer">
        <img src="footer.png" alt="Footer" />
      </footer>
    </div>
  );
};

export default QuizPageTwo;
