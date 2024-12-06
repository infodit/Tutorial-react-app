import { PostType } from "./definitions/PostType";
import PostItem from "./ui/PostItem";
import usePostData from "./hooks/usePostData";

function BlogApp() {

    const { posts, postFunctions } = usePostData()

    const handleAddPost = () => {
        const newPost = {
            title: 'Titolo',
            userId: 1,
            body: 'Paragrafo inserito'
        }
        postFunctions.AddPost(newPost)
    }

    const handleUpdate = (id: number) => {
        postFunctions.UpdatePost(id, {
            title: 'Nuovo Titolo',
            body: 'Contenuto aggiornato'
        })
    }

    const handleDelete = (id: number) => {
        postFunctions.DeletePost(id)
    }

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


