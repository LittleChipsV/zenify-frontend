import { Stack } from "expo-router";

export default function MoodLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="mood-step1" />
      <Stack.Screen name="mood-step2" />
      <Stack.Screen name="mood-step3" />
    </Stack>
  );
}
