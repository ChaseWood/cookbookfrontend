import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Display from './Display';
import Form from './Form';

export const App = () => {
	const url = 'http://localhost:4500';

	const [authors, setAuthors] = React.useState([]);

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

	return (
		<>
			<h1>Hello World</h1>
			<Route
				exact
				path='/'
				render={(rp) => <Display {...rp} authors={authors} />}
			/>
		</>
	);
};
