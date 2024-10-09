import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`

export const ActivityIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
    size: 64,
    color: theme.COLORS.GREEN_DARK
}))``