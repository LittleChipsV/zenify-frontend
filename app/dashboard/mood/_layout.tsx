import { Stack } from "expo-router";

export default function MoodLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MoodStep1" />
      <Stack.Screen name="MoodStep2" />
      <Stack.Screen name="MoodStep3" />
    </Stack>
  );
}
