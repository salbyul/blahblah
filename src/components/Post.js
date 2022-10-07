import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { data as java } from '../data/Java';

function Post() {
    const [post, setPost] = useState({});
    const id = useParams().id;
    const subject = useParams().subject;
    let contentIndex = 0;
    useEffect(() => {
        switch (subject) {
            case 'java':
                setPost(java[id - 1]);
                break;
            default:
        }
    }, [id, subject]);
    return (
        <div className=" bg-gray-500 w-4/12 ml-1 rounded-lg h-screen mb-8">
            <div className=" h-12 border-b-2 hidden">
                각종 버튼들 뒤로가기 등등
            </div>
            <div className="mt-2 ml-2">
                <div className=" h-20">
                    <h1 className=" text-4xl font-semibold text-gray-100 tracking-wide text-center">
                        {post.title}
                    </h1>
                    <div className="text-gray-200 my-1 text-center">
                        [{post.subtitle}]
                    </div>
                    <div className=" text-gray-400">{post.date}</div>
                </div>
                <div className=" text-xl text-gray-200 mt-4">
                    {post.contents &&
                        post.contents.map((content) => {
                            if (typeof content === 'string')
                                return (
                                    <div key={contentIndex++}>{content}</div>
                                );
                            else
                                return (
                                    <img
                                        key={contentIndex++}
                                        src={
                                            process.env.PUBLIC_URL + content.src
                                        }
                                        alt="img"
                                    />
                                );
                        })}
                </div>
            </div>
        </div>
    );
}

export default Post;
