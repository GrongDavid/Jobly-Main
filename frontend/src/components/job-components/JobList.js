import React from 'react'
import ApplyButton from './ApplyButton'

function JobList({ jobs, companyJobs = null }) {
	console.log(ApplyButton)
	const listJobs = (jobList) => {
		return jobList.map((job) => (
			<li key={job.id} className='list'>
				{job.title}
				<br /> Salary: {job.salary ? job.salary : 'N/A'}
				<br /> Equity: {job.equity ? job.equity : 'N/A'}
				<br /> <ApplyButton />
			</li>
		))
	}

	return (
		<div className='JobList' align='center'>
			<h1 className='list-title'>Jobs</h1>
			<div className='container' align='center'>
				<ul>{jobs ? listJobs(jobs) : listJobs(companyJobs)}</ul>
			</div>
		</div>
	)
}

export default JobList
