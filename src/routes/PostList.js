import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShortPost from '../components/ShortPost';
import { data as java } from '../data/Java';
import { data as book } from '../data/Book';

function PostList() {
    const [subject, setSubject] = useState([]);
    const param = useParams().subject;
    useEffect(() => {
        switch (param) {
            case 'java':
                setSubject(java);
                break;
            case 'book':
                setSubject(book);
                break;
            default:
        }
    }, [param]);
    return (
        <>
            <div className=" flex justify-center">
                <div
                    className="w-4/12 rounded-lg h-fit my-20"
                    style={{ background: '#1b1b1e' }}
                >
                    {subject.map((post) => {
                        return (
                            <ShortPost
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                subtitle={post.subtitle}
                                date={post.date}
                                contents={post.contents}
                                param={param}
                                tagList={post.tag}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default PostList;
