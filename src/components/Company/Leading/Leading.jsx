import './Leading.css'

import Alex from '../../../assets/AlexLeading.png'
import Virgil from '../../../assets/VirgilLeading.png'

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
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='40'
										height='40'
										viewBox='0 0 40 40'
										fill='none'
									>
										<g clip-path='url(#clip0_2928_13476)'>
											<path
												fill-rule='evenodd'
												clip-rule='evenodd'
												d='M4.44444 40H35.5556C38.0102 40 40 38.0102 40 35.5556V4.44444C40 1.98985 38.0102 0 35.5556 0H4.44444C1.98985 0 0 1.98985 0 4.44444V35.5556C0 38.0102 1.98985 40 4.44444 40Z'
												fill='#2E3F5C'
											/>
											<path
												fill-rule='evenodd'
												clip-rule='evenodd'
												d='M34.4446 34.4444H28.5088V24.3345C28.5088 21.5626 27.4555 20.0136 25.2616 20.0136C22.8749 20.0136 21.6279 21.6256 21.6279 24.3345V34.4444H15.9075V15.1852H21.6279V17.7794C21.6279 17.7794 23.3479 14.5968 27.4349 14.5968C31.5199 14.5968 34.4446 17.0914 34.4446 22.2507V34.4444ZM9.08308 12.6633C7.13458 12.6633 5.55566 11.072 5.55566 9.10943C5.55566 7.14685 7.13458 5.55554 9.08308 5.55554C11.0316 5.55554 12.6096 7.14685 12.6096 9.10943C12.6096 11.072 11.0316 12.6633 9.08308 12.6633ZM6.1293 34.4444H12.0942V15.1852H6.1293V34.4444Z'
												fill='#EBEAEF'
											/>
										</g>
										<defs>
											<clipPath id='clip0_2928_13476'>
												<rect width='40' height='40' fill='white' />
											</clipPath>
										</defs>
									</svg>
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
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='40'
										height='40'
										viewBox='0 0 40 40'
										fill='none'
									>
										<g clip-path='url(#clip0_2928_13476)'>
											<path
												fill-rule='evenodd'
												clip-rule='evenodd'
												d='M4.44444 40H35.5556C38.0102 40 40 38.0102 40 35.5556V4.44444C40 1.98985 38.0102 0 35.5556 0H4.44444C1.98985 0 0 1.98985 0 4.44444V35.5556C0 38.0102 1.98985 40 4.44444 40Z'
												fill='#2E3F5C'
											/>
											<path
												fill-rule='evenodd'
												clip-rule='evenodd'
												d='M34.4446 34.4444H28.5088V24.3345C28.5088 21.5626 27.4555 20.0136 25.2616 20.0136C22.8749 20.0136 21.6279 21.6256 21.6279 24.3345V34.4444H15.9075V15.1852H21.6279V17.7794C21.6279 17.7794 23.3479 14.5968 27.4349 14.5968C31.5199 14.5968 34.4446 17.0914 34.4446 22.2507V34.4444ZM9.08308 12.6633C7.13458 12.6633 5.55566 11.072 5.55566 9.10943C5.55566 7.14685 7.13458 5.55554 9.08308 5.55554C11.0316 5.55554 12.6096 7.14685 12.6096 9.10943C12.6096 11.072 11.0316 12.6633 9.08308 12.6633ZM6.1293 34.4444H12.0942V15.1852H6.1293V34.4444Z'
												fill='#EBEAEF'
											/>
										</g>
										<defs>
											<clipPath id='clip0_2928_13476'>
												<rect width='40' height='40' fill='white' />
											</clipPath>
										</defs>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
