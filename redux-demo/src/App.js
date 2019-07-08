import React from 'react';
import './App.css';
import CommentsList from './CommentsListContainer';
import DevTools from './DevTools';

const App = () => {
	return (
		<div className="App">
		<h4>List of comments:</h4>
		<CommentsList/>
			<DevTools />
		</div>
);
};

export default App;