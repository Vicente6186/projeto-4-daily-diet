import { Image, View } from "react-native";
import { Container, Header, HeaderProfile, MealsList, ReviewArrow, ReviewContainer, StoreMealContainer, VariantType } from "./styles";
import brand from '@assets/brand/brand.png';
import profile from '@assets/profile/profile.jpg';
import Button from "@components/Button";
import Feather from '@expo/vector-icons/Feather';
import { BodyMd, BodySm, TitleLg, TitleSm } from "@components/Texts/styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import Meal, { MealType } from "@models/Meal";
import MealCard from "@components/MealCard";

type MealGroupType = {
    [key: string]: MealType[]
}

export default function Home() {
    const navigation = useNavigation();
    const [variant, setVariant] = useState<VariantType>('SUCCESS');
    const [mealsGroupedByDate, setMealsGroupedByDate] = useState<MealGroupType>({});
    function indexMeals() {
        Meal.index().then((meals) => {
            const mealsGroupedByDate = meals.reduce<MealGroupType>((prev, meal) => {
                const key = meal.date.toLocaleDateString('pt-BR')
                prev[key] = prev[key] || [];
                prev[key] = [...prev[key], meal]
                return prev
            }, {})

            setMealsGroupedByDate(mealsGroupedByDate)
        }).catch()
    }

    useFocusEffect(
        useCallback(() => {
            indexMeals()
        }, [])
    )

    return (
        <Container>
            <Header>
                <Image source={brand} />
                <HeaderProfile source={profile} />
            </Header>

            <ReviewContainer variant={variant}>
                <TitleLg>100%</TitleLg>
                <BodySm>das refeições dentro da dieta</BodySm>
                <ReviewArrow name="arrow-up-right" onPress={() => navigation.navigate('Overview')} variant={variant} />
            </ReviewContainer>

            <StoreMealContainer>
                <BodyMd>Refeições</BodyMd>
                <Button content="Nova refeição" Icon={(props: any) => <Feather name="plus" {...props} />}
                    onPress={() => navigation.navigate('StoreAndUpdateMeal', { variant: 'STORE' })} />
            </StoreMealContainer>

          
            <MealsList
                    data={Object.entries(mealsGroupedByDate)}
                    keyExtractor={(_, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, }) => <>
                        <TitleSm style={{ marginBottom: 16 }}>{item[0]}</TitleSm>
                        <View style={{ gap: 8 }}>
                            {item[1].map((meal, index) => (
                                <MealCard key={index} variant={meal.isDiet ? 'SUCCESS' : 'DANGER'}
                                    date={meal.date} name={meal.name} onPress={() => navigation.navigate('ShowMeal', {meal})}/>
                            ))}
                        </View>
                    </>}        
                />
        </Container>
    )
}