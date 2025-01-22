import headerLogo from '../assets/headerLogo.png'
import '../styles/Header.css'
import React, { useState } from 'react'

export function Header() {
	const [isButtonClicked, setIsButtonClicked] = useState(false)

	const handleButtonClick = () => {
		setIsButtonClicked(!isButtonClicked)
	}
	return (
		<div className='header'>
			<div className='container'>
				<div className='logo'>
					<img src={headerLogo} alt='headerLogo' className='img' />
				</div>
				<div className='menu '>
					<div className='text'>Company</div>
					<div className='text'>Security</div>
					<div className='text'>News</div>
				</div>
				<div
					className={`button ${isButtonClicked ? 'button-clicked' : ''}`}
					onClick={handleButtonClick}
				>
					<button className='btn'>Schedule a Demo</button>
				</div>
			</div>
		</div>
	)
}
