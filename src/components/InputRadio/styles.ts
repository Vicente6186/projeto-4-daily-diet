import styled, { css } from "styled-components/native"

export type VariantType = 'SUCCESS' | 'DANGER'

type InputRadioProps = {
    variant: VariantType,
    selected?: boolean
}

export const Container = styled.TouchableOpacity<InputRadioProps>`
   ${({ theme, variant, selected }) => css`
    padding: 16px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 1;
    flex-grow: 1;
    background-color: ${() => {
        if (variant === 'SUCCESS' && selected) return theme.COLORS.GREEN_LIGHT
        else if (variant === 'DANGER' && selected) return theme.COLORS.RED_LIGHT
        else return theme.COLORS.GRAY_6
    }};
     border: 1px solid ${() => {
        if (variant === 'SUCCESS' && selected) return theme.COLORS.GREEN_DARK
        else if (variant === 'DANGER' && selected) return theme.COLORS.RED_DARK
        else return theme.COLORS.GRAY_6
    }};
    border-radius: 6px;
   `}
`

type InputRadioBulletProps = {
    variant: VariantType,
}

export const InputRadioBullet = styled.View<InputRadioBulletProps>`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: ${({ theme, variant }) => variant === 'SUCCESS' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`