import { SignInButton } from '@clerk/clerk-react'
import '../styles/auth.css'
import React from 'react'

const AuthPage = () => {
  return (
    <div className='auth-container'>
        <div className="auth-left">
            <div className='auth-hero'>
                <div className='brand-container'>
                    <img src="/logo.png" alt="Slack Logo" className='brand-logo' />
                    <span className='brand-name'>Slap</span>
                </div>

                <h1 className='hero-title'>Where Work Happens ✨</h1>

                <p className='hero-subtitle'>
                    Connect with your team, collaborate on projects, and get things done in one place. Experenice the new way to work together.
                </p>

                <div className='features-list'>
                    <div className='feature-item'>
                        <span className='feature-icon'>💬</span>
                        <span className='feature-text'>Real-time Messaging</span>
                    </div>

                    <div className='feature-item'>
                        <span className='feature-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                                <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3-1A1.5 1.5 0 0 1 9.5 2V.5L11 .5zM4 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5H9.5A1.5 1.5 0 0 1 8 3V1H4z"/>
                            </svg>
                        </span>
                        <span className='feature-text'>Video calls & meetings</span>
                    </div>

                    <div className='feature-item'>
                        <span className='feature-icon'>🔒</span>
                        <span className='feature-text'>Secure and Private</span>
                    </div>
                </div>

                <SignInButton mode="modal">
                    <button className='cta-button'>
                        Get Started with Slap
                        <span className='button-arrow'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                            </svg>
                        </span>
                    </button>
                </SignInButton>
            </div>
        </div>

        <div className="auth-right">
            <div className='auth-image-container'>
                <img src="/auth-i.png" alt="Auth Hero" className='auth-image' />
                <div className='image-overlay'></div>
            </div>
        </div> 
    </div>
  )
}

export default AuthPage
