import { Image, View, Text, ScrollView } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";

import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { images } from "../../constants";

import users from "../../users.json";
import database from "../../database.json";

const SignUp = () => {
  const [form, setForm] = useState({
    telno: "",
    password: "",
  });
  const [isSubmitting, setisSubmitting] = useState(false);

  const checkPhone = (telno) => {
    var validphone = /^\d{10}$/;
    if (telno.match(validphone)) {
      return true;
    } else {
      return false;
    }
  };

  const checkPassword = (password) => {
    var validpass = /^\d{4,6}$/;
    if (password.match(validpass)) {
      return true;
    } else {
      return false;
    }
  };

  const submit = () => {
    if (!checkPhone(form.telno)) {
      alert("Tüm bilgileri eksiksiz doldurmalısınız!");
      return;
    }
    if (!checkPassword(form.password)) {
      alert("Şifrenizi minimum 4, maksimum 6 haneli olmak üzere doldurmalısınız!");
      return;
    }

    const account = users.find((user) => user.telno === form.telno);
    if (account) {
      alert("Bu telefon numarası zaten kayıtlı!");
      return;
    } else {
      database.currentUser = Number(database.currentUser) + 1;
      database.lastUserID = Number(database.lastUserID) + 1;
      const newUser = { id: database.lastUserID, telno: form.telno, password: form.password, cards: [] };
      users.push(newUser);
      // alert("ekleme yaptim");
    }

    console.log(form);
  };

  return (
    <LinearGradient colors={["#445c9c", "#8494c4", "#e4e4f4"]}>
      <SafeAreaView className="h-full">
        <ScrollView scrollEnabled={false}>
          <View className="w-full items-center px-4">
            <Image source={images.logo} className="w-[130px] h-[84px]" resizeMode="contain" />
          </View>
          <View className="w-full  justify-center h-full px-4">
            <Text className="text-lg text-white font-psemibold mt-10">Devam etmek için lütfen kayıt olunuz.</Text>
            {/* <FormField
              title="E-Posta"
              value={form.eposta}
              handleChangeText={(e) => setForm({ ...form, eposta: e })}
              otherStyles="mt-7"
              maxLength={40}
              placeholder="me@example.com"
            /> */}
            <FormField title="Telefon Numarası" value={form.telno} handleChangeText={(e) => setForm({ ...form, telno: e })} otherStyles="mt-7" keyboardType="numeric" maxLength={10} placeholder="5xx xxx xx xx" />
            <FormField title="Şifre" value={form.password} handleChangeText={(e) => setForm({ ...form, password: e })} otherStyles="mt-7" keyboardType="numeric" maxLength={6} />

            <CustomButton title="Kayıt Ol" handlePress={submit} containerStyles="mt-7" isLoading={isSubmitting} />

            <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-gray-900">Zaten hesabın var mı?</Text>
              <Link href="/sign-in" className="text-lg font-psemibold text-primary">
                Giriş Yap
              </Link>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SignUp;
