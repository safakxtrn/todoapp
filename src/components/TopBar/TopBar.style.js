import { Dimensions, StyleSheet } from "react-native";

const {height,width} = Dimensions.get('window')
export default StyleSheet.create({
    container:{
        height:'10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
        
    },
    text:{
        margin: '1.8%',
        fontSize: height*0.035,
        fontWeight: 'bold',
        color:'#ffa500'
    },
    
});