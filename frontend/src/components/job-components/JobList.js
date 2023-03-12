import React from 'react'

function JobList({ jobs }) {
	const listJobs = () => {
		return jobs.map((job) => (
			<li key={job.id} className='list'>
				{job.title}
				<br /> {job.salary}
			</li>
		))
	}

	return (
		<div className='jobList'>
			<h1>jobs</h1>
			<ul>{listJobs()}</ul>
		</div>
	)
}

export default JobList
