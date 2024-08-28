import { Image, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useNavigation } from "expo-router";

import { icons, images } from "../../constants";
import Header from "../../components/static/Header";
import { useContext, useEffect, useState } from "react";
import { useAccount } from "../../context/GlobalProvider";

const AccountPage = () => {
  const { account, setAccount } = useAccount();
  const navigation = useNavigation();

  function exit() {
    setAccount(null);
    navigation.reset({
      index: 0,
      routes: [{ name: "index" }],
    });
  }

  function split(text) {
    return text.replace(/(.{4})/g, "$1 ");
  }

  return (
    <LinearGradient colors={["#445c9c", "#8494c4", "#e4e4f4"]}>
      <SafeAreaView className="h-full">
        <ScrollView scrollEnabled={false}>
          <Header isAccountPage={true} />
          <View className="p-5 items-center">
            <Text className="text-2xl font-psemibold text-yanRenk">Hesap Bilgileriniz</Text>
            <View className="pt-4 flex gap-5">
              <View className="items-center">
                <Text className="text-2xl font-pbold underline">Hesap ID'si</Text>
                <Text className="text-xl font-psemibold text-white">{account.id}</Text>
              </View>
              <View className="flex items-center">
                <Text className="text-2xl font-pbold underline">Telefon Numaranız</Text>
                <Text className="text-xl font-psemibold text-white">{account.telno}</Text>
              </View>
              <View className="flex items-center">
                <Text className="text-2xl font-pbold underline">Kayıtlı Kartlarınız</Text>
                {account.cards.map((element, index) => (
                  <Text key={index} className="text-xl font-psemibold text-white">
                    {split(element.cardno)}
                  </Text>
                ))}
              </View>
            </View>
          </View>
          <View className="mt-[50%] justify-center items-center">
            <TouchableOpacity className="bg-white/70 rounded-2xl h-[10vh] w-[20vh] justify-center items-center" activeOpacity={0.8} onPress={() => navigation.goBack()}>
              <Text className="text-3xl font-psemibold text-black/80">Geri</Text>
            </TouchableOpacity>
          </View>
          <View className="mt-5 justify-center items-center">
            <TouchableOpacity className="bg-white/70 rounded-2xl h-[10vh] w-[20vh] justify-center items-center" activeOpacity={0.8} onPress={() => exit()}>
              <Text className="text-xl font-psemibold text-black/80 text-center">Hesaptan Çık</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AccountPage;
