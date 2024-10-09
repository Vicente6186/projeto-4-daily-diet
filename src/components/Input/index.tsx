import { TextInput, TextInputProps } from "react-native";
import { Container, CustomTextInput } from "./styles";
import { TitleXs } from "@components/Texts/styles";
import { useRef } from "react";

type Props = TextInputProps & {
    label: string
}

export default function Input({label, style, ...rest}: Props) {
    const inputRef = useRef<TextInput>(null);

    function handleLabelPress() {
        inputRef.current?.focus();
    }

    return (
       <Container style={style}>
         <TitleXs onPress={handleLabelPress}>{label}</TitleXs>
         <CustomTextInput {...rest} ref={inputRef}/>
       </Container>
    )
}