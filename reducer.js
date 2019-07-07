import {ADD_COMMENT,REMOVE_COMMENT,EDIT_COMMENT,THUMB_DOWN_COMMENT, THUMB_UP_COMMENT} from './actions'

const initialState = {
	comments: [],
	users: []
};

function reducer(state = initialState, action) {
	switch(action.type) {
		case ADD_COMMENT:
			return Object.assign({}, state, {
				comments: [
					{
						id: action.id,
						text: action.text,
						votes: 0
					}
					, ...state]
			});
		case EDIT_COMMENT :
		return	 Object.assign({}, state, {
			comments: state.comments.filter(comment => comment.id === action.id? ( [
				{...comment, text: action.text}]):'')
		});
		
		case THUMB_DOWN_COMMENT:
			return   Object.assign({}, state, {
				comments: state.comments.filter(comment => comment.id === action.id? ( [
					{...comment, votes: comment.votes - 1
					}]):'')
			});
		
		case THUMB_UP_COMMENT:
			return   Object.assign({}, state, {
				comments: state.comments.filter(comment => comment.id === action.id? ( [
					{...comment, votes: comment.votes + 1
					}]):'')
			});
		
		case REMOVE_COMMENT:
			return Object.assign({}, state, {
				comments: state.comments.filter(comment => comment.id !== action.id)
			});
		default:
			return state;
	}
}

