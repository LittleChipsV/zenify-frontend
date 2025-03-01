import { Stack } from "expo-router";

const HomeLayout = () => (
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="index" />
        <Stack.Screen name="all-articles" />
        <Stack.Screen name="article" />
    </Stack>
)

export default HomeLayout;