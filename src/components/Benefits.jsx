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
			iconMob: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='30'
					height='30'
					viewBox='0 0 20 20'
					fill='none'
				>
					<path
						d='M14 11C11.2386 11 9 9.8807 9 8.5C9 7.11929 11.2386 6 14 6C16.7614 6 19 7.11929 19 8.5C19 9.8807 16.7614 11 14 11Z'
						stroke='#2E3F5C'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M9 12.5C9 13.8807 11.2386 15 14 15C16.7614 15 19 13.8807 19 12.5'
						stroke='#2E3F5C'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M1 7.5C1 8.8807 3.23858 10 6 10C7.12583 10 8.1647 9.814 9.0005 9.5'
						stroke='#2E3F5C'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M1 11C1 12.3807 3.23858 13.5 6 13.5C7.12561 13.5 8.1643 13.314 9 13.0002'
						stroke='#2E3F5C'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M1 3.5V14.5C1 15.8807 3.23858 17 6 17C7.12563 17 8.1643 16.8139 9 16.5'
						stroke='#2E3F5C'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M11 6.5V3.5'
						stroke='#2E3F5C'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M9 8.5V16.5C9 17.8807 11.2386 19 14 19C16.7614 19 19 17.8807 19 16.5V8.5'
						stroke='#2E3F5C'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M6 6C3.23858 6 1 4.88071 1 3.5C1 2.11929 3.23858 1 6 1C8.7614 1 11 2.11929 11 3.5C11 4.88071 8.7614 6 6 6Z'
						stroke='#2E3F5C'
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
			iconMob: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='35'
					height='35'
					viewBox='0 0 24 24'
					fill='none'
				>
					<path
						d='M20 20H4V4'
						stroke='#2E3F5C'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M4 16.5L12 9L15 12L19.5 7.5'
						stroke='#2E3F5C'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path d='M9 20L9 14.5' stroke='#2E3F5C' stroke-linecap='round' />
					<path d='M6 20L6 17.5' stroke='#2E3F5C' stroke-linecap='round' />
					<path d='M11.9942 20L12 12' stroke='#2E3F5C' stroke-linecap='round' />
					<path d='M15 20L15 14' stroke='#2E3F5C' stroke-linecap='round' />
					<path d='M18 20L18 12' stroke='#2E3F5C' stroke-linecap='round' />
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
			iconMob: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='35'
					height='35'
					viewBox='0 0 24 24'
					fill='none'
				>
					<path
						d='M6 3H3M3 3V6M3 3L6 6'
						stroke='#2E3F5C'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M18 3H21M21 3V6M21 3L18 6'
						stroke='#2E3F5C'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M6 21H3M3 21V18M3 21L6 18'
						stroke='#2E3F5C'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M18 21H21M21 21V18M21 21L18 18'
						stroke='#2E3F5C'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M12.5145 17.6914L16.5145 15.2914C16.8157 15.1107 17 14.7852 17 14.4339V10.5663C17 10.215 16.8157 9.88949 16.5145 9.70877L12.5145 7.30877C12.1978 7.11876 11.8022 7.11876 11.4855 7.30877L7.4855 9.70877C7.1843 9.88949 7 10.215 7 10.5663V14.4339C7 14.7852 7.1843 15.1107 7.4855 15.2914L11.4855 17.6914C11.8022 17.8814 12.1978 17.8814 12.5145 17.6914Z'
						stroke='#2E3F5C'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M7.5 10.5L12 12.9995M12 12.9995C12 12.9995 15.7637 10.9492 16.5 10.5M12 12.9995V17.5'
						stroke='#2E3F5C'
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
			iconMob: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='35'
					height='35'
					viewBox='0 0 48 48'
					fill='none'
				>
					<path
						d='M32.3076 27.1435L19.717 33.8342L13.9928 28.11L20.6836 15.5194C22.5915 11.9292 26.1214 9.46774 30.1272 8.93426L38.6783 7.7955C39.4714 7.68984 40.1371 8.35557 40.0315 9.1487L38.8927 17.6997C38.3592 21.7055 35.8978 25.2354 32.3076 27.1435Z'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M9.60815 32.4948C6.68508 35.4178 8.08564 39.7414 8.08564 39.7414C8.08564 39.7414 12.4093 41.142 15.3323 38.2189'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M18.4233 19.3867C9.76082 18.0319 6.77678 26.7401 6.77678 26.7401L13.993 28.1102'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M29.0577 30.021C30.4125 38.6835 21.7043 41.6675 21.7043 41.6675L20.3342 34.4513'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M25.6241 22.203C24.0434 20.6223 24.0707 18.0323 25.6851 16.4179C27.2995 14.8035 29.8895 14.7762 31.4702 16.3569C33.051 17.9376 33.0236 20.5277 31.4093 22.1421C29.7949 23.7565 27.2048 23.7838 25.6241 22.203Z'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
			),
		},
	]
	// Функція перемикання слайдів
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

	useEffect(() => {
		const interval = setInterval(() => scrollBenefit('up'), 2000)
		return () => clearInterval(interval)
	}, [])

	const getClassName = index => {
		const total = benefits.length
		const isActive = index === activeBenefit - 1
		const isPrev = index === (activeBenefit - 2 + total) % total
		const isNext = index === activeBenefit % total

		if (isActive) return 'benefit visible'
		if (isPrev) return 'benefit above'
		if (isNext) return 'benefit below'
		return 'benefit hidden'
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
								<div className='benefit-icon'>{benefit.icon}</div>
								<div className='benefit-iconMob'>{benefit.iconMob}</div>
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
