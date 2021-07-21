import React from 'react';
import { NavLink, Link } from "react-router-dom";
import './SideStudyBar.css'

const SideStudyBar = () => {
    return (
        <div className="sidenavbar">
        <div className="sidenavbar-top">
            <div className="sidenavbar-top__logo">
                <div className="logo-icon">
                    THE ROCK'S FACE
                </div>
            </div>
            <div className="sidenavbar-top__deck-name">
                <div className="deck-name-btn">
                    <div className="title">
                        DECK NAME HERE
                    </div>
                </div>
            </div>
            <div>
            </div>
            <div className="sidenavbar-top__menu-item">
                <ul>
                    <li className="arrow-1">
                    <i class="fas fa-arrow-up"></i>
                        WWF CHAMPION
                    </li>
                    <li className="arrow-2">
                        <i class="fas fa-arrow-up"></i>
                        MOVIE STAR
                    </li>
                    <li className="arrow-2">
                        <i class="fas fa-arrow-up"></i>
                        MILLIONAIRE
                    </li>
                    <li className="arrow-2">
                        <i class="fas fa-arrow-up"></i>
                        FOOTBALL CHAMPION
                    </li>
                    <li className="arrow-2">
                        <i class="fas fa-arrow-up"></i>
                        GETTING BUFF
                    </li>
                    <li className="arrow-2">
                        <i class="fas fa-arrow-up"></i>
                        KEEP TRAINING
                    </li>
                    <li className="arrow-2">
                        <i class="fas fa-arrow-up"></i>
                        YOU SUCK
                    </li>
                </ul>
            </div>
            <div className="sidenavbar-bottom">
                <div className="sidenavbar-bottom__timer">
                    <i class="far fa-clock"></i>
                    TIMER
                </div>
            </div>
        </div>
    </div>
    )
}

export default SideStudyBar;