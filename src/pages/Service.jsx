import React from 'react'
import './service.css'
import AD from "../com/AD"
import EcommercePage from '../com/Ecomm';
import pro1 from '../assets/img/pro1 (1).jpeg'
import image1 from "../assets/img/beti_with_begena.png"; 
import image2 from "../assets/img/aba_wtih _begena.png";


const products = [
  { id: 1, image: pro1, name: "ጸና1", price: 7500 },
  { id: 2, image: pro1, name: "ጸና", price: 7500 },
  { id: 3, image: pro1, name: "ጸና", price: 7500 },
  { id: 4, image: pro1, name: "ጸና", price: 7500 },
  { id: 5, image: pro1, name: "ጸና", price: 7500 },
];
function Service() {
  return (
    <>
    <div className="Service_hero">
        <h2>አገልግሎቶቻችን</h2>
        <p>አገልግሎቶቻችን በዝርዝር ይወቁ</p>
      </div>

      <section className="service">
        <div className="service_container"> 
        <div className="service_text-content">
        <div className="service_title-line"></div>
        <h1>ማሰልጠን</h1>
        <p>
        ተቋሙ በኦንላይን እና በአካል አገልግሎት የተደገፈ በገና፣ መሰንቆ፣ ክራር፣ እንዲሁም በመለከት ስልጠናን ያቀርባል። ስልጠናው ተማሪዎችን በቀላልና በተግባራዊ መንገድ ለማስተማር፣ ዕውቀትን ለማሻሻል፣ እንዲሁም ሙያ አካባቢ ላይ ተግባራዊ ብቃትን ለማሳደግ የተነቀፈ ነው።

          <h6>የስልጠናው ምንጭ ዝርዝሮች</h6>
          <ul>
            <li> የበገና ስልጠና: በሰላምነትና ሙያዊነት የተሟላ ገና መሳሪያን ማዘጋጀት እና መጫወት የሚያስችል እውቀት።</li>
            <li> የመሰንቆ ስልጠና: መሰንቆን እንዴት እንደሚሠሩ እና ስምምነቱን በትክክል የማስተናገድ ሁሉንም እውቀት የሚሰጥ።</li>
            <li> የክራር ስልጠና: ክራር በስምምነት እንዴት እንደሚጫወት እና እንዴት እንደሚሰራ፣ ሙያ ብቃትን የሚያስገኝ።</li>
            <li> የመለከት ስልጠና: መለከትን በጥራት እንዴት እንደሚሰራ፣ እንዴት እንደሚጫወት፣ የባህላዊነትን ተግባር በሙያዊ አካባቢ እንዴት እንደሚያሰለጥን እውቀት።</li>
          </ul>
         <h6>እቅፍ ጥቅሞች</h6>
         <ul>
          <li>በቅጥር ግዜ ውስጥ የተግባራዊ ሙያ እውቀት ማግኘት።</li>
          <li>በኦንላይን የስልጠና ጥቅሞችን በመጠቀም እንደእኛ ስራ መምራት።</li>
          <li> በአካል ስልጠና ላይ ተማሪዎችን በቅርብ ትኩረት መከታተል።</li>
         </ul>
         
        </p>
      </div>

      <div className="service_image-container1">
         <img className='img2' src={image2} alt="Church Window 2" />
        <img className='img1' src={image1} alt="Church Window 1" />
        
      </div>
        </div>
      
      </section>

      <AD/>

      <section className="Our_prodacts">
        <div className="Our_prodacts_container">
          <div className="Our_prodacts_text-content">
            <h3>ምንሸጣቸው መሳሪያዎች</h3>
            <p>እኛ የምናሸጣቸው የዜማ መሳሪያዎች በጠንካራነት፣ በምርጥ እጨትና በእንደገና የተሳሳተ ጥርስ ሥራ ይታወቃሉ። 
              እያንዳንዱ መሳሪያ በባህላዊ እና ተደራሽ ቅርፅ ተቀናብሮ በብሔራዊነት ይሰራል። 
              ይህ የምርት ጥራት የምንደርስበት እርግጠኞችን አለማሳየትና ከኢትዮጵያ ባህል እያስጎበኙ ለተጠቃሚ በተለይ ለመስራት ተዘጋጅቶ ይደረሳል። <br />
              እኛ የምናሸጣቸው የዜማ መሳሪያዎች በጠንካራነት፣ በምርጥ እጨትና በእንደገና የተሳሳተ ጥርስ ሥራ ይታወቃሉ። 
              እያንዳንዱ መሳሪያ በባህላዊ እና ተደራሽ ቅርፅ ተቀናብሮ በብሔራዊነት ይሰራል።
              ይህ የምርት ጥራት የምንደርስበት እርግጠኞችን አለማሳየትና ከኢትዮጵያ ባህል እያስጎበኙ ለተጠቃሚ በተለይ ለመስራት ተዘጋጅቶ ይደረሳል።
              </p>

          </div>

      <EcommercePage/>

        </div>
      </section>

      <section className="Scta-section">
      <div className="Scta-content">
        <h2 className="Scta-title">ሚርቶቻቺኒን ይፋልጋሉ?</h2>
        <p className="Scta-description">
        ባሉበት ቦታ ሁነው በገና ፤ መሰንቆ ወይም ክራር መግዛት ይዘዙን ያሉበት ድረስ እነመጣለን
        </p>
      </div>
      <button className="Scta-button">ይዘዙን</button>
    </section>

    </>
  )
}

export default Service