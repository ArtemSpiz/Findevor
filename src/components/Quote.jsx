import '../styles/Quote.css'
import quoteStar from '../assets/stare-animation-end.png'
import JenKyung from '../assets/JenKyung.png'
import Vijay from '../assets/Vijay.png'
import RobBrewer from '../assets/RobBrewer.png'
import leftQuote from '../assets/leftQuote.png'

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
	return (
		<>
			<div className='quotes'>
				<div className='quote-container'>
					<div className='quote-star-top quote-star-animation'>
						<img
							src={quoteStar}
							alt='quote-star'
							className='quote-starImg quote-starImgTop'
						></img>
					</div>

					<div className='quote-wrapper'>
						{quotes.map(quotes => (
							<div key={quotes.id} className='quote'>
								<div className='quote-wrapper-container'>
									<div className='quote-wrapper-top'>
										<img
											className='quote-wrapper-leftImg'
											src={leftQuote}
											alt='leftQuote'
										></img>
										<p className='quote-wrapper-text'>{quotes.text}</p>
										<div className='quote-wrapper-right'>
											<img
												className='quote-wrapper-rightImg'
												src={leftQuote}
												alt='leftQuote'
											></img>
										</div>
									</div>
									<div className='quote-wrapper-bottom'>
										<img
											src={quotes.picture}
											alt={quotes.author}
											className='quotePictureImg'
										/>

										<div className='wrapper-bottom-right'>
											<div className='wrapper-bottom-name'>{quotes.author}</div>
											<div className='wrapper-bottom-position'>
												{quotes.position}
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>

					<div className='quote-star-bottom quote-star-animation'>
						<img
							src={quoteStar}
							alt='quote-star'
							className='quote-starImg quote-starImgBottom'
						></img>
					</div>
				</div>
			</div>
		</>
	)
}
