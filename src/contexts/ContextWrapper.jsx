import { createContext, useEffect, useState } from "react";

const Context = createContext();

export default Context;

export const ContextWrapper = ({ children }) => {
  const [user, setUser] = useState({
    name: sessionStorage.getItem("name"),
    id: sessionStorage.getItem("id"),
    token: sessionStorage.getItem("token"),
  });
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState("$");
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    if (user.token !== sessionStorage.getItem("token")) {
      sessionStorage.setItem("name", user.name ?? "");
      sessionStorage.setItem("id", user.id ?? "");
      sessionStorage.setItem("token", user.token ?? "");
    }
  }, [user]);

  const contextData = {
    user: user,
    setUser: setUser,
    selectedCategory: selectedCategory,
    setSelectedCategory: setSelectedCategory,
    selectedCurrency: selectedCurrency,
    setSelectedCurrency: setSelectedCurrency,
  };

  return <Context.Provider value={contextData}>{children}</Context.Provider>;
};
