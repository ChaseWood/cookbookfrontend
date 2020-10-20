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
				name='firstName'
				value={formData.name}
				onChange={handleChange}
			/>
			<input
				type='text'
				name='lastName'
				value={formData.age}
				onChange={handleChange}
			/>

			<input type='submit' value={props.label} />
		</form>
	);
};

export default Form;
