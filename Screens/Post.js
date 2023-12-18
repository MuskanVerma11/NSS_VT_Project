import { View, Text , StyleSheet, TextInput, ActivityIndicator,TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp  } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Home from './HomeScreen'
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function Post() {
    const [postData, setPostData]=useState('')
    const [isLoading, setIsLoading]=useState(false)
    const navigation=useNavigation();

    const handlePost=()=>{
        if(postData===''){
            Alert.alert(
                'Warning ⚠️',
                'Please Write Something'
            )
        }else{
            console.log(postData)
            setIsLoading(true)
            setTimeout(()=>{
                setIsLoading(false)
                setPostData('')
                Alert.alert(
                    'Post Added Successfully ✅',
                    'Congratulations You posted for the first time 🥳😄🎉'
                )
                navigation.navigate('Home')
            },4000)
        }
    }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
        <View style={styles.titleBar}>
            <View style={{flexDirection:"row", gap:15, alignItems:"center"}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
            <MaterialCommunityIcons name="keyboard-backspace" size={32} color="#322962" />
            </TouchableOpacity>
            <Text style={styles.titleText}>
                Write Post
            </Text>
            </View>
            <TouchableOpacity style={styles.postBtn} onPress={handlePost}>
                <Text style={styles.btnText}>Post</Text>
            </TouchableOpacity>
        </View>
        {isLoading ? (
            <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
                <ActivityIndicator size='large'/>
            </View>
        ):(
            <KeyboardAvoidingView style={styles.postContainer} behavior="height">
            <View style={styles.profileContainer}></View>
            <View>
            <TextInput 
            defaultValue={postData}
            multiline 
            placeholder="Write fearlessly..."
            style={styles.postText}
            value={postData}
            onChangeText={(text)=>setPostData(text)}
            placeholderTextColor="#32296270"
            /> 
            </View>
        </KeyboardAvoidingView>
        )}
        <View style={styles.bottomBar}>
        <TouchableOpacity>
        <FontAwesome name="image" size={28} color="#322962" />
        </TouchableOpacity>
        <TouchableOpacity>
        <MaterialCommunityIcons name="file-gif-box" size={34} color="#322962" />
        </TouchableOpacity>
        <TouchableOpacity>
        <Entypo name="attachment" size={28} color="#322962" />
        </TouchableOpacity>
        </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"#ffffff",
        flex:1,
        paddingHorizontal:18,
        paddingVertical:7
    },
    titleBar:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    titleText:{
        fontSize:wp(4.9),
        color:"#322962",
        fontWeight:"bold"
    },
    postBtn:{
        backgroundColor:"#322962",
        paddingVertical:5,
        paddingHorizontal:20,
        borderRadius:25
    },
    btnText:{
        color:"#ffffff",
        fontSize:wp(4)
    },
    profileContainer:{
        backgroundColor:"#32296240",
        width:wp(15),
        height:wp(15),
        borderRadius:50
    },
    postContainer:{
        marginTop:30,
        flexDirection:"row",
        gap:18,
        paddingHorizontal:10,
        alignItems:"flex-start"
    },
    postText:{
        fontSize:wp(4.3),
        width:wp(70),
    },
    bottomBar:{
        flexDirection:"row",
        borderWidth:1,
        paddingVertical:10,
        position:"absolute",
        bottom:0,
        width:wp(100),
        gap:15,
        alignItems:"center",
        paddingHorizontal:24,
        borderBottomColor:"white",
        borderLeftColor:"white",
        borderRightColor:"white",
        borderTopColor:"#322962"
    }
})