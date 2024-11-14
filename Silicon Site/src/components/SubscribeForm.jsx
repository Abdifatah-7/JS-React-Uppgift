import React, { useState } from 'react'

const SubscribeForm = () => {


    const [formData, setFormData] = useState({ email: '' }) 
    const [errors, setErrors] = useState({})

    const validateEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return regex.test(email)
    }

    const handleChange = (e) => {
      const { name, value } = e.target
      setFormData({ ...formData, [name]: value })

      // Validate on change
      if (value.trim() === '') {
        setErrors(prevErrors => ({ ...prevErrors, [name]: 'This email field is required.' }))
      } else if (!validateEmail(value)) {
        setErrors(prevErrors => ({ ...prevErrors, [name]: 'Please enter a valid email address.' }))
      } else {
        setErrors(prevErrors => ({ ...prevErrors, [name]: '' }))
      }
    }

    const handleSubmit = (e) => {
      e.preventDefault()

      const newErrors = {}
      const email = formData.email.trim()

      if (email === '') {
        newErrors.email = 'This email field is required.'
      } else if (!validateEmail(email)) {
        newErrors.email = 'Please enter a valid email address.'
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors)
        return
      }

     }


  return (

      <form onSubmit={handleSubmit} className="input-group" noValidate>

      <input className="mail-input" type="email" name='email' value={formData.email} onChange={handleChange} required  placeholder="Your Email"/>             
      <span>{errors.email && errors.email}</span>
      <i className="fa-regular fa-envelope email-icon"></i>


      <button className="subscribe-btn btn-primary">Subscribe</button>

      </form>

  )
}

export default SubscribeForm