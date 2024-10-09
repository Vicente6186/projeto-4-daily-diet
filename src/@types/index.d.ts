import { MealType } from "@models/Meal";
import { theme } from "../theme";

type ThemeType = typeof theme

declare module 'styled-components/native' {
    export interface DefaultTheme extends ThemeType { }
}

export type ShowMealRouteParams = {
    meal: MealType
}
type RootStackParamList = {
    Home: undefined
    Overview: undefined
    StoreAndUpdateMeal: {
        variant: 'STORE' | 'UPDATE'
        meal?: MealType
    }
    StoreMealFeedback: {
        variant: 'SUCCESS' | 'DANGER'
    }
    ShowMeal: ShowMealRouteParams
}

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}