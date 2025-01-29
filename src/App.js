import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Security from './Pages/Security'

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/security' element={<Security />} />
			</Routes>
		</Router>
	)
}

export default App
