import uuid from 'uuid';
import { dispatch } from 'redux';


export const ADD_COMMENT = 'ADD_COMMENT';

 addComment = (text) => {
	return dispatch({
		type: ADD_COMMENT,
		text,
		id: uuid.v4()
	});
}

export const EDIT_COMMENT = 'EDIT_COMMENT';
 editComment = (text,id) => {
	return dispatch({
		type: EDIT_COMMENT,
		id,
		text
	});
}

export const REMOVE_COMMENT = 'REMOVE_COMMENT';
 removeComment = (id) => {
	return dispatch({
		type: REMOVE_COMMENT,
		id
	})
}

export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';

 thumbUpComment = (votes, id) => {
	return dispatch({
		type: THUMB_UP_COMMENT,
		id,
		votes: vote++
	})
}

export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

	 thumbDownComment = (votes, id) => {
	return dispatch({
		type: THUMB_DOWN_COMMENT,
		id,
		votes: vote--
	})
}





