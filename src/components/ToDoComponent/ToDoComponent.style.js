import { Dimensions, StyleSheet } from "react-native";

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        backgroundColor: '#7da453',
        marginHorizontal: width * 0.021,
        marginVertical: height * 0.01,
        padding: height * 0.01,
        borderRadius: 10
    },
    container_done: {
        backgroundColor: '#37474f',
        marginHorizontal: width * 0.021,
        marginVertical: height * 0.01,
        padding: height * 0.01,
        borderRadius: 10
    },
    title:{
        color: 'white',
        fontSize: 18
    },
    title_done:{
        color: '#808080',
        fontSize: 18,
        textDecorationLine: 'line-through'
    }
});