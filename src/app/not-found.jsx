export default function NotFound() {
  return (
    <div className="w-full h-110">
      <div className="text-center">
        <h1 className="text-9xl text-gray-200 font-bold">404</h1>
        <div className="relative">
          <h1 className="text-7xl font-bold mb-8">Oops!Page not found.</h1>
          <p className="text-gray-400 text-md mb-6">
            The page you are looking for might have been removed, had its <br/> name
            changed, or is temporarily unavailable. Do not worry, our<br/> products
            are still here!
          </p>
          <div className="flex gap-5 justify-center">
            <button className="bg-blue-600 text-white font-semibold text-md border-gray-500 rounded-lg w-45 h-8">Back to Homepage</button>
            <button className="bg-white text-black font-semibold text-md border-1 border-gray-700 rounded-lg w-45 h-8"> Browse Products</button>
          </div>
           <p className="mt-7 text-md text-gray-400">
            Need help?
            <a href="#" className="text-blue-600 hover:underline">
              Contact Support
            </a>
            </p>
        </div>
      </div>
    </div>
  );
}
