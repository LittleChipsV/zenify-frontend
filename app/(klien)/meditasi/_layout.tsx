import { Stack } from "expo-router";

const MeditasiLayout = () => (
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="index" />
        <Stack.Screen name="meditation" />
        <Stack.Screen name="meditation-details" />
    </Stack>
)

export default MeditasiLayout;