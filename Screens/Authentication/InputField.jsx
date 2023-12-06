import { View, Text , TextInput} from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

const InputField = ({
    placeholder,
    onBlur,
    onChangeText,
    value,
    touched,
    secureTextEntry,
    keyboardType,
    maxLength,
    errors
}) => {
  return (
    <View>
    <View style={styles.inputContainer}>
    <TextInput
    placeholder={placeholder}
    onBlur={onBlur}
    onChangeText={onChangeText}
    value={value}
    touched={touched}
    secureTextEntry={secureTextEntry}
    keyboardType={keyboardType}
    maxLength={maxLength}
    errors={errors}
    style={styles.textEntry}
    />
</View>
    {touched && errors && <Text style={{color:'red', paddingLeft:40, marginBottom:10}}>{errors}</Text>}
</View>
  )
}

export default InputField

const styles= StyleSheet.create({
    inputContainer:{
        height:40,
        marginBottom:30,
        alignItems:'center'
    },
    textEntry:{
        borderColor:'black',
        borderRadius:10,
        
        height:50,
        width:350,
        paddingHorizontal:10,
        marginHorizontal:10,
        backgroundColor:'#D9D9D9'
        
    }
})