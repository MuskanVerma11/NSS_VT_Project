import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { HighlightsData } from '../../Data/HighlightsData'

export default function HighlightsCard({index}) {
  const highlightData = HighlightsData[index];

  return (
    <View style={styles.container}>
      <Image source={highlightData.image} style={styles.img}/>
      <View style={styles.captionContainer}>
      <Text style={styles.tag}>{highlightData.tag}</Text>
      <Text style={styles.captions}>{highlightData.caption}</Text>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:"row",
        gap:15,
        elevation:5,
        backgroundColor:"#f5f5f5",
        margin:10,
        borderRadius:10,
        padding:8
    },
    img:{
        width:wp(26),
        height:wp(23),
        borderRadius:10
    },
    tag:{
        fontSize:wp(3.3),
        fontWeight:"bold"
    },
    captionContainer:{
        paddingRight:20,
        width:wp(65),
    },
    captions:{
        textAlign:"justify",
        fontSize:wp(3.3)
    }
})