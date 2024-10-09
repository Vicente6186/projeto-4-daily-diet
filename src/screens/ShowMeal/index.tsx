import { Container, Main, BackArrow, Header, CardIsDiet, CardIsDietBullet, Modal, ModalRow, ModalContainer } from "./styles";
import { BodyMd, BodySm, TitleMd, TitleSm, TitleXs } from "@components/Texts/styles";
import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Button from "@components/Button";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { ShowMealRouteParams } from "../../@types";
import Meal from "@models/Meal";

export default function ShowMeal() {
    const navigation = useNavigation();

    const { meal } = useRoute().params as ShowMealRouteParams;
    const { name, description, date, isDiet } = meal;

    const [isModalVisible, setIsModalVisible] = useState(false);

    function handleSubmit() {
        const variant = isDiet ? 'SUCCESS' : 'DANGER';
        navigation.navigate('StoreMealFeedback', { variant });
    }

    function handleDestroy() {
        Meal.destroy(meal.id).then(() => navigation.goBack()).catch()
    }

    return (
        <Container>
            <Header variant={isDiet ? 'SUCCESS' : 'DANGER'}>
                <BackArrow name="arrow-left" onPress={navigation.goBack} />
                <TitleSm style={{ marginHorizontal: 'auto' }}>{name}</TitleSm>
            </Header>

            <Main>
                <TitleMd style={{ marginBottom: 8 }}>Estatísticas gerais</TitleMd>
                <BodyMd style={{ marginBottom: 24 }}>{description}</BodyMd>

                <TitleXs style={{ marginBottom: 8 }}>Data e hora</TitleXs>
                <BodyMd style={{ marginBottom: 24 }}>{date.toLocaleString('pt-BR')}</BodyMd>

                <CardIsDiet>
                    <CardIsDietBullet variant={isDiet ? 'SUCCESS' : 'DANGER'} />
                    <BodySm>{isDiet ? 'dentro da dieta' : 'fora da dieta'}</BodySm>
                </CardIsDiet>

                <Button content="Editar refeição" onPress={() => navigation.navigate('StoreAndUpdateMeal', {variant: 'UPDATE', meal })}
                Icon={(props: any) => <AntDesign name="edit" {...props} />} style={{ marginTop: 'auto', marginBottom: 8 }} />

            <Button variant="OUTLINE" content="Excluir refeição" onPress={() => setIsModalVisible(true)}
                Icon={(props: any) => <Feather name="trash-2" {...props} />} />
            </Main>

         


           {isModalVisible && (
                <ModalContainer>
                    <Modal>
                        <TitleSm>Tem certeza que deseja excluir essa refeição?</TitleSm>
                        <ModalRow>
                            <Button variant="OUTLINE" content="Cancelar" onPress={() => setIsModalVisible(false)} />
                            <Button content="Confirmar" onPress={handleDestroy} />
                        </ModalRow>
                    </Modal>
                </ModalContainer>
            )}
        </Container>
    )
}