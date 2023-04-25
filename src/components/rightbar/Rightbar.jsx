import React from "react";
import "./rightbar.css";
function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <spam className="birthdayText">
            <b>pola foste</b> and <b>3 other friend</b> today
          </spam>
        </div>
        <img className="rightbarAd" src="/assets/ad.png" alt="" />
        <h4 className="rightbartitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="/assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Redu Legend</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="/assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Redu Legend</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="/assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Redu Legend</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="/assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Redu Legend</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="/assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Redu Legend</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="/assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Redu Legend</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Rightbar;
