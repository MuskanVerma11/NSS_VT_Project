import { View, Text , TextInput} from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

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
        // height:40,
        height:hp(5),
        alignItems:'center',
        // marginTop:30
    },
    textEntry:{
        borderColor:'black',
        borderRadius:10,
        // height:50,
        height:hp(6.2),
        // width:350,
        width:wp(85),
        paddingHorizontal:10,
        marginHorizontal:10,
        marginTop:10,
        backgroundColor:'#D9D9D9'
    }
})