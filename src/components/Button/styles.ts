import { Component } from "react";
import { Button } from "react-native";
import styled, { css } from "styled-components/native";

export type VariantType = 'DEFAULT' | 'OUTLINE'

type Props = {
    variant: VariantType
}

export const Container = styled.TouchableOpacity<Props>`
   ${({ theme, variant }) => css`
    height: 50px;
    padding: 0 16px;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    background-color: ${variant === 'DEFAULT' && theme.COLORS.GRAY_2};
    border: ${variant === 'OUTLINE' && `1px solid ${theme.COLORS.GRAY_2}`};
    flex-direction: row;
   `}
`

export const ButtonContent = styled.Text<Props>`
    ${({ theme, variant }) => css`
        font-family: ${theme.FONTS.FONT_FAMILY.BOLD};
        font-size: ${theme.FONTS.FONT_SIZE.S_14}px;
        line-height: ${theme.FONTS.LINE_HEIGHT.LH_14}px;
        color: ${variant === 'DEFAULT' ? theme.COLORS.WHITE : theme.COLORS.GRAY_2};
    `}
`
