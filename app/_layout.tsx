import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      {/* Hide header for auth pages */}
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      
      {/* Tambahkan dashboard ke dalam stack */}
      <Stack.Screen name="dashboard" options={{ headerShown: false }} />
      
    </Stack>
  );
};

export default RootLayout;

