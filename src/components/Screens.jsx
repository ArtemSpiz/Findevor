import '../styles/Screens.css'
import leftFirstScreen from '../assets/leftFirstScreen.png'
import ask from '../assets/ask.png'
import firstScreenFillImage from '../assets/firstScreenFill.png'
import firstScreenFillImage2 from '../assets/firstScreenFill2.png'
import firstScreenFillImage3 from '../assets/firstScreenFill3.png'
import secondScreenImage from '../assets/secondScreenImage.png'
import secondScreenImage2 from '../assets/secondScreenImage2.png'
import secondScreenFill from '../assets/secondScreenFill.png'
import thirdScreenImage from '../assets/thirdScreenImage.png'
import thirdScreenFill from '../assets/thirdScreenFill.png'
import thirdScreenFill2 from '../assets/thirdScreenFill2.png'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'
import { useRef, useState } from 'react'

import leftFirstScreenMob from '../assets/leftFirstScreenMob.png'
import rightFirstScreenMobTop from '../assets/rightFirstScreenMobTop.png'
import leftFirstScreenMobCenter from '../assets/leftFirstScreenMobCenter.png'
import leftFirstScreenMobBottom from '../assets/leftFirstScreenMobBottom.png'

import secondScreenImageMob from '../assets/secondScreenImageMob.png'
import secondScreenImageMob2 from '../assets/secondScreenImageMob2.png'

import thirdScreenImageMob from '../assets/thirdScreenImageMob.png'
import secondScreenFillImageMob from '../assets/secondScreenFillImageMob.png'

import thirdScreenFilMob from '../assets/thirdScreenFilMob.png'
import thirdScreenFilMob2 from '../assets/thirdScreenFilMob2.png'

import logoMobCLose from '../assets/false.png'

gsap.registerPlugin(ScrollTrigger)

