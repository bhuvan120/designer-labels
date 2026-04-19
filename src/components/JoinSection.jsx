import { useState } from 'react'
import { getCustomOrderMessage, getWhatsAppUrl } from '../utils/whatsapp.js'

const initialInputs = { name: '', email: '', project: '', sample: null }

function validate(inputs) {
  const errors = {}
  if (!inputs.name.trim()) errors.name = 'Your name is required.'
  if (!inputs.project.trim()) errors.project = 'Tell Niharika what you need.'
  if (!inputs.email.trim()) {
    errors.email = 'Your email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputs.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!inputs.sample) errors.sample = 'Please attach a reference or sample image.'
  return errors
}

export default function JoinSection() {
  const [inputs, setInputs] = useState(initialInputs)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field) => (event) => {
    const value = field === 'sample' ? event.target.files?.[0] : event.target.value
    setInputs((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: '' }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validation = validate(inputs)
    if (Object.keys(validation).length) {
      setErrors(validation)
      setSubmitted(false)
      return
    }
    setSubmitted(true)
    setInputs(initialInputs)
  }

  return (
    <section id="join" className="section join-section">
      <div className="join-intro">
        <p className="eyebrow">Work with Niharika</p>
        <h2>Buy a product or request a custom design.</h2>
        <p>
          Share what you are looking for. Niharika can help with showcased products, custom outfits,
          label styling, and fashion design work.
        </p>
        <div className="proof-list">
          <span>Product purchase inquiries</span>
          <span>Custom outfit requests</span>
          <span>Fashion design work</span>
        </div>
        <a
          className="button button-primary intro-whatsapp"
          href={getWhatsAppUrl(getCustomOrderMessage())}
          target="_blank"
          rel="noreferrer"
        >
          Place Order on WhatsApp
        </a>
      </div>

      <form onSubmit={handleSubmit} className="form-panel" noValidate>
        <div className="field-grid">
          <label className="field">
            <span>Name</span>
            <input value={inputs.name} onChange={handleChange('name')} placeholder="Your name" />
            {errors.name && <small>{errors.name}</small>}
          </label>
          <label className="field">
            <span>Email</span>
            <input
              value={inputs.email}
              onChange={handleChange('email')}
              placeholder="brand@email.com"
              type="email"
            />
            {errors.email && <small>{errors.email}</small>}
          </label>
        </div>

        <label className="field">
          <span>What do you need?</span>
          <input value={inputs.project} onChange={handleChange('project')} placeholder="Product, custom outfit, or design work" />
          {errors.project && <small>{errors.project}</small>}
        </label>

        <label className="upload-field">
          <span>Upload reference image</span>
          <input type="file" accept="image/*" onChange={handleChange('sample')} />
          {inputs.sample && <em>Selected: {inputs.sample.name}</em>}
          {errors.sample && <small>{errors.sample}</small>}
        </label>

        {submitted && <p className="success-message">Request sent. Niharika will review it and get in touch.</p>}

        <button type="submit" className="button button-primary form-button">
          Send Request
        </button>
      </form>
    </section>
  )
}
