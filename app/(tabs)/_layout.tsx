import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,          // Oculta o header (topo)
        tabBarStyle: { display: 'none' }, // Oculta o tab bar (rodapé)
      }}
    />
  );
}
