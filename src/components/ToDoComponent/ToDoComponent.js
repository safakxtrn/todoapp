import {  Pressable, Text, View } from "react-native";
import Style from './ToDoComponent.style';
import { useState, useEffect } from "react";

const ToDoComponent = (props) =>{

    return(
        <View style = {props.item.isDone? Style.container_done : Style.container}>
            <Pressable onPress={()=>props.onPress(props.item.id)}
                onLongPress={()=>props.onLongPress(props.item.id)}>
                <Text style = {props.item.isDone ? Style.title_done : Style.title}>
                    {props.item.title}
                </Text>
            </Pressable>
        </View>
    );
};

export default ToDoComponent;