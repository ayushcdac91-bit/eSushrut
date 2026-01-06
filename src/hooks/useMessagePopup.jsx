import { useState } from "react";

export default function useMessagePopup() {
  const [popup, setPopup] = useState({
    open: false,
    type: "info",
    title: "",
    message: "",
  });

  const showPopup = (type, title, message) => {
    setPopup({
      open: true,
      type,
      title,
      message,
    });
  };

  const closePopup = () => {
    setPopup((prev) => ({ ...prev, open: false }));
  };

  return { popup, showPopup, closePopup };
}
