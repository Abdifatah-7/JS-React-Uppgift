import React from 'react'
import TestimonialsQoutes from './TestimonialsQoutes'
import Stars4 from '../assets/images/4-stars.svg'
import FemaleAuthor from '../assets/images/female-author.svg'
import Stars5 from '../assets//images/5-stars.svg'
import MaleAuthor from '../assets//images/male-author.svg'

const Testimonials = () => {
  return (

    <div className="testimonials">
      <div className="testimonial">

          <TestimonialsQoutes />
        
        <div className="rating">
          <img src={Stars4} alt="stjärnor."/>
        </div>

        <div className="review">
          <p>Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
        </div>

        <div className="author">
          <img src={FemaleAuthor} alt="face emoji."/>
          <div className="authors-namn">
            <strong>Fannei Summers</strong>
            <span> <br/> designer</span>
          </div>
          
        </div>

      </div>

      <div className="testimonial">

        <TestimonialsQoutes />
        
        <div className="rating">
          <img src={Stars5} alt="stjärnor."/>
        </div>

        <div className="review">
          <p>Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>
        </div>

        <div className="author">
          <img src={MaleAuthor} alt="face emoji."/>
          <div className="authors-namn">
            <strong>Albert Flores</strong>
            <span> <br/> Developer</span>
          </div>            
        </div>
      </div>
  </div>
  )
}

export default Testimonials