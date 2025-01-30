import { useState, useEffect, useRef } from 'react'
import './Quote.css'
import quoteStar from '../../../assets/stare-animation-end.png'
import Sam from '../../../assets/Sam.png'
import leftQuote from '../../../assets/leftQuote.png'

export function Quote() {
	const quotes = [
		{
			id: 1,
			text: 'In 2025, it appears the technology landscape is constantly evolving. Building trust through effective product security and technology risk management becomes crucial, as more and more businesses race to operationalize automation and AI.  Findevor is taking an intentionally proactive and holistic approach to operate in line with internationally recognised frameworks and information security best practice.',
			author: 'Sam Goddard CISSP, CISM',
			position:
				'Regional Information Security Officer Fortune 500 Insurance Organization',
			picture: Sam,
		},
		{
			id: 2,
			text: 'In 2025, it appears the technology landscape is constantly evolving. Building trust through effective product security and technology risk management becomes crucial, as more and more businesses race to operationalize automation and AI.  Findevor is taking an intentionally proactive and holistic approach to operate in line with internationally recognised frameworks and information security best practice.',
			author: 'Vijay Kumar',
			position: 'CTO of Tech Innovations',
			picture: Sam,
		},
		{
			id: 3,
			text: 'In 2025, it appears the technology landscape is constantly evolving. Building trust through effective product security and technology risk management becomes crucial, as more and more businesses race to operationalize automation and AI.  Findevor is taking an intentionally proactive and holistic approach to operate in line with internationally recognised frameworks and information security best practice.',
			author: 'Rob Brewer',
			position: 'Cybersecurity Expert',
			picture: Sam,
		},
	]

	const containerRef = useRef(null)
	const [index, setIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex(prevIndex => (prevIndex + 1) % quotes.length)
		}, 15000)
		return () => clearInterval(interval)
	}, [quotes.length])

	useEffect(() => {
		if (containerRef.current) {
			containerRef.current.scrollTo({
				left: index * containerRef.current.clientWidth,
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
						{quotes.map((quote, index) => (
							<div
								key={quote.id}
								className='securQuote '
								style={{ minWidth: '100%' }}
							>
								<div className='quote-wrapper-container'>
									<div className='quote-wrapper-top'>
										<img
											className='quote-wrapper-leftImg'
											src={leftQuote}
											alt='leftQuote'
										/>
										<div className='securQuote-wrapper-text'>{quote.text}</div>
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
											<div className='wrapper-bottom-position'>
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
