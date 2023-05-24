import { toast } from "react-toastify";

const loadScript = async (url) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;

    script.onload = () => {
      resolve(true);
    };

    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};

const handleCheckout = async (selectedAddress, totalPrice) => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    toast.error("Razorpay SDK failed to load, please check your connection.");
    return;
  }

  const razorpayOptions = {
    key: process.env.REACT_APP_RAZORPAY_KEY,
    amount: totalPrice * 100,
    currency: "INR",
    name: "ATTIREX",
    description:
      "Unlock the power of style and elevate your wardrobe with ATTIREX!",
    image:
      "https://res.cloudinary.com/dptfwcnro/image/upload/v1684838756/E-comm%20ATTIREX/logo/favicon_cmrc3b.png",
    handler: function (response) {
      toast.success("Payment successful!", response);
    },
    prefill: {
      name: selectedAddress.name,
      contact: selectedAddress.phoneNumber,
      address: selectedAddress.address,
    },
    notes: {
      address: selectedAddress.address,
    },
    theme: {
      color: "#121932",
      background: "#FFFFFF",
      display_name: "ATTIREX",
    },
    modal: {
      escape: false,
      backdrop_close: true,
      handle_back: true,
    },
  };

  const razorpayInstance = new window.Razorpay(razorpayOptions);
  razorpayInstance.open();
};

export { handleCheckout };
