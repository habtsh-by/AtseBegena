import React from 'react'
import image1 from "../assets/img/col-md-6 (1).png"; 
import image2 from "../assets/img/col-md-6.png";
import './why.css'

function Why() {
  return (
    <section className="container-section">
      <div className="text-content">
        <div className="title-line"></div>
        <h1>ለምን እኛን ይመርጣሉ?</h1>
        <p>
        የኢትዮጵያ የዜማ መሳሪያዎች በማሰልጠን ዘርፍ የነገ ሀገር ተረካቢ 
        ለሚሆኑ ህፃናት እና ወጣቶች ከፍተኛ ትኩረት በመስጠት ” ባህል የማንነት መገለጫ ነው፡፡” በሚል ትልቅ መርህ ለሀገር በቀል የዜማ መሳሪያዎች
        ትልቅ ክብር እና እንክብካቤ ኖሯቸው እንዲድጉ ጥረት ያደርጋል፡፡ይህም ሲሳይ በገና የዜማ መሳሪያዎች
        ማሰልጠኛ ተቋም ሀገራችን ኢትዮጵያ ካሏት በርካታ ባህላዊ የአኗኗር ዘይቤዎች አንዱን ባህላዊ የዜማ መሳሪያዎችን ለመጠበቅ እና ለተተኪው
          ትውልድ ለማስተላለፍ ከሚያደርጋቸው ጥረቶች ተጠቃሽ ነው፡
        </p>
        <a href="#" className="learn-more">
          Learn More →
        </a>
      </div>

      <div className="image-container1">
        <img className='img1' src={image1} alt="Church Window 1" />
        <img src={image2} alt="Church Window 2" />
      </div>
    </section>
  )
}

export default Why