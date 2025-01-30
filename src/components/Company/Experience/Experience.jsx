import './Experience.css'
import logo1 from '../../../assets/Experiencelogo1.png'
import logo2 from '../../../assets/Experiencelogo2.png'
import logo3 from '../../../assets/Experiencelogo3.png'
import logo4 from '../../../assets/Experiencelogo4.png'
import logo5 from '../../../assets/Experiencelogo5.png'
import logo6 from '../../../assets/Experiencelogo6.png'
import logo7 from '../../../assets/Experiencelogo7.png'
import logo8 from '../../../assets/Experiencelogo8.png'

export function Experience() {
	return (
		<>
			<div className='experience'>
				<div className='experience-container'>
					<div className='experience-title'>
						Experience with Industry
						<span className='experience-title2'>Leaders</span>
					</div>

					<div className='experience-logos'>
						<div className='experience-logosTop'>
							<div className='experience-logos-right'>
								<div className='experience-logo'>
									<img className='experience-logoImg' src={logo1}></img>
								</div>
								<div className='experience-logo'>
									<img className='experience-logoImg' src={logo2}></img>
								</div>
							</div>
							<div className='experience-logos-right'>
								<div className='experience-logo'>
									<img className='experience-logoImg' src={logo3}></img>
								</div>
								<div className='experience-logo'>
									<img className='experience-logoImg' src={logo4}></img>
								</div>
							</div>
						</div>

						<div className='experience-logosTop'>
							<div className='experience-logos-right'>
								<div className='experience-logo'>
									<img className='experience-logoImg' src={logo5}></img>
								</div>
								<div className='experience-logo'>
									<img className='experience-logoImg' src={logo6}></img>
								</div>
							</div>
							<div className='experience-logos-right'>
								<div className='experience-logo'>
									<img className='experience-logoImg' src={logo7}></img>
								</div>
								<div className='experience-logo'>
									<img className='experience-logoImg' src={logo8}></img>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
