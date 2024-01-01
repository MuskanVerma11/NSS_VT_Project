import { View, Text, FlatList, TouchableOpacity, StyleSheet , Button} from 'react-native'
import React from 'react'
import { AntDesign, MaterialIcons , Entypo } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TaC } from '../Data/TaC';
import { ScrollView } from 'react-native-gesture-handler';
import Components from '../Components/Components';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Terms_and_conditions() {
  return (
    
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.HeaderBox}>
          <Text style={styles.Heading}>Terms and Conditions</Text>
          <Text style={styles.SSubheading}>Last Updated September 14, 2023</Text>
        </View>
        <View>
          <View>
            <Text style={styles.SubHeading}>Contents:</Text>
          </View>
        <FlatList
        style={{marginBottom:30}}
        data={TaC}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={({item}) =>(
            <View>
              <Text style={styles.item}>{item.id} . {item.Heading}</Text>
            </View>
        )}/>
        </View>
   
         
            <FlatList
            data={TaC}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={({item})=>(
              <View style={{paddingRight:15}}>
                <Text style={styles.SubHeading} >{item.id}. {item.Heading}</Text>
                <Text style={styles.item}>{item.Point}</Text>
              </View>
            )}
            />
            <View style={styles.button}>
              <Components buttonTitle='Accept' width={150} backgroundcolor={'#322962'}/>
              <Components  buttonTitle='Decline' width={150} backgroundcolor={'#847AB7'}/>
            </View>
         </ScrollView>
         
      </SafeAreaView>


  
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor:"#ffffff",
  },
  HeaderBox: {
    borderBottomColor: '#322962',
    borderBottomWidth: 1,
    paddingBottom: 20,
    width:wp(100)
  },
  Heading: {
    fontSize:wp(6.6),
    color: "#322962",
    marginTop: 20,
    fontWeight:"bold",
    marginLeft:30
  },
  SubHeading: {
    fontSize:wp(5.8),
    color: "#322962",
    marginTop: 20,
    marginLeft:30,
    fontWeight:"400"
  },
  SSubheading: {
    color: "#322962",
    fontSize:wp(3.6),
    lineHeight:20,
    textAlign:"justify",
    marginLeft:35
  },
  button:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    margin:30,
  },
  item: {
    color: "#322962",
    fontSize:wp(4.1),
    lineHeight:30,
    textAlign:"justify",
    marginLeft:30,
    marginRight:10
  },
})