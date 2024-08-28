import { Image, TouchableOpacity, Text } from "react-native";
import { twMerge } from "tailwind-merge";

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={twMerge(
        `bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${
          isLoading ? "opacity-50" : ""
        }`
      )}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
