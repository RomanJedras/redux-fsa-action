import React from 'react';
import './App.css';
import CommentsList from './CommentsListContainer';


const App = () => {
	return (
		<div className="App">
		<h4>List of comments:</h4>
		<CommentsList/>
		</div>
);
};

export default App;