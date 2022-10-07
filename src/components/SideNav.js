import { Link, useParams } from 'react-router-dom';
import { data as java } from '../data/Java';

function SideNav() {
    const subject = useParams().subject;
    return (
        <div
            className=" w-52 bg-gray-500 px-4 rounded-lg fixed top-30 left-0 border-gray-400 border-2"
            style={{ height: '1300px' }}
        >
            <div className=" mb-4">
                <Link to="/blahblah">
                    <h1 className=" text-center text-slate-50 text-3xl py-6">
                        Home
                    </h1>
                </Link>
                <hr className="my-2" />
                <img className="hidden" src="#" alt="img" />
                <h4 className=" text-center text-slate-50">Salbyul</h4>
                <p className="text-slate-50 my-3">개발 공부중입니다.</p>
                <p className="text-slate-50">kpast96@gmail.com</p>
            </div>
            <hr />
            <div className="text-slate-300">
                <div className="my-4">
                    <p className="text-center text-green-100 mb-2">Learned</p>
                    <Link to="/blahblah/java">
                        <button
                            className={`my-1 ${
                                subject === 'java' ? 'text-yellow-200' : ''
                            }`}
                        >
                            Java ({java.length})
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
