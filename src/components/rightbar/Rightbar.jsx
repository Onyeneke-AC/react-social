import React from './rightbar.css'
import {Users} from '../../dummyData'

export default function Rightbar() {
  return (
    <div className='rightbar'>
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img src="assets/gift.png" alt="" className="birthdayImg" />
            <span className="birthdayText">
              <b>Ogochukwu Madu</b> and  <b>3 other friends</b> have their birthdays today!
            </span>
          </div>
          <img src="assets/ad.png" alt="" className="rightbarAd" />
          <h4 className="rightbarTitle">
            Online Friends
          </h4>
          <ul className="onlineFriendList">
            
          </ul>
        </div>
    </div>
  )
}
