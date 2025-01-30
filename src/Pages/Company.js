import { CompMain } from '../components/Company/Main/CompMain'
import { Leading } from '../components/Company/Leading/Leading'
import { Quote } from '../components/Company/Quote/Quote'
import { Experience } from '../components/Company/Experience/Experience'

import { Portfolio } from '../components/Company/Portfolio/Portfolio'
import { Footer } from '../components/Home/Footer/Footer'

function Company() {
	return (
		<div>
			<CompMain></CompMain>
			<Leading></Leading>
			<Quote></Quote>
			<Experience></Experience>
			<Portfolio></Portfolio>
			<Footer></Footer>
		</div>
	)
}

export default Company
