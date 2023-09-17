import { Dimensions, StyleSheet } from "react-native";

const {height, width} = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        marginHorizontal: width * 0.04,
        backgroundColor: '#37474f',
        borderRadius: 14
    },
    text_input:{
        fontSize:25,
        color: 'white',
        marginHorizontal:10,
        borderBottomWidth:2,
        borderBottomColor:'#78909c'
    },
    button:{
        height:height * 0.05,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#ffa500',
        marginHorizontal: width * 0.05,
        marginVertical: height * 0.025,
        borderRadius: 10
    },
    button_disable:{
        height:height * 0.05,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#808080',
        marginHorizontal: width * 0.05,
        marginVertical: height * 0.025,
        borderRadius: 10
    },
    button_text:{
        color:'white'
    }
});
