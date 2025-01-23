import '../styles/Platform.css'
import starsSub from '../assets/starsSub.png'
import platStar from '../assets/platform-star.png'
import platformCards from '../assets/platformCards.png'

export function Platform() {
	return (
		<>
			<div className='platform'>
				<div className='platform-container'>
					<div className='platform-top'>
						<div className='platform-texts'>
							<div className='platform-titles'>
								<div className='platform-title'>
									<a className='platform-title2'>PRO-AI</a> Platform
								</div>
								<div className='platform-subtitle'>
									Your end-to-end solution
									<img className='stars-subtitle' src={starsSub} alt='stars' />
								</div>
							</div>
							<div className='platform-text'>
								The PRO-AI Platform delivers agentic AI workflows to drive
								profitable growth by streamlining advanced data analytics,
								pre-qualification, and underwriting revaluation.
							</div>
						</div>

						<div className='platformCards'>
							<img src={platformCards} alt='platformCards'></img>
						</div>
					</div>
					<div className='platform-footer'>
						<div className='platform-footer-text'>
							Let’s explore how PRO-AI can transform your business.
						</div>

						<div className='platform-stars'>
							<div className='platformLeft-star'>
								<img src={platStar} alt='platStar' className='platform-star ' />
							</div>
							<div className='platformRight-star'>
								<img src={platStar} alt='platStar' className='platform-star ' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
