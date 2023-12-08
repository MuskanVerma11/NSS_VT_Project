import React from "react";
import { TextInput, View } from "react-native-paper";

const InputBox = ({
    placeholder,
    onBlur,
    onChangeText,
    value,
    touched,
    secureTextEntry,
    keyBoardType,
    maxLength,
    errors
}) =>{
    return(
        <View>
            <TextInput
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChangeText}
            value={value}
            touched={touched}
            secureTextEntry={secureTextEntry}
            keyBoardType={keyBoardType}
            maxLength={maxLength}
            errors={errors}
            />
            {touched && errors && <Text style={{color:'red', paddingLeft:5}}>{errors}</Text>}
        </View>
    )
}

export default InputBox