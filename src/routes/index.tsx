import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@screens/Home";
import { theme } from "../theme";
import { ThemeProvider } from "styled-components/native";
import Overview from "@screens/Overview";
import { RootStackParamList } from "../@types";
import StoreAndUpdateMeal from "@screens/StoreAndUpdateMeal";
import StoreMealFeedback from "@screens/StoreMealFeedback";
import ShowMeal from "@screens/ShowMeal";

const { Navigator, Screen } = createNativeStackNavigator()

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Home" component={Home} />
                <Screen name="Overview" component={Overview} />
                <Screen name="StoreAndUpdateMeal" component={StoreAndUpdateMeal} />
                <Screen name="StoreMealFeedback" component={StoreMealFeedback} />
                <Screen name="ShowMeal" component={ShowMeal} />
            </Navigator>
        </NavigationContainer>
    )
}