import './Quote.css'
import quoteStar from '../../../assets/stare-animation-end.png'
import JenKyung from '../../../assets/JenKyung.png'
import Vijay from '../../../assets/Vijay.png'
import RobBrewer from '../../../assets/RobBrewer.png'
import leftQuote from '../../../assets/leftQuote.png'
import { useState, useEffect, useRef } from 'react'

export function Quote() {
	const quotes = [
		{
			id: 1,
			text: 'With increasing risk volatility from inflation, extreme weather, and more, underwriters need deeper insights. AI and analytics solutions like Findevor provide the tools to unlock these insights, helping insurers make smarter, faster decisions.',
			author: 'Jen Kyung ',
			position: 'CEO, NextGen Underwriting (Fmr) Chief Underwriter, USAA',
			picture: JenKyung,
			link: 'https://www.linkedin.com/in/jennifer-hoolehan-kyung/',
		},
		{
			id: 2,
			text: 'The future of AI in insurance lies in agentic systems that support underwriters with core tasks like evaluating risks and engaging with brokers. The Findevor team brings unique expertise and entrepreneurial success to drive transformative value in the industry.',
			author: 'Vijay Laknidhi',
			position:
				'Head of Strategic Planning & Execution AmTrust Financial Services',
			picture: Vijay,
			link: 'https://www.linkedin.com/in/vijaylaknidhi/',
		},
		{
			id: 3,
			text: "In today’s competitive insurance market, the speed and accuracy of our responses to submissions can make or break a deal. Insurers who embrace tools like Findevor's AI solutions are not just improving efficiency — they're winning the business that others miss.",
			author: 'Rob Brewer',
			position: '(Fmr) CUO, Middle Market The Hanover Insurance Group',
			picture: RobBrewer,
			link: 'https://www.linkedin.com/in/rob-brewer-93a12015/',
		},
	]
	const containerRef = useRef(null)
	const [index, setIndex] = useState(0)
	const [direction, setDirection] = useState(1)
	const [isInitialized, setIsInitialized] = useState(false)

	// Initialize component
	useEffect(() => {
		setIsInitialized(true)
	}, [])

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex(prevIndex => {
				let newIndex = prevIndex + direction
				if (newIndex >= quotes.length - 1 || newIndex <= 0) {
					setDirection(-direction)
				}
				return newIndex
			})
		}, 15000)
		return () => clearInterval(interval)
	}, [direction, quotes.length])

	useEffect(() => {
		if (containerRef.current && isInitialized) {
			const scrollWidth = containerRef.current.scrollWidth / quotes.length
			containerRef.current.scrollTo({
				left: index * scrollWidth,
				behavior: 'smooth',
			})
		}
	}, [index, quotes.length, isInitialized])

	return (
		<div className='quotes-scroll'>
			<div className='quotes'>
				<div className='quote-container'>
					<div
						className='securQuote-wrapcont'
						ref={containerRef}
						style={{
							display: 'flex',
							overflow: 'hidden',
							scrollBehavior: 'smooth',
						}}
					>
						<div className='securQuote-star-top'>
							<img
								src={quoteStar}
								alt='quote-star'
								className='quote-starImgLeft'
							/>
						</div>
						{quotes.map((quote, i) => (
							<div
								key={quote.id}
								className='securQuote'
								style={{
									minWidth: '100%',
									opacity: i === index ? 1 : 0,
									transition: 'opacity 0.5s ease-in-out',
								}}
							>
								<div className='quote-wrapper-container'>
									<div className='quote-wrapper-top'>
										<img
											className='quote-wrapper-leftImg'
											src={leftQuote}
											alt='leftQuote'
										/>
										<div className='quote-wrapper-text'>{quote.text}</div>
									</div>
									<div className='quote-wrapper-bottom'>
										<div className='securQuotePicture'>
											<img
												src={quote.picture}
												alt={quote.author}
												className='securQuotePictureImg'
											/>
											<svg
												onClick={() =>
													window.open(
														`{quote.link}`,
														'_blank',
														'noopener,noreferrer'
													)
												}
												xmlns='http://www.w3.org/2000/svg'
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
											>
												<g clip-path='url(#clip0_3370_29032)'>
													<path
														fill-rule='evenodd'
														clip-rule='evenodd'
														d='M2.66667 24H21.3333C22.8061 24 24 22.8061 24 21.3333V2.66667C24 1.19391 22.8061 0 21.3333 0H2.66667C1.19391 0 0 1.19391 0 2.66667V21.3333C0 22.8061 1.19391 24 2.66667 24Z'
														fill='#2E3F5C'
													/>
													<path
														fill-rule='evenodd'
														clip-rule='evenodd'
														d='M20.6663 20.6668H17.1049V14.6009C17.1049 12.9377 16.4729 12.0083 15.1566 12.0083C13.7245 12.0083 12.9764 12.9755 12.9764 14.6009V20.6668H9.54412V9.11127H12.9764V10.6678C12.9764 10.6678 14.0084 8.75823 16.4605 8.75823C18.9116 8.75823 20.6663 10.255 20.6663 13.3506V20.6668ZM5.44946 7.59817C4.28036 7.59817 3.33301 6.64338 3.33301 5.46583C3.33301 4.28828 4.28036 3.3335 5.44946 3.3335C6.61855 3.3335 7.56534 4.28828 7.56534 5.46583C7.56534 6.64338 6.61855 7.59817 5.44946 7.59817ZM3.67719 20.6668H7.25614V9.11127H3.67719V20.6668Z'
														fill='#EBEAEF'
													/>
												</g>
												<defs>
													<clipPath id='clip0_3370_29032'>
														<rect width='24' height='24' fill='white' />
													</clipPath>
												</defs>
											</svg>
										</div>
										<div className='wrapper-bottom-right'>
											<div className='wrapper-bottom-name'>
												{quote.author}
												<svg
													onClick={() =>
														window.open(
															`{quote.link}`,
															'_blank',
															'noopener,noreferrer'
														)
													}
													xmlns='http://www.w3.org/2000/svg'
													width='24'
													height='24'
													viewBox='0 0 24 24'
													fill='none'
												>
													<g clip-path='url(#clip0_3370_29032)'>
														<path
															fill-rule='evenodd'
															clip-rule='evenodd'
															d='M2.66667 24H21.3333C22.8061 24 24 22.8061 24 21.3333V2.66667C24 1.19391 22.8061 0 21.3333 0H2.66667C1.19391 0 0 1.19391 0 2.66667V21.3333C0 22.8061 1.19391 24 2.66667 24Z'
															fill='#2E3F5C'
														/>
														<path
															fill-rule='evenodd'
															clip-rule='evenodd'
															d='M20.6663 20.6668H17.1049V14.6009C17.1049 12.9377 16.4729 12.0083 15.1566 12.0083C13.7245 12.0083 12.9764 12.9755 12.9764 14.6009V20.6668H9.54412V9.11127H12.9764V10.6678C12.9764 10.6678 14.0084 8.75823 16.4605 8.75823C18.9116 8.75823 20.6663 10.255 20.6663 13.3506V20.6668ZM5.44946 7.59817C4.28036 7.59817 3.33301 6.64338 3.33301 5.46583C3.33301 4.28828 4.28036 3.3335 5.44946 3.3335C6.61855 3.3335 7.56534 4.28828 7.56534 5.46583C7.56534 6.64338 6.61855 7.59817 5.44946 7.59817ZM3.67719 20.6668H7.25614V9.11127H3.67719V20.6668Z'
															fill='#EBEAEF'
														/>
													</g>
													<defs>
														<clipPath id='clip0_3370_29032'>
															<rect width='24' height='24' fill='white' />
														</clipPath>
													</defs>
												</svg>
											</div>
											<div className='wrapper-bottom-position-home'>
												{quote.position}
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
						<div className='securQuote-star-bottom'>
							<img
								src={quoteStar}
								alt='quote-star'
								className='quote-starImgRight'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
