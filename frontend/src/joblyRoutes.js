import { Routes, Route } from 'react-router'

function joblyRoutes() {
	return (
		<Routes>
			<Route path='/' element={5} />
			<Route path='/companies' element={5} />
			<Route path='/companies/:header' element={5} />
			<Route path='/jobs' element={5} />
			<Route path='/login' element={5} />
			<Route path='/signup' element={5} />
			<Route path='/profile' element={5} />
		</Routes>
	)
}

export default joblyRoutes
