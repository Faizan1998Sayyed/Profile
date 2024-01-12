import React from 'react'
import './Card.css'
import Faisu from '../Assets/faizan.jpg'

export default function Card() {
  return (
    <div>
      <div className='card'>
        <div className='line'></div>
        <div className='imgbox'>
          <img src={Faisu}/>
        </div>
        <div className='contant'>
          <div className='details'>
          <h2>Faisu Sayyed<br/><span>Senior UI/UX Designer</span></h2>
            <div className='data'>
              <h3>345<br/><span>Posts</span></h3>
              <h3>4456k<br/><span>Followers</span></h3>
              <h3>285<br/><span>Following</span></h3>
            </div>
            <div className='actionbtn'>
              <button>Follow</button>
              <button>Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
