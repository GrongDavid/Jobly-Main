import { React, useState } from 'react'

function ApplyButton({ handleApply }) {
	const [clicked, setClicked] = useState(false)

	function click() {
		handleApply()
		setClicked(true)
	}

	return (
		<button
			className={clicked ? 'btn btn-success' : 'btn btn-primary'}
			onClick={click}
			type='submit'
		>
			{clicked ? 'Applied' : 'Apply'}
		</button>
	)
}

export default ApplyButton
