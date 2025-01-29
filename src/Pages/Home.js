import { Main } from '../components/Home/Main/Main'
import { Screens } from '../components/Home/Screens/Screens'
import { Platform } from '../components/Home/Platform/Platfotm'
import { Benefits } from '../components/Home/Benefits/Benefits'
import { Quote } from '../components/Home/Quote/Quote'
import { Portfolio } from '../components/Home/Portfolio/Portfolio'
import { Footer } from '../components/Home/Footer/Footer'

function Home() {
	return (
		<div>
			<Main></Main>
			<Platform></Platform>
			<Screens></Screens>
			<Benefits></Benefits>
			<Quote></Quote>
			<Portfolio></Portfolio>
			<Footer></Footer>
		</div>
	)
}

export default Home
