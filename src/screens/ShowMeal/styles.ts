import styled, { css } from "styled-components/native";
import Feather from '@expo/vector-icons/Feather';
import { SafeAreaView } from "react-native-safe-area-context";
import { Platform } from "react-native";

export const Container = styled.View`
    flex: 1;
`

type Props = {
    variant: 'SUCCESS' | 'DANGER'
}

export const Header = styled(SafeAreaView)<Props>`
    height: 108px;
    padding: 0 16px;
    flex-direction: row;
    align-items: center;
    background-color: ${({ theme, variant }) => variant === 'SUCCESS' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const BackArrow = styled(Feather).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GRAY_1,
}))``

export const Main = styled.View`
    padding: 40px 24px;
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

export const CardIsDiet = styled.View`
    padding: 16px;
    align-items: center;
    gap: 8px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_6};
    align-self: flex-start;
`

export const CardIsDietBullet = styled.View<Props>`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: ${({ theme, variant }) => variant === 'SUCCESS' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`

export const ModalContainer = styled.View` 
    position: absolute;
    background-color: #00000080;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 16px;
`


export const Modal = styled.View`
    padding: 32px 24px;
    align-items: center;
    gap: 32px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_7};
    position: absolute;
    border-radius: 8px;
`

export const ModalRow = styled.View`
    flex-direction: row;
    gap: 12px;
`