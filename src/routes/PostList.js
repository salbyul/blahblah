import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShortPost from '../components/ShortPost';
import { data as java } from '../data/Java';

function PostList() {
    const [subject, setSubject] = useState([]);
    const param = useParams().subject;
    useEffect(() => {
        switch (param) {
            case 'java':
                setSubject(java);
                break;
            default:
        }
    }, [param]);
    return (
        <div className=" flex mt-32 justify-center">
            <div className=" bg-gray-500 w-4/12 ml-1 rounded-lg h-fit mb-8">
                {subject.map((post) => {
                    return (
                        <ShortPost
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            subtitle={post.subtitle}
                            date={post.date}
                            contents={post.contents}
                            tag={param}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default PostList;
