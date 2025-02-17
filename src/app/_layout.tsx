import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(shop)"
        options={{ headerShown: false, title: "RNativeCart" }}
      />
      <Stack.Screen
        name="categories"
        options={{ headerShown: true, title: "categories" }}
      />
      <Stack.Screen
        name="product"
        options={{ headerShown: true, title: "product" }}
      />
      <Stack.Screen
        name="cart"
        options={{ presentation: "modal", title: "Shopping Cart" }}
      />
      <Stack.Screen name="auth" options={{ headerShown: true }} />
    </Stack>
  );
}
