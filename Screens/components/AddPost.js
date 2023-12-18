import { View, Text ,StyleSheet, TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function AddPost() {
  return (
    <View style={styles.container}>
      <View style={styles.postHeader}>
        <Image source={require('../../assets/picture.png')} style={styles.profilePic}/>
        <View>
        <Text style={styles.name}>Mrityunjay Kar <Text style={styles.time}>1st</Text></Text>
        <Text style={styles.details}>NSS Head | Elec | 3rd Year</Text>
        <Text style={styles.time}>1w</Text>
        </View>
      </View>
      <View style={styles.postTextContainer}>
      <Text style={styles.postText}>{`Jai hind!!🇮🇳
To remember the virtues of the martyrs, Armed Forces Flag Day is celebrated every year on 7th December in their honour.`}</Text>
        <View>
        <Image source={require('../../assets/postImg.jpg')} style={styles.postImg}/>
        </View>
      </View>
      <View style={styles.reactions}>
        <TouchableOpacity style={{flexDirection:"row", alignItems:"center", color:"#322962"}}>
        <EvilIcons name="comment" size={35} color="#322962"/>
        <Text>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:"row", alignItems:"center", color:"#322962"}}>
        <EvilIcons name="heart" size={35} color="#322962" />
        <Text>12</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:"row", alignItems:"center", color:"#322962"}}>
        <EvilIcons name="share-google" size={35} color="#322962" />
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:"row", alignItems:"center", color:"#322962"}}>
        <Ionicons name="bookmark-outline" size={24} color="#322962" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        marginTop:25,
    },
    postHeader:{
        flexDirection:"row",
        gap:15,
        alignItems:"center"
    },
    profilePic:{
        width:wp(16),
        height:wp(16),
        borderRadius:50
    },
    name:{
        fontSize:wp(4.8),
        color:"#322962",
        fontWeight:"400"
    },
    details:{
        color:"#322962"
    },
    time:{
        color:"gray",
        fontSize:wp(3.3)
    },
    postTextContainer:{
        marginHorizontal:15,
        marginTop:15
    },
    postText:{
        textAlign:"justify",
        fontSize:wp(3.6)
    },
    postImg:{
        height:wp(60),
        width:wp(84),
        marginTop:15,
        borderRadius:10,
        alignSelf:"center"
    },
    reactions:{
        padding:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    }
})