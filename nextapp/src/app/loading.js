export default function Loading() {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="flex justify-center items-center mb-4">
            {/* Spinner Icon */}
            <div className="spinner-border animate-spin border-t-4 border-blue-500 border-solid rounded-full w-16 h-16"></div>
          </div>
          <h1 className="text-5xl">Loading...</h1>
        </div>
      </div>
    );
  }
  