export function Screens() {
	const screensRef = useRef(null)
	const leftBlocksRef = useRef(null)
	const screensLeftFillRef = useRef(null)
	const screensRightFillRef = useRef(null)
	const screenSection = useRef(null)
	const subtitles = ['SAM', 'Pre-Qualifier', 'Step Up'] // Сабтайтли
	const [activeSubtitle, setActiveSubtitle] = React.useState(null)

	const [isRightCardOpen, setRightCardOpen] = useState(false)

	const handleRightCardClick = () => {
		setRightCardOpen(true) // Відкрити праву картку
	}

	const handleLeftCardClick = () => {
		setRightCardOpen(false) // Закрити праву картку і відкрити ліву
	}

	React.useEffect(() => {
		const screensElement = screensRef.current
		const leftBlocks = gsap.utils.toArray(leftBlocksRef.current.children)
		const stars = document.querySelectorAll('.screen-star')
		const screensLeftFill = gsap.utils.toArray(
			screensLeftFillRef.current.children
		)
		const screensRightFill = gsap.utils.toArray(
			screensRightFillRef.current.children
		)

		// Timeline for screens animation
		const screensTimeline = gsap.timeline({
			paused: true, // Animation starts paused
			scrollTrigger: {
				trigger: screensElement,
				start: 'top top',
				end: `+=3000`,
				scrub: 1,
				id: 'Screens',
				pin: true,
				onUpdate(self) {
					const progress = self.progress

					const activeIndex = Math.floor(progress * subtitles.length)
					setActiveSubtitle(activeIndex)

					const activeStars = progress * stars.length

					// Оновити анімацію для зірочок
					stars.forEach((star, index) => {
						const starProgress = Math.min(Math.max(activeStars - index, 0), 1)
						gsap.to(star, {
							fill: starProgress > 0 ? '#7df0fe' : '#55577d',
							stroke: starProgress > 0 ? '#7df0fe' : '#55577d',
							scale: 0.8 + 0.2 * starProgress,
							duration: 0.3,
						})
					})

					// Оновити довжину лінії
					const progressBar = document.querySelector('.progress-line')
					if (progressBar) {
						gsap.to(progressBar, {
							width: `${progress * 100}%`,
							duration: 0.3,
							ease: 'linear',
						})
					}
				},
			},
		})

		gsap.set(leftBlocks, { autoAlpha: 0, position: 'absolute' })
		gsap.set(leftBlocks[0], { autoAlpha: 1, position: 'absolute' })

		gsap.set(screensLeftFill, { autoAlpha: 0, position: 'absolute' })
		gsap.set(screensLeftFill[0], { autoAlpha: 1, position: 'absolute' })

		gsap.set(screensRightFill, { autoAlpha: 0, position: 'absolute' })
		gsap.set(screensRightFill[0], { autoAlpha: 1, position: 'absolute' })

		leftBlocks.forEach((item, index) => {
			if (index === leftBlocks.length - 1) {
				// Для останнього блоку не додаємо анімацію приховування
				screensTimeline.to(item, { autoAlpha: 1 }, index)
			} else {
				screensTimeline
					.to(item, { autoAlpha: 1 }, index)
					.to(item, { autoAlpha: 0 }, index + 1)
			}
		})

		screensLeftFill.forEach((item, index) => {
			if (index === screensLeftFill.length - 1) {
				// Для останнього блоку не додаємо анімацію приховування
				screensTimeline.to(item, { autoAlpha: 1 }, index)
			} else {
				screensTimeline
					.to(item, { autoAlpha: 1 }, index)
					.to(item, { autoAlpha: 0 }, index + 1)
			}
		})

		screensRightFill.forEach((item, index) => {
			if (index === screensRightFill.length - 1) {
				// Для останнього блоку не додаємо анімацію приховування
				screensTimeline.to(item, { autoAlpha: 1 }, index)
			} else {
				screensTimeline
					.to(item, { autoAlpha: 1 }, index)
					.to(item, { autoAlpha: 0 }, index + 1)
			}
		})

		return () => {
			if (screensTimeline) screensTimeline.kill()
		}
	}, [])

	return (
		<>
			<div className='allScreens-wrapper'>
				<div className='allScreens' ref={screensRef}>
					<div className='screens screen'>
						<div className='screens-container'>
							<div className='screen-left'>
								<div className='screen-stars'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										viewBox='0 0 16 16'
										fill='none'
										className='screen-star'
									>
										<path
											d='M0.401392 8.00061C0.360855 8.93342 4.104 8.19014 5.66731 9.5349C7.3891 11.016 6.66511 14.9102 7.66333 14.8855C8.66154 14.8607 8.27286 10.994 10.1265 9.42388C11.8094 7.99835 15.497 8.2389 15.5363 7.62379C15.5756 7.00869 11.8214 7.12602 10.2885 5.67271C8.75553 4.21937 9.05227 0.705661 8.27434 0.738922C7.4964 0.772183 7.49122 4.25084 5.82933 5.78373C4.1674 7.31664 0.441929 7.0678 0.401392 8.00061Z'
											fill='#7DF0FE'
										/>
									</svg>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='2'
										height='18'
										viewBox='0 0 2 18'
										fill='none'
										className='screen-star non-Active'
									>
										<path
											d='M1 1L0.999999 17'
											stroke-width='2'
											stroke-linecap='round'
										/>
									</svg>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										viewBox='0 0 16 16'
										fill='none'
										className='screen-star nonActive'
									>
										<path d='M0.401392 8.00061C0.360855 8.93342 4.104 8.19014 5.66731 9.5349C7.3891 11.016 6.66511 14.9102 7.66333 14.8855C8.66154 14.8607 8.27286 10.994 10.1265 9.42388C11.8094 7.99835 15.497 8.2389 15.5363 7.62379C15.5756 7.00869 11.8214 7.12602 10.2885 5.67271C8.75553 4.21937 9.05227 0.705661 8.27434 0.738922C7.4964 0.772183 7.49122 4.25084 5.82933 5.78373C4.1674 7.31664 0.441929 7.0678 0.401392 8.00061Z' />
									</svg>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='2'
										height='18'
										viewBox='0 0 2 18'
										fill='none'
										className='screen-star'
									>
										<path
											d='M1 1L0.999999 17'
											stroke-width='2'
											stroke-linecap='round'
										/>
									</svg>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										viewBox='0 0 16 16'
										fill='none'
										className='screen-star nonActive'
									>
										<path d='M0.401392 8.00061C0.360855 8.93342 4.104 8.19014 5.66731 9.5349C7.3891 11.016 6.66511 14.9102 7.66333 14.8855C8.66154 14.8607 8.27286 10.994 10.1265 9.42388C11.8094 7.99835 15.497 8.2389 15.5363 7.62379C15.5756 7.00869 11.8214 7.12602 10.2885 5.67271C8.75553 4.21937 9.05227 0.705661 8.27434 0.738922C7.4964 0.772183 7.49122 4.25084 5.82933 5.78373C4.1674 7.31664 0.441929 7.0678 0.401392 8.00061Z' />
									</svg>
								</div>
								<div className='leftBlocksText' ref={leftBlocksRef}>
									<div className='firstScreen-texts screenLeftText'>
										<div className='firstScreen-titles'>
											<div className='firstScreen-title'>Portfolio</div>
											<div className='firstScreen-title2'>Intelligence </div>
											<div className='firstScreen-title-mob'>Strategic </div>
											<div className='firstScreen-title2-mob'>
												Analytics Manager
											</div>
										</div>
										<div className='firstScreen-text'>
											Your AI Agent for Strategic Analytics Management works
											autonomously to uncover missed opportunities to grow your
											book of business within risk appetite.
										</div>

										<div className='firstScreen-text-mob'>
											SAM analyzes premiums, losses, and profits, identifies
											growth opportunities, and automates tasks.
										</div>
									</div>

									<div className='secondScreen-texts screenLeftText'>
										<div className='firstScreen-titles'>
											<div className='firstScreen-title'>Pre-Qualifier</div>
											<div className='firstScreen-title2'>Assistance </div>
										</div>
										<div className='firstScreen-text'>
											Pre-Qualifier triages submissions based on appetite to
											enhance turnarounds, conversions, and underwriting
											adherence.
										</div>
										<div className='firstScreen-text-mob'>
											Pre-Qualifier analyzes reports to find financial risks,
											potential savings, and revenue prospects.
										</div>
									</div>

									<div className='thirdScreen-texts screenLeftText'>
										<div className='firstScreen-titles'>
											<div className='firstScreen-title2'>Step-Up </div>
											<div className='firstScreen-title'>Underwriting </div>
										</div>
										<div className='firstScreen-text'>
											Step-Up Underwriting runs simulations to reevaluate
											previously rejected submissions using new underwriting
											criteria.
										</div>

										<div className='firstScreen-text-mob'>
											Step-Up Underwriting runs simulations to calculate risk
											scores and assess approval statuses.
										</div>
									</div>
								</div>
							</div>
							<div className='firstScreens screen-section' ref={screenSection}>
								<div className='screensLeftFill'>
									<div
										className={`screensLeft ${
											isRightCardOpen ? 'closed' : 'open'
										}`}
										onClick={handleLeftCardClick}
										ref={screensLeftFillRef}
									>
										<div className='firstScreenLeftMob'>
											<div className='logo-mob'>
												<img src={logoMobCLose} className='logo-mob-img'></img>
											</div>
											<div className='firstScreen-left-container'>
												<div className='firstScreen-left-topScroll'>
													<div className='firstScreen-left-Top'>
														<div className='firstScreen-left-title'>
															PRO-AI’s Chat
														</div>
														<img
															src={leftFirstScreen}
															alt='leftFirstScreen'
															className='firstScreen-left-Fill'
														></img>

														<img
															src={leftFirstScreenMob}
															alt='leftFirstScreen'
															className='firstScreen-left-FillMob'
														></img>
													</div>
												</div>
												<div className='firstScreen-left-footer'>
													<div className='firstScreen-left-footerText'>
														<svg
															xmlns='http://www.w3.org/2000/svg'
															width='25'
															height='24'
															viewBox='0 0 25 24'
															fill='none'
														>
															<path
																d='M12.2804 6.00339C13.3126 5.97103 14.3393 6.1675 15.2867 6.57871C16.2341 6.98991 17.0788 7.60566 17.7602 8.3818C18.4415 9.15794 18.9427 10.0752 19.2278 11.0679C19.5128 12.0606 19.5747 13.104 19.4089 14.1235C19.2432 15.1429 18.8539 16.1129 18.269 16.9642C17.6841 17.8154 16.9181 18.5266 16.0259 19.0469C15.1338 19.5672 14.1375 19.8836 13.1086 19.9734C12.0797 20.0633 11.0437 19.9243 10.0749 19.5666L12.4997 13L12.2804 6.00339Z'
																fill='url(#paint0_radial_2418_8681)'
															/>
															<defs>
																<radialGradient
																	id='paint0_radial_2418_8681'
																	cx='0'
																	cy='0'
																	r='1'
																	gradientUnits='userSpaceOnUse'
																	gradientTransform='translate(12.4997 13) rotate(30) scale(7)'
																>
																	<stop
																		offset='0.686804'
																		stop-color='#1D2738'
																	/>
																	<stop offset='1' stop-color='#ABAECD' />
																</radialGradient>
															</defs>
														</svg>
														Drafting SQL Script
													</div>
													<img
														src={ask}
														alt='ask'
														className='firstScreen-left-footerImg'
													></img>
												</div>
											</div>
										</div>
										<div className='firstScreenLeftMob'>
											<div className='logo-mob'>
												<img src={logoMobCLose} className='logo-mob-img'></img>
											</div>
											<div className='secondScreens-left-container'>
												<div className='secondScreen-left-title '>
													PRO-AI Platform
												</div>

												<div className='secondScreen-left'>
													<div className='secondScreen-left-container'>
														<div className='secondScreen-fill-left'>
															<div className='firstScreenFill-title '>
																<svg
																	xmlns='http://www.w3.org/2000/svg'
																	width='24'
																	height='24'
																	viewBox='0 0 24 24'
																	fill='none'
																>
																	<g clip-path='url(#clip0_2418_8772)'>
																		<path
																			d='M11.9994 22.096C6.42346 22.096 1.90325 17.5758 1.90325 11.9999C1.90325 6.42395 6.42346 1.90373 11.9994 1.90373C17.5753 1.90373 22.0956 6.42395 22.0956 11.9999C22.0956 17.5758 17.5753 22.096 11.9994 22.096ZM11.9994 23.5383C18.3719 23.5383 23.5379 18.3724 23.5379 11.9999C23.5379 5.62738 18.3719 0.461426 11.9994 0.461426C5.62689 0.461426 0.460938 5.62738 0.460938 11.9999C0.460938 18.3724 5.62689 23.5383 11.9994 23.5383Z'
																			fill='#98D9FF'
																		/>
																		<path
																			d='M10.5605 16.3268C10.5605 15.5303 11.2063 14.8845 12.0029 14.8845C12.7994 14.8845 13.4452 15.5303 13.4452 16.3268C13.4452 17.1234 12.7994 17.7691 12.0029 17.7691C11.2063 17.7691 10.5605 17.1234 10.5605 16.3268Z'
																			fill='#98D9FF'
																		/>
																		<path
																			d='M10.7019 7.66587C10.6251 6.89745 11.2285 6.23071 12.0007 6.23071C12.773 6.23071 13.3763 6.89745 13.2995 7.66587L12.7937 12.7247C12.7529 13.1321 12.4101 13.4423 12.0007 13.4423C11.5913 13.4423 11.2486 13.1321 11.2078 12.7247L10.7019 7.66587Z'
																			fill='#98D9FF'
																		/>
																		<path
																			d='M21.8651 11.9999C21.8651 17.4485 17.4482 21.8653 11.9997 21.8653V22.3269C17.7031 22.3269 22.3266 17.7034 22.3266 11.9999H21.8651ZM11.9997 2.13456C17.4482 2.13456 21.8651 6.55144 21.8651 11.9999H22.3266C22.3266 6.29653 17.7031 1.67302 11.9997 1.67302V2.13456ZM2.13431 11.9999C2.13431 6.55144 6.55119 2.13456 11.9997 2.13456V1.67302C6.29628 1.67302 1.67278 6.29653 1.67278 11.9999H2.13431ZM11.9997 21.8653C6.55119 21.8653 2.13431 17.4485 2.13431 11.9999H1.67278C1.67278 17.7034 6.29628 22.3269 11.9997 22.3269V21.8653ZM23.3074 11.9999C23.3074 18.245 18.2448 23.3076 11.9997 23.3076V23.7692C18.4997 23.7692 23.7689 18.4999 23.7689 11.9999H23.3074ZM11.9997 0.692251C18.2448 0.692251 23.3074 5.75487 23.3074 11.9999H23.7689C23.7689 5.49996 18.4997 0.230713 11.9997 0.230713V0.692251ZM0.692007 11.9999C0.692007 5.75487 5.75462 0.692251 11.9997 0.692251V0.230713C5.49972 0.230713 0.230469 5.49996 0.230469 11.9999H0.692007ZM11.9997 23.3076C5.75462 23.3076 0.692007 18.245 0.692007 11.9999H0.230469C0.230469 18.4999 5.49972 23.7692 11.9997 23.7692V23.3076ZM10.7904 16.3269C10.7904 15.6578 11.3328 15.1153 12.0019 15.1153V14.6538C11.0779 14.6538 10.3288 15.4029 10.3288 16.3269H10.7904ZM12.0019 15.1153C12.6711 15.1153 13.2135 15.6578 13.2135 16.3269H13.675C13.675 15.4029 12.9259 14.6538 12.0019 14.6538V15.1153ZM13.2135 16.3269C13.2135 16.996 12.6711 17.5384 12.0019 17.5384V17.9999C12.9259 17.9999 13.675 17.2509 13.675 16.3269H13.2135ZM12.0019 17.5384C11.3328 17.5384 10.7904 16.996 10.7904 16.3269H10.3288C10.3288 17.2509 11.0779 17.9999 12.0019 17.9999V17.5384ZM10.9305 7.64288C10.8673 7.01034 11.364 6.46148 11.9997 6.46148V5.99994C11.0909 5.99994 10.3809 6.78456 10.4713 7.68881L10.9305 7.64288ZM11.9997 6.46148C12.6354 6.46148 13.1321 7.01034 13.0689 7.64288L13.5281 7.68881C13.6185 6.78456 12.9085 5.99994 11.9997 5.99994V6.46148ZM13.0689 7.64288L12.563 12.7017L13.0222 12.7476L13.5281 7.68881L13.0689 7.64288ZM12.563 12.7017C12.5341 12.9911 12.2905 13.2115 11.9997 13.2115V13.673C12.5277 13.673 12.9697 13.273 13.0222 12.7476L12.563 12.7017ZM11.9997 13.2115C11.7089 13.2115 11.4653 12.9911 11.4364 12.7017L10.9772 12.7476C11.0297 13.273 11.4717 13.673 11.9997 13.673V13.2115ZM11.4364 12.7017L10.9305 7.64288L10.4713 7.68881L10.9772 12.7476L11.4364 12.7017Z'
																			fill='#98D9FF'
																		/>
																	</g>
																	<defs>
																		<clipPath id='clip0_2418_8772'>
																			<rect
																				width='24'
																				height='24'
																				fill='white'
																			/>
																		</clipPath>
																	</defs>
																</svg>
																Risk Analysis Results
															</div>
															<div className='secondScreenFill-subtitles'>
																<div className='cardTop-subtitle'>
																	Risk Score
																</div>
																<div className=' number'>68/100</div>
																<div className='cardTop-subtitle'>
																	(Moderate Risk)
																</div>
															</div>

															<div className='secondScreen-right-fill'>
																<img
																	src={secondScreenImage}
																	alt='secondScreenImage'
																></img>
																<img
																	src={secondScreenImage2}
																	alt='secondScreenImage2'
																></img>
															</div>

															<div className='secondScreen-right-fill-mob'>
																<img
																	src={secondScreenImageMob}
																	alt='secondScreenImage'
																></img>
																<img
																	src={secondScreenImageMob2}
																	alt='secondScreenImage2'
																></img>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div className='firstScreenLeftMob'>
											<div className='logo-mob'>
												<img src={logoMobCLose} className='logo-mob-img'></img>
											</div>
											<div className='thirdScreen-left-container'>
												<div className='thirdScreen-left-Top'>
													<div className='thirdScreen-left-title'>
														PRO-AI’s Chat
													</div>
													<img
														src={thirdScreenImage}
														alt='thirdScreenImage'
														className='thirdScreen-left-Fill'
													></img>
													<img
														src={thirdScreenImageMob}
														alt='thirdScreenImageMob'
														className='thirdScreen-left-Fill-mob'
													></img>
												</div>
												<div className='thirdScreen-left-footer'>
													<div className='thirdScreen-left-footerText'>
														<svg
															xmlns='http://www.w3.org/2000/svg'
															width='25'
															height='24'
															viewBox='0 0 25 24'
															fill='none'
														>
															<path
																d='M12.2804 6.00339C13.3126 5.97103 14.3393 6.1675 15.2867 6.57871C16.2341 6.98991 17.0788 7.60566 17.7602 8.3818C18.4415 9.15794 18.9427 10.0752 19.2278 11.0679C19.5128 12.0606 19.5747 13.104 19.4089 14.1235C19.2432 15.1429 18.8539 16.1129 18.269 16.9642C17.6841 17.8154 16.9181 18.5266 16.0259 19.0469C15.1338 19.5672 14.1375 19.8836 13.1086 19.9734C12.0797 20.0633 11.0437 19.9243 10.0749 19.5666L12.4997 13L12.2804 6.00339Z'
																fill='url(#paint0_radial_2418_8681)'
															/>
															<defs>
																<radialGradient
																	id='paint0_radial_2418_8681'
																	cx='0'
																	cy='0'
																	r='1'
																	gradientUnits='userSpaceOnUse'
																	gradientTransform='translate(12.4997 13) rotate(30) scale(7)'
																>
																	<stop
																		offset='0.686804'
																		stop-color='#1D2738'
																	/>
																	<stop offset='1' stop-color='#ABAECD' />
																</radialGradient>
															</defs>
														</svg>
														Drafting SQL Script
													</div>
													<img
														src={ask}
														alt='ask'
														className='thirdScreen-left-footerImg'
													></img>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className='firstScreen-right'>
									<div className='firstScreen-right-container'>
										<div className='firstScreen-title-right'>
											PRO-AI Platform
										</div>
										<div className='firstScreen-subtitles'>
											{subtitles.map((subtitle, index) => (
												<div
													key={index}
													className={`subtitle ${
														activeSubtitle === index ? 'active' : ''
													}`}
												>
													{activeSubtitle === index && (
														<svg
															xmlns='http://www.w3.org/2000/svg'
															width='24'
															height='24'
															viewBox='0 0 24 24'
															fill='none'
														>
															<path
																d='M12.115 6.99644C12.1148 6.23911 14.9341 6.76747 16.1658 5.64288C17.5224 4.40427 17.1002 1.25385 17.8577 1.25377C18.6152 1.25368 18.1931 4.40428 19.5497 5.64288C20.7814 6.76743 23.5907 6.49731 23.6004 6.99644C23.61 7.49557 20.7619 7.47618 19.5497 8.68839C18.3375 9.90062 18.4476 12.7504 17.8577 12.7391C17.2678 12.7278 17.378 9.90063 16.1658 8.68839C14.9536 7.47614 12.1152 7.75377 12.115 6.99644Z'
																fill='#98D9FF'
															/>
															<path
																d='M1.05264 13.7427C1.06762 13.2164 3.87166 13.5137 5.10341 12.3891C6.46002 11.1505 6.17702 3.50004 6.79531 3.50003C7.4136 3.50002 7.13067 11.1505 8.48731 12.3891C9.71904 13.5137 12.5226 13.2001 12.538 13.7427C12.5534 14.2853 9.92922 13.8693 8.48731 15.4347C7.0454 17 7.54541 23 6.79532 23C6.04522 23.0001 7.04532 17.0001 5.1034 15.4347C3.16148 13.8693 1.03766 14.269 1.05264 13.7427Z'
																fill='#98D9FF'
															/>
														</svg>
													)}
													{subtitle}
												</div>
											))}
										</div>

										<div
											className={`screensRightFill ${
												isRightCardOpen ? 'open' : 'closed'
											}`}
											onClick={handleRightCardClick}
											ref={screensRightFillRef}
										>
											<div className='firstScreenRightMob'>
												<div className='logo-mob'>
													<img
														src={logoMobCLose}
														className='logo-mob-img'
													></img>
												</div>
												<div className='screensRight'>
													<div className='firstScreenFill'>
														<div className='firstScreenFill-container'>
															<div className='firstScreenFill-title'>
																<svg
																	xmlns='http://www.w3.org/2000/svg'
																	width='18'
																	height='18'
																	viewBox='0 0 18 18'
																	fill='none'
																>
																	<g clip-path='url(#clip0_2418_8702)'>
																		<path
																			d='M8.99749 9.81442C5.61772 9.81442 2.78546 8.82153 2.01219 7.48291C1.87623 7.71852 1.79688 7.96336 1.79688 8.21743V10.4081C1.79688 12.1004 5.02162 13.4735 8.99749 13.4735C12.9758 13.4735 16.2018 12.1004 16.2018 10.4081V8.21743C16.2018 7.96336 16.1212 7.71852 15.984 7.48291C15.2108 8.82091 12.3809 9.81442 8.99749 9.81442Z'
																			fill='#98D9FF'
																		/>
																		<path
																			d='M8.99749 14.3398C5.61772 14.3398 2.78546 13.3457 2.01219 12.0095C1.87623 12.2439 1.79688 12.4887 1.79688 12.7422V14.9347C1.79688 16.6276 5.02162 18.0001 8.99749 18.0001C12.9758 18.0001 16.2018 16.6283 16.2018 14.9347V12.7422C16.2018 12.4887 16.1212 12.2439 15.984 12.0101C15.2108 13.3457 12.3809 14.3398 8.99749 14.3398Z'
																			fill='#98D9FF'
																		/>
																		<path
																			d='M16.0049 3.10181C15.8635 4.342 12.7863 5.33427 8.99749 5.33427C5.21048 5.33427 2.13338 4.342 1.9925 3.10242C1.86885 3.32758 1.79688 3.56257 1.79688 3.80434V5.99497C1.79688 7.68793 5.02162 9.06038 8.99749 9.06038C12.9758 9.06038 16.2018 7.68855 16.2018 5.99497V3.80434C16.2018 3.56257 16.1286 3.32758 16.0049 3.10181Z'
																			fill='#98D9FF'
																		/>
																		<path
																			d='M8.99838 4.63903C12.8758 4.63903 16.0175 3.60123 16.0175 2.31921C16.0175 1.03841 12.8758 0 8.99838 0C5.12339 0.000615174 1.98047 1.03903 1.98047 2.31982C1.98047 3.60123 5.12339 4.63903 8.99838 4.63903Z'
																			fill='#98D9FF'
																		/>
																	</g>
																	<defs>
																		<clipPath id='clip0_2418_8702'>
																			<rect
																				width='18'
																				height='18'
																				fill='white'
																			/>
																		</clipPath>
																	</defs>
																</svg>
																General SQL Queries
															</div>
															<div className='firstScreenFill-cardTop'>
																<div className='cardTop-subtitle'>
																	CommercialAutoDatabase
																</div>
																<div className='cardTop-img'>
																	<img
																		src={firstScreenFillImage}
																		alt='firstScreenFillImage'
																	></img>
																</div>

																<div className='cardTop-img-mob'>
																	<img
																		src={rightFirstScreenMobTop}
																		alt='rightFirstScreenMobTop'
																	></img>
																</div>
															</div>
															<div className='firstScreenFill-cardBottom'>
																<div className='cardBottom-title'>
																	<svg
																		xmlns='http://www.w3.org/2000/svg'
																		width='18'
																		height='18'
																		viewBox='0 0 18 18'
																		fill='none'
																	>
																		<g clip-path='url(#clip0_2418_8721)'>
																			<path
																				d='M17 17H1V1'
																				stroke='#98D9FF'
																				stroke-linecap='round'
																				stroke-linejoin='round'
																			/>
																			<path
																				d='M1 13.5L9 6L12 9L16.5 4.5'
																				stroke='#98D9FF'
																				stroke-linecap='round'
																				stroke-linejoin='round'
																			/>
																		</g>
																		<defs>
																			<clipPath id='clip0_2418_8721'>
																				<rect
																					width='18'
																					height='18'
																					fill='white'
																				/>
																			</clipPath>
																		</defs>
																	</svg>
																	Best Case Results
																</div>
																<div className='cardBottom-img'>
																	<img
																		src={firstScreenFillImage2}
																		alt='firstScreenFillImage2'
																	></img>
																</div>

																<div className='cardBottom-img-mob'>
																	<img
																		src={leftFirstScreenMobCenter}
																		alt='leftFirstScreenMobCenter'
																	></img>
																</div>
															</div>
															<div className='cardBottom-img'>
																<img
																	src={firstScreenFillImage3}
																	alt='firstScreenFillImage3'
																></img>
															</div>

															<div className='cardBottom-img-mob'>
																<img
																	src={leftFirstScreenMobBottom}
																	alt='leftFirstScreenMobBottom'
																></img>
															</div>
														</div>
													</div>
												</div>
											</div>

											<div className='firstScreenRightMob'>
												<div className='logo-mob'>
													<img
														src={logoMobCLose}
														className='logo-mob-img'
													></img>
												</div>
												<div className='screensRight'>
													<div className='secondScreenFill'>
														<img
															className='secondScreenFillImage'
															src={secondScreenFill}
															alt='secondScreenFill'
														></img>

														<img
															className='secondScreenFillImageMob'
															src={secondScreenFillImageMob}
															alt='secondScreenFillImageMob'
														></img>
													</div>
												</div>
											</div>

											<div className='firstScreenRightMob'>
												<div className='logo-mob'>
													<img
														src={logoMobCLose}
														className='logo-mob-img'
													></img>
												</div>
												<div className='screensRight'>
													<div className='thirdScreenFill'>
														<div className='firstScreenFill-container'>
															<div className='thirdScreenFill-cards'>
																<div className='firstScreenFill-title'>
																	<svg
																		xmlns='http://www.w3.org/2000/svg'
																		width='18'
																		height='18'
																		viewBox='0 0 18 18'
																		fill='none'
																	>
																		<g clip-path='url(#clip0_2418_8973)'>
																			<path
																				d='M8.99749 9.81442C5.61772 9.81442 2.78546 8.82153 2.01219 7.48291C1.87623 7.71852 1.79688 7.96336 1.79688 8.21743V10.4081C1.79688 12.1004 5.02162 13.4735 8.99749 13.4735C12.9758 13.4735 16.2018 12.1004 16.2018 10.4081V8.21743C16.2018 7.96336 16.1212 7.71852 15.984 7.48291C15.2108 8.82091 12.3809 9.81442 8.99749 9.81442Z'
																				fill='#98D9FF'
																			/>
																			<path
																				d='M8.99749 14.3398C5.61772 14.3398 2.78546 13.3457 2.01219 12.0095C1.87623 12.2439 1.79688 12.4887 1.79688 12.7422V14.9347C1.79688 16.6276 5.02162 18.0001 8.99749 18.0001C12.9758 18.0001 16.2018 16.6283 16.2018 14.9347V12.7422C16.2018 12.4887 16.1212 12.2439 15.984 12.0101C15.2108 13.3457 12.3809 14.3398 8.99749 14.3398Z'
																				fill='#98D9FF'
																			/>
																			<path
																				d='M16.0049 3.10181C15.8635 4.342 12.7863 5.33427 8.99749 5.33427C5.21048 5.33427 2.13338 4.342 1.9925 3.10242C1.86885 3.32758 1.79688 3.56257 1.79688 3.80434V5.99497C1.79688 7.68793 5.02162 9.06038 8.99749 9.06038C12.9758 9.06038 16.2018 7.68855 16.2018 5.99497V3.80434C16.2018 3.56257 16.1286 3.32758 16.0049 3.10181Z'
																				fill='#98D9FF'
																			/>
																			<path
																				d='M8.99838 4.63903C12.8758 4.63903 16.0175 3.60123 16.0175 2.31921C16.0175 1.03841 12.8758 0 8.99838 0C5.12339 0.000615174 1.98047 1.03903 1.98047 2.31982C1.98047 3.60123 5.12339 4.63903 8.99838 4.63903Z'
																				fill='#98D9FF'
																			/>
																		</g>
																		<defs>
																			<clipPath id='clip0_2418_8973'>
																				<rect
																					width='18'
																					height='18'
																					fill='white'
																				/>
																			</clipPath>
																		</defs>
																	</svg>
																	Dark Mode Simulation
																</div>

																<div className='firstScreenFill-cardTop'>
																	<div className='cardTop-subtitle'>
																		Simulated Application
																	</div>
																	<div className='cardTop-img'>
																		<img
																			src={thirdScreenFill}
																			alt='thirdScreenFill'
																		></img>
																	</div>

																	<div className='cardTop-imgMob'>
																		<img
																			src={thirdScreenFilMob}
																			alt='thirdScreenFilMob'
																		></img>
																	</div>
																</div>

																<div className='thirdScreenFill-cardBottom'>
																	<div className='cardBottom-title'>
																		Dark Mode Assumptions
																	</div>
																	<div className='cardBottom-img'>
																		<img
																			src={thirdScreenFill2}
																			alt='thirdScreenFill'
																		></img>
																	</div>
																	<div className='cardBottom-imgMob'>
																		<img
																			src={thirdScreenFilMob2}
																			alt='thirdScreenFilMob2'
																		></img>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
