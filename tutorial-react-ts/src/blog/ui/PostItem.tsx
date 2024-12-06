import { PostItemProps } from "./PostItemProps";

export function PostItem(props: PostItemProps) {

    const post = props.post;
    const handleUpdate = props.handleUpdate;
    const handleDelete = props.handleDelete;

    return (
        <div key={post.id} id={post.id.toString()}>
            <h2>{post.title}</h2>
            <div>{post.body}</div>
            <button onClick={() => handleUpdate(post.id)}>Update Post</button>
            <button onClick={() => handleDelete(post.id)}>Delete Post</button>
        </div>
    );
}
export default PostItem;
