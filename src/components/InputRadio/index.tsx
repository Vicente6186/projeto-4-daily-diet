import { TouchableOpacityProps } from "react-native"
import {  Container, InputRadioBullet, VariantType } from "./styles"
import { TitleXs } from "@components/Texts/styles"

type Props = TouchableOpacityProps & {
    variant: VariantType
    selected?: boolean
    content: string
}

export default function InputRadio({ variant, selected, content, ...rest }: Props) {
    return (
        <Container variant={variant} selected={selected} {...rest}>
            <InputRadioBullet variant={variant} />
            <TitleXs>{content}</TitleXs>
        </Container>
    )
}