import { CompMain } from '../components/Company/Main/CompMain'
import { Leading } from '../components/Company/Leading/Leading'
import { Quote } from '../components/Company/Quote/Quote'
import { Portfolio } from '../components/Company/Portfolio/Portfolio'
import { Footer } from '../components/Home/Footer/Footer'

function Company() {
	return (
		<div>
			<CompMain></CompMain>
			<Leading></Leading>
			<Quote></Quote>
			<Portfolio></Portfolio>
			<Footer></Footer>
		</div>
	)
}

export default Company
