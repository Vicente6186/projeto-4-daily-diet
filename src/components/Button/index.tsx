import { Icon } from "@expo/vector-icons/build/createIconSet"
import { Container, ButtonContent, VariantType} from "./styles"
import AntDesign from '@expo/vector-icons/AntDesign'
import { TouchableOpacityProps } from "react-native"

type Props =  TouchableOpacityProps & {
    variant?: VariantType
    content: string
    Icon?:  any
}

export default function Button({ variant = 'DEFAULT', content, Icon, ...rest }: Props) {
    return (
        <Container variant={variant} {...rest}>
            {Icon && <Icon size={24} color={variant === 'DEFAULT' ? '#fff' : '#000'} />}
            <ButtonContent variant={variant}>{content}</ButtonContent>
        </Container>
    )
}