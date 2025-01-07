const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex items-center space-x-2">
                <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
                <span className="text-xl font-semibold text-blue-500">
                    Loading...
                </span>
            </div>
        </div>
    );
};

export default Loading;