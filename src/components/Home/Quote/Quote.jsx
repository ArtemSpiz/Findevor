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

	const containerRef = useRef(null)
	const [index, setIndex] = useState(0)
	const [direction, setDirection] = useState(1)

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex(prevIndex => {
				let newIndex = prevIndex + direction
				if (newIndex >= quotes.length - 1 || newIndex <= 0) {
					setDirection(-direction)
				}
				return newIndex
			})
		}, 5000)
		return () => clearInterval(interval)
	}, [direction])

	useEffect(() => {
		if (containerRef.current) {
			const scrollWidth = containerRef.current.scrollWidth / quotes.length
			containerRef.current.scrollTo({
				left: index * scrollWidth,
				behavior: 'smooth',
			})
		}
	}, [index])

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
										</div>
										<div className='wrapper-bottom-right'>
											<div className='wrapper-bottom-name'>{quote.author}</div>
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
