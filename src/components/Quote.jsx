import '../styles/Quote.css'
import quoteStar from '../assets/stare-animation-end.png'

export function Quote() {
	const quotes = [
		{
			id: 1,
			text: 'With increasing risk volatility from inflation, extreme weather, and more, underwriters need deeper insights. AI and analytics solutions like Findevor provide the tools to unlock these insights, helping insurers make smarter, faster decisions.',
			author: 'Jen Kyung ',
			position: 'CEO, NextGen Underwriting (Fmr) Chief Underwriter, USAA',
			picture: '../assets/JenKyung.png',
		},
		{
			id: 2,
			text: 'The future of AI in insurance lies in agentic systems that support underwriters with core tasks like evaluating risks and engaging with brokers. The Findevor team brings unique expertise and entrepreneurial success to drive transformative value in the industry.',
			author: 'Vijay Laknidhi',
			position:
				'Head of Strategic Planning & Execution AmTrust Financial Services',
			picture: '../assets/Vijay.png',
		},
		{
			id: 3,
			text: "In today’s competitive insurance market, the speed and accuracy of our responses to submissions can make or break a deal. Insurers who embrace tools like Findevor's AI solutions are not just improving efficiency — they're winning the business that others miss.",
			author: 'Rob Brewer',
			position: '(Fmr) CUO, Middle Market The Hanover Insurance Group',
			picture: '../assets/RobBrewer.png',
		},
	]
	return (
		<>
			<div className='quotes'>
				<div className='quote-container'>
					<div className='quote-star'>
						<img
							src={quoteStar}
							alt='quote-star'
							className='quote-starImg'
						></img>
					</div>

					<div className='quote-wrapper'>
						{quotes.map(quotes => (
							<div key={quotes.id} className='quote'>
								<div className='quote-wrapper-container'>
									<div className='quote-wrapper-top'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='42'
											height='30'
											viewBox='0 0 42 30'
											fill='none'
										>
											<path
												d='M26 15H38.5C39.8807 15 41 16.1396 41 17.5455V26.4545C41 27.8603 39.8807 29 38.5 29H28.5C27.1193 29 26 27.8603 26 26.4545V15ZM26 15C26 8.63636 28.5 4.81818 36 1'
												stroke='#2E3F5C'
												strokeWidth='2'
												strokeLinecap='round'
											/>
											<path
												d='M1 15H13.5C14.8807 15 16 16.1396 16 17.5455V26.4545C16 27.8603 14.8807 29 13.5 29H3.5C2.11925 29 1 27.8603 1 26.4545V15ZM1 15C1 8.63636 3.5 4.81818 11 1'
												stroke='#2E3F5C'
												strokeWidth='2'
												strokeLinecap='round'
											/>
										</svg>
										<p className='quote-wrapper-text'>{quotes.text}</p>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='42'
											height='30'
											viewBox='0 0 42 30'
											fill='none'
										>
											<path
												d='M16 15H3.5C2.1193 15 1 13.8604 1 12.4545V3.54545C1 2.13965 2.1193 1 3.5 1H13.5C14.8807 1 16 2.13965 16 3.54545V15ZM16 15C16 21.3636 13.5 25.1818 6 29'
												stroke='#2E3F5C'
												strokeWidth='2'
												strokeLinecap='round'
											/>
											<path
												d='M41 15H28.5C27.1193 15 26 13.8604 26 12.4545V3.54545C26 2.13965 27.1193 1 28.5 1H38.5C39.8807 1 41 2.13965 41 3.54545V15ZM41 15C41 21.3636 38.5 25.1818 31 29'
												stroke='#2E3F5C'
												strokeWidth='2'
												strokeLinecap='round'
											/>
										</svg>
									</div>
									<div className='quote-wrapper-bottom'>
										<img
											src={quotes.picture}
											alt={quotes.author}
											className='quotePicture'
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
				</div>
			</div>
		</>
	)
}
