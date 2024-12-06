import { PostType } from "./PostType";


export type PostItemProps = {
    post: PostType;
    handleUpdate: (id: number) => void;
    handleDelete: (id: number) => void;
};
