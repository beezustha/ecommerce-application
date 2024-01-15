import { useEffect, useState } from "react";
import axios from "axios";

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
      <div className="flex flex-wrap">
        {products.map((product, index) => {
          return (
            <>
              <div key={index} className="sm:w-1/3 mb-8 sm:mb-0">
                <section className="p-2 py-2 bg-green-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
                  <img src={product.image} alt={product.title} />
                  <h1 className="text-3xl my-5">{product.title}</h1>
                  <p className="mb-5">{product.description}</p>
                  <h2 className="font-semibold mb-5">${product.price}</h2>
                  <button className="p-2 px-6 bg-green-500 text-white rounded-md hover:bg-green-600">
                    Add To Cart
                  </button>
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
