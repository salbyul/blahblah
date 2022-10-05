function SideNav() {
    return (
        <div
            className=" w-52 bg-slate-500 px-4 rounded-lg fixed top-30 left-0"
            style={{ height: '1300px' }}
        >
            <div className=" mb-4">
                <h4 className=" text-center text-slate-50">Salbyul</h4>
                <p className="text-slate-50 my-3">개발 공부중입니다.</p>
                <p className="text-slate-50">kpast96@gmail.com</p>
            </div>
            <hr />
            <div className="text-slate-300">
                <div className="my-4">
                    <p className="text-center text-green-100 mb-2">Learned</p>
                    <button className=" my-1">Example1 (20)</button>
                </div>
                <div className="my-4">
                    <p className="text-center text-yellow-100 mb-2">Project</p>
                    <button className=" my-1">Example1 (20)</button>
                </div>
            </div>
        </div>
    );
}
export default SideNav;
