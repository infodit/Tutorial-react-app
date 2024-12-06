import { PostType } from "./definitions/PostType";
import PostItem from "./ui/PostItem";
import useHandlePost from "./hooks/useHandlePost";

function BlogApp() {

    const { posts, handleUpdate, handleDelete, handleAddPost } = useHandlePost();

    return (
        <div style={{ width: 600 }}>
            {posts.map((post: PostType) => (
                <PostItem
                    key={post.id}
                    post={post}
                    handleUpdate={handleUpdate}
                    handleDelete={handleDelete} />
            ))}
            <button onClick={handleAddPost}>Add Post</button>
        </div>);
}

export default BlogApp


