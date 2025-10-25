// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[90vh] text-center bg-gradient-to-b from-orange-100 to-orange-200">
      <h1 className="text-6xl font-bold text-gray-800 mb-4 drop-shadow-md">Oops!</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-6">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>
      <a
        href="/"
        className="px-5 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-all shadow-md hover:shadow-lg"
      >
        Go Back Home
      </a>
    </div>
  );
}
