import React from 'react'
import TestimonialsQoutes from './TestimonialsQoutes'
import StarRating from './starRating'






const Testimonials = ({item}) => {

  return (
    
      <div className="testimonial">

          <TestimonialsQoutes />
         
          <StarRating starRating={item.starRating} />
         

        <div className="review">
          <p>{item.comment}</p>
        </div>

        <div className="author">
          <img src={item.avatarUrl} alt="face emoji."/>
          <div className="authors-namn">
            <strong>{item.author}</strong>
            <span> <br/> {item.jobRole}</span>
          </div>
          
        </div>

      </div>
  )
}

export default Testimonials