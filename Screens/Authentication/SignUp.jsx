import React from "react";
import { Text , View , Image} from "react-native";
import { StyleSheet } from "react-native";
import { Appcolor } from "../utils/AppColors";
import InputField from "./InputField";
import { Formik } from "formik";
import { SignUpInitialValue, SignUpValidationSchema } from "./utils";
const SignUp = () => {

    const handleSignUp = () =>{
            console.log("Hello")
    }
    return (
        <View>
            <View style={styles.logoBox}>
                <Image style={styles.logo} source={require('../../assets/nss1.png')} />
            </View>
            <View>
                <Formik
                initialValues={SignUpInitialValue}
                validationSchema={SignUpValidationSchema}
                onSubmit={handleSignUp
                }
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
                    return(
                            <View>
                                <InputField
                                placeholder={'Username'}
                                onChangeText={handleChange('Username')}
                                onBlur={handleBlur('Username')}
                                value={values? values.username:' '}
                                touched={touched.username}
                                errors={errors.username}/>
                                <InputField
                                placeholder={'Contact No'}
                                onChangeText={handleChange('Contact No')}
                                onBlur={handleBlur('Contact No')}
                                value={values? values.contactno:' '}
                                touched={touched.contactno}
                                errors={errors.contactno}/>
                                <InputField
                                placeholder={'Email'}
                                onChangeText={handleChange('Email')}
                                onBlur={handleBlur('Email')}
                                value={values? values.emailadress:' '}
                                touched={touched.emailadress}
                                errors={errors.emailadress}/>
                                <InputField
                                placeholder={'Create Password'}
                                onChangeText={handleChange('Create Password')}
                                onBlur={handleBlur('Create Password')}
                                value={values? values.createpassword:' '}
                                touched={touched.createpassword}
                                errors={errors.createpassword}/>
                                <InputField
                                placeholder={'Confirm Password'}
                                onChangeText={handleChange('Confirm Password')}
                                onBlur={handleBlur('Confirm Password')}
                                value={values? values.confirmpassword:' '}
                                touched={touched.confirmpassword}
                                errors={errors.confirmpassword}/>
                            </View>
                    )
                }
            }

                </Formik>
            </View>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    logoBox: {
        flex: 0.4,
        backgroundColor: Appcolor.NSS,
        alignItems: 'center',
        justifyContent: "center"
    },
    logo: {
        height: '50%',
        width: '40%',
    },
    Heading: {
        alignItems: 'center',
        margin: 20,

    },
    HeadingText: {
        fontSize: 30,
        fontWeight: '700',

    }
})