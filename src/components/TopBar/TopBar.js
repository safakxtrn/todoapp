import {Text, View } from "react-native";
import Style from './TopBar.style'

const TopBar = (props)=>{
    return(
        <View style = {Style.container}>
            <Text style = {Style.text}>Things To Do</Text>
            <Text style = {Style.text}>{props.counter}</Text>
        </View>
    );
};

export default TopBar;