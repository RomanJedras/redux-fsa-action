import React from 'react';

import "./Comment.css"


const Comment = ({text, votes,timestamp}) => <li>{text} <span>votes: {votes} timestamp: {timestamp.toString()}</span></li>;

export default Comment;