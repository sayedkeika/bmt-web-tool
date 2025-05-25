import React from 'react'

export default function PopupDialog({ 
  message, 
  onConfirm, 
  onCancel 
}) {
  return (
    <div className='popup-overlay'>
      <div className='popup-panel'>
        <p>{message}</p>
        <div>
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  )
}