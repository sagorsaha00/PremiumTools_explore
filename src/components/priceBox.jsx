import { useEffect, useState } from "react";
// import { pricingData } from "../../public/priceData";

export default function PricBox() {
  const [pricingData, setPricingData] = useState([]);
  useEffect(() => {
    const data = fetch("/priceData.json");
    data
      .then((response) => response.json())
      .then((json) => {
        setPricingData(json);
      });
  }, []);
  return (
    <div className=" py-16 bg-gray-100 px-4 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">
        Simple, Transparent Pricing
      </h1>

      <p className="text-gray-500 mb-10 text-center ">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>

      <div className="grid md:grid-cols-3 gap-6   ">
        {pricingData.map((plan) => {
          const heilightText = plan.type === "highlight";

          const cardStyle = heilightText
            ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg transform scale-105"
            : "bg-white text-gray-900";

          const textStyle = heilightText ? "opacity-90" : "text-gray-500";

          const btnStyle = heilightText
            ? "bg-white text-purple-600"
            : "bg-purple-600 text-white";

          return (
            <div
              key={plan.id}
              className={`rounded-xl p-8 flex flex-col justify-between relative shadow-sm ${cardStyle}`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-xs px-3 py-1 rounded-full text-black">
                  {plan.badge}
                </div>
              )}

              <div>
                <h3 className="font-semibold text-lg">{plan.name}</h3>

                <p className={`text-sm mb-4 ${textStyle}`}>
                  {plan.description}
                </p>

                <h2 className="text-3xl font-bold mb-4">
                  {plan.price}
                  <span className={`text-base ml-1 ${textStyle}`}>
                    {plan.period}
                  </span>
                </h2>

                <ul className="text-sm space-y-2 mb-6">
                  {plan.features.map((Description, index) => (
                    <li key={index}> {Description}</li>
                  ))}
                </ul>
              </div>

              <button
                className={`py-2 cursor-pointer rounded-full font-medium ${btnStyle}`}
              >
                {plan.button}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
