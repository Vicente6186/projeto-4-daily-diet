import { Container, Image } from "./styles";
import { BodyMd, BodyMdBold, TitleMd } from "@components/Texts/styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import illustrationSuccess from '@assets/store_meal_feedback/illustration-success.png';
import illustrationDanger from '@assets/store_meal_feedback/illustration-danger.png';
import Button from "@components/Button";

type RouteParams = {
    variant: 'SUCCESS' | 'DANGER'
}

export default function StoreMealFeedback() {
    const navigation = useNavigation();
    const { variant } = useRoute().params as RouteParams
    const theme = useTheme()
    return (
        <Container>

            {variant === 'SUCCESS' ?
                <>
                    <TitleMd style={{ color: theme.COLORS.GREEN_DARK, marginBottom: 8 }}>Continue assim!</TitleMd>
                    <BodyMd style={{ textAlign: 'center' }}>Você continua <BodyMdBold>dentro da dieta</BodyMdBold>. Muito bem!</BodyMd>
                    <Image source={illustrationSuccess} />
                </> :
                <>
                    <TitleMd style={{ color: theme.COLORS.RED_DARK, marginBottom: 8 }}>Que pena!</TitleMd>
                    <BodyMd style={{ textAlign: 'center' }}>Você <BodyMdBold>saiu da dieta</BodyMdBold> dessa vez, mas continue se esforçando e não desista!</BodyMd>
                    <Image source={illustrationDanger} />
                </>}

            <Button content="Ir para a página inicial" onPress={() => navigation.navigate('Home')} />
        </Container>
    )
}