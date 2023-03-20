import { React, useState } from 'react'

function ApplyButton() {
	const [clicked, setClicked] = useState(false)

	return (
		<button
			className={clicked ? 'btn btn-success' : 'btn btn-primary'}
			onClick={() => setClicked(true)}
			type='submit'
		>
			{clicked ? 'Applied' : 'Apply'}
		</button>
	)
}

export default ApplyButton
