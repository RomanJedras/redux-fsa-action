import uuid from 'uuid';


export const ADD_COMMENT = 'ADD_COMMENT';

 function addComment(text){
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4()
	};
}

export const EDIT_COMMENT = 'EDIT_COMMENT';
 function editComment(text,id) {
	return {
		type: EDIT_COMMENT,
		id,
		text
	};
}

export const REMOVE_COMMENT = 'REMOVE_COMMENT';
 function  removeComment(id) {
	return {
		type: REMOVE_COMMENT,
		id
	}
}

export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';

 function thumbUpComment(votes, id){
	return {
		type: THUMB_UP_COMMENT,
		id,
		votes: votes++
	}
}

export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function thumbDownComment(votes, id) {
return {
	type: THUMB_DOWN_COMMENT,
	id,
	votes: votes--
}
}


export {addComment,editComment, thumbUpComment, thumbDownComment, removeComment}





