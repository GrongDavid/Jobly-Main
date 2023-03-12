import React from 'react'

function CompanyList({ companies }) {
	const listCompanies = () => {
		return companies.map((company) => (
			<li key={company.handle} className='list'>
				{company.name}
				<br /> {company.description}
			</li>
		))
	}

	return (
		<div className='CompanyList'>
			<h1>Companies</h1>
			<ul>{listCompanies()}</ul>
		</div>
	)
}

export default CompanyList
