import '../styles/Portfolio.css'
import starePort from '../assets/starsSub.png'
import starStartPort from '../assets/stare-animation-end.png'
import starPort from '../assets/startAnimationPort.png'

export function Portfolio() {
	return (
		<>
			<div className='portfolios'>
				<div className='portfolios-container'>
					<div className='portfolio-star-left-mob'>
						<img
							src={starPort}
							alt='starStart'
							className='portfolio-star-top-anim'
						/>
					</div>
					<div className='portfolio'>
						<div className='portfolio-container'>
							<div className='portfolio-left'>
								<div className='portfolio-title'>
									Ready to transform your
									<div className='portfolio-title2 desktop'>portfolio?</div>
									<div className='portfolio-title2 mob'>
										insurance workflow?
									</div>
								</div>
								<div className='portfolio-subtitle desktop'>
									Maximize profitability with smarter insights.
								</div>
								<div className='portfolio-subtitle-mob mob '>
									Simplify your insurance workflow and work smarter.
								</div>
							</div>
							<div className='portfolio-right'>
								<div className='portfolio-star-right'>
									<img
										src={starStartPort}
										alt='starStart'
										className=' portfolio-star-right-anim'
									/>
								</div>
								<div className='portfolio-button'>
									<button className='portfolio-btn'>
										Schedule a Demo
										<img src={starePort} className='starePort'></img>
									</button>
								</div>

								<div className='portfolio-stars'>
									<div className='portfolio-star-top'>
										<img
											src={starPort}
											alt='starStart'
											className='portfolio-star-top-anim'
										/>
									</div>

									<div className='portfolio-star-bottom'>
										<img
											src={starPort}
											alt='starStart'
											className='portfolio-star-bottom-anim'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='portfolio-star-right-mob'>
						<img
							src={starPort}
							alt='starStart'
							className='portfolio-star-bottom-anim'
						/>
					</div>
				</div>
			</div>
		</>
	)
}
