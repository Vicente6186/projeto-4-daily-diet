import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
    padding: 14px 16px 14px 12px;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
    border-radius: 8px;
`

export const Time = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FONT_FAMILY.BOLD};
        font-size: ${theme.FONTS.FONT_SIZE.S_12}px;
        line-height: ${theme.FONTS.LINE_HEIGHT.LH_12}px;
        color: ${theme.COLORS.GRAY_1};
    `}
`
export const Divider = styled.View`
    width: 1px;
    height: 14px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_4};
`

export const Name = styled.Text`
    ${({ theme }) => css`
    flex: 1;
        font-family: ${theme.FONTS.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONTS.FONT_SIZE.S_16}px;
        line-height: ${theme.FONTS.LINE_HEIGHT.LH_16}px;
        color: ${theme.COLORS.GRAY_2};
    `}
`

export const CircleSuccess = styled.View`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.COLORS.GREEN_MID};
`

export const CircleDanger = styled.View`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.COLORS.RED_MID};
`