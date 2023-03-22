import { React, useState } from 'react'
import { useNavigate } from 'react-router'

function Signup({ signup }) {
	const navigate = useNavigate()
	const [formData, setFormData] = useState({
		username: '',
		password: '',
		firstName: '',
		lastName: '',
		email: '',
	})

	async function handleSubmit(e) {
		e.preventDefault()
		try {
			await signup(formData)
			navigate('/')
		} catch (error) {
			alert(error)
		}
	}

	function handleChange(e) {
		const { name, value } = e.target
		setFormData((data) => ({ ...data, [name]: value }))
	}

	return (
		<div className='SignupForm'>
			<div className='container col-md-6 offset-md-3 col-lg-4 offset-lg-4'>
				<h2 className='mb-3'>Sign Up</h2>
				<div className='card'>
					<div className='card-body'>
						<form onSubmit={handleSubmit}>
							<div className='mb-3'>
								<label className='form-label'>Username</label>
								<input
									name='username'
									className='form-control'
									value={formData.username}
									onChange={handleChange}
								/>
							</div>
							<div className='mb-3'>
								<label className='form-label'>Password</label>
								<input
									type='password'
									name='password'
									className='form-control'
									value={formData.password}
									onChange={handleChange}
								/>
							</div>

							<div className='mb-3'>
								<label className='form-label'>First name</label>
								<input
									name='firstName'
									className='form-control'
									value={formData.firstName}
									onChange={handleChange}
								/>
							</div>
							<div className='mb-3'>
								<label className='form-label'>Last name</label>
								<input
									name='lastName'
									className='form-control'
									value={formData.lastName}
									onChange={handleChange}
								/>
							</div>
							<div className='mb-3'>
								<label className='form-label'>Email</label>
								<input
									type='email'
									name='email'
									className='form-control'
									value={formData.email}
									onChange={handleChange}
								/>
							</div>
							<div className='d-grid'>
								<button className='btn btn-primary' onClick={handleSubmit}>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Signup
