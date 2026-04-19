import { useState } from 'react'

const initialFields = { name: '', email: '', message: '' }

function InstagramIcon() {
  return (
    <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" />
    </svg>
  )
}

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.message.trim()) errors.message = 'Please leave a message.'
  return errors
}

export default function ContactSection() {
  const [fields, setFields] = useState(initialFields)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field) => (event) => {
    setFields((current) => ({ ...current, [field]: event.target.value }))
    setErrors((current) => ({ ...current, [field]: '' }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validation = validate(fields)
    if (Object.keys(validation).length) {
      setErrors(validation)
      setSubmitted(false)
      return
    }
    setSubmitted(true)
    setFields(initialFields)
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-intro">
        <p className="eyebrow">Contact</p>
        <h2>Contact Niharika for products or design work.</h2>
        <p>
          Ask Niharika about buying a showcased product, requesting a custom design, or starting
          fashion design work.
        </p>
        <a
          href="https://www.instagram.com/label_by_niharikabadri/"
          className="instagram-link contact-instagram"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon />
          <span>@label_by_niharikabadri</span>
        </a>
      </div>

      <form onSubmit={handleSubmit} className="form-panel" noValidate>
        <label className="field" htmlFor="contact-name">
          <span>Name</span>
          <input
            id="contact-name"
            value={fields.name}
            onChange={handleChange('name')}
            placeholder="Your full name"
            type="text"
          />
          {errors.name && <small>{errors.name}</small>}
        </label>

        <label className="field" htmlFor="contact-email">
          <span>Email</span>
          <input
            id="contact-email"
            value={fields.email}
            onChange={handleChange('email')}
            placeholder="client@email.com"
            type="email"
          />
          {errors.email && <small>{errors.email}</small>}
        </label>

        <label className="field" htmlFor="contact-message">
          <span>Message</span>
          <textarea
            id="contact-message"
            value={fields.message}
            onChange={handleChange('message')}
            placeholder="Tell us what you want to buy, customize, or design"
          />
          {errors.message && <small>{errors.message}</small>}
        </label>

        {submitted && <p className="success-message">Your inquiry is ready. Niharika will be in touch soon.</p>}

        <button type="submit" className="button button-primary form-button">
          Send Message
        </button>
      </form>
    </section>
  )
}
