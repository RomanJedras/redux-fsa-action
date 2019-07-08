import uuid from 'uuid';
import {ADD_COMMENT,REMOVE_COMMENT,EDIT_COMMENT,THUMB_DOWN_COMMENT, THUMB_UP_COMMENT} from './actions_name';



 function addComment(text){
 	return {
		type: ADD_COMMENT,
		text,
	    timestamp: '',
		id: uuid.v4()
	};
}


 function editComment(text,id) {
	return {
		type: EDIT_COMMENT,
		id,
		text
	};
}


 function  removeComment(id) {
	return {
		type: REMOVE_COMMENT,
		id
	}
}



 function thumbUpComment(votes, id){
	return {
		type: THUMB_UP_COMMENT,
		id,
		votes: votes++
	}
}



function thumbDownComment(votes, id) {
return {
	type: THUMB_DOWN_COMMENT,
	id,
	votes: votes--
}
}


export {addComment,editComment, thumbUpComment, thumbDownComment, removeComment}





