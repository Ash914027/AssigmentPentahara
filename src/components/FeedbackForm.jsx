import React, { useState } from 'react'

/**
 * FeedbackForm
 * @param {{onSubmit: function}} props
 */
export default function FeedbackForm({ onSubmit }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) return

    const entry = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      date: new Date().toISOString()
    }

    onSubmit(entry)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <h2>Feedback form</h2>
      <label>
        Name
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Message
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}
