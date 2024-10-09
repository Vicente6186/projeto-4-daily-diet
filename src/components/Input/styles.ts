import styled from "styled-components/native";

export const Container = styled.View`
    gap: 8px;
`
    

export const CustomTextInput = styled.TextInput.attrs(({ theme }) => ({
    cursorColor: theme.COLORS.GRAY_4
}))`
    height: 48px;
    padding: 0 16px;
    border-radius: 6px;
    flex-direction: row;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
    font-family: ${({ theme }) => theme.FONTS.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONTS.FONT_SIZE.S_16}px;
    line-height: ${({ theme }) => theme.FONTS.LINE_HEIGHT.LH_16}px;
    color: ${({ theme }) => theme.COLORS.GRAY_1};
`