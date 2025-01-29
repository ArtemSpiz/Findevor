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

	const [activeQuote, setActiveQuote] = useState(null)
	const [isScrolling, setIsScrolling] = useState(false)
	const quoteRefs = useRef([])

	// Спостереження за цитатами
	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setActiveQuote(entry.target.dataset.id)
					}
				})
			},
			{
				threshold: 0.5,
			}
		)

		quoteRefs.current.forEach(quote => {
			if (quote) observer.observe(quote)
		})

		return () => observer.disconnect()
	}, [])

	useEffect(() => {
		let scrollTimeout

		const handleScroll = () => {
			setIsScrolling(true)
			clearTimeout(scrollTimeout)
			scrollTimeout = setTimeout(() => {
				setIsScrolling(false)
			}, 150)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<div className='quotes'>
			<div className='quote-container'>
				<div className={`quote-star-top ${isScrolling ? 'hide-stars' : ''}`}>
					<img src={quoteStar} alt='quote-star' className='quote-starImgLeft' />
				</div>
				<div className='quote-wrapper'>
					<div className='quote-wrapcont'>
						{quotes.map((quote, index) => (
							<div
								key={quote.id}
								data-id={quote.id}
								className={`quote ${activeQuote == quote.id ? 'active' : ''}`}
								ref={el => (quoteRefs.current[index] = el)}
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
											<div className='wrapper-bottom-name'>{quote.author}</div>
											<div className='wrapper-bottom-position'>
												{quote.position}
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className={`quote-star-bottom ${isScrolling ? 'hide-stars' : ''}`}>
					<img
						src={quoteStar}
						alt='quote-star'
						className='quote-starImgRight'
					/>
				</div>
			</div>
		</div>
	)
}
