import React from 'react';

const Form = (props) => {
	const [formData, setFormData] = React.useState(props.author);

	const handleSubmit = (event) => {
		event.preventDefault();
		props.handleSubmit(formData);
		props.history.push('/');
	};

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				name='first name'
				value={formData.firstName}
				onChange={handleChange}
			/>
			<input
				type='text'
				name='last name'
				value={formData.lastName}
				onChange={handleChange}
			/>

			<input type='submit' value={props.label} />
		</form>
	);
};

export default Form;
