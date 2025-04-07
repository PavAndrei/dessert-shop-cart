import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [desserts, setDesserts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const value = await response.json();
        setDesserts(value);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);

      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  const isSelected = (name) => cart.find((item) => item.name === name);

  const addItemToCart = (newItem) => {
    setCart((prevCart) => {
      const item = prevCart.find((i) => i.name === newItem.name);
      if (!item) {
        return [...prevCart, { ...newItem, quantity: 1 }];
      }

      return prevCart.map((i) =>
        i.name === newItem.name ? { ...i, quantity: i.quantity + 1 } : i
      );
    });
  };

  const decItem = (item) => {
    setCart((prevCart) =>
      prevCart
        .map((i) =>
          i.name === item.name
            ? i.quantity > 1
              ? { ...i, quantity: i.quantity - 1 }
              : null
            : i
        )
        .filter(Boolean)
    );
  };

  const removeItemFromCart = (name) =>
    setCart((prevCart) => prevCart.filter((i) => i.name !== name));

  const countCartItems = () =>
    cart.reduce((total, item) => total + item.quantity, 0);

  const calculateOrderSumm = () =>
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const openModal = (content) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setModalContent(null);
      setIsClosing(false);
    }, 300);
  };

  const clearCart = () => {
    closeModal();
    setCart([]);
  };

  return (
    <DataContext.Provider
      value={{
        desserts,
        cart,
        removeItemFromCart,
        countCartItems,
        decItem,
        addItemToCart,
        calculateOrderSumm,
        openModal,
        closeModal,
        clearCart,
        isOpen,
        modalContent,
        isSelected,
        isClosing,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
