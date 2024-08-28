import { Image, View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

import { images, icons } from "../../constants";

const Header = ({ isAccountPage }) => {
  return (
    <View className="w-full flex flex-row items-center justify-between px-4">
      <View className="flex flex-row items-center gap-4">
        <Image source={images.logoSmall} className="w-[50px] h-[50px]" resizeMode="contain" />
        <Text className="font-bold text-white text-2xl">Simav Belediyesi</Text>
      </View>
      {!isAccountPage && (
        <TouchableOpacity onPress={() => router.push("/account")}>
          <Image source={icons.profile} className="w-[30px] h-[24px]" resizeMode="contain" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
