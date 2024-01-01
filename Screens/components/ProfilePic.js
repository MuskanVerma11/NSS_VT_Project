import { View, Text, Image } from 'react-native'
import React from 'react'
import { ProfileInfo } from '../../Data/ProfileInfo';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const ProfilePic = () => {

    const ProfileData = ProfileInfo[0]
    

  return (
    <View>
      <Image source={ProfileData.imageUri} style={{borderRadius:80, width:wp(30), height: wp(30), zIndex:1, }}/>
    </View>
  )
}

export default ProfilePic