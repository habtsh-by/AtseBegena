import React from 'react'
import './hero.css'
import icon2 from '../assets/img/icn2.png'
import icon1 from '../assets/img/ico1.png'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>እንኳን ወደ ተቋማችን በደህና መጣችሁ!!</h1>
        <p>እያንዳንዱ ቀን አዲስ የመማር እድሎችን ያመጣል።</p>
        <div className="hero-buttons">
          <button className="btn-primary">አገልግሎቶቻችን</button>
          <button className="btn-outline">ኦንላይን ይማሩ</button>
        </div>
      </div>

      <div className="Hcards-container">
        <div className="Hcard">
        <div className="icon"><img src={icon2} alt="" /></div>
          <h2>ማሰልጠን</h2>
          <p>
          ተቋሙ በአጫጭር ስልጠና ዘርፍ በኦንላይን እና በአካል፡- በበገና ፤
           በመሰንቆ ፤ በክራር እንዲሁም በመለከት ብቁ የሆነ ስልጠና አሰልጥነን እናስመርቃለን፡፡
          </p>
        </div>
        
        <div className="Hcard">
          <div className="icon"><img src={icon1} alt="" /></div>
          <h2>መሸጥ</h2>
          <p>
                      በማምረቻችን የተመረቱ የዜማ
            መሣሪያዎች መያዣ ማህደርዎች
            (ቦርሣዎች) እንዲሁም የመማሪያ
            መፀሐፎችን እንሸጣለን፡፡
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero