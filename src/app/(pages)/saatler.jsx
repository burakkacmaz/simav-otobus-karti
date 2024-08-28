import { View, Text, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";

import Header from "../../components/static/Header";

import seferler from "../../saatler.json";

const Seferler = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={["#445c9c", "#8494c4", "#e4e4f4"]}>
      <SafeAreaView className="h-full">
        <ScrollView scrollEnabled={false}>
          <Header isAccountPage={true} />
          <View className="mt-5 flex">
            <Text className="text-3xl font-psemibold text-center text-white">Otobüs Saatleri</Text>
            {/* Belediye - Eynal - Toki */}
            <View className="p-2">
              <Text className="text-center font-psemibold text-xl text-white">{seferler.departure}</Text>
              {seferler.BELEDİYE.map((item, index) => (
                <View key={index} className="flex-row p-2">
                  <Text className="flex-1 font-psemibold">
                    BELEDİYE: <Text className="text-white">{item.time}</Text>
                  </Text>
                  <Text className="flex-1 font-psemibold">
                    EYNAL: <Text className="text-white">{seferler.EYNAL[index].time}</Text>
                  </Text>
                  <Text className="flex-1 font-psemibold">
                    TOKİ: <Text className="text-white">{seferler.TOKİ[index].time}</Text>
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Seferler;
