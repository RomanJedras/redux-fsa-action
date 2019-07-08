import uuid from 'uuid';
import {ADD_COMMENT,REMOVE_COMMENT,EDIT_COMMENT,THUMB_DOWN_COMMENT, THUMB_UP_COMMENT} from './actions_name'



 export const addComment = text => {
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4()
	};
}


 export const editComment = (text,id) => {
	return {
		type: EDIT_COMMENT,
		id,
		text
	};
}


 export const removeComment = id => {
	return {
		type: REMOVE_COMMENT,
		id
	}
}



 export const thumbUpComment = (votes, id) => {
	return {
		type: THUMB_UP_COMMENT,
		id,
		votes: this.votes++
	}
}



	export const thumbDownComment = (votes, id) => {
	return {
		type: THUMB_DOWN_COMMENT,
		id,
		votes: this.votes--
	}
}





