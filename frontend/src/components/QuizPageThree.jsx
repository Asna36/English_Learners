import './QuizPageThree.css';
import React, { useState,useEffect,useRef } from "react";
import { FaSearch, FaRegBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import './DashboardPage.css';
const USER_AVATAR_IMG = '/avatar1.png';    

const SearchIcon = FaSearch;
const BellIcon = FaRegBell;
const ArrowDownIcon = IoIosArrowDown;
const OptionsIcon = () => <span>[...]</span>; 
const QuizPageThree = () => {
  const navigate = useNavigate();
  const [bearImage, setBearImage] = useState("/bear.png");

  const [username, setUsername] = useState('');
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const audioRef = useRef(null);

  const playAudio = (src) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    audioRef.current = new Audio(src);
    audioRef.current.play();
  };

  const sentences = [
    // Keep your sentences array exactly as it was
    { id: 'a', text: ['The', 'lion', 'roared', '.'], correctNouns: [1] },
    { id: 'b', text: ['The', 'baby', 'is', 'crying', '.'], correctNouns: [1] },
    { id: 'c', text: ['The', 'castle', 'is', 'on', 'hill', '.'], correctNouns: [1, 4] },
    { id: 'e', text: ['The', 'teacher', 'sat', 'on', 'a', 'bench', '.'], correctNouns: [1, 5] },
    { id: 'd', text: ['A', 'butterfly', 'landed', 'on', 'the', 'flower', '.'], correctNouns: [1, 5] },
    { id: 'f', text: ['My', 'cat', 'chased', 'a', 'mouse', 'in', 'the', 'garden', '.'], correctNouns: [1, 4, 7] },
    { id: 'g', text: ['Sarah', 'and', 'Tom', 'read', 'books', 'in', 'the', 'library', '.'], correctNouns: [0, 2, 4, 7] },
];

const [sentenceStates, setSentenceStates] = useState(
    sentences.map(sentence => ({
        id: sentence.id,
        selectedWords: Array(sentence.text.length).fill(false),
        isChecked: false,
        hasErrors: false
    }))
);

const toggleWordSelection = (sentenceIndex, wordIndex) => {
    if (sentenceStates[sentenceIndex].isChecked) return;
    setSentenceStates(prev => {
        const newStates = [...prev];
        newStates[sentenceIndex] = {
            ...newStates[sentenceIndex],
            selectedWords: [...newStates[sentenceIndex].selectedWords]
        };
        newStates[sentenceIndex].selectedWords[wordIndex] = !newStates[sentenceIndex].selectedWords[wordIndex];
        if (newStates[sentenceIndex].hasErrors) {
            newStates[sentenceIndex].hasErrors = false;
        }
        return newStates;
    });
};

const checkSingleSentence = (sentenceIndex) => {
    const sentenceData = sentences[sentenceIndex];
    const currentSelections = sentenceStates[sentenceIndex].selectedWords;
    let errorsFound = false;
    
    // Check for errors
    for (let i = 0; i < currentSelections.length; i++) {
      const isSelected = currentSelections[i];
      const shouldBeSelected = sentenceData.correctNouns.includes(i);
      if (isSelected !== shouldBeSelected) {
        errorsFound = true;
        break;
      }
    }

    // Update state and play appropriate audio
    setSentenceStates(prev => {
      const newStates = [...prev];
      newStates[sentenceIndex] = {
        ...newStates[sentenceIndex],
        isChecked: true,
        hasErrors: errorsFound
      };

      if (!errorsFound) {
        // Correct answer
        setBearImage("/polar bear face 1.gif");
        setTimeout(() => {
          setBearImage("/bear.png");
        }, 2000); // Show GIF for 2 seconds
        setCorrectCount(prevCount => {
          const newCount = prevCount + 1;
          if (newCount === 1) {
            playAudio("/2-3correct1.mp3");
          } else if (newCount === 2) {
            playAudio("/2-3correct2.mp3");
          } else if (newCount === 3) {
            playAudio("/2-3correct3.mp3");
          }
          
          // Check if all sentences are correct
          const allAnswered = newStates.every(state => state.isChecked);
          const allCorrect = newStates.every(state => state.isChecked && !state.hasErrors);
          if (allAnswered && allCorrect) {
            setTimeout(() => {
              playAudio("/findall.mp3");
              setTimeout(() => {
                playAudio("/next.mp3");
              }, 2000);
            }, 1000);
          }
          return newCount;
        });
      } else {
        // Wrong answer
        setBearImage("/polar bearface 2.gif");
  setTimeout(() => {
    setBearImage("/bear.png");
  }, 2000); // Show wrong image for 2 seconds

        setWrongCount(prevCount => {
          const newCount = prevCount + 1;
          if (newCount === 1) {
            playAudio("/a.mp3");
          } else if (newCount === 2) {
            playAudio("/c.mp3");
          } else if (newCount === 3) {
            playAudio("/b.mp3");
          }
          return newCount;
        });
      }

      return newStates;
    });
};

const resetSingleSentence = (sentenceIndex) => {
    setSentenceStates(prev => {
        const newStates = [...prev];
        newStates[sentenceIndex] = {
            ...newStates[sentenceIndex],
            selectedWords: Array(sentences[sentenceIndex].text.length).fill(false),
            isChecked: false,
            hasErrors: false
        };
        return newStates;
    });
};

const getWordStatus = (sentenceIndex, wordIndex) => {
    if (!sentenceStates[sentenceIndex].isChecked) return null;
    const isSelected = sentenceStates[sentenceIndex].selectedWords[wordIndex];
    const shouldBeSelected = sentences[sentenceIndex].correctNouns.includes(wordIndex);
    if (isSelected && shouldBeSelected) return "correct";
    if (isSelected && !shouldBeSelected) return "incorrect";
    if (!isSelected && shouldBeSelected) return "missed";
    return null;
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

useEffect(() => {
  const storedUsername = localStorage.getItem('username');
  if (storedUsername) {
    setUsername(storedUsername);
  }
}, []);

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
          padding-bottom:0px;
            flex: 1;
            margin-top: -2px;
            
            padding-left:700px;
            padding-right:0px;
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
            padding-top: 420px;
          }

          .underscore-img {
            width: 230px;
            height: 330px;
            position: absolute;
            top: 0;
            left: 129px;
            z-index: 2;
            padding-top: 300px;
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
            padding-top: 295px;
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
padding-left:730px;
margin-bottom:0px;
margin-top: -35px;
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
        <img src="/young.png" alt="Profile" className="profile-icon" />
        
      </div>

      <div className="header-text"><img src="/nounsheader.png" alt=""></img>
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
          <img src="/igloo.png" alt="Igloo" className="header-icon" />
          <a href="/nouns" className="home-link">Home</a>
        </div>
        <img src="/Frame.jpg" alt="Header Background" className="header-bg" />
        
        <img src="/image.png" alt="Overlay Icon" className="group-icon" />
        
      </header>

      
        <div className="image-row">
          <img src="/tree_icon 2.png" alt="Tree" className="tree-img" />
          <img src="/_.png" alt="Underscore" className="underscore-img" />
          <img src={bearImage} alt="Bear" className="bear-img" />

        </div>

        
         
        <main className="quiz-content1">
           
        <div className="right-panel">
                    <div className="quiz-content">
                        <p className="quiz-instruction">
                            <span className="question-number">3.</span>
                            <u>Underline all the nouns</u> in each sentence. {' '}
                            <span className="instruction-detail">(There may be more than one)</span>
                        </p>
                        <p className="quiz-example">
                            <span className="example-label">Example:</span> The <span className="example-noun">dog</span> is barking.
                        </p>
                        <ul className="sentence-list">
                            {sentenceStates.map((state, sentenceIndex) => (
                                <li key={state.id} className="sentence-item"> {/* Parent Flex Container */}
                                    <span className="sentence-id">{state.id}.</span> {/* Flex Item 1 */}

                                    {/* Flex Item 2: Sentence Text */}
                                    <div className="sentence-text"> {/* No longer grows */}
                                        {sentences[sentenceIndex].text.map((word, wordIndex) => {
                                            const status = getWordStatus(sentenceIndex, wordIndex);
                                            const isSelected = state.selectedWords[wordIndex];
                                            const wordClasses = `word ${isSelected ? 'selected' : ''} ${status ? status : ''} ${state.isChecked ? 'disabled' : ''}`;
                                            return (
                                                <span
                                                    key={wordIndex}
                                                    onClick={() => toggleWordSelection(sentenceIndex, wordIndex)}
                                                    className={wordClasses}
                                                    role="button"
                                                    tabIndex={state.isChecked ? -1 : 0}
                                                >
                                                    {word}
                                                </span>
                                            );
                                        })}
                                        <div className="tooltip-container">
                                            <span className="tooltip-trigger">🌟</span>
                                            <div className="tooltip-content">
                                                This sentence has <span className="tooltip-highlight">{sentences[sentenceIndex].correctNouns.length} {sentences[sentenceIndex].correctNouns.length === 1 ? 'noun' : 'nouns'}</span>.
                                                <div className="tooltip-arrow"></div>
                                            </div>
                                        </div>
                                    </div> {/* End sentence-text */}

                                    {/* Flex Item 3: Button Area - MOVED OUTSIDE sentence-text */}
                                    <div className="sentence-button-area"> {/* Changed class name */}
                                        {!state.isChecked ? (
                                            <button
                                                onClick={() => checkSingleSentence(sentenceIndex)}
                                                className="button button-check-sentence"
                                            >
                                                Check Answer
                                            </button>
                                        ) : state.hasErrors ? (
                                            <button
                                                onClick={() => resetSingleSentence(sentenceIndex)}
                                                className="button button-try-again-sentence"
                                            >
                                                Try Again
                                            </button>
                                        ) : (
                                            <span className="feedback-correct">✓ Correct!</span>
                                        )}
                                    </div> {/* End sentence-button-area */}
                                </li> // End sentence-item
                            ))}
                        </ul>
                        </div>

                        </div>
                        </main>
      

                        <div className="button-wrapper">
            <button
              className="previous-button"
              onClick={() => (window.location.href = "/quiztwo")}
            >
              PREVIOUS QUESTION
            </button>
            <button
              className="next-button"
              onClick={() => (window.location.href = "/quizfour")}
            >
              NEXT QUESTION
            </button>
          </div>
       
     

      <footer className="quiz-footer">
        <img src="/footer.png" alt="Footer" />
      </footer>
    </div>
  );
};

export default QuizPageThree;
