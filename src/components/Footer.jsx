import '../styles/Footer.css'
import headerLogo from '../assets/headerLogo.png'

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
										<div className='footer-link-subtitle'>Company</div>
										<div className='footer-link-subtitle'>Security</div>
										<div className='footer-link-subtitle'>News</div>
									</div>
								</div>
							</div>

							<div className='footer-link'>
								<div className='footer-link-title'>Contacts</div>
								<div className='footer-link-bottom'>
									<div className='footer-link-subtitle'>
										partner@findevor.ai
									</div>
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
