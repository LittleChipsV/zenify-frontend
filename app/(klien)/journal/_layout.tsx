import { Stack } from "expo-router";

const JournalLayout = () => (
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="index" />
        <Stack.Screen name="history" />
    </Stack>
)

export default JournalLayout;