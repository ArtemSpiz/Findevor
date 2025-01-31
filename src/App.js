import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Security from './Pages/Security'
import Company from './Pages/Company'
import Privacy from './Pages/Privacy'

import ScrollToTop from './Scrool'

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/privacy' element={<Privacy />} />
				<Route path='/company' element={<Company />} />
				<Route path='/security' element={<Security />} />
			</Routes>
		</Router>
	)
}

export default App
