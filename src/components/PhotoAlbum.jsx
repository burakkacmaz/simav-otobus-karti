import React, { useState, useEffect } from "react";
import { View, Image, Animated } from "react-native";
import { images } from "../constants/index";

const PhotoAlbum = ({ containerStyles, imageStyles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const photos = [images.resim1, images.resim2, images.resim3, images.resim4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View className={`${containerStyles}`}>
      {photos.map((photo, index) => (
        <Animated.Image resizeMode="cover" key={index} source={photo} className={`absolute object-fill ${imageStyles} ${index === currentIndex ? "opacity-1 z-10" : "opacity-0 z-0"}`} />
      ))}
    </View>
  );
};

export default PhotoAlbum;
