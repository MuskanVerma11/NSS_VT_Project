import { View, Text, Image, StyleSheet,ImageBackground } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ProfileInfo } from '../../Data/ProfileInfo';


const ProfileCard = () => {
const ProfileData = ProfileInfo[0]

  return (
    <View style={styles.containerBox}>
      <ImageBackground source={ProfileData.backgorungImg} style={styles.coverImg}>
      <View style={styles.profilePicContainer}>
      <Image source={ProfileData.imageUri} style={styles.profilePicture}/>
      </View>
      <View style={[styles.container]}>
      <Text style={styles.name}>{ProfileData.name}</Text>
      <Text style={styles.post}>{ProfileData.post}</Text>
      <Text style={styles.Branch}>{ProfileData.Year} {ProfileData.Branch}</Text>
    </View>
      </ImageBackground>
    </View>
  )
}

export default ProfileCard

const styles = StyleSheet.create({
    containerBox:{
      alignItems:'center',
      backgroundColor:"#ffffff",
      flex:1
    },
    container: {
    width: wp(80),
    height: wp(50),
    backgroundColor:'#d9d9d9',
    // backgroundColor:"#ffffff",
    borderRadius: 20,
    alignItems:'center',
    justifyContent:'center',
    position:"absolute",
    top:150,
    // elevation:5,
    zIndex:1
    },
    name:{
        fontSize :20,
        fontWeight:'bold',
        color:"#322962",
        marginTop:45
    },
    post:{
        fontSize:18,
        fontWeight:'bold',
        color:"#322962"
    },
    Branch:{
        fontSize:16,
        color:"#322962"
    },
    profilePicture:{
      borderRadius:80, 
      width:wp(28), 
      height: wp(28), 
      zIndex:3,
    },
    profilePicContainer:{
      borderRadius:80, 
      width:wp(30), 
      height: wp(30), 
      zIndex:3,
      backgroundColor:"white",
      position:"absolute",
      top:100,
      alignItems:"center",
      justifyContent:"center"
    },
    coverImg:{
      width:wp(100),
      alignItems:"center",
      height:hp(30)
    }
})