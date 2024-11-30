import { ThemeProvider } from "styled-components";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import AsyncStorage from "@react-native-async-storage/async-storage"; //puxei o AsyncStorage
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Toast from "react-native-toast-message";
import { useEffect, useState } from "react";

import theme from "./src/theme";
import { AuthProvider } from "./src/context/AuthContext";

import Login from "./src/screens/Login";
import FormScreen from "./src/screens/Form";
import List from "./src/screens/List";
import Profile from "./src/screens/Profile";
import Details from "./src/screens/Details";
import { Loading } from "./src/components/Loading";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

function Auth() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color }) => {
          let iconName: "home" | "home-outline" | "person" | "person-outline";

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: theme.COLORS.GREEN,
        tabBarInactiveTintColor: theme.COLORS.GRAY_03,
        tabBarStyle: {
          backgroundColor: theme.COLORS.GRAY_01,
        },
      })}
    >
      <Tab.Screen name="Home" options={{ tabBarLabel: () => null }}>
        {() => (
          <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="List" component={List} />
            <HomeStack.Screen name="Details" component={Details} />
          </HomeStack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Profile"
        options={{ tabBarLabel: () => null }}
        component={Profile}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });
  const [user, setUser] = useState(null); //useState para armazenar o user

  useEffect(() => {
    const checkUser = async () => {
      const user = await AsyncStorage.getItem("user");
      if (user) {
        setUser(JSON.parse(user));
      }
    };
    checkUser();
  }, []);

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={user ? "Auth" : "Login"} //condição para verificar se o user existe
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="FormScreen" component={FormScreen} />
            <Stack.Screen name="Auth" component={Auth} />
          </Stack.Navigator>
          <Toast />
        </NavigationContainer>
      </AuthProvider>
    </ThemeProvider>
  );
}
