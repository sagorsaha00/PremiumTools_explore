import { useContext, useEffect } from "react";
import { MoveUpRight } from "lucide-react";
import { useState } from "react";
import ThemeContext from "../ThemeContext";
import { toast } from "react-toastify";

function ProductCard({ item, ItemAddCart }) {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
      <div className="flex justify-between items-center">
        <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
          {item.badge}
        </span>
        <img src={item.image} className="w-6 h-6 object-cover" />
      </div>

      <h2 className="text-xl font-semibold mt-4">{item.title}</h2>
      <p className="text-gray-500 text-sm mt-2">{item.description}</p>

      <div className="mt-4">
        <span className="text-2xl font-bold">{item.price}</span>
        <span className="text-gray-400 text-sm">/{item.type}</span>
      </div>

      <ul className="mt-4 space-y-2">
        {item.features.map((discription, i) => (
          <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
            <MoveUpRight size={20} className="text-green-500" />
            {discription}
          </li>
        ))}
      </ul>

      <button
        onClick={() => {
          ItemAddCart(item);
          setClicked(true);
        }}
        className={`w-full cursor-pointer mt-6 py-2 rounded-full font-medium transition ${clicked ? "bg-green-500 text-white cursor-not-allowed" : "bg-purple-600 text-white hover:bg-purple-700"}`}
        disabled={clicked}
      >
        {clicked ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
}

function Cart({ cart, RemoveProduct, handleClearCart }) {
  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

  if (cart.length === 0) {
    return (
      <div className="mt-10 text-center text-gray-500">
        Your cart is empty. Add some products to get started.
      </div>
    );
  }

  return (
    <div className="mt-10 mx-auto bg-white rounded-2xl shadow p-6 sm:p-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Cart</h2>

      <div className="space-y-4">
        {cart.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-100 rounded-xl p-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-gray-800 font-medium">{item.title}</h3>
                <p className="text-gray-500 text-sm">${item.price}</p>
              </div>
            </div>

            <button
              onClick={() => RemoveProduct(item)}
              className="text-pink-500 text-sm font-medium hover:underline cursor-pointer"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6">
        <span className="text-gray-500">Total:</span>
        <span className="text-xl font-semibold text-gray-800">
          ${total.toFixed(2)}
        </span>
      </div>

      <button
        onClick={() => handleClearCart()}
        className="w-full mt-6 cursor-pointer py-3 rounded-full text-white font-medium bg-gradient-to-r from-purple-600 to-indigo-500 hover:opacity-90 transition"
      >
        Proceed To Checkout
      </button>
    </div>
  );
}

export default function ProductsPrimumSection() {
  const [activeTab, setActiveTab] = useState("products");
  const { cart, setCart } = useContext(ThemeContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const data = fetch("/products.json");
    data
      .then((response) => response.json())
      .then((json) => {
        console.log("json data", data);
        setProducts(json);
      });
  }, [cart]);
  function handleAddToCart(item) {
    toast.success("✅ Product added to cart!");
    if (cart.find((agoProduct) => agoProduct.id === item.id)) return;
    setCart((prev) => [...prev, item]);
  }

  function handleRemove(itemToRemove) {
    toast.error("❌ Product removed from cart!");
    setCart((prev) => prev.filter((item) => item !== itemToRemove));
  }
  function handleClearCart() {
    setCart([]);
    toast.success("Cart Clear Successfully");
  }

  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="w-[90%] mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Premium Digital Tools
          </h1>

          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={() => setActiveTab("products")}
              className={`px-6 py-2 cursor-pointer rounded-full transition ${
                activeTab === "products"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              Products
            </button>

            <button
              onClick={() => setActiveTab("cart")}
              className={`px-6 cursor-pointer py-2 rounded-full transition ${
                activeTab === "cart"
                  ? "bg-purple-600 text-white"
                  : "bg-white border text-gray-600"
              }`}
            >
              Cart ({cart.length})
            </button>
          </div>
        </div>

        {activeTab === "products" && (
          <div className="grid gap-6 p-7 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                ItemAddCart={handleAddToCart}
              />
            ))}
          </div>
        )}

        {activeTab === "cart" && (
          <Cart
            cart={cart}
            RemoveProduct={handleRemove}
            handleClearCart={handleClearCart}
          />
        )}
      </div>
    </section>
  );
}
