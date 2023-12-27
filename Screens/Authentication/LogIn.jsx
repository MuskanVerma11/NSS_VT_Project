import React, { useState } from "react";
import { Formik } from "formik";
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { Appcolor } from "../utils/AppColors";
import { loginInitialValue, loginValidationSchema } from "./utils";
import InputField from "./InputField";
import Components from "../../Components/Components"
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import SignUp from "./SignUp";

const logo=require("../../assets/logo.png")
const LogIn = () => {

    const navigation= useNavigation();
    const [isLoading,setIsLoading]=useState(false)

    const handleLogin = () => {
        console.log("User Logged In")
        setTimeout(()=>(
            navigation.navigate('MainDrawer')
        ),1000)
    }

    return (
        <View style={styles.container}>
            <View style={styles.logoBox}>
                <Image style={styles.logo} source={logo}/>
            </View>
            
                <View style={{ flex: 0.75 , backgroundColor:"#ffffff", borderTopEndRadius:100}}>
                <View style={styles.Heading}>
                    <Text style={styles.HeadingText}>Login</Text>
                </View>
                    <Formik
                        initialValues={loginInitialValue}
                        validationSchema={loginValidationSchema}
                        onSubmit={handleLogin}
                        style={styles.formik}
                    >
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            values,
                            touched,
                            errors,
                            isValid
                        }) => {
                            return (
                                <View style={{gap:30}}>
                                    <InputField
                                        placeholder={'Username'}
                                        onChangeText={handleChange('username')}
                                        onBlur={handleBlur('username')}
                                        value={values ? values.username : ''}
                                        touched={touched.username}
                                        errors={errors.username}
                                    />

                                    <InputField
                                        placeholder={'Password'}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values ? values.password : ''}
                                        touched={touched.password}
                                        errors={errors.password}
                                    />

                                    <View style={{ alignItems: 'flex-end', marginHorizontal: 40 }}>
                                        <TouchableOpacity>
                                        <Text style={{color:"#322962"}}>Forgot Password?</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Components buttonTitle={'LogIn'} onPress={handleLogin} backgroundcolor={'#322962'} width={250}/>
                                    <TouchableOpacity style={{ alignItems: 'center',margin:6 }} onPress={() =>navigation.navigate('SignUp')}>
                                        <Text style={{ fontSize: 16, }}>New User?<Text style={{textDecorationLine:'underline', color:"#322962"}}> Sign Up</Text></Text>
                                    </TouchableOpacity>

                                </View>
                            )
                        }}
                    </Formik>
              
            </View>
        </View>
    )
}

export default LogIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Appcolor.NSS,
    },
    logoBox: {
        flex:0.4,
        alignItems: 'center',
        justifyContent: "center",
        borderBottomLeftRadius:100,
        borderBottomRightRadius:100
    },
    logo: {
        width:wp(35),
        height:wp(35)
    },
    Heading: {
        alignItems: 'center',
        margin: 20,
    },
    HeadingText: {
        fontSize: 30,
        fontWeight: '700',
    },
    formik:{
        border:2,
        borderColor:'red'
    }
})