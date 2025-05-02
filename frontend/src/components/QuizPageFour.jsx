
import React, { useState,useEffect,useRef } from "react";
import { FaSearch, FaRegBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import './DashboardPage.css'; 
const BANNER_BG_IMG = '/Frame (2).png';       
const WELCOME_BEAR_IMG = '/beargif.gif';        
const CONGRATS_BADGE_IMG = '/congrats.png';   
const NOUNS_BG_IMG = '/nouns (2).png';    
const STATEMENTS_BG_IMG = '/statement.png'; 
const SPELLINGS_BG_IMG = '/spelling.png';   
const COMPREHENSION_BG_IMG = '/comp.png';   
const FOOTER_IMG = '/Group 21.png';      
const USER_AVATAR_IMG = '/avatar1.png';    


const SearchIcon = FaSearch;
const BellIcon = FaRegBell;
const ArrowDownIcon = IoIosArrowDown;
const OptionsIcon = () => <span>[...]</span>; 
const QuizPageFour = () => {
	const questions = [
		{
			id: 1,
			text: "The ____ gave us homework to complete.",
			type: "person",
			answer: "teacher",
			hint: "(person)",
		},
		{
			id: 2,
			text: "I saw a swan swimming in the ____.",
			type: "place",
			answer: "lake",
			hint: "(place)",
		},
		{
			id: 3,
			text: "My favorite ____ is chocolate cake.",
			type: "thing",
			answer: "dessert",
			hint: "(things)",
		},
		{
			id: 4,
			text: "We visited the ____ to see animals.",
			type: "place",
			answer: "zoo",
			hint: "(place)",
		},
		{
			id: 5,
			text: "The ____ ran the fastest in the race.",
			type: "person",
			answer: "boy",
			hint: "(person)",
		},
		{
			id: 6,
			text: "I packed my ____ in my school bag.",
			type: "thing",
			answer: "lunch",
			hint: "(thing)",
		},
	];

  const [username, setUsername] = useState('');
	const [userAnswers, setUserAnswers] = useState({});
	const [completedQuestions, setCompletedQuestions] = useState([]);
	const [feedback, setFeedback] = useState({});
	const [polarBearPath, setPolarBearPath] = useState("/Group 20.png");
	const [firstTry, setFirstTry] = useState(false);

	const handleAnswerChange = (questionId, answer) => {
		setUserAnswers({
			...userAnswers,
			[questionId]: answer,
		});
		// Clear feedback when typing
		setFeedback({
			...feedback,
			[questionId]: null,
		});
	};
	const playAudioWithGif = async (audioSrc, gifSrc) => {
		try {
			const context = new (window.AudioContext || window.webkitAudioContext)();
			const buffer = await (await fetch(audioSrc)).arrayBuffer();
			const decoded = await context.decodeAudioData(buffer);

			const source = context.createBufferSource();
			source.buffer = decoded;
			source.connect(context.destination);
			source.start(0);
			setPolarBearPath(gifSrc);

			source.onended = () => setPolarBearPath("/Group 20.png");
		} catch (err) {
			console.error("Audio play error:", err);
			setPolarBearPath("/Group 20.png");
		}
	};

	const checkAnswer = (questionId) => {
		const currentQuestion = questions.find((q) => q.id === questionId);
		const userAnswer = userAnswers[questionId] || "";

		const isCorrect =
			userAnswer.trim().toLowerCase() === currentQuestion.answer.toLowerCase();
		if (isCorrect) {
			if (!completedQuestions.includes(questionId)) {
				setCompletedQuestions([...completedQuestions, questionId]);
			}

			if (!firstTry) {
				// audio for first try

				playAudioWithGif("/firstcorrect.mp3", "/polar bear face 1.gif");
				setFirstTry(true);
			} else if (completedQuestions.length === questions.length - 1) {
				// audio for all right answer

				playAudioWithGif("/findall.mp3", "/polar bear face 1.gif");
			} else {
				// audio for right answer
				playAudioWithGif("/2-3correct2.mp3", "/polar bear face 1.gif");
			}
			setPolarBearPath("/polar_bear_face_1.gif");

			// Revert to the original bear image after 2 seconds
			setTimeout(() => {
			  setPolarBearPath("/bear.png");
			}, 2000);
		} else {
			// audio for wrong answer

			playAudioWithGif("/e.mp3", "/polar bearface 2.gif");
			setFirstTry(true);
		}
		

		setFeedback({
			...feedback,
			[questionId]: isCorrect,
		});

		if (isCorrect) {
			if (!completedQuestions.includes(questionId)) {
				setCompletedQuestions([...completedQuestions, questionId]);
			}
		}
	};

	// Check if a question is active (can be answered)
	const isQuestionActive = (questionId) => {
		if (questionId === 1) return true; // First question is always active
		const previousQuestionId = questionId - 1;
		return completedQuestions.includes(previousQuestionId);
	};

	// Helper function to render all questions with proper active/disabled states
	const renderQuestions = () => {
		return questions.map((question, index) => {
			const parts = question.text.split("____");
			const questionLetter = String.fromCharCode(97 + index); // a, b, c, etc.
			const isActive = isQuestionActive(question.id);
			const isCompleted = completedQuestions.includes(question.id);

			return (
				<div
					key={question.id}
					className={`mb-4 ${!isActive ? "opacity-60" : ""}`}
				>
					<p className='text-xs md:text-xs mb-2'>
						{questionLetter}. {parts[0]}
						<span className='border-b-2 border-yellow-400 inline-block min-w-16'>
							<input
								type='text'
								className='w-18 border-none focus:outline-none bg-transparent text-center'
								value={userAnswers[question.id] || ""}
								onChange={(e) =>
									handleAnswerChange(question.id, e.target.value)
								}
								placeholder=''
								disabled={!isActive || isCompleted}
							/>
						</span>
						{parts[1] || ""}{" "}
						<span className='text-xs text-gray-500'>{question.hint}</span>
					</p>
					{isActive && !isCompleted && (
						<div className='mt-1'>
							<button
								className='check'
								onClick={() => checkAnswer(question.id)}
							>
								Check
							</button>
							{feedback[question.id] === true && (
								<span className='ml-2 text-green-600 text-sm'>Correct!</span>
							)}
							{feedback[question.id] === false && (
								<span className='ml-2 text-red-600 text-sm'>Answer : {question.answer}</span>
							)}
						</div>
					)}
				</div>
			);
		});
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
			margin-bottom:0px;
			padding-bottom:0px;
			padding-top:50px;
          }

          .quiz-content {
          padding-bottom:0px;
            flex: 1;
            // position: relative;
            // display: flex;
            padding-left:900px;
            padding-right:0px;
          }
.check{

       background-color: #65c0d2; /* Light blue background */
       color: #ffffff; /* Darker blue text */
       border-color: #a5d8e6; /* Blue border */
  padding:0.5rem 0.5rem;
       background-color: #49a4c9;
       border-color: #02222c;
   
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
padding-left:780px;

margin-bottom:0px;
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
	.star{
	height:10vh;
	}
  
  .icon-button.small {
    padding: 0 4px;
  }
  .mainn{
  padding-top:50px;
 padding-left:780px; 
 
           
            text-align: left;
            
            font-size: 20px;
            font-family: 'Comic Neue', sans-serif;
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
        
        <img src="/image copy.png" alt="Overlay Icon" className="group-icon" />
        
      </header>

      
        <div className="image-row">
          <img src="/tree_icon 2.png" alt="Tree" className="tree-img" />
          <img src="/_.png" alt="Underscore" className="underscore-img" />
          <img src="bear.png" alt="Bear" className="bear-img" />

        </div>

			<div>

			{/* Main content - will grow to fill available space */}
			<main className='mainn'>
				<div className=' md:w-7xl  md:px-32'>
					<div className='flex flex-col items-center md:flex-row md:justify-between'>
						{/* Left: Bear Image */}
					

						{/* Right: Questions */}
						<div className='md:w-1/2 w-[30rem] bg-white flex flex-col justify-between p-3 px-6'>
							{/* Star and Instructions */}
							<div className='mb-6'>
								<div className=''>
									
									<p className=' font-medium mb-3 text-gray-800'>
										
											<strong>4. </strong>
										
										Type a <strong>person, place, or thing</strong> to complete
										each sentence.
									</p><br></br>
									<p className='mb-6 text-gray-700'>
										<strong>
											Example : The <u className='text-yellow-500'>baby</u> is
											crying.
										</strong>
									</p>
									<br></br>
								</div>
								{/* All Questions */}
								<div className='md:pl-15 pl-10'>{renderQuestions()}</div>
							</div>

							{/* Navigation Buttons */}
							
						</div>
					</div>
				</div>
			</main>

			{/* Footer - will stay at the bottom */}
			
			<div className="button-wrapper">
            <button
              className="previous-button"
              onClick={() => (window.location.href = "/quizthree")}
            >
              PREVIOUS QUESTION
            </button>
            <button
              className="next-button"
              onClick={() => (window.location.href = "/result")}
            >
              NEXT QUESTION
            </button>
          </div>
       
     

      
		</div>
		<div className="foot">
		<footer className="quiz-footer">
        <img src="/footer.png" alt="Footer" />
      </footer>
	  </div>
		</div>
	);
};

export default QuizPageFour