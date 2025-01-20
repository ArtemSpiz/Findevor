import React from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Header } from './Header'
import '../styles/Main.css'
import firstCard from '../assets/firstCard.png'
import secondCard from '../assets/secondCard.png'
import starsSub from '../assets/starsSub.png'
import logo1 from '../assets/logo1.png'
import starStart from '../assets/stare-animation-end.png'
import platStar from '../assets/platform-star.png'

gsap.registerPlugin(ScrollTrigger)

export function Main() {
	React.useEffect(() => {
		const mainTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: '.box.a',
				start: 'bottom bottom', // Починаємо, коли нижній край боксу доходить до нижнього краю вікна
				end: '+=1000',
				scrub: true,
				pin: true,
				onEnter: () => {
					// Затримка перед початком анімації
					setTimeout(() => {
						mainTimeline.play() // Запускаємо анімацію після затримки
					}, 500) // Затримка 500 мс
				},
				onLeaveBack: () => {
					mainTimeline.pause(0) // Скидаємо анімацію при поверненні назад
				},
			},
			paused: true, // Спочатку анімація зупинена
		})

		mainTimeline
			// Зникає Header
			.to('.Header', {
				opacity: 0,
				duration: 0.5,
			})
			// Зникають основні тексти
			.to(
				'.main-texts',
				{
					opacity: 0,
					duration: 0.7,
				},
				'<'
			)
			.to(
				'.main-footer',
				{
					opacity: 0,
					duration: 0.7,
				},
				'<'
			)

			.to('.main', {
				overflowY: 'hidden',
			})

			// Карти рухаються
			.to(
				'.firstCard',
				{
					width: '400px',
					x: '50%',
					zIndex: -2,
					y: '-75%',
					duration: 1,
					rotate: 0,
				},
				'<'
			)
			.to(
				'.secondCard',
				{
					width: '400px',
					zIndex: -3,
					x: '97%',
					y: '-75%',
					rotate: 0,
					duration: 1,
				},
				'<'
			)
			// З'являється платформа (з невеликою затримкою)
			.to(
				'.box.b',
				{
					opacity: 1,
					duration: 1,
				},
				'<'
			)
			// Поява текстів платформи
			.fromTo(
				'.platform-texts',
				{
					opacity: 0,
					y: '90%',
				},
				{
					opacity: 1,
					y: '100%', // Кінцева позиція
					duration: 1.5,
					ease: 'power2.out', // Більш плавний перехід
					overwrite: true,
				},
				'-=0.2' // Починаємо одночасно з появою box.b
			)
			// Поява футера платформи
			.fromTo(
				'.platform-footer',
				{
					opacity: 0,
					y: 230,
				},
				{
					opacity: 1,
					y: 250,
					duration: 1.5,
					ease: 'power2.out',
					overwrite: true,
				},
				'-=0.2'
			)

		// Уникаємо зникнення текстів після появи
		gsap.set('.platform-texts, .platform-footer', { clearProps: 'all' })

		return () => {
			if (mainTimeline) mainTimeline.kill()
		}
	}, [])

	return (
		<>
			<div className='box a'>
				<div className='main'>
					<div className='Header'>
						<Header />
					</div>
					<div className='main-container'>
						<div className='main-texts'>
							<div className='main-title'>
								<a className='main-title2'>Transforming Insurance</a> with
								Agentic AI Insights
							</div>
							<div className='main-subtitle'>
								Maximize profitable growth, streamline workflows, and make
								smarter risk decisions with Findevor’s premium AI solutions.
							</div>
							<div className='main-button'>
								<button className='main-btn'>
									Schedule a Demo
									<img className='stars-btn' src={starsSub} alt='stars' />
								</button>
							</div>
							<div className='main-stars'>
								<div className='main-star top'>
									<div className='star-left'>
										<img
											src={starStart}
											alt='starStart'
											className='star-animation star-left-animation'
										/>
									</div>
									<div className='star-right'>
										<img
											src={starStart}
											alt='starStart'
											className='star-animation star-right-animation'
										/>
									</div>
								</div>

								<div className='main-star center'>
									<div className='star-left'>
										<img
											src={starStart}
											alt='starStart'
											className='star-animation star-left-animation'
										/>
									</div>
									<div className='star-right'>
										<img
											src={starStart}
											alt='starStart'
											className='star-animation star-right-animation'
										/>
									</div>
								</div>

								<div className='main-star bottom'>
									<div className='star-left'>
										<img
											src={starStart}
											alt='starStart'
											className='star-animation star-left-animation'
										/>
									</div>
									<div className='star-right'>
										<img
											src={starStart}
											alt='starStart'
											className='star-animation star-right-animation'
										/>
									</div>
								</div>
							</div>
						</div>

						<div className='main-carts'>
							<img className='firstCard' src={firstCard} alt='First Card' />
							<img className='secondCard' src={secondCard} alt='Second Card' />
						</div>
						<div className='main-footer'>
							<div className='main-text'>Experience with Industry Leaders</div>
							<div className='main-wrapper'>
								<div className='main-logos'>
									<div className='logo-track'>
										{[...Array(16)].map((_, i) => (
											<img
												key={i}
												className='main-logo'
												src={logo1}
												alt={`Logo ${i + 1}`}
											/>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='box b'>
				<div className='platform'>
					<div className='platform-container'>
						<div className='platform-top'>
							<div className='platform-texts'>
								<div className='platform-titles'>
									<div className='platform-title'>
										<a className='platform-title2'>PRO-AI</a> Platform
									</div>
									<div className='platform-subtitle'>
										Your end-to-end solution
										<img
											className='stars-subtitle'
											src={starsSub}
											alt='stars'
										/>
									</div>
								</div>
								<div className='platform-text'>
									The PRO-AI Platform delivers agentic AI workflows to drive
									profitable growth by streamlining advanced data analytics,
									pre-qualification, and underwriting revaluation.
								</div>
							</div>
						</div>
						<div className='platform-footer'>
							<div className='platform-footer-text'>
								Let’s explore how PRO-AI can transform your business.
							</div>

							<div className='platform-stars'>
								<div className='platformLeft-star'>
									<img
										src={platStar}
										alt='platStar'
										className='platform-star '
									/>
								</div>
								<div className='platformRight-star'>
									<img
										src={platStar}
										alt='platStar'
										className='platform-star '
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
