import './Leading.css'

import Alex from '../../../assets/AlexLeading.png'
import Virgil from '../../../assets/VirgilLeading.png'
import LeadingBot from '../../../assets/leading-bottom.png'

export function Leading() {
	return (
		<>
			<div className='leading'>
				<div className='leading-container'>
					<div className='leading-title'>
						<div className='leading-title2'>Leading</div>
						the Way Forward
					</div>

					<div className='leading-cards'>
						<div className='leadingCard'>
							<div className='leadingCardImage'>
								<img className='leadingCardImg' src={Alex} alt='Alex'></img>
							</div>

							<div className='leadingCardBottom'>
								<div className='leadingCardTexts'>
									<div className='leadingCard-title'>Alex Valdes</div>

									<div className='leadingCard-subtitles'>
										<div className='leadingCard-subtitle'>Co-founder & CEO</div>
										<div className='leadingCard-subtitle2'>
											Past: Tech Entrepreneur (IPO Exit)
										</div>
									</div>
								</div>

								<div className='leadingCardImage-bottom'>
									<img
										className='leadingCardImg-bottom'
										src={LeadingBot}
										alt='LeadingBot'
									></img>
								</div>
							</div>
						</div>

						{/* second */}
						<div className='leadingCard'>
							<div className='leadingCardImage'>
								<img className='leadingCardImg' src={Virgil} alt='Virgil'></img>
							</div>

							<div className='leadingCardBottom'>
								<div className='leadingCardTexts'>
									<div className='leadingCard-title'>Virgil Tataru</div>

									<div className='leadingCard-subtitles'>
										<div className='leadingCard-subtitle'>Co-founder & CTO</div>
										<div className='leadingCard-subtitle2'>
											Past: ML Engineer, Amazon
										</div>
									</div>
								</div>

								<div className='leadingCardImage-bottom'>
									<img
										className='leadingCardImg-bottom'
										src={LeadingBot}
										alt='LeadingBot'
									></img>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
