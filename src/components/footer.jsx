import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 px-6 py-12  ">
      <div className=" w-[80%] mx-auto grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <h3 className="text-white text-xl font-semibold mb-3">DigiTools</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Product</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Templates</li>
            <li className="hover:text-white cursor-pointer">Integrations</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Press</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Documentation</li>
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Community</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>

      <div className="w-[80%] mx-auto mt-12 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-500">
          © 2026 DigiTools. All rights reserved.
        </p>

        <div className="flex gap-4">
          <button className="bg-gray-800 cursor-pointer p-2 rounded-full hover:bg-gray-700 transition">
            <FaFacebook size={16} />
          </button>

          <button className="bg-gray-800 cursor-pointer p-2 rounded-full hover:bg-gray-700 transition">
            <FaTwitter size={16} />
          </button>

          <button className="bg-gray-800 cursor-pointer p-2 rounded-full hover:bg-gray-700 transition">
            <FaGithub size={16} />
          </button>
        </div>

        <div className="flex gap-6 text-xs text-gray-500">
          <span className="hover:text-white cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-white cursor-pointer">
            Terms of Service
          </span>
          <span className="hover:text-white cursor-pointer">Cookies</span>
        </div>
      </div>
    </footer>
  );
}
