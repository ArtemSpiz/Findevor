import { SecMain } from '../components/Security/Main/SecMain'
import { Safety } from '../components/Security/Safety/Safety'
import { Quote } from '../components/Security/Quote/Quote'
import { Portfolio } from '../components/Security/Portfolio/Portfolio'
import { Footer } from '../components/Home/Footer/Footer'

function Security() {
	return (
		<div>
			<SecMain></SecMain>
			<Safety></Safety>
			<Quote></Quote>
			<Portfolio></Portfolio>
			<Footer></Footer>
		</div>
	)
}

export default Security
