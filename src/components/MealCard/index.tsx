import { TouchableOpacityProps } from "react-native";
import {  CircleDanger, CircleSuccess, Container, Divider, Time, Name } from "./styles";

type Props = TouchableOpacityProps & {
    variant?: 'SUCCESS' | 'DANGER',
    date: Date
    name: string
}

export default function MealCard({variant = 'SUCCESS', date, name, ...rest} : Props) {
    return (
        <Container {...rest}>
            <Time>{date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</Time>
            <Divider />
            <Name>{name}</Name>
            {variant === 'SUCCESS' ? <CircleSuccess /> : <CircleDanger />}
        </Container>
    )
}