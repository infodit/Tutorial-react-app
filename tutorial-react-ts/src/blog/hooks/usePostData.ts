import { useEffect, useReducer } from "react";
import {postReducer} from "../reducer/postReducer";
import { PostType } from "../definitions/PostType";

function usePostData() {
    const [posts,dispatch] = useReducer(postReducer,[])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => dispatch({type:'SET_POSTS', payload:data}));
    }, []);

    const postFunctions = {
        AddPost: (newPost: Omit<PostType, 'id'>) => {
            fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                body: JSON.stringify({
                    title: newPost.title,
                    body: newPost.body,
                    userId: newPost.userId
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
                .then((response) => {
                    if (!response.ok) throw new Error("Errore nell'invio del post");
                    return response.json();
                })
                .then((json) => {
                    dispatch({type:'ADD_POST', payload:json})
                    console.log("Post aggiunto:", json);
                })
                .catch((error) => console.error("Errore:", error));
        },
        UpdatePost: (id: number, updateFields: Partial<PostType>) => {
            const postUpdate = posts.find((post:PostType) => post.id === id)

            if (!postUpdate) {
                console.error(`Post non trovato per l'id:`, id);
                return
            }


            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: "PUT",
                body: JSON.stringify({
                    ...postUpdate,
                    ...updateFields,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
                .then((response) => {
                    if (!response.ok) throw new Error("Errore nell'aggiornamento del post");
                    return response.json();
                })
                .then((json) => {
                    dispatch({type:'UPDATE_POST', payload:{id,updatedFields:json}})
                    window.confirm("Post aggiornato");
                })
                .catch((error) => console.error("Errore:", error));
        },
        DeletePost: (id: number) => {
            if (!window.confirm("Sei sicuro di voler eliminare questo post?")) return;

            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: "DELETE",
            })
                .then((response) => {
                    if (!response.ok) throw new Error("Errore nell'eliminazione del post");
                    window.confirm(`Post con ID ${id} eliminato con successo.`);
                    dispatch({type:'DELETE_POST', payload:id})
                })
                .catch((error) =>
                    console.error("Errore durante l'eliminazione del post:", error)
                );
        }
    }


    return {
        posts,
        postFunctions
    }
}
export default usePostData



