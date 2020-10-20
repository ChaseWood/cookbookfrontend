import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Display from './Display';

export const App = () => {
	const url = 'http://localhost:4500';

	const [authors, setAuthors] = React.useState([]);

	const getAuthors = () => {
		fetch(url + '/api/authors')
			.then((response) => response.json())
			.then((data) => {
				setAuthors(data);
			});
	};

	React.useEffect(() => getAuthors(), []);

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
