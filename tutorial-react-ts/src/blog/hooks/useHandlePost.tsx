import usePostData from "./usePostData";

function useHandlePost() {
    
    const { posts,postFunctions } = usePostData()

    const handleAddPost = () => {
        const newPost = {
            title: 'Titolo',
            userId: 1,
            body: 'Paragrafo inserito'
        };
        postFunctions.AddPost(newPost);
    };

    const handleUpdate = (id: number) => {
        postFunctions.UpdatePost(id, {
            title: 'Nuovo Titolo',
            body: 'Contenuto aggiornato'
        });
    };

    const handleDelete = (id: number) => {
        postFunctions.DeletePost(id);
    };
    return { posts,handleUpdate, handleDelete, handleAddPost };
}

export default useHandlePost