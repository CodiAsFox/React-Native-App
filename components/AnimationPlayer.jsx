import React, { useRef } from "react";
import LottieView from "lottie-react-native";

export default function AnimationPlayer({ type }) {
  let lottieFile = null;
  const animRef = useRef(null);

  switch (type) {
    case "loading":
      lottieFile = require("../assets/loading.json");
      break;

    case "network-error":
      lottieFile = require("../assets/network-error.json");
      break;
  }

  return (
    <LottieView
      autoPlay
      ref={animRef}
      style={{
        width: 200,
        height: 200,
        backgroundColor: "transparent",
      }}
      source={lottieFile}
    />
  );
}
