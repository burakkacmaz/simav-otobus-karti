import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { Link, Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

import CustomButton from "../components/CustomButton";
import { images } from "../constants";
import { useContext } from "react";

import { GlobalContext } from "../context/GlobalProvider";

export default function App() {
  const { account } = useContext(GlobalContext);

  if (account) {
    return (
      // Giriş yapılmışsa ana sayfaya yönlendirme yap
      <Redirect to="/home" />
    );
  }

  return (
    <LinearGradient colors={["#445c9c", "#8494c4", "#e4e4f4"]}>
      <SafeAreaView className="h-full">
        <ScrollView contentContainerStyle={{ height: "100%" }} scrollEnabled={false}>
          <View className="w-full items-center min-h-[85vh] px-4">
            {/* Logo */}

            {/* <Text className="text-4xl font-pbold text-white pt-6">Simav</Text> */}
            <Image source={images.logo} className="w-[130px] h-[84px]" resizeMode="contain" />

            <Image source={images.girisResim} className="max-w-[380px] w-full h-[300px]" resizeMode="contain" />
            <View className="relative mt-5">
              <Text className="text-3xl text-white font-bold text-center">
                <Text className="text-primary">SimavKart </Text>
                ile otobüs kartını kontrol etmek çok daha kolay!
              </Text>
            </View>
            <Text className="text-sm font-pregular text-gray-600 mt-7 text-center">Bu uygulama şu an geliştirme aşamasındadır.</Text>
            <CustomButton title="Devam Et" handlePress={() => router.replace("/sign-in")} containerStyles="w-full mt-7" />
          </View>
        </ScrollView>

        <StatusBar backgroundColor="#161622" style="light" />
      </SafeAreaView>
    </LinearGradient>
  );
}
//router.push("/sign-in")
