import { Routes, Route } from 'react-router'
import CompanyDetail from '../company-components/CompanyDetail'
import CompanyList from '../company-components/CompanyList'
import JobList from '../job-components/JobList'
import Profile from '../profile/Profile'
import Home from '../home/Home'

function JoblyRoutes({ jobs, companies }) {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route
				path='/companies'
				element={<CompanyList companies={companies} />}
			/>
			<Route
				path='/companies/:header'
				element={<CompanyDetail companies={companies} />}
			/>
			<Route path='/jobs' element={<JobList jobs={jobs} />} />
			<Route path='/login' element={<Home />} />
			<Route path='/signup' element={<Home />} />
			<Route path='/profile' element={<Profile />} />
		</Routes>
	)
}

export default JoblyRoutes
