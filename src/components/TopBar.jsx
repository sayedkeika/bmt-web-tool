import React, { useState, useRef, useEffect } from 'react'
import BioBasedCertLogo2 from '../images/BioBasedCertLogo.png'
import DownArrowIcon from '../svgs/down-arrow.svg'
import { useAuth } from '../hooks/useAuth'

export default function TopBar({ onShowAssessments, showAccountMenu = true }) {
    const { user, logout } = useAuth()
    const [menuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef()

    const toggleMenu = () => setMenuOpen(prev => !prev)

    useEffect(() => {
        const handleClickOutside = e => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className="top-bar">
            <div>
                <img style={{ maxWidth: '200px', height: 'auto', marginRight: '1rem', marginTop: '1rem', marginBottom: '1rem' }} src={BioBasedCertLogo2}/>
            </div>
            {showAccountMenu && (
                <div className="top-bar-right" ref={menuRef}>
                    <div className="profile" onClick={toggleMenu}>
                    <span>{user?.name}</span>
                    <img src={DownArrowIcon} className='arrow-icon' />
                    </div>
                    {menuOpen && (
                    <div className="dropdown-menu">
                        <div className="dropdown-item" onClick={() => {
                        onShowAssessments()
                        setMenuOpen(false)
                        }}>
                        My Assessments
                        </div>
                        <div className="dropdown-item" onClick={() => {
                        logout()
                        setMenuOpen(false)
                        }}>
                        Logout
                        </div>
                    </div>
                    )}
                </div>
            )}
        </div>
    )
}