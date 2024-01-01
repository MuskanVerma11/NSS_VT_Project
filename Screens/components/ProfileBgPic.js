import { View, Text , Image} from 'react-native'
import React from 'react'
import { ProfileInfo } from '../../Data/ProfileInfo';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ProfileBgPic = () => {

    const ProfileData = ProfileInfo[0]
  return (
    <View>
      <Image source={ProfileData.backgorungImg} style={{height: hp(30)}}/>
    </View>
  )
}

export default ProfileBgPic