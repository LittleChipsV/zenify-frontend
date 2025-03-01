import { Stack } from "expo-router";

const MeditasiLayout = () => (
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="index" />
        <Stack.Screen name="instan" />
        <Stack.Screen name="premium" />
        <Stack.Screen name="history" />
    </Stack>
)

export default MeditasiLayout;