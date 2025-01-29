import './Footer.css'
import headerLogo from '../../../assets/headerLogo.png'

import { NavLink } from 'react-router-dom'

export function Footer() {
	return (
		<>
			<div className='footer'>
				<div className='footer-container'>
					<div className='footer-top'>
						<img
							src={headerLogo}
							alt='headerLogo'
							className='footer-logo'
						></img>
						<div className='footer-links'>
							<div className='footer-links-top'>
								<div className='footer-link first-links'>
									<div className='footer-link-title'>Explore</div>
									<div className='footer-link-bottom'>
										<div className='footer-link-subtitle'>Home</div>
										<div className='footer-link-subtitle'>Product showcase</div>
										<div className='footer-link-subtitle'>Why Choose us?</div>
									</div>
								</div>

								<div className='footer-link'>
									<div className='footer-link-title'>About</div>
									<div className='footer-link-bottom'>
										<NavLink className='text' to='/'>
											Company
										</NavLink>
										<NavLink to='/security' className='text'>
											Security
										</NavLink>
									</div>
								</div>
							</div>

							<div className='footer-link'>
								<div className='footer-link-title'>Contacts</div>
								<div className='footer-link-bottom'>
									<a
										className='footer-link-subtitle e-mail'
										href='mailto:partner@findevor.ai'
									>
										partner@findevor.ai
									</a>
									<div className='footer-link-subtitle'>Social media</div>
								</div>
							</div>
						</div>
					</div>

					<div className='footer-bottom'>
						<div className='footer-link-title-bottom'>
							© 2025 Findevor.ai all rights reserved
						</div>

						<div className='footer-bottom-links'>
							<div className='footer-link-title'>Privacy Policy</div>
							<div className='footer-link-title'>Terms of service</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
