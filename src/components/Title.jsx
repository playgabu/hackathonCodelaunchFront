import { Text, View } from 'react-native';

const Title = (props) => {

    return (
        <View>
            <Text className="text-3xl text-black font-bold">
                {props.children}
            </Text>
        </View>
    )
}

export default Title;