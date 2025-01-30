import './Safety.css'
import React from 'react'
import safetyItemImg1 from '../../../assets/safetyItemImg1.png'
import safetyItemImg2 from '../../../assets/safetyItemImg2.png'
import safetyItemImg3 from '../../../assets/safetyItemImg3.png'

export function Safety() {
	return (
		<>
			<div className='safety'>
				<div className='safety-container'>
					<div className='safety-itemsComp'>
						<div className='safety-items'>
							<div className='safety-item'>
								<div className='safety-item-container'>
									<div className='item-image'>
										<img
											className='item-img'
											src={safetyItemImg1}
											alt='safetyItemImg1'
										></img>
									</div>

									<div className='item-title'>Swift Incident Detection</div>
									<div className='item-subtitle'>
										Our team quickly identifies and resolves security threats,
										minimizing disruption.
									</div>
								</div>
							</div>
							<div className='safety-miniItem'>
								<div className='safety-miniItemTop-container'>
									<div className='mini-item-title'>
										Proactive Threat Monitoring
									</div>
								</div>
							</div>
						</div>

						<div className='safety-items'>
							<div className='safety-miniItem'>
								<div className='safetyMiniItem-container'>
									<div className='mini-item-titleCenter'>
										Comprehensive Insurance
									</div>
									<div className='mini-item-subtitle'>
										We maintain comprehensive insurance coverage tailored for
										enterprise software providers, including liability, cyber,
										and E&O policies.
									</div>
								</div>
							</div>

							<div className='safety-item'>
								<div className='safety-item-container'>
									<div className='item-image'>
										<img
											className='item-img'
											src={safetyItemImg2}
											alt='safetyItemImg2'
										></img>
									</div>

									<div className='item-title'>Secure Data Encryption</div>
									<div className='item-subtitle'>
										We use advanced encryption to protect your data at all
										times.
									</div>
								</div>
							</div>

							<div className='safety-miniItem'>
								<div className='safetyMiniItem-container'>
									<div className='mini-item-titleCenter'>
										Standards Compliance
									</div>
									<div className='mini-item-subtitle'>
										We follow the principles of ISO 27001, GDPR, SOC 2, and CCPA
										in our approach to data security and privacy.
									</div>
								</div>
							</div>
						</div>
						<div className='safety-items'>
							<div className='safety-miniItem'>
								<div className='safety-miniItemTop-container'>
									<div className='mini-item-title'>
										Continuous Security Self- Audits
									</div>
								</div>
							</div>

							<div className='safety-item safety-center'>
								<div className='safety-item-container'>
									<div className='item-image'>
										<img
											className='item-img'
											src={safetyItemImg3}
											alt='safetyItemImg3'
										></img>
									</div>

									<div className='item-title'>Incident Response Ready</div>
									<div className='item-subtitle'>
										Our security team is equipped to swiftly identify, contain,
										and resolve issues.
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='MiniItemsMob'>
						<div className='safety-miniItemMob'>
							<div className='safetyMiniItem-container'>
								<div className='mini-item-titleCenter'>
									Comprehensive Insurance
								</div>
								<div className='mini-item-subtitle'>
									We maintain comprehensive insurance coverage tailored for
									enterprise software providers, including liability, cyber, and
									E&O policies.
								</div>
							</div>
						</div>

						<div className='safety-miniItemsMob'>
							<div className='safety-miniItemMob'>
								<div className='safety-miniItemTop-container'>
									<div className='mini-item-title'>
										Proactive Threat Monitoring
									</div>
								</div>
							</div>

							<div className='safety-miniItemMob'>
								<div className='safety-miniItemTop-container'>
									<div className='mini-item-title'>
										Continuous Security Self- Audits
									</div>
								</div>
							</div>
						</div>

						<div className='safety-miniItemMob'>
							<div className='safetyMiniItem-container'>
								<div className='mini-item-titleCenter'>
									Standards Compliance
								</div>
								<div className='mini-item-subtitle'>
									We follow the principles of ISO 27001, GDPR, SOC 2, and CCPA
									in our approach to data security and privacy.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
