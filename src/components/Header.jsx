import headerLogo from '../assets/headerLogo.png'
import '../styles/Header.css'

export function Header() {
	return (
		<div className='header'>
			<div className='container'>
				<div className='logo'>
					<img src={headerLogo} alt='headerLogo' className='img' />
				</div>
				<div className='menu '>
					<div className='text'>Company</div>
					<div className='text'>Security</div>
					<div className='text'>News</div>
				</div>
				<div className='button'>
					<button className='btn'>Schedule a Demo</button>
				</div>
			</div>
		</div>
	)
}
