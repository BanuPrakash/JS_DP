import { createContext, ReactNode, useContext } from "react";

type Post = {
    id: number,
    title: string,
    content: string,
    user: {
        id: number,
        name: string
    };
};

type PostCardProps = {
    children: ReactNode
    post: Post
}

type PostCardContextType = {
    post: Post
}
const PostCardContext = createContext<PostCardContextType | undefined>(undefined)

// custom hook
function usePostCardContext() {
    const context = useContext(PostCardContext);
    if (!context) {
        throw new Error('usePostCardContext must be use within PostCard')
    }
    return context;
}

export default function PostCard({ children, post }: PostCardProps) {
    return (
        <PostCardContext.Provider value={{ post }}>
            {children}
        </PostCardContext.Provider>
    )
}

PostCard.Title = function PostCardTitle() {
    // const {post} = usePostCardContext();
    const context = useContext(PostCardContext);

    return <h2 className='text-lg font-semibold'>{context!.post.title}</h2>
}

PostCard.User = function PostCardUser() {
    const { post } = usePostCardContext();
    return <p className='text-sm text-neutral-400'>
        {post.user.name}
    </p>
}

PostCard.Content = function PostCardUser() {
    const { post } = usePostCardContext();
    return <p>{post.content}</p>
}