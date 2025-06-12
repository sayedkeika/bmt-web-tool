import React, { useState } from 'react'
import PopupDialog from './PopupDialog'

export default function Backstop({ onAnswer, onBackToStart }) {
    return (
        <>
            {/* Top navigation */}
            <div className='header-container'>
                <div className='nav-header'>
                    <div className='nav-left'>
                        <button className='nav' onClick={onBackToStart} title='Start a new assessment'>New Assessment</button>
                    </div>
                    <div className='nav-center'>
                        <h4 style={{ fontSize: '1.1rem' }}>Minimum Backstop</h4>
                        <h3>Compliance</h3>
                    </div>
                    <div className='nav-right'></div>
                </div>
            </div>
            
            <div className='container'>
                <div className='criterion-block'>
                    <p style={{ fontSize: '1.1rem' }}>
                        <strong>
                            COMPL-1: The scheme requires adherence to all applicable regional, national and international laws, regulations and agreements.
                        </strong>
                    </p>
                    <p>
                        <strong>
                            i. The scheme requires implementing and maintaining a system to ensure compliance with all relevant international, national, and regional laws and regulations.
                        </strong>
                    </p>
                    <div className='options'>
                        <button onClick={() => onAnswer(true)}>Yes</button>
                        <button onClick={() => onAnswer(false)}>No</button>
                    </div>
                    <div className='inputs'>
                        <input
                            type='text'
                            placeholder='Justification'
                        />
                        <input
                            type='text'
                            placeholder='Source Reference'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}