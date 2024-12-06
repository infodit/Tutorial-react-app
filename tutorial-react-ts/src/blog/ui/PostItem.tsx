import { PostItemProps } from "../definitions/PostItemProps";

export function PostItem(props: PostItemProps) {

    const {post, handleUpdate, handleDelete} = props;

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
