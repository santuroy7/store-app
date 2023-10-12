import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import ShimmerUI from "./Shimmer";
import ProductCard from "./ProductCard";
const Body = () => {
  const [listOfProduct, setlistOfProduct] = useState([]);
  const [filterProduct, setfilterProduct] = useState([]);
  const [searchProduct, setsearchProduct] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const dataAll = await axios.post(
      "http://3.7.252.58:4001/product/getAllProduct"
    );
    // console.log("productlist", dataAll.data);
    setlistOfProduct(dataAll.data);
    setfilterProduct(dataAll.data);
  };
  if (listOfProduct.length === 0) {
    return <ShimmerUI />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            className="search-txt"
            value={searchProduct}
            onChange={(e) => {
              setsearchProduct(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              const filterProductData = listOfProduct.filter((product) =>
                product.name
                  .toLocaleLowerCase()
                  .includes(searchProduct.toLocaleLowerCase())
              );
              setfilterProduct(filterProductData);
            }}
          >
            Search
          </button>
        </div>
        {/* CAN USE THIS AS FILTER */}
        {/* <button
          className="filter-btn"
          onClick={() => {
            const filterData = listOfProduct.filter(
              (product) => product.rating > 3
            );
            setfilterProduct(filterData);
          }}
        >
          Higher Rating
        </button> */}
      </div>
      <div className="product-container">
        {filterProduct.map((product) => (
          <ProductCard key={product._id} proData={product} />
        ))}
      </div>
    </div>
  );
};

export default Body;
