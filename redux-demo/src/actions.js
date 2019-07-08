import uuid from 'uuid';
import {ADD_COMMENT,REMOVE_COMMENT,EDIT_COMMENT,THUMB_DOWN_COMMENT, THUMB_UP_COMMENT} from './actions_name';



 const addComment = text =>{
 	return {
		type: ADD_COMMENT,
		text,
	    timestamp: '',
		id: uuid.v4()
	};
}


 const editComment = (text,id) => {
	return {
		type: EDIT_COMMENT,
		id,
		text
	};
}


  const removeComment = id => {
	return {
		type: REMOVE_COMMENT,
		id
	}
}



    const  thumbUpComment = commentId =>{
 	    return {
			type: THUMB_UP_COMMENT,
			id: commentId,
        }
	}



	const thumbDownComment = commentId => {
	return {
		type: THUMB_DOWN_COMMENT,
		id: commentId
	}
  }


export {addComment,editComment, thumbUpComment, thumbDownComment, removeComment}





