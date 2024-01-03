import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import HighlightsCard from './components/HighlightsCard'

export default function Highlights() {
  return (
    <View style={styles.container}>
      <HighlightsCard index={0}/>
      <HighlightsCard index={1}/>
      <HighlightsCard index={2}/>
      <HighlightsCard index={3}/>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ffffff"
    }
})