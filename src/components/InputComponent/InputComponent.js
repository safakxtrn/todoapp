import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Style from "./InputComponent.style"
import { useState } from "react";



const InputComponent = (props) => {

    const [disableFlag, setDisableFlag] = useState(true);
    const [title, setTitle] = useState();

    function textChanged(text){
        setDisableFlag(text == '');
        setTitle(text);
    }

    function buttonPressed() {
        props.onEntered(title);
        setTitle('');
        setDisableFlag(true);
    }

    
    return(
        <View style = {Style.container}>
            <TextInput style = {Style.text_input}
                placeholder="To do..."
                placeholderTextColor={'#808080'}
                onChangeText={textChanged}
                value={title}
                />
            <TouchableOpacity style = {disableFlag ? Style.button_disable : Style.button}
                onPress={buttonPressed}
                disabled = {disableFlag}>
                <Text style = {Style.button_text}>
                    Save
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default InputComponent;