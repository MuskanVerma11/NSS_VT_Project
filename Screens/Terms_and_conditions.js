import { View, Text, FlatList, TouchableOpacity, StyleSheet , Button} from 'react-native'
import React from 'react'
import { AntDesign, MaterialIcons , Entypo } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TaC } from '../Data/TaC';
import { ScrollView } from 'react-native-gesture-handler';
import Components from '../Components/Components';


export default function Terms_and_conditions() {
  return (
    
      <SafeAreaView style={{flex:1}}>
        <ScrollView>
        <View style={styles.HeaderBox}>
          <TouchableOpacity>
            <View style={styles.icon}>
              <AntDesign name='left' size={30} color="#322962" />
            </View>
          </TouchableOpacity>
          <Text style={styles.Heading}>Terms and Conditions</Text>
          <Text style={styles.SSubheading}>Last Updated September 14, 2023</Text>
        </View>
        <View>
          <View>
            <Text style={styles.SubHeading}>Contents:</Text>
          </View>
        <FlatList
        style={{marginBottom:50}}
        data={TaC}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={({item}) =>(
            <View>
              <Text style={styles.SSubheading}>{item.id} . {item.Heading}</Text>
            </View>
        )}/>
        </View>
   
         
            <FlatList
            data={TaC}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={({item})=>(
              <View style={{paddingRight:15}}>
                <Text style={styles.SubHeading} >{item.id}. {item.Heading}</Text>
                <Text style={styles.SSubheading}>{item.Point}</Text>
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
  HeaderBox: {
    borderBottomColor: '#808080',
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  icon: {
    marginLeft: 15,
    marginTop: 15,
  },
  Heading: {
    fontSize: 28,
    color: "#322962",
    marginTop: 20,
    marginLeft: 30,
  },
  SubHeading: {
    fontSize: 24,
    color: "#322962",
    marginTop: 20,
    marginLeft: 30,
  },
  SSubheading: {
    marginTop: 16,
    marginLeft: 35,
    color: "#322962",
    fontSize: 18,
    lineHeight:30,
    textAlign:"justify"
  },
  List:{
    marginBottom:30
  },
  button:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    margin:30,
    
  }
})