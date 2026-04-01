import banner from "../assets/banner.png";
export default function Hero() {
  return (
    <>
      <section className="w-full bg-white">
        <div className="w-[80%] mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 w-full flex flex-col gap-5 text-center md:text-left items-center md:items-start">
            <span className="flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-purple-100 text-purple-600 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-purple-500 inline-block"></span>
              New: AI-Powered Tools Available
            </span>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              Supercharge Your <br className="hidden sm:block" /> Digital
              Workflow
            </h1>

            <p className="text-gray-500 text-base leading-relaxed max-w-lg">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today.
            </p>

            <div className="flex  flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto">
              <button className="w-full cursor-pointer sm:w-auto px-6 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors duration-200">
                Explore Products
              </button>
              <button className="w-full cursor-pointer sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-purple-400 text-purple-600 font-semibold hover:bg-purple-50 transition-colors duration-200">
                <span className="text-purple-500">&#9654;</span>
                Watch Demo
              </button>
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center md:justify-end">
            <img
              src={banner}
              alt="banner"
              className="w-full max-w-sm md:max-w-lg object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>
      <section className="relative w-full py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-900"></div>
        <div className="relative z-10 w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between text-white text-center">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold">50K+</h2>
            <p className="mt-2 text-lg">Active Users</p>
          </div>
          <div className="hidden md:block  h-16 bg-white/40"></div>
          <div className="flex-1 mt-8 md:mt-0">
            <h2 className="text-4xl md:text-5xl font-bold">200+</h2>
            <p className="mt-2 text-lg">Premium Tools</p>
          </div>

          <div className="hidden md:block   h-16 bg-white/40"></div>
          <div className="flex-1 mt-8 md:mt-0">
            <h2 className="text-4xl md:text-5xl font-bold">4.9</h2>
            <p className="mt-2 text-lg">Rating</p>
          </div>
        </div>
      </section>
    </>
  );
}
