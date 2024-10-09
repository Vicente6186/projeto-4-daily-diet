import { CardDanger, CardGray, CardsContainer, CardsRowContainer, CardSuccess, Container, Main, BackArrow, ReviewContainer, VariantType } from "./styles";
import { BodySm, TitleLg, TitleMd, TitleXs } from "@components/Texts/styles";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import Meal, { MealType } from "@models/Meal";

export default function Overview() {
    const navigation = useNavigation();
    const [variant, setVariant] = useState<VariantType>('DANGER');
    const [totalMeals, setTotalMeals] = useState(0);
    const [totalDiet, setTotalDiet] = useState(0);
    const [totalNotDiet, setTotalNotDiet] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const [bestSequence, setBestSequence] = useState(0);

    type MealGroupType = {
        [key: string]: number
    }

    function index() {
        Meal.index().then((meals) => {
            const totalDiet = meals.filter((meal) => meal.isDiet).length
            const totalNotDiet = meals.length - totalDiet
            const percentage = Number(((totalDiet / (meals.length)) * 100).toFixed(0))

            setVariant(percentage > 50 ? 'SUCCESS' : 'DANGER')
            setTotalMeals(meals.length)
            setTotalDiet(totalDiet)
            setTotalNotDiet(totalNotDiet)
            setPercentage(percentage)
            setBestSequence(bestSequence)
        })
    }

    useEffect(() => {
        index()
    }, []);

    return (
        <Container>

            <ReviewContainer variant={variant}>
                <TitleLg>{percentage}%</TitleLg>
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
                        <TitleMd>{totalMeals}</TitleMd>
                        <BodySm>refeições registradas</BodySm>
                    </CardGray>

                    <CardsRowContainer>
                        <CardSuccess>
                            <TitleMd>{totalDiet}</TitleMd>
                            <BodySm style={{textAlign: 'center'}}>refeições dentro da dieta</BodySm>
                        </CardSuccess>

                        <CardDanger>
                            <TitleMd>{totalNotDiet}</TitleMd>
                            <BodySm style={{textAlign: 'center'}}>refeições fora da dieta</BodySm>
                        </CardDanger>
                    </CardsRowContainer>
                </CardsContainer>

               
            </Main>
        </Container>
    )
}