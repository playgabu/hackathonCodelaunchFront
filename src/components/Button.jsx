import { Text, TouchableOpacity, View } from 'react-native';

const Button = (props) => {
    const { text, isSecondary, onPress } = props

    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <Text className={`${isSecondary ? 'bg-secondary text-black' : 'bg-primary text-secondary'} flex 
                    flex-row border-x-2 border-t-2 border-b-8 text-xl font-extrabold text-center rounded-2xl ma-5 p-4`}
                >
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button;