import React, { useState,useEffect,useRef } from "react";
import { FaSearch, FaRegBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
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
const Result = () => {
  const [username, setUsername] = useState('');
      
        useEffect(() => {
          const storedUsername = localStorage.getItem('username');
          if (storedUsername) {
            setUsername(storedUsername);
          }
        }, []);
        const handleLogout = () => {
          localStorage.removeItem('authToken'); 
          navigate('/logout'); // Assuming <Route path="/logout" element={<Logout />} />
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
             .badge {
  display: flex;
  flex-direction: column;
  align-items: center; /* center horizontally */
  gap: 35px; /* spacing between the two images */
  padding-top: 20px;
}

.badge img {
  width: 200px; /* smaller size */
  height: auto;
  display: block;
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

         
            
          
          

          .profile-section {
            position: absolute;
            top: 10px;
            left: 0px;
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
            margin-left: auto;
            margin-top: 55px;
            margin-right: 250px;
            text-align: left;
            max-width: 400px;
            font-size: 30px;
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
            margin-left: 50px;
            cursor: pointer;
            border-radius: 6px;
            transition: background-color 0.3s ease;
          }
             .header-actions1 {
  position: absolute;
  top: 0;
  left:1200px;
  right: 0;
  height: 3%;
  display: flex;

  gap: 0.5rem;
  padding: 1rem;
  z-index: 2;
  padding-bottom:-40px;
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
        <img src="/static/young.png" alt="Profile" className="profile-icon" />
        
      </div>

      <div className="header-text">
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
      <img src="/static/avatar1.png" alt="User Avatar" className="user-avatar" />
      <span className="user-name">{username.toUpperCase() || "Guest"}</span>
      <button className="icon-button small"><ArrowDownIcon /></button>
    </div>
  </div>
      
      </div>
      <header className="quiz-header">
       
        <img src="/static/Resultframe.jpg" alt="Header Background" className="header-bg" />
        
      </header>

      <main className="quiz-content">
        <div className="image-row">
         
          <img src="/static/dancing.gif" alt="Bear" className="bear-img" />
        </div>

        <div className="quiz-task">
          <div className="badge">
          <img src="/static/badge.jpg" alt="badge"></img>
          <img src="/static/nouncompletion.jpg" alt=""></img>
          </div>

          <button
            className="next-button"
            onClick={() => (window.location.href = "/dashboard")}
          >
           FINISH
          </button>
        </div>
      </main>

      <footer className="quiz-footer">
        <img src="/static/footer.png" alt="Footer" />
      </footer>
    </div>
  );
};

export default Result;
