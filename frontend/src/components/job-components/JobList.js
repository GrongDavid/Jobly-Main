import React from 'react'
import ApplyButton from './ApplyButton'
import JobCard from './JobCard'

function JobList({ jobs, companyJobs = null, curUser = null, apply }) {
	const listJobs = (jobList) => {
		return jobList.map((job) => (
			<li key={job.id} className='list'>
				<JobCard
					id={job.id}
					title={job.title}
					salary={job.salary}
					equity={job.equity}
					companyName={job.companyName}
					applications={curUser.applications}
					apply={apply}
				/>
			</li>
		))
	}

	return (
		<div className='JobList' align='center'>
			<h1 className='list-title gradient'>Jobs</h1>
			<div className='container' align='center'>
				<ul>{jobs ? listJobs(jobs) : listJobs(companyJobs)}</ul>
			</div>
		</div>
	)
}

export default JobList
