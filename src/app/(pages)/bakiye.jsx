import { Image, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useNavigation } from "expo-router";

import { icons, images } from "../../constants";
import Header from "../../components/static/Header";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalProvider";

const Bakiye = () => {
  const { account } = useContext(GlobalContext);
  const navigation = useNavigation();

  const [selected, setSelected] = useState(null);

  const handlePress = (value) => {
    if (selected !== value) {
      setSelected(value);
    }
  };

  function split(text) {
    return text.replace(/(.{4})/g, "$1 ");
  }

  return (
    <LinearGradient colors={["#445c9c", "#8494c4", "#e4e4f4"]}>
      <SafeAreaView className="h-full">
        <ScrollView scrollEnabled={false}>
          <Header isAccountPage={true} />
          <View className="mt-10 mx-5">
            {/*  */}
            <View className="bg-white/70 rounded-2xl h-[22vh] w-auto justify-center">
              <View className="ml-5">
                <Text className="text-2xl text-black font-semibold">Yükleme Yapılacak Kart</Text>
                <Text className="mt-3 text-lg font-psemibold">{split(account.cards[0].cardno)}</Text>
                <Text className="text-2xl font-semibold">{account.cards[0].bakiye}₺</Text>
              </View>
            </View>
            {/*  */}
            <View className="bg-white/70 rounded-2xl h-[12vh] w-auto justify-center mt-4">
              <View className="">
                <Text className="text-2xl text-center text-black font-semibold underline">Son Yükleme Tarihi</Text>
                <Text className="mt-1 text-center text-lg font-psemibold">{account.cards[0].sonyukleme}</Text>
              </View>
            </View>
            {/*  */}
            <View className="flex flex-row flex-wrap gap-3 justify-center items-center mt-7">
              <TouchableOpacity className={`bg-white/70 rounded-2xl h-[10vh] w-[30%] justify-center ${selected === 5 ? "border-yanRenk border-4" : ""}`} onPress={() => handlePress(5)}>
                <Text className="text-base font-psemibold text-center">5 TL</Text>
              </TouchableOpacity>
              <TouchableOpacity className={`bg-white/70 rounded-2xl h-[10vh] w-[30%] justify-center ${selected === 10 ? "border-yanRenk border-4" : ""}`} onPress={() => handlePress(10)}>
                <Text className="text-base font-psemibold text-center">10 TL</Text>
              </TouchableOpacity>
              <TouchableOpacity className={`bg-white/70 rounded-2xl h-[10vh] w-[30%] justify-center ${selected === 25 ? "border-yanRenk border-4" : ""}`} onPress={() => handlePress(25)}>
                <Text className="text-base font-psemibold text-center">25 TL</Text>
              </TouchableOpacity>
              <TouchableOpacity className={`bg-white/70 rounded-2xl h-[10vh] w-[30%] justify-center ${selected === 50 ? "border-yanRenk border-4" : ""}`} onPress={() => handlePress(50)}>
                <Text className="text-base font-psemibold text-center">50 TL</Text>
              </TouchableOpacity>
              <TouchableOpacity className={`bg-white/70 rounded-2xl h-[10vh] w-[30%] justify-center ${selected === 100 ? "border-yanRenk border-4" : ""}`} onPress={() => handlePress(100)}>
                <Text className="text-base font-psemibold text-center">100 TL</Text>
              </TouchableOpacity>
              <TouchableOpacity className={`bg-white/70 rounded-2xl h-[10vh] w-[30%] justify-center ${selected === 200 ? "border-yanRenk border-4" : ""}`} onPress={() => handlePress(200)}>
                <Text className="text-base font-psemibold text-center">200 TL</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Bakiye;
