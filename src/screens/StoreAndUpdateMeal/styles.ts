import styled, { css } from "styled-components/native";
import Feather from '@expo/vector-icons/Feather';
import { SafeAreaView } from "react-native-safe-area-context";
import { Platform } from "react-native";

export const Container = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        flexGrow: 1
    }
}))`
    flex-grow: 1;
`

export const Header = styled(SafeAreaView)`
    height: 108px;
    padding: 0 16px;
    flex-direction: row;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`

export const BackArrow = styled(Feather).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GRAY_1,
}))``

export const Main = styled.View`
    padding: 40px 24px;
    flex-grow: 1;
    
    ${Platform.select({
        ios: `
        shadow-color: #000;
        shadow-offset: 0px 2px;
        shadow-opacity: 0.8;
        shadow-radius: 2px;
        `,
        android: `
        elevation: 5;
        `,
    })}
    background-color: ${({ theme }) => theme.COLORS.GRAY_7};
 
`

export const CardGray = styled.View`
    padding: 16px;
    flex-shrink: 1;
    align-items: center;
    gap: 8px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_6};
`

export const CardSuccess = styled(CardGray)`
    background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`

export const CardDanger = styled(CardGray)`
    background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};
`

export const Form = styled.View`
    gap: 24px;
    flex: 1;
`

export const InputRadioContainer = styled.View`
   gap: 8px;
`

export const InputRadioRow = styled.View`
    flex-direction: row;
    gap: 12px;
`

