import './SecMain.css'
import { Header } from '../Header/Header'

import React from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import starStart from '../../../assets/stare-animation-end.png'
import { useState } from 'react'

gsap.registerPlugin(ScrollTrigger)

export function SecMain() {
	return (
		<>
			<div className='main'>
				<div className='Header'>
					<Header />
				</div>
				<div className='securMain-container'>
					<div className='SecurMain-cont'>
						<div className='securMain-top'>
							<div className='main-texts'>
								<div className='main-security-subtitle'>Security</div>
								<div className='top-stars'>
									<div className='main-star-top left'>
										<img
											src={starStart}
											alt='starStart'
											className='star-animation star-left-animation'
										/>
									</div>
									<div className='secur-main-title'>
										<div className='securMain-title2'>
											Trust and Security at
										</div>
										Every Step
									</div>

									<div className='main-star-top right'>
										<img
											src={starStart}
											alt='starStart'
											className='star-animation star-right-animation'
										/>
									</div>
								</div>

								<div className='center-stars'>
									<div className='securMain-star-center centerStars-left'>
										<img
											src={starStart}
											alt='starStart'
											className='star-animation star-left-animation'
										/>
									</div>
									<div className='secur-main-subtitle'>
										AI-Powered data intelligence and underwriting with
										comprehensive data security for sustainable growth
									</div>

									<div className='securMain-star-center centerStars-right'>
										<img
											src={starStart}
											alt='starStart'
											className='star-animation star-right-animation'
										/>
									</div>
								</div>
							</div>

							<div className='bottom-stars'>
								<div className='main-star-bottom bottomStars-left'>
									<img
										src={starStart}
										alt='starStart'
										className='star-animation star-left-animation'
									/>
								</div>
								<div className='main-button'>
									<button
										className='main-btn'
										onClick={() =>
											window.open(
												'https://www.findevor.ai/early-access',
												'_blank',
												'noopener,noreferrer'
											)
										}
									>
										Schedule a Demo
										<svg
											className='starePort'
											xmlns='http://www.w3.org/2000/svg'
											width='25'
											height='24'
											viewBox='0 0 25 24'
											fill='none'
										>
											<defs>
												<linearGradient
													id='paint0_linear_2790_12227'
													x1='14.9194'
													y1='9.9194'
													x2='20.7742'
													y2='4.06466'
													gradientUnits='userSpaceOnUse'
												>
													<stop stop-color='#78E7FE' />
													<stop offset='1' stop-color='#4375FB' />
												</linearGradient>
												<linearGradient
													id='paint1_linear_2790_12227'
													x1='1.89864'
													y1='18.1596'
													x2='11.694'
													y2='8.36431'
													gradientUnits='userSpaceOnUse'
												>
													<stop stop-color='#78E7FE' />
													<stop offset='1' stop-color='#4375FB' />
												</linearGradient>
											</defs>
											<path
												className='star-path'
												d='M12.615 6.99644C12.6148 6.23911 15.4341 6.76747 16.6658 5.64288C18.0224 4.40427 17.6002 1.25385 18.3577 1.25377C19.1152 1.25368 18.6931 4.40428 20.0497 5.64288C21.2814 6.76743 24.0907 6.49731 24.1004 6.99644C24.11 7.49557 21.2619 7.47618 20.0497 8.68839C18.8375 9.90062 18.9476 12.7504 18.3577 12.7391C17.7678 12.7278 17.878 9.90063 16.6658 8.68839C15.4536 7.47614 12.6152 7.75377 12.615 6.99644Z'
												fill='#FAFAFA'
											/>
											<path
												className='star-path-bottom'
												d='M1.55264 13.7425C1.56762 13.2161 4.37166 13.5135 5.60341 12.3889C6.96002 11.1503 6.67702 3.49979 7.29531 3.49978C7.9136 3.49978 7.63067 11.1503 8.98731 12.3889C10.219 13.5135 13.0226 13.1998 13.038 13.7425C13.0534 14.2851 10.4292 13.8691 8.98731 15.4344C7.5454 16.9997 8.04541 22.9998 7.29532 22.9998C6.54522 22.9998 7.54532 16.9998 5.6034 15.4344C3.66148 13.869 1.53766 14.2688 1.55264 13.7425Z'
												fill='#FAFAFA'
											/>
										</svg>
									</button>
								</div>
								<div className='main-star-bottom bottomStars-right'>
									<img
										src={starStart}
										alt='starStart'
										className='star-animation star-right-animation'
									/>
								</div>
							</div>
						</div>

						<div className='mainStars-Mob'>
							<div className='main-star securStar-mob-left'>
								<img
									src={starStart}
									alt='starStart'
									className='star-animation star-left-animation'
								/>
							</div>

							<div className='main-star securStar-mob-right'>
								<img
									src={starStart}
									alt='starStart'
									className='star-animation star-right-animation'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
