function Post() {
    return (
        <div className=" bg-slate-600 w-4/12 ml-1 rounded-lg h-screen mb-8">
            <div className=" h-12 border-b-2 hidden">This is section1</div>
            <div className="mt-2">
                <div className=" h-20 border-b-2 border-gray-400">
                    <h1 className=" text-3xl font-semibold text-gray-100 ml-2">
                        Head of Post
                    </h1>
                    <div className=" text-gray-400 ml-2">tag</div>
                </div>
                <div className=" text-lg text-gray-200 ml-2 mt-4">
                    Contents of Post
                </div>
            </div>
        </div>
    );
}
