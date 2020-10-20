import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Display from './Display';
import Form from './Form';

export const App = () => {
	const url = 'http://localhost:4500';

	const [authors, setAuthors] = React.useState([]);
	const [selectedAuthor, setSelectedAuthor] = React.useState(emptyAuthor);

	const emptyAuthor = {
		firstName: '',
		lastName: '',
	};

	const getAuthors = () => {
		fetch(url + '/api/authors')
			.then((response) => response.json())
			.then((data) => {
				setAuthors(data);
			});
	};

	React.useEffect(() => getAuthors(), []);

	const handleCreate = (newAuthor) => {
		fetch(url + '/api/authors', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newAuthor),
		}).then(() => {
			getAuthors();
		});
	};

	const handleUpdate = (author) => {
		fetch(url + '/api/authors/' + author._id, {
			method: 'put',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(author),
		}).then(() => {
			getAuthors();
		});
	};

	const selectAuthor = (author) => {
		setSelectedAuthor(author);
	};

	const deleteAuthor = (author) => {
		fetch(url + '/api/authors/' + author._id, {
			method: 'delete',
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(() => {
			getAuthors();
		});
	};

	return (
		<>
			<h1>Hello World</h1>
			<Link to='/create'>
				<button>Add Author</button>
			</Link>
			<Route
				exact
				path='/'
				render={(rp) => (
					<Display
						{...rp}
						authors={authors}
						selectAuthor={selectAuthor}
						deleteAuthor={deleteAuthor}
					/>
				)}
			/>
			<Route
				exact
				path='/create'
				render={(rp) => (
					<Form
						{...rp}
						label='create'
						author={emptyAuthor}
						handleSubmit={handleCreate}
					/>
				)}
			/>
			<Route
				exact
				path='/edit'
				render={(rp) => (
					<Form
						{...rp}
						label='update'
						author={selectedAuthor}
						handleSubmit={handleUpdate}
					/>
				)}
			/>
		</>
	);
};
