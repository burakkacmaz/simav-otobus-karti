import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import { Link, router, useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

import FormField from "../../components/FormField";

import { useContext, useState } from "react";
import { useAccount } from "../../context/GlobalProvider";
import Header from "../../components/static/Header";

import users from "../../users.json";

const KartEkle = () => {
  const navigation = useNavigation();
  const { account, setAccount } = useAccount();

  const [form, setForm] = useState({
    cardno: "",
  });

  const checkCardNo = (cardno) => {
    var validno = /^\d{16}$/;
    if (cardno.match(validno)) {
      return true;
    } else {
      return false;
    }
  };

  const submit = () => {
    if (!checkCardNo(form.cardno)) {
      alert("Hatalı kart numarası girdiniz!");
      return;
    }
    const newUserCard = {
      id: account.id,
      telno: account.telno,
      password: account.password,
      cards: [
        {
          cardno: form.cardno,
          bakiye: "0",
          sonyukleme: "4/5/2024",
        },
      ],
    };
    setAccount(newUserCard);
    alert("Kartınız Eklendi!");
    navigation.goBack();
  };

  return (
    <LinearGradient colors={["#445c9c", "#8494c4", "#e4e4f4"]}>
      <SafeAreaView className="h-full">
        <ScrollView contentContainerStyle={{ height: "100%" }} scrollEnabled={false}>
          <Header isAccountPage={true} />
          <Text className="text-3xl font-psemibold m-5">Kart Bilgileri</Text>
          <View className="w-full items-center min-h-[85vh] px-4">
            <FormField title="Kart Numasası" value={form.cardno} handleChangeText={(e) => setForm({ ...form, cardno: e })} keyboardType="numeric" maxLength={16}></FormField>
            <TouchableOpacity
              onPress={submit}
              style={{
                backgroundColor: "#4CAF50",
                padding: 10,
                borderRadius: 5,
                marginTop: 20,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Kartı Kaydet</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <StatusBar backgroundColor="#161622" style="light" />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default KartEkle;
