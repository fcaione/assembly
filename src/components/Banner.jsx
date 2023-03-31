import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative bg-sky-900">
      {/* Background image */}
      <img className="h-96 w-full object-contain" src="https://cdn.pixabay.com/photo/2017/08/05/18/39/office-2585036_1280.png" alt="Banner Background" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-950 opacity-50"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl font-extrabold tracking-tight text-gray-100 sm:text-4xl lg:text-5xl">Connect with Professionals</h1>
        <p className="mt-5 text-xl text-gray-300 max-w-2xl">Join our community to discuss careers and learn from other professionals.</p>
        <div className="mt-8 mb-4">
          <Link to="/signup" className="bg-white hover:bg-gray-50 text-gray-800 font-semibold py-3 px-8 rounded-full shadow-md">Join Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
