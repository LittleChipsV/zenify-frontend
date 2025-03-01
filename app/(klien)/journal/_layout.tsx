import { Stack } from "expo-router";

const JournalLayout = () => (
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="index" />
        <Stack.Screen name="history" />
        <Stack.Screen name="jurnal" />
        <Stack.Screen name="list-journal" />
        <Stack.Screen name="fill-journal" />
        <Stack.Screen name="finish-journal" />
        <Stack.Screen name="review-journal" />
    </Stack>
)

export default JournalLayout;