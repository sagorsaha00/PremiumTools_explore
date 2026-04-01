export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-sm md:text-base text-white mb-8">
          Join thousands of professionals who are already using DigiTools to
          work smarter. Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
          <button className="px-6 py-3 rounded-full border border-white hover:bg-white hover:text-purple-600 transition">
            Explore Products
          </button>

          <button className="px-6 py-3 rounded-full bg-white text-purple-600 font-medium hover:bg-gray-100 transition">
            View Pricing
          </button>
        </div>

        <p className="text-xs text-white/70">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
}
