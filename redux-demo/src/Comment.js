import React from 'react';
import "./Comment.css"


const Comment = ({text, votes,timestamp, id, thumbUpComment,thumbDownComment, removeComment }) => <li>{text} <span>votes: {votes} timestamp: {timestamp.toString()}</span>
	<br/><button onClick={() => thumbUpComment(id)}>Thumb up</button>
	<button onClick={() => thumbDownComment(id)}>Thumb down</button>
	<button onClick={() => removeComment(id)}>Remove comment</button>
</li>;

export default Comment;