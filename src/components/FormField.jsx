import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { icons } from "../constants";

// import { MaskedTextInput } from "react-native-mask-text";

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, keyboardType, maxLength, ...props }) => {
  const [showPass, setShowPass] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-lg text-gray-200 font-pmedium">{title}</Text>
      <View className="border-2 border-black rounded-2xl w-full h-16 px-4 bg-gray-300/95 items-center flex-row">
        <TextInput className="flex-1 text-black font-psemibold text-base" value={value} placeholder={placeholder} placeholderTextColor="#7b7b8b" onChangeText={handleChangeText} keyboardType={keyboardType} maxLength={maxLength} secureTextEntry={title === "Şifre" && !showPass} />

        {title === "Şifre" && (
          <TouchableOpacity onPress={() => setShowPass(!showPass)}>
            <Image source={!showPass ? icons.eye : icons.eyeHide} className="w-6 h-6" resizeMode="contain" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
