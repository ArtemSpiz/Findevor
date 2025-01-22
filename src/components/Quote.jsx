import '../styles/Quote.css'
import quoteStar from '../assets/stare-animation-end.png'
import JenKyung from '../assets/JenKyung.png'
import Vijay from '../assets/Vijay.png'
import RobBrewer from '../assets/RobBrewer.png'
import leftQuote from '../assets/leftQuote.png'
import { useState, useEffect } from 'react'

export function Quote() {
	useEffect(() => {
		const quotes = document.querySelectorAll('.quote')
		const stars = document.querySelectorAll(
			'.quote-star-left, .quote-star-right'
		)

		const starsScroll = document.querySelectorAll(
			'.quote-star-top, .quote-star-bottom'
		)

		const container = document.querySelector('.quote-wrapcont')
		let isScrolling = false

		const handleScroll = () => {
			isScrolling = true

			container.classList.add('scrolling-gap')

			quotes.forEach(quote => {
				const rect = quote.getBoundingClientRect()
				const isVisible = rect.left >= 0 && rect.right <= window.innerWidth

				if (isVisible) {
					quote.classList.add('active')
				} else {
					quote.classList.remove('active')
				}
			})

			// Ховаємо зірочки під час скролу
			stars.forEach(star => {
				star.classList.add('hidden-star') // Додаємо клас для приховування
			})

			starsScroll.forEach(stars => {
				stars.classList.add('hidden-stars') // Додаємо клас для приховування
			})

			container.classList.add('scrolling-gap')
		}

		const stopScrolling = () => {
			if (isScrolling) {
				isScrolling = false

				container.classList.remove('scrolling-gap')

				// Видаляємо клас active після завершення скролу
				quotes.forEach(quote => {
					quote.classList.remove('active')
				})

				// Повертаємо зірочки після завершення скролу
				stars.forEach(star => {
					star.classList.remove('hidden-star') // Відновлюємо видимість
				})

				starsScroll.forEach(stars => {
					stars.classList.remove('hidden-stars') // Додаємо клас для приховування
				})
			}
		}

		container.addEventListener('scroll', handleScroll)

		// Додаємо затримку для визначення завершення скролу
		let scrollTimeout
		container.addEventListener('scroll', () => {
			clearTimeout(scrollTimeout)
			scrollTimeout = setTimeout(stopScrolling, 300) // 100 мс після завершення скролу
		})

		// Зміщуємо контейнер, щоб другий елемент був головним
		container.scrollTo({
			left: container.scrollWidth / 4, // Коригуємо відповідно до ширини другого елемента
			behavior: 'auto',
		})

		return () => {
			container.removeEventListener('scroll', handleScroll)
			container.removeEventListener('scroll', stopScrolling)
		}
	}, [])

	const quotes = [
		{
			id: 1,
			text: 'With increasing risk volatility from inflation, extreme weather, and more, underwriters need deeper insights. AI and analytics solutions like Findevor provide the tools to unlock these insights, helping insurers make smarter, faster decisions.',
			author: 'Jen Kyung ',
			position: 'CEO, NextGen Underwriting (Fmr) Chief Underwriter, USAA',
			picture: JenKyung,
		},
		{
			id: 2,
			text: 'The future of AI in insurance lies in agentic systems that support underwriters with core tasks like evaluating risks and engaging with brokers. The Findevor team brings unique expertise and entrepreneurial success to drive transformative value in the industry.',
			author: 'Vijay Laknidhi',
			position:
				'Head of Strategic Planning & Execution AmTrust Financial Services',
			picture: Vijay,
		},
		{
			id: 3,
			text: "In today’s competitive insurance market, the speed and accuracy of our responses to submissions can make or break a deal. Insurers who embrace tools like Findevor's AI solutions are not just improving efficiency — they're winning the business that others miss.",
			author: 'Rob Brewer',
			position: '(Fmr) CUO, Middle Market The Hanover Insurance Group',
			picture: RobBrewer,
		},
	]

	return (
		<>
			<div className='quotes'>
				<div className='quote-container'>
					<div className='quote-star-top'>
						<img
							src={quoteStar}
							alt='quote-star'
							className='quote-starImgLeft'
						/>
					</div>
					<div className='quote-wrapper'>
						<div className='quote-wrapcont'>
							{quotes.map(quote => (
								<div className='quoteStars'>
									<div className='quote-star-left'>
										<img
											src={quoteStar}
											alt='quote-star'
											className='quote-starImgLeft'
										/>
									</div>
									<div
										key={quote.id}
										className={`quote ${quote.active ? 'active' : ''}`}
									>
										<div className='quote-wrapper-container'>
											<div className='quote-wrapper-top'>
												<img
													className='quote-wrapper-leftImg'
													src={leftQuote}
													alt='leftQuote'
												/>
												<div className='quote-wrapper-text'>{quote.text}</div>
												<div className='quote-wrapper-right'>
													<img
														className='quote-wrapper-rightImg'
														src={leftQuote}
														alt='leftQuote'
													/>
												</div>
											</div>

											<div className='quote-wrapper-bottom'>
												<img
													src={quote.picture}
													alt={quote.author}
													className='quotePictureImg'
												/>

												<div className='wrapper-bottom-right'>
													<div className='wrapper-bottom-name'>
														{quote.author}
													</div>
													<div className='wrapper-bottom-position'>
														{quote.position}
													</div>
												</div>
											</div>
										</div>
									</div>
									{/* Зірочка справа */}
									<div className='quote-star-right'>
										<img
											src={quoteStar}
											alt='quote-star'
											className='quote-starImgRight'
										/>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className='quote-star-bottom'>
						<img
							src={quoteStar}
							alt='quote-star'
							className='quote-starImgRight'
						/>
					</div>
				</div>
			</div>
		</>
	)
}
