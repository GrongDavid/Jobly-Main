import { React, useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/routes-nav/NavBar'
import JoblyRoutes from './components/routes-nav/JoblyRoutes'
import { JoblyApi } from './api'

function App() {
	const [jobs, setJobs] = useState([])
	const [companies, setCompanies] = useState([])

	useEffect(() => {
		async function getJobs() {
			const res = await JoblyApi.getJobs()
			console.log(res)
			return res
		}

		async function getCompanies() {
			const res = await JoblyApi.getCompanies()
			console.log(res)
			return res
		}

		async function set() {
			const [jobs, companies] = await Promise.all([getJobs(), getCompanies()])
			setJobs(jobs)
			setCompanies(companies)
		}
		set()
	}, [])
	return (
		<div className='App'>
			<NavBar />
			<JoblyRoutes jobs={jobs} companies={companies} />
		</div>
	)
}

export default App
