import { PostActionType } from "../definitions/PostActionType";
import { PostType } from "../definitions/PostType";


export function postReducer(state: PostType[], action: PostActionType) {
    switch (action.type) {
        case 'SET_POSTS':
            return action.payload
        case 'ADD_POST':
            return [...state, action.payload]

        case "UPDATE_POST":
            return state.map((post) =>
                post.id === action.payload.id ?
                    { ...post, ...action.payload.updatedFields }
                    : post
            )
        case "DELETE_POST":
            return state.filter((post) => post.id !== action.payload)
        default:
            return state;
    }
}