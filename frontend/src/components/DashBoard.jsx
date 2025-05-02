import React from 'react';
import Sidebar from './Sidebar'; 
import './DashboardPage.css'; 
import { useNavigate } from 'react-router-dom';
import { useState,useEffect,useRef } from "react";
import { FaSearch, FaRegBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
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


   
   
       
      
    
const DashBoard = () => {
    const navigate = useNavigate();
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
        
        <div className="dashboard-page font-sassoon">
            <Sidebar activeLink="dashboard" /> 

            <main className="dashboard-main-content">
                
                <header className="dashboard-header">
                    <h1 className="header-title">Dashboard</h1>
                    <div className="header-actions">
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
                </header>

                
                <div className="dashboard-grid">

                    
                    <section className="welcome-banner">
                        <div className="banner-content-wrapper">
                            <img src={BANNER_BG_IMG} alt="" className="banner-background-image" />
                            <div className="banner-text-content">
                                <h2 className="banner-title">Welcome Back,{username.toUpperCase() || "Guest"}!</h2>
                                <p className="banner-description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quam felis, maximus a ornare in, pellentesque eget turpis.
                                </p>
                            </div>
                            <div className="banner-bear-container">
                                <img src={WELCOME_BEAR_IMG} alt="Welcome Bear" className="banner-bear" />
                            </div>
                        </div>
                        <div className="congrats-badge">
                             
                            <p>CONGRATULATIONS</p>
                            <img src={CONGRATS_BADGE_IMG} alt="Congratulations Badge" />
                            <span>LEVEL 1 - Super champ</span>
                        </div>
                    </section>

                    
                    <section className="my-classes-section">
                        <h2 className="section-title">My Classes</h2>
                        <div className="classes-grid">
                            
                            <div className="class-card nouns">
                            <Link to="/nouns"> <img src={NOUNS_BG_IMG} alt="Nouns activity background" className="class-card-bg" /></Link>
                                
                            </div>
                            <div className="class-card statements">
                            <Link to="/statements">    <img src={STATEMENTS_BG_IMG} alt="Statements activity background" className="class-card-bg" /></Link>
                                
                            </div>
                            <div className="class-card spellings">
                                <img src={SPELLINGS_BG_IMG} alt="Spellings activity background" className="class-card-bg" />
                                
                            </div>
                            <div className="class-card comprehension">
                                <img src={COMPREHENSION_BG_IMG} alt="Comprehension activity background" className="class-card-bg" />
                                
                            </div>
                        </div>
                    </section>

                    
                    <div className="activity-progress-wrapper">
                        
                      

                        
                     
                    </div> 
                 </div> 

                 
                 <footer className="dashboard-footer">
                    <img src='footer.png' alt="Footer Decoration" />
                </footer>
            </main>
        </div>
    );
};

export default DashBoard;