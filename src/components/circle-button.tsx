import { StyleSheet,View, Pressable } from "react-native";
import MateriaIcons from '@expo/vector-icons/MaterialIcons';

type Props ={
    onPress: () => void;
};

export default function CircleButton ({onPress}:Props){
    return(
        <View style={styles.circleButtonContainer}>
            <Pressable style={styles.circleButton} onPress={onPress}>
                <MateriaIcons name="add" size={18} color='#25292e'/>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    circleButtonContainer:{
        width: 84,
        height: 84,
        marginHorizontal: 60,
        borderWidth: 4,
        borderColor: '#ffd33d',
        borderRadius: 42,
        padding: 3,
    },
    circleButton:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:42,
        backgroundColor:'#fff',
    },
})