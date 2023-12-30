import React from "react";
import { TouchableOpacity , View, Text} from "react-native";
import { StyleSheet } from "react-native";
import { Appcolor } from "../screens/utils/AppColors";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const Components = ({buttonTitle, onPress, width, backgroundcolor}) =>{
    
    return(
        <View>
            <TouchableOpacity onPress={onPress}>
                <View style={[styles.btnContainer]}>
                    <Text style={[styles.btn, {width:width}, {backgroundColor:backgroundcolor}]}>{buttonTitle}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Components

const styles= StyleSheet.create({
    btn:{
        fontSize:wp(4.3),
        borderRadius:10,
        color:'#ffffff',
        textAlign:'center',
        paddingVertical:10,
    },
    btnContainer:{
        alignItems:'center',
        marginTop:40,
    }
})