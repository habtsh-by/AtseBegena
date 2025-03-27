import React from 'react'
import './AboutMin.css'
import imageSrc from '../assets/img/col-md-6 (1).png'
function AboutMin() {
  return (
    <section className="hero-section">
    <div className="text-content">
      <div className="blue-line"></div>
      <h2>ስለ እኛ</h2>
      <p>
      የኢትዮጵያ የዜማ መሳሪያዎች በማሰልጠን ዘርፍ የነገ ሀገር ተረካቢ 
      ለሚሆኑ ህፃናት እና ወጣቶች ከፍተኛ ትኩረት በመስጠት ” ባህል የማንነት መገለጫ ነው፡፡” በሚል ትልቅ መርህ ለሀገር በቀል የዜማ መሳሪያዎች ትልቅ ክብር እና እንክብካቤ ኖሯቸው እንዲድጉ ጥረት ያደርጋል፡፡ይህም ሲሳይ በገና የዜማ መሳሪያዎች
      ማሰልጠኛ ተቋም ሀገራችን ኢትዮጵያ ካሏት በርካታ ባህላዊ የአኗኗር ዘይቤዎች አንዱን ባህላዊ የዜማ መሳሪያዎችን ለመጠበቅ እና ለተተኪው ትውልድ ለማስተላለፍ ከሚያደርጋቸው ጥረቶች ተጠቃሽ ነው፡
            </p>
      <a href="#" className="learn-more">Learn More &rarr;</a>
    </div>
    <div className="image-container">
      <img src={imageSrc} alt="Cultural scene" />
    </div>
  </section>
  )
}

export default AboutMin