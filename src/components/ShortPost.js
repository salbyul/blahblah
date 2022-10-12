import { Link } from 'react-router-dom';

function ShortPost({ title, subtitle, date, contents, param, id, tagList }) {
    const postPath = `/blahblah/${param}/${id}`;
    return (
        <Link to={postPath}>
            <div className="hover:bg-gray-700 border-y-2 rounded-lg border-gray-400">
                <div className="ml-4 my-8 py-3">
                    <div className=" text-4xl text-gray-200">{title}</div>
                    <div className="text-gray-200 my-1">[{subtitle}]</div>
                    <div className="text-base mb-3 mt-1 text-gray-400">
                        {date}
                    </div>
                    <div className="text-xl text-gray-300">
                        {tagList.map((tag) => {
                            let result;
                            typeof tag === 'string'
                                ? (result = (
                                      <span className="text-blue-300" key={tag}>
                                          #{tag}{' '}
                                      </span>
                                  ))
                                : (result = '');
                            return result;
                        })}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ShortPost;
