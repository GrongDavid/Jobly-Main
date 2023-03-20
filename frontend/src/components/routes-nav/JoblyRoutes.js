import { Routes, Route } from 'react-router'
import CompanyDetail from '../company-components/CompanyDetail'
import CompanyList from '../company-components/CompanyList'
import JobList from '../job-components/JobList'
import Profile from '../profile/Profile'
import Home from '../home/Home'
import Signup from '../auth/Signup'
import Login from '../auth/Login'

function JoblyRoutes({ jobs, companies, curUser = null, login, signup }) {
	return (
		<div>
			<Routes>
				{curUser ? (
					<>
						<Route
							path='/companies'
							element={<CompanyList companies={companies} />}
						/>
						<Route
							path='/companies/:handle'
							element={<CompanyDetail companies={companies} />}
						/>
						<Route path='/jobs' element={<JobList jobs={jobs} />} />
						<Route path='/profile:username' element={<Profile />} />
						<Route path='/' element={<Home />} />
					</>
				) : (
					<>
						<Route path='/login' element={<Login login={login} />} />
						<Route path='/signup' element={<Signup signup={signup} />} />
						<Route path='/' element={<Home />} />
					</>
				)}
			</Routes>
		</div>
	)
}

export default JoblyRoutes
