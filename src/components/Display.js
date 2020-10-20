import React from 'react';

const Display = (props) => {
	const { authors } = props;
	const loaded = () => (
		<div style={{ textAlign: 'center' }}>
			{authors.map((author) => (
				<article>
					<h1>{author.firstName}</h1>
					<h3>{author.lastName}</h3>
					<button
						onClick={() => {
							props.selectDog(dog);
							props.history.push('/edit');
						}}>
						Edit
					</button>
					<button
						onClick={() => {
							props.deleteDog(dog);
						}}>
						Delete
					</button>
				</article>
			))}
		</div>
	);
	const loading = <h1>Loading...</h1>;
	return authors.length > 0 ? loaded() : loading;
};

export default Display;
