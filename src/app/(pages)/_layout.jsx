import { View, Text } from "react-native";
import { Stack } from "expo-router/stack";
import { StatusBar } from "expo-status-bar";

const PagesLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="home" options={{ headerShown: false }} />
        <Stack.Screen name="account" options={{ headerShown: false }} />
        <Stack.Screen name="kart-ekle" options={{ headerShown: false }} />
        <Stack.Screen name="bakiye" options={{ headerShown: false }} />
        <Stack.Screen name="saatler" options={{ headerShown: false }} />
      </Stack>

      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default PagesLayout;
