import React, { createContext, useContext } from "react";

type Post = {
    id: number,
    title: string,
    content: string,
    user: {
        id: number,
        name: string
    };
};

type PostCardContextType = {
    post: Post,
}

type PostCardProps = {
    children: React.ReactNode
    post: Post,
}

const PostCardContext = createContext<PostCardContextType | undefined>( undefined);

function usePostCardContext() {
    const context = useContext(PostCardContext);
    if(!context) {
        throw new Error('use it with Context!!!')
    }
    return context;
}

export default function PostCard({ children, post}: PostCardProps) {
    return (    
        <PostCardContext.Provider value={{post}}>
             <div className='flex w-[300px] flex-row gap-2 rounded-md'>
               {children}
             </div>
        </PostCardContext.Provider>
    )
}

PostCard.Title = function PostCardTitle() {
    const {post} = usePostCardContext();
    return  <h2 className='text-lg font-semibold'>{post.title}</h2>
}


PostCard.User = function PostCardProfile() {
     const {post} = usePostCardContext();
     return <p className='text-sm text-neutral-400'>
                        {post.user.name}
     </p>
}

PostCard.Buttons = function () {
     return  <div className='flex flex-row gap-2'>
                <button>Read more</button>
                <button>Comments</button>
            </div>

}
       