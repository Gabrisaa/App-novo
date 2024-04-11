import { StackNavigationProp, createStackNavigator } from "@react-navigation/stack";
import { ScreenSlide1, ScreenSlide2 } from "../screens";

type MenuStackParam = {
    Slide1: undefined
    Slide2: undefined
}
type MenuScreenNavegation = StackNavigation<MenuStackParam, "Slide1">
export type MenuStackParam = {
    navigatiom: MenuScreenNavegation
}

export function MenuStack() {
    const Stack = createStackNavigator<MenuStackParam>();
    return (
        <Stack.Navigator screen0ptions={{
            animationEnabled: true,
            gestureEnabled: true
        }}>
            <Stack.Screen name="Slide1" component={ScreenSlide1} />
            <Stack.Screen name="Slide2" component={ScreenSlide2} />
        </Stack.Navigator>
    );
}