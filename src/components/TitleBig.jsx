
import { View, Text } from 'react-native';

const TitleBig = ({ titleLine1, titleLine2 }) => {
    return (

        <View className='flex w-screen justify-end bg-primaryLighter h-40'>
            <Text className='pb-2 pl-2 font-bold font text-3xl'>{titleLine1}</Text>
            <Text className='pb-2 pl-2 font-bold font text-3xl'>{titleLine2}</Text>
        </View>

    );
}

export default TitleBig;