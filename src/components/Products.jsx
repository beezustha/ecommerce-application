import { useEffect, useState } from "react";
import axios from "axios";
import { FaShoppingCart } from "react-icons/fa";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
    // console.log("Hello form the other side");
  }, []);

  const loadProducts = async () => {
    try {
      const result = await axios.get("http://localhost:7300/products");
      console.log(result.data);
      setProducts(result.data);
    } catch (error) {
      console.error("Error loading products:", error);
    }
  };

  return (
    <div>
      {/* This is the product section */}
      <div className="header font-headerStyle text-3xl text-bold my-4 py-8">
        Our Products
      </div>
      {/* this is the card section */}
      <div className="flex flex-wrap ">
        {products.map((product, index) => {
          return (
            <>
              <div key={index} className="sm:w-1/3 mb-8 sm:mb-0 lg:px-4 ">
                <section className="p-2 py-2  text-left transform duration-500 hover:-translate-y-2 border-black-900">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="rounded-2xl"
                  />
                  <h1 className="text-2xl my-5 font-paraFont">
                    {product.title}
                  </h1>
                  <p className="mb-5 font-headerStyle">{product.description}</p>
                  <h2 className="font-semibold mb-5">${product.price}</h2>
                  <div className="flex items-center justify-between">
                    <button className="p-2 px-8 bg-purple-500 text-white rounded-md hover:bg-teal-600">
                      View Product
                    </button>
                    <button className="p-2 px-3 bg-purple-500 text-white rounded-md hover:bg-teal-600">
                      <FaShoppingCart size={25} style={{ color: "white" }} />
                    </button>
                  </div>
                </section>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
