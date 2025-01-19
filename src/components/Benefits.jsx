import { useState, useEffect } from 'react'
import '../styles/Benefits.css'
import benefitsCircle from '../assets/benefitsCircle.png'
import rocket from '../assets/rocket.png'

export function Benefits() {
	const [activeBenefit, setActiveBenefit] = useState(1)

	const benefits = [
		{
			id: 1,
			title: 'Recover lost revenue',
			subtitle: 'with premium leakage solutions.',
			icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='38'
					height='38'
					viewBox='0 0 38 38'
					fill='none'
				>
					<path
						d='M27 21C21.4772 21 17 18.7614 17 16C17 13.2386 21.4772 11 27 11C32.5228 11 37 13.2386 37 16C37 18.7614 32.5228 21 27 21Z'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M17 24C17 26.7614 21.4772 29 27 29C32.5228 29 37 26.7614 37 24'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M1 14C1 16.7614 5.47716 19 11 19C13.2517 19 15.3294 18.628 17.001 18'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M1 21C1 23.7614 5.47716 26 11 26C13.2512 26 15.3286 25.628 17 25.0004'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M1 6V28C1 30.7614 5.47716 33 11 33C13.2513 33 15.3286 32.6278 17 32'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M21 12V6'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M17 16V32C17 34.7614 21.4772 37 27 37C32.5228 37 37 34.7614 37 32V16'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M11 11C5.47716 11 1 8.76142 1 6C1 3.23858 5.47716 1 11 1C16.5228 1 21 3.23858 21 6C21 8.76142 16.5228 11 11 11Z'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
			),
		},
		{
			id: 2,
			title: 'Improve profitability',
			subtitle: 'with precise risk evaluation.',
			icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='48'
					height='48'
					viewBox='0 0 48 48'
					fill='none'
				>
					<path
						d='M40 40H8V8'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M8 33L24 18L30 24L39 15'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M18 40L18 29'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
					/>
					<path
						d='M12 40L12 35'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
					/>
					<path
						d='M23.9885 40L24 24'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
					/>
					<path
						d='M30 40L30 28'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
					/>
					<path
						d='M36 40L36 24'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
					/>
				</svg>
			),
		},
		{
			id: 3,
			title: 'Expand with confidence',
			subtitle: 'into underserved markets.',
			icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='48'
					height='48'
					viewBox='0 0 48 48'
					fill='none'
				>
					<path
						d='M12 6H6M6 6V12M6 6L12 12'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M36 6H42M42 6V12M42 6L36 12'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M12 42H6M6 42V36M6 42L12 36'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M36 42H42M42 42V36M42 42L36 36'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M25.029 35.3827L33.029 30.5827C33.6314 30.2213 34 29.5703 34 28.8677V21.1325C34 20.4299 33.6314 19.779 33.029 19.4175L25.029 14.6175C24.3956 14.2375 23.6044 14.2375 22.971 14.6175L14.971 19.4175C14.3686 19.779 14 20.4299 14 21.1325V28.8677C14 29.5703 14.3686 30.2213 14.971 30.5827L22.971 35.3827C23.6044 35.7627 24.3956 35.7627 25.029 35.3827Z'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M15 21L24 25.999M24 25.999C24 25.999 31.5274 21.8984 33 21M24 25.999V35'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
			),
		},
		{
			id: 4,
			title: 'Launch products faster',
			subtitle: 'with streamlined workflows.',
			icon: <img src={rocket} alt='Rocket icon' />,
		},
	]

	const scrollBenefit = direction => {
		setActiveBenefit(prev =>
			direction === 'up'
				? prev === benefits.length
					? 1
					: prev + 1
				: prev === 1
				? benefits.length
				: prev - 1
		)
	}

	const handleScroll = e => {
		e.deltaY > 0 ? scrollBenefit('up') : scrollBenefit('down')
	}

	useEffect(() => {
		const slider = document.querySelector('.benefits-slider')
		slider.addEventListener('wheel', handleScroll)
		return () => slider.removeEventListener('wheel', handleScroll)
	}, [])

	useEffect(() => {
		const interval = setInterval(() => scrollBenefit('up'), 3000)
		return () => clearInterval(interval)
	}, [])

	const getClassName = index => {
		const total = benefits.length
		const isActive = index === activeBenefit - 1
		const isPrev = index === (activeBenefit - 2 + total) % total
		const isNext = index === activeBenefit % total

		if (isActive) return 'benefit visible' // Активний
		if (isPrev) return 'benefit above' // Попередній
		if (isNext) return 'benefit below' // Наступний
		return 'benefit hidden' // Інші
	}

	return (
		<div className='benefits'>
			<div className='benefits-container'>
				<div className='benefits-title'>
					Why Choose <a className='benefits-title2'>Findevor?</a>
				</div>
				<div className='benefits-main'>
					<div className='benefits-circle'>
						<img src={benefitsCircle} className='benefits-img' alt='Circle' />
					</div>
					<div className='benefits-slider'>
						{benefits.map((benefit, index) => (
							<div key={benefit.id} className={getClassName(index)}>
								{benefit.icon}
								<div className='benefit-right'>
									<div className='benefit-title'>{benefit.title}</div>
									<div className='benefit-subtitle'>{benefit.subtitle}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
