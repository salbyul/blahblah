function ShortPost({ title, date, contents, tag }) {
    return (
        <div className="hover:bg-slate-700 rounded-lg">
            <div className="ml-4 my-8 py-3">
                <div className=" text-4xl text-gray-200">{title}</div>
                <div className="text-base mb-3 mt-1 text-gray-400">
                    {date} &lt;{tag}&gt;
                </div>
                <div className="text-xl text-gray-300">{contents}</div>
            </div>
        </div>
    );
}

export default ShortPost;
