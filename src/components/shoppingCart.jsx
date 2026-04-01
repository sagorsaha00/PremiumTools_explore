import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function CartIcon() {
  const { cart } = useContext(ThemeContext);

  return (
    <div className="relative ml-16 inline-block">
      <ShoppingCart size={30} className="ml-5 text-gray-700 cursor-pointer" />
      {cart.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {cart.length}
        </span>
      )}
    </div>
  );
}
