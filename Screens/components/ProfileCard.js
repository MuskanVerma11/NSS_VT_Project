import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ProfileInfo } from '../../Data/ProfileInfo';
import ProfilePic from './ProfilePic';
import ProfileBgPic from './ProfileBgPic';


const ProfileCard = () => {
const ProfileData = ProfileInfo[0]

  return (
    <View style={{alignItems:'center'}}>
        <ProfileBgPic/>
    <View style={[styles.container]}>
      <ProfilePic style={{position:'absolute'}} />
      <Text style={styles.name}>{ProfileData.name}</Text>
      <Text style={styles.post}>{ProfileData.post}</Text>
      <Text style={styles.Branch}>{ProfileData.Year} {ProfileData.Branch}</Text>
    </View>
    </View>
  )
}

export default ProfileCard

const styles = StyleSheet.create({
    container: {
    width: wp(80),
    height: wp(50),
    backgroundColor:'#D9D9D9',
    borderRadius: 28,
    marginBottom: 50,
    marginTop:100,
    alignItems:'center',
    justifyContent:'center'

    },
    name:{
        fontSize :20,
        fontWeight:'bold',
        color:"#322962"
    },
    post:{
        fontSize:18,
        fontWeight:'bold',
        color:"#322962"
    },
    Branch:{
        fontSize:16,
        color:"#322962"
    }
})