import React, { useEffect, useState } from 'react'
import TestimonialHeadline from '../TestimonialHeadline'
import Testimonials from '../Testimonials'

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([])
  
  const getTestimonials = async () => {
    const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
    const data = await res.json()
    setTestimonials(data)
  }

  useEffect(() => {
    getTestimonials()
  }, [])

  return (
    <main id="Testimonials">
      <div className="container">        
        <TestimonialHeadline />

        <div className="testimonials">
        {
          testimonials.map((testimonial) => (
            <Testimonials key={testimonial.id} item={testimonial} />
          ))
        }


        </div>
      </div>
    </main>
  )
}

export default Testimonial