import { Link, useParams } from 'react-router-dom';
import { data as java } from '../data/Java';
import { data as book } from '../data/Book';

function SideNav() {
    const subject = useParams().subject;
    return (
        <div
            className="px-4 fixed h-full w-1/12"
            style={{ background: 'rgb(34,34,37)' }}
        >
            <div className=" mb-4 mt-12">
                <Link to="/blahblah">
                    <h1 className=" text-center text-slate-50 text-3xl py-6">
                        Salbyul
                    </h1>
                </Link>
            </div>
            <hr />
            <div className="text-slate-300">
                <div className="my-8 text-center">
                    <p className="text-center text-green-100 mb-12 text-2xl">
                        Learned
                    </p>
                    <Link to="/blahblah/java">
                        <button
                            className={`my-1 ${
                                subject === 'java' ? '' : 'text-gray-500'
                            } text-2xl`}
                        >
                            Java ({java.length})
                        </button>
                    </Link>
                    <br />
                    <Link to="/blahblah/book">
                        <button
                            className={`my-1 ${
                                subject === 'book' ? '' : 'text-gray-500'
                            } text-2xl`}
                        >
                            Book ({book.length})
                        </button>
                    </Link>
                </div>
                <div className="my-4 hidden">
                    <p className="text-center text-yellow-100 mb-2">Project</p>
                    <button className=" my-1">Example1 (20)</button>
                </div>
            </div>
        </div>
    );
}
export default SideNav;
