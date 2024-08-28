import { Image, View, Text, ScrollView } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Link, router, useNavigation } from "expo-router";

import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { images } from "../../constants";
import { useAccount } from "../../context/GlobalProvider";

//! temp users
const users = require("../../users.json");

const SignIn = () => {
  const { account, setAccount } = useAccount();

  const [form, setForm] = useState({
    telno: "",
    password: "",
  });
  const [isSubmitting, setisSubmitting] = useState(false);

  const submit = () => {
    const account = users.find((obj) => obj.telno === form.telno);
    console.log(account ? account : "yooooooooook");

    if (!account) {
      alert("Hesap Bulunamadı!");
    } else if (account.password !== form.password) {
      alert("Hatalı Şifre!");
    } else {
      alert("Giriş Başarılı!");
      setAccount(account);
      router.replace("/home");
    }
  };

  return (
    <LinearGradient colors={["#445c9c", "#8494c4", "#e4e4f4"]}>
      <SafeAreaView className="h-full">
        <ScrollView scrollEnabled={false}>
          <View className="w-full items-center px-4">
            <Image source={images.logo} className="w-[130px] h-[84px]" resizeMode="contain" />
          </View>
          <View className="w-full  justify-center h-full px-4">
            <Text className="text-lg text-white font-psemibold mt-10">Devam etmek için lütfen giriş yapınız.</Text>
            <FormField title="Telefon Numarası" value={form.telno} handleChangeText={(e) => setForm({ ...form, telno: e })} otherStyles="mt-7" keyboardType="numeric" maxLength={10} placeholder="5xx xxx xx xx" />
            <FormField title="Şifre" value={form.password} handleChangeText={(e) => setForm({ ...form, password: e })} otherStyles="mt-7" keyboardType="numeric" maxLength={6} />

            <CustomButton title="Giriş Yap" handlePress={submit} containerStyles="mt-7" isLoading={isSubmitting} />
            <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-gray-900">İlk defa mı giriş yapacaksın?</Text>
              <Link href="/sign-up" className="text-lg font-psemibold text-primary">
                Üye Ol
              </Link>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SignIn;
