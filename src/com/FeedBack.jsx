import React from "react";
import "./FeedBack.css";

const testimonials = [
  {
    name: "Regina Miles",
    role: "Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    review:
      "በሁሉም የሙከራው ጊዜ በጣም እስማማለሁ ከእርስዎ ጋር በማቀፍ ደስ ይላል።",
  },
  {
    name: "Regina Miles",
    role: "Designer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4,
    review:
      "በሁሉም የሙከራው ጊዜ በጣም እስማማለሁ ከእርስዎ ጋር በማቀፍ ደስ ይላል።",
  },
  {
    name: "Regina Miles",
    role: "Designer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
    review:
      "በሁሉም የሙከራው ጊዜ በጣም እስማማለሁ ከእርስዎ ጋር በማቀፍ ደስ ይላል።",
  },
];

const FeedBack = () => {
  return (
    <section className="testimonials">
      <div className="titleCon">
      <h2 className="title">እያንዳንዱ ደንበኛ አስፈላጊ ነው።</h2>
      <p className="subtitle">
      የኢትዮጵያ የዜማ መሳሪያዎች በማሰልጠን ዘርፍ የነገ ሀገር ተረካቢ ለሚሆኑ ህፃናት እና 
      ወጣቶች ከፍተኛ ትኩረት በመስጠት ”ባህል የማንነት መገለጫ ነው፡፡” በሚል ትልቅ መርህ
       ለሀገር በቀል የዜማ መሳሪያዎች ትልቅ ክብር እና እንክብካቤ ኖሯቸው እንዲድጉ ጥረት
        ያደርጋል፡፡ይህም ሲሳይ በገና የዜማ መሳሪያዎች ማሰልጠኛ ተቋም ሀገራችን ኢትዮጵያ
         ካሏት በርካታ ባህላዊ የአኗኗር ዘይቤዎች አንዱን ባህላዊ የዜማ መሳሪያዎችን ለመጠበቅ
          እና ለተተኪው ትውልድ ለማስተላለፍ ከሚያደርጋቸው ጥረቶች ተጠቃሽ ነው፡
      </p>

      </div>
      
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="stars">
              {"★".repeat(testimonial.rating)}
              {"☆".repeat(5 - testimonial.rating)}
            </div>
            <p className="review">{testimonial.review}</p>
            <div className="profile">
              <img src={testimonial.image} alt={testimonial.name} />
              <div>
                <h4 className="name">{testimonial.name}</h4>
                <p className="role">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeedBack;
