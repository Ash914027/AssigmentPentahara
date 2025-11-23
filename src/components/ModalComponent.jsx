import React from 'react'

/**
 * ModalComponent - simple overlay modal
 * @param {{open:boolean,onClose:function,children:import('react').ReactNode}} props
 */
export default function ModalComponent({ open, onClose, children }) {
  if (!open) return null

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
