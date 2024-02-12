import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../common/Nav";
import Main from "./components/Main";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((res) => {
      setProducts(res.data.product);
    });
  }, []);

  return (
    <div className="lg:px-[117px]">
      <Nav />
      <Main products={products} />
    </div>
  );
}

export default Home;
