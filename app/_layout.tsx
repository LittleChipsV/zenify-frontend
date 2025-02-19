import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      {/* Hide header for auth pages */}
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(klien)" options={{ headerShown: false }} />
      <Stack.Screen name="(psikolog)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;

