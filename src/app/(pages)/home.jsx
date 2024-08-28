import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import Header from "../../components/static/Header";
import { useContext, useState } from "react";

import { GlobalContext } from "../../context/GlobalProvider";
import PhotoAlbum from "../../components/PhotoAlbum";

const Home = () => {
  const { account } = useContext(GlobalContext);
  const [containerWidth, setContainerWidth] = useState(0);

  function split(text) {
    return text.replace(/(.{4})/g, "$1 ");
  }

  const isUserHaveCard = () => {
    if (account.cards[0]) {
      return true;
    } else return false;
  };

  const bakiyeButton = () => {
    if (!isUserHaveCard()) {
      alert("Geçerli bir kartınız bulunmamakta.");
    } else {
      router.push("/bakiye");
    }
  };

  return (
    <LinearGradient colors={["#445c9c", "#8494c4", "#e4e4f4"]}>
      <SafeAreaView className="h-full">
        <ScrollView scrollEnabled={false}>
          <Header />
          <View className="mt-10 mx-5">
            {isUserHaveCard() ? (
              <View className="p-3 bg-white/70 rounded-2xl h-[22vh] w-auto justify-center">
                <View className="ml-2">
                  <Text className="text-4xl text-black font-semibold">Benim Kartım</Text>
                  <Text className="mt-3 text-lg font-psemibold">{split(account.cards[0].cardno)}</Text>
                  <Text className="text-2xl font-semibold">{account.cards[0].bakiye}₺</Text>
                </View>
              </View>
            ) : (
              <TouchableOpacity className="p-3 bg-white/70 rounded-2xl h-[22vh] w-auto justify-center" activeOpacity={0.8} onPress={() => router.push("/kart-ekle")}>
                <Text className="text-lg text-center font-psemibold">Kart Tanımlanmamış</Text>
                <Text className="text-2xl text-center font-psemibold">Kart Ekle</Text>
              </TouchableOpacity>
            )}
            <View className="flex flex-row justify-center items-center mt-7">
              <TouchableOpacity className="bg-white/70 rounded-2xl h-[10vh] w-[47%] justify-center px-5 py-3 mr-3" onPress={bakiyeButton}>
                <Text className="text-base font-semibold text-center">Bakiye Yükle</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="bg-white/70 rounded-2xl h-[10vh] w-[47%] justify-center px-5 py-3 ml-3"
                onPress={() => {
                  router.push("/saatler");
                }}
              >
                <Text className="text-base font-semibold text-center">Otobüs Saatleri</Text>
              </TouchableOpacity>
            </View>
            {/*  */}
            <View className="mt-32">
              <Text className="text-2xl font-psemibold bottom-2 text-center">Son Haberler</Text>
              <PhotoAlbum containerStyles="bg-white/70 rounded-2xl h-[28vh] w-auto justify-center items-center" imageStyles="w-[95%] h-[90%]" />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;
