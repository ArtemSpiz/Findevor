import { useState, useEffect, useRef } from 'react'
import './Quote.css'
import quoteStar from '../../../assets/stare-animation-end.png'
import Alex from '../../../assets/Alex.png'
import leftQuote from '../../../assets/leftQuote.png'

export function Quote() {
	const quotes = [
		{
			id: 1,
			text: 'Taking a company from zero to IPO taught me the power of combining innovation with execution. At my last startup, we helped Fortune 500 banks recover tens of millions of dollars by transforming their credit underwriting with AI-powered tools. Now, at Findevor, we’re bringing that same expertise to an even greater need in insurance industry, empowering carriers to unlock new revenue and drive profitable growth. This is just the beginning!',
			author: 'Alex Valdes',
			position: 'Co-founder & CEO',
			picture: Alex,
		},
		{
			id: 2,
			text: 'Taking a company from zero to IPO taught me the power of combining innovation with execution. At my last startup, we helped Fortune 500 banks recover tens of millions of dollars by transforming their credit underwriting with AI-powered tools. Now, at Findevor, we’re bringing that same expertise to an even greater need in insurance industry, empowering carriers to unlock new revenue and drive profitable growth. This is just the beginning!',
			author: 'Alex Valdes',
			position: 'Co-founder & CEO',
			picture: Alex,
		},
		{
			id: 3,
			text: 'Taking a company from zero to IPO taught me the power of combining innovation with execution. At my last startup, we helped Fortune 500 banks recover tens of millions of dollars by transforming their credit underwriting with AI-powered tools. Now, at Findevor, we’re bringing that same expertise to an even greater need in insurance industry, empowering carriers to unlock new revenue and drive profitable growth. This is just the beginning!',
			author: 'Alex Valdes',
			position: 'Co-founder & CEO',
			picture: Alex,
		},
	]

	return (
		<div className='quotes-scroll'>
			<div className='quotes'>
				<div className='quote-container'>
					<div className='securQuote-wrapcont'>
						<div className='securQuote-star-top'>
							<img
								src={quoteStar}
								alt='quote-star'
								className='quote-starImgLeft'
							/>
						</div>
						{quotes.map((quote, index) => (
							<div key={quote.id} className='securQuote'>
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
