import { useContext } from "react";
import { CartContext } from "../../context/Context"; // Change 'Cartcontext' to 'CartContext'
import "./Cart.css";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  console.log(state);

  return (
    <div>
      <div className="h-screen bg-gray-100 pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 flex-wrap">
          {state.map((item, index) => {
            return (
              <div className="rounded-lg" key={index}>
                <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                  <img src={item.image} alt="product-image" className="w-full rounded-lg sm:w-40" />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between flex-col">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">{item.title}</h2>
                    </div>
                    <br/>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-center border-gray-100">
                        <span
                          className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                          onClick={() => {
                            if (item.quantity > 1) {
                              dispatch({ type: "DECREASE", payload: item });
                            } else {
                              dispatch({ type: "REMOVE", payload: item });
                            }
                          }}
                        >
                          {" "}
                          -{" "}
                        </span>
                        <br/>
                        <input
                          className="h-8 w-50 border bg-white text-center text-xs outline-none"
                          type="number"
                          value={item.quantity} // Use the actual item quantity here
                          min="1"
                          disabled
                        />
                        <span
                          className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                          onClick={() => dispatch({ type: "INCREASE", payload: item })}
                        >
                          {" "}
                          +{" "}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <p className="text-sm">{item.quantity * item.price}</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                          onClick={() => dispatch({ type: "REMOVE", payload: item })}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;






    // <div className="cart">
    //   {state.map((item, index) => {
    //     return (
    //       <div className="card" key={index}>
    //         <img src={item.image} alt="" />
    //         <p>{item.title}</p>
    //         <p>{item.quantity * item.price}</p>
    //         <div className="quantity">
    //           <button
    //             onClick={() => dispatch({ type: "INCREASE", payload: item })}
    //           >
    //             +
    //           </button>
    //           <p>{item.quantity}</p>
    //           <button
    //             onClick={() => {
    //               if (item.quantity > 1) {
    //                 dispatch({ type: "DECREASE", payload: item });
    //               } else {
    //                 dispatch({ type: "REMOVE", payload: item });
    //               }
    //             }}
    //           >
    //             -
    //           </button>
    //         </div>
    //         <h2 onClick={() => dispatch({ type: "REMOVE", payload: item })}>x</h2>
    //       </div>
    //     );
    //   })}
    //   {state.length > 0 && (
    //     <div className="total">
    //       <h2>{total}</h2>
    //     </div>
    //   )}
    // </div>