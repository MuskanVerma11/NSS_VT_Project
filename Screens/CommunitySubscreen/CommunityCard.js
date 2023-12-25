import { View, Text , StyleSheet,ScrollView, Image} from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { height } from 'deprecated-react-native-prop-types/DeprecatedImagePropType'


export default function CommunityCard({
    cardColor,
    cardName,  
    Name1, Role1, Details1, profilePic1, 
    Name2, Role2, Details2, profilePic2,}) {
      //variable to check whether 2nd profile exist or not 
      const isSecondProfilePresent = Name2 && Name2.trim() !== '';
      const isNewCard = cardName && cardName.trim() !== '';

  return (
    <View style={[styles.card,{backgroundColor:cardColor}, isNewCard && {marginTop:30}]}>
      <Text style={styles.cardTitle}>{cardName}</Text>

      <View style={[
          styles.profileContainer,
          !isSecondProfilePresent && { justifyContent: 'center' },
        ]}>
          <View style={styles.profile}>
            <View style={styles.ProfilePicture}>
              <Image source={profilePic1} style={styles.ProfilePicture}/>
            </View>
            <Text style={styles.name}>{Name1}</Text>
            <Text style={styles.role}>{Role1}</Text>
            <Text style={styles.details}>{Details1}</Text>
          </View>
          {Name2 && Name2.trim() !== '' &&(
            <View style={styles.profile}>
            <View style={styles.ProfilePicture}>
              <Image source={profilePic2} style={styles.ProfilePicture}/>
            </View>
            <Text style={styles.name}>{Name2}</Text>
            <Text style={styles.role}>{Role2}</Text>
            <Text style={styles.details}>{Details2}</Text>
          </View>
          )}
        </View>

      </View>
  )
}

const styles=StyleSheet.create({
      card:{
        width:wp(100),
        // marginBottom:30,
        paddingVertical:15,
        paddingHorizontal:10
      },
      cardTitle:{
        fontSize:wp(4.2),
        fontWeight:"bold",
        color:"#322962",
        textAlign:"center",
        textTransform:"uppercase"
      },
      profileContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:10,
      },
      ProfilePicture:{
        backgroundColor:"#ffffff",
        height:wp(24),
        width:wp(24),
        borderRadius:50,
        marginBottom:12,
      },
      profile:{
        alignItems:"center",
        gap:1
      },
      name:{
        color:"#322962",
        fontSize:wp(4),
        fontWeight:"bold",
        textAlign:"center"
      },
      role:{
        color:"#322962",
        fontSize:wp(3.5),
        fontWeight:"600",
        textAlign:"center"
      },
      details:{
        color:"#322962",
        fontSize:wp(2.8),
        fontWeight:"600",
        textAlign:"center",
        lineHeight:hp(2)
      }
})