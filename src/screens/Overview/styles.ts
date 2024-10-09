import styled, { css } from "styled-components/native";
import Feather from '@expo/vector-icons/Feather';
import { SafeAreaView } from "react-native-safe-area-context";
import { Platform } from "react-native";

export const Container = styled.View`
    flex: 1;
`
export type VariantType = 'SUCCESS' | 'DANGER'

type ReviewProps = {
    variant: VariantType
}

export const ReviewContainer = styled(SafeAreaView)<ReviewProps>`
    height: 200px;
    padding: 0 16px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme, variant }) => variant === 'SUCCESS' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    border-radius: 8px;
`

export const BackArrow = styled(Feather).attrs<ReviewProps>(({ theme, variant }) => ({
    size: 24,
    color: variant === 'SUCCESS' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))`
    position: absolute;
    left: 24px;
    top: 36px;
`
export const Main = styled.View`
    padding: 0 24px;
    flex: 1;
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

export const CardsContainer = styled.View`
    gap: 8px;
`

export const CardsRowContainer = styled.View`
    flex-direction: row;
    gap: 12px;
`