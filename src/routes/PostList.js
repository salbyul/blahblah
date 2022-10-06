import React from 'react';
import ShortPost from '../components/ShortPost';
import { data } from '../data/Java';

function PostList() {
    const subject = window.location.pathname.substring(10);
    const list = data;
    return (
        <div className=" flex mt-32 justify-center">
            <div className=" bg-slate-600 w-4/12 ml-1 rounded-lg h-screen mb-8">
                {list.map((post) => {
                    return (
                        <ShortPost
                            key={post.id}
                            title={post.title}
                            date={post.date}
                            contents={post.contents}
                            tag={post.tag}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default PostList;
