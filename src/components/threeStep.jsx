import rocket from "../assets/rocket.png";
import play from "../assets/Play.png";
import packge from "../assets/package.png";
export default function Steps() {
  return (
    <div className="py-16 bg-gray-100 flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">
        Get Started In 3 Steps
      </h1>

      <p className="text-gray-500 mb-10 text-center max-w-xl">
        Start using premium digital tools in minutes, not hours.
      </p>

      <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl">
        <div className="bg-white rounded-xl shadow-sm p-8 text-center relative">
          <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
            01
          </div>

          <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
            <img src={packge} alt="icon" className="w-8 h-8" />
          </div>

          <h3 className="font-semibold text-lg mb-2">Create Account</h3>
          <p className="text-gray-500 text-sm">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 text-center relative">
          <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
            02
          </div>

          <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
            <img src={play} alt="icon" className="w-8 h-8" />
          </div>

          <h3 className="font-semibold text-lg mb-2">Choose Products</h3>
          <p className="text-gray-500 text-sm">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 text-center relative">
          <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
            03
          </div>

          <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
            <img src={rocket} alt="icon" className="w-8 h-8" />
          </div>

          <h3 className="font-semibold text-lg mb-2">Start Creating</h3>
          <p className="text-gray-500 text-sm">
            Download and start using your premium tools immediately.
          </p>
        </div>
      </div>
    </div>
  );
}
