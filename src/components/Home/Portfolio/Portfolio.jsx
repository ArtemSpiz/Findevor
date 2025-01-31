import './Portfolio.css'
import starStartPort from '../../../assets/stare-animation-end.png'
import starPort from '../../../assets/startAnimationPort.png'
import React, { useState, useEffect } from 'react'

export function Portfolio() {
	return (
		<>
			<div className='portfolios home'>
				<div className='portfolios-container'>
					<div className='portfolio-star-left-mob'>
						<img
							src={starPort}
							alt='starStart'
							className='portfolio-star-top-anim'
						/>
					</div>
					<div className='portfolio'>
						<div className='portfolio-container'>
							<div className='portfolio-left'>
								<div className='portfolio-title'>
									Ready to transform your
									<div className='portfolio-title2 desktop'>portfolio?</div>
									<div className='portfolio-title2 mob'>
										insurance workflow?
									</div>
								</div>
								<div className='portfolio-subtitle desktop'>
									Maximize profitability with smarter insights.
								</div>
								<div className='portfolio-subtitle-mob mob '>
									Simplify your insurance workflow and work smarter.
								</div>
							</div>
							<div className='portfolio-right'>
								<div className='portfolio-star-right'>
									<img
										src={starStartPort}
										alt='starStart'
										className=' portfolio-star-right-anim'
									/>
								</div>
								<div className='portfolio-button'>
									<button
										className='portfolio-btn'
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

								<div className='portfolio-stars'>
									<div className='portfolio-star-top'>
										<img
											src={starPort}
											alt='starStart'
											className='portfolio-star-top-anim'
										/>
									</div>

									<div className='portfolio-star-bottom'>
										<img
											src={starPort}
											alt='starStart'
											className='portfolio-star-bottom-anim'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='portfolio-star-right-mob'>
						<img
							src={starPort}
							alt='starStart'
							className='portfolio-star-bottom-anim'
						/>
					</div>
				</div>
			</div>
		</>
	)
}
