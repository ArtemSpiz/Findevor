import './Quote.css'
import quoteStar from '../../../assets/stare-animation-end.png'
import Sam from '../../../assets/Sam.png'
import Vijay from '../../../assets/Vijay.png'
import RobBrewer from '../../../assets/RobBrewer.png'
import leftQuote from '../../../assets/leftQuote.png'
import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export function Quote() {
	const quotesRef = useRef(null)

	useEffect(() => {
		let sections = gsap.utils.toArray('.securQuote')

		gsap.to(sections, {
			xPercent: -100 * (sections.length - 1),
			ease: 'none',
			scrollTrigger: {
				trigger: '.securQuote-wrapcont',
				start: 'top top',
				end: 'bottom+=1000 bottom',
				markers: true,
				scrub: 1,
				snap: 1 / (sections.length - 1),
			},
		})
	}, [])
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
			author: 'Sam Goddard CISSP, CISM',
			position:
				'Regional Information Security Officer Fortune 500 Insurance Organization',
			picture: Sam,
		},
		{
			id: 3,
			text: 'In 2025, it appears the technology landscape is constantly evolving. Building trust through effective product security and technology risk management becomes crucial, as more and more businesses race to operationalize automation and AI.  Findevor is taking an intentionally proactive and holistic approach to operate in line with internationally recognised frameworks and information security best practice.',
			author: 'Sam Goddard CISSP, CISM',
			position:
				'Regional Information Security Officer Fortune 500 Insurance Organization',
			picture: Sam,
		},
	]

	const [activeQuote, setActiveQuote] = useState(null)
	const [isScrolling, setIsScrolling] = useState(false)
	const quoteRefs = useRef([])

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
			<div className='quote-container' ref={quotesRef}>
				<div className='quote-wrapper'>
					<div className='securQuote-wrapcont'>
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
								data-id={quote.id}
								className={`securQuote ${
									activeQuote == quote.id ? 'active' : ''
								}`}
								ref={el => (quoteRefs.current[index] = el)}
							>
								<div className='quote-wrapper-container'>
									<div className='quote-wrapper-top'>
										<img
											className='quote-wrapper-leftImg'
											src={leftQuote}
											alt='leftQuote'
										/>
										<div className='securQuote-wrapper-text'>{quote.text}</div>
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
