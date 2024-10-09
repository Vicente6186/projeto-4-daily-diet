import { CardDanger, CardGray, CardsContainer, CardsRowContainer, CardSuccess, Container, Main, BackArrow, ReviewContainer, VariantType } from "./styles";
import { BodySm, TitleLg, TitleMd, TitleXs } from "@components/Texts/styles";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";

export default function Overview() {
    const [variant, setVariant] = useState<VariantType>('DANGER');
    const navigation = useNavigation();
    return (
        <Container>

            <ReviewContainer variant={variant}>
                <TitleLg>100%</TitleLg>
                <BodySm>das refeições dentro da dieta</BodySm>
                <BackArrow name="arrow-left" onPress={navigation.goBack} variant={variant} />
            </ReviewContainer>


            <Main>
                <TitleXs style={{ marginTop: 32, marginBottom: 24, textAlign: 'center' }}>Estatísticas gerais</TitleXs>

                <CardsContainer>
                    <CardGray>
                        <TitleMd>22</TitleMd>
                        <BodySm>melhor sequência de pratos dentro da dieta</BodySm>
                    </CardGray>

                    <CardGray>
                        <TitleMd>109</TitleMd>
                        <BodySm>refeições registradas</BodySm>
                    </CardGray>

                    <CardsRowContainer>
                        <CardSuccess>
                            <TitleMd>109</TitleMd>
                            <BodySm style={{textAlign: 'center'}}>refeições dentro da dieta</BodySm>
                        </CardSuccess>

                        <CardDanger>
                            <TitleMd>109</TitleMd>
                            <BodySm style={{textAlign: 'center'}}>refeições fora da dieta</BodySm>
                        </CardDanger>
                    </CardsRowContainer>
                </CardsContainer>

               
            </Main>
        </Container>
    )
}