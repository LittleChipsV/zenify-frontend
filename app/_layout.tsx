import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      {/* Hide header for auth pages */}
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      
      {/* Tambahkan dashboard ke dalam stack */}
      <Stack.Screen name="dashboard" options={{ headerShown: false }} />
      
      {/* Tambahkan mood ke dalam stack */}
      <Stack.Screen name="mood" options={{ headerShown: false }} />
        
        {/* Tambahkan doctor ke dalam stack */}
      <Stack.Screen name="doctor/[id]" options={{ headerShown: false }} />

      <Stack.Screen name="payment/payment" options={{ headerShown: false }} />

      <Stack.Screen name="counseling/chat" options={{ headerShown: false }} />


    </Stack>
  );
};

export default RootLayout;

