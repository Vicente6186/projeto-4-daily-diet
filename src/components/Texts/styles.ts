import styled, { css } from "styled-components/native";

export const TitleLg = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FONT_FAMILY.BOLD};
        font-size: ${theme.FONTS.FONT_SIZE.S_32}px;
        line-height: ${theme.FONTS.LINE_HEIGHT.LH_32}px;
        color: ${theme.COLORS.GRAY_1};
    `}`

export const TitleMd = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FONT_FAMILY.BOLD};
        font-size: ${theme.FONTS.FONT_SIZE.S_24}px;
        line-height: ${theme.FONTS.LINE_HEIGHT.LH_24}px;
        color: ${theme.COLORS.GRAY_1};
    `}`

export const TitleSm = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FONT_FAMILY.BOLD};
        font-size: ${theme.FONTS.FONT_SIZE.S_18}px;
        line-height: ${theme.FONTS.LINE_HEIGHT.LH_18}px;
        color: ${theme.COLORS.GRAY_1};
    `}`

export const TitleXs = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FONT_FAMILY.BOLD};
        font-size: ${theme.FONTS.FONT_SIZE.S_14}px;
        line-height: ${theme.FONTS.LINE_HEIGHT.LH_14}px;
        color: ${theme.COLORS.GRAY_1};
    `}`

export const BodyMd = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONTS.FONT_SIZE.S_16}px;
        line-height: ${theme.FONTS.LINE_HEIGHT.LH_16}px;
        color: ${theme.COLORS.GRAY_2};
    `}
`

export const BodyMdBold = styled(BodyMd)`
    font-family: ${({theme}) => theme.FONTS.FONT_FAMILY.REGULAR};
`

export const BodySm = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONTS.FONT_SIZE.S_14}px;
        line-height: ${theme.FONTS.LINE_HEIGHT.LH_14}px;
        color: ${theme.COLORS.GRAY_2};
    `}
`

export const BodyXs = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONTS.FONT_SIZE.S_12}px;
        line-height: ${theme.FONTS.LINE_HEIGHT.LH_12}px;
        color: ${theme.COLORS.GRAY_2};
    `}
`