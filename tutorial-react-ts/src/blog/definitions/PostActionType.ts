import { PostType } from "./PostType";



export type PostActionType = { type: "SET_POSTS"; payload: PostType[]; } |
{ type: "ADD_POST"; payload: PostType; } |
{ type: "UPDATE_POST"; payload: { id: number; updatedFields: Partial<PostType>; }; } |
{ type: "DELETE_POST"; payload: number; };
