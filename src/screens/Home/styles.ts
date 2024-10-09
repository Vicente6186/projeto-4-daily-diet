import styled, { css } from "styled-components/native";
import Feather from '@expo/vector-icons/Feather';
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, FlatListProps } from "react-native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`

export const Header = styled.View`
    padding: 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const HeaderProfile = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border: 2px solid black;
`

export type VariantType = 'SUCCESS' | 'DANGER'

type ReviewProps = {
    variant: VariantType
}

export const ReviewContainer = styled.View<ReviewProps>`
    margin: 32px 24px 40px;
    padding: 20px 16px;
    align-items: center;
    background-color: ${({ theme, variant }) => variant === 'SUCCESS' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    border-radius: 8px;
`


export const ReviewArrow = styled(Feather).attrs<ReviewProps>(({ theme, variant }) => ({
    size: 24,
    color: variant === 'SUCCESS' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))`
    position: absolute;
    right: 24px;
    top: 24px;
`

export const StoreMealContainer = styled.View`
    margin: 0 24px;
   gap: 8px;
`

export const MealsContainer = styled.View`
    margin-top: 32px;
    gap: 32px;
`

export const MealsGroupContainer = styled.View`
    gap: 12px;
`

export const MealsList = (styled.FlatList.attrs(() => ({
    contentContainerStyle: {
        gap: 32,
        paddingVertical: 32,
        paddingHorizontal: 24
    }
}))`
` as unknown) as typeof FlatList