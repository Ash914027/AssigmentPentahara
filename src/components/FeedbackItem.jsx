import React, { useState } from 'react'
import ModalComponent from './ModalComponent'

export default function FeedbackItem({ item, onDelete }) {
  const [confirmOpen, setConfirmOpen] = useState(false)

  const handleDelete = () => {
    onDelete(item.id)
    setConfirmOpen(false)
  }

  return (
    <li className="feedback-item">
      <div className="meta">
        <strong>{item.name}</strong>
        <span>{new Date(item.date).toLocaleString()}</span>
      </div>
      <div className="email">{item.email}</div>
      <p className="message">{item.message}</p>
      <div className="actions">
        <button className="danger" onClick={() => setConfirmOpen(true)}>Delete</button>
      </div>

      <ModalComponent open={confirmOpen} onClose={() => setConfirmOpen(false)}>
        <h3>Confirm Delete</h3>
        <p>Delete feedback from <strong>{item.name}</strong>?</p>
        <div className="modal-actions">
          <button onClick={() => setConfirmOpen(false)}>Cancel</button>
          <button className="danger" onClick={handleDelete}>Delete</button>
        </div>
      </ModalComponent>
    </li>
  )
}
