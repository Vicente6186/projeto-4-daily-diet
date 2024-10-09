import { Form, InputRadioRow, Container, Main, BackArrow, Header, InputRadioContainer } from "./styles";
import { TitleSm, TitleXs } from "@components/Texts/styles";
import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert } from "react-native";
import Input from "@components/Input";
import InputRadio from "@components/InputRadio";
import Button from "@components/Button";
import Meal, { MealType, StoreMealParams } from '@models/Meal';
import AppError from "../../erros/AppError";

type RouteParams = {
    variant: 'STORE' | 'UPDATE'
    meal: MealType
}

export default function StoreAndUpdateMeal() {
    const navigation = useNavigation();
    const { variant, meal } = useRoute().params as RouteParams;    

    const id = meal.id;
    const [name, setName] = useState(meal.name || '');
    const [description, setDescription] = useState(meal.description || '');
    const [date, setDate] = useState(meal.date.toLocaleDateString('pt-BR') || '');
    const [hour, setHour] = useState(meal.date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) || '');
    const [isDiet, setIsDiet] = useState<boolean | null>(meal.isDiet);


    async function handleStore() {
        try {
            const mealDate =  new Date(`${date.slice(6, 10)}-${date.slice(3, 5)}-${date.slice(0, 2)}T${hour}:00`); 
            await Meal.store({ name, description, date: mealDate, hour, isDiet } as StoreMealParams);
            
            const variant = isDiet ? 'SUCCESS' : 'DANGER';
            navigation.navigate('StoreMealFeedback', { variant });
        } catch (error) {
            const message = error instanceof AppError ? error.message : 'Ocorreu um erro inesperado. Tente novamente mais tarde!';
            Alert.alert('Erro ao cadastrar a refeição!', message);
        }
    }

    async function handleUpdate() {
        try {
            const mealDate =  new Date(`${date.slice(6, 10)}-${date.slice(3, 5)}-${date.slice(0, 2)}T${hour}:00`); 
            await Meal.update({id, name, description, date: mealDate, hour, isDiet } as MealType);
            
            const variant = isDiet ? 'SUCCESS' : 'DANGER';
            navigation.navigate('StoreMealFeedback', { variant });
        } catch (error) {
            const message = error instanceof AppError ? error.message : 'Ocorreu um erro inesperado. Tente novamente mais tarde!';
            Alert.alert('Erro ao cadastrar a refeição!', message);
        }
    }

    return (
        <Container>
             <Header>
                    <BackArrow name="arrow-left" onPress={navigation.goBack} />
                    <TitleSm style={{ marginHorizontal: 'auto' }}>{variant === 'STORE' ? 'Nova refeição' : 'Editar refeição'}</TitleSm>
                </Header>


                <Main>
                    <TitleXs style={{ marginBottom: 24, textAlign: 'center' }}>Estatísticas gerais</TitleXs>

                    <Form>
                        <Input label="Nome" value={name} onChangeText={setName} />

                        <Input label="Descrição" value={description} onChangeText={setDescription} />

                        <InputRadioRow>
                            <Input label="Data" value={date} onChangeText={setDate} style={{ flex: 1 }} />

                            <Input label="Hora" value={hour} onChangeText={setHour} style={{ flex: 1 }} />
                        </InputRadioRow>

                        <InputRadioContainer>
                            <TitleXs>Está dentro da dieta?</TitleXs>
                            <InputRadioRow>
                                <InputRadio content="Sim" variant={'SUCCESS'} selected={isDiet === true} onPress={() => setIsDiet(true)} />
                                <InputRadio content="Não" variant={'DANGER'} selected={isDiet === false} onPress={() => setIsDiet(false)} />
                            </InputRadioRow>
                        </InputRadioContainer>

                        <Button 
                        content={variant === 'STORE' ? 'Cadastrar refeição' : 'Salvar alterações'} 
                        onPress={variant === 'STORE' ? handleStore : handleUpdate} 
                        style={{ marginTop: 'auto' }} />
                    </Form>

                </Main>
        </Container>
    )
}