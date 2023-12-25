import { View, Text, StyleSheet,ScrollView, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import CommunityCard from './CommunitySubscreen/CommunityCard'

export default function Community() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{"COLLECTIVE EFFORTS,\n SHARED SUCCESS.."}</Text>
      
      <CommunityCard cardColor={"#BCBF98"} 
      cardName={"Executives"} 
      Name1={"Dr. B S Chawla"} 
      Role1={"Principal"} 
      Details1={"Govt. Engg. College Bilaspur"} 
      Name2={"Dr. G S Singh"}
      Role2={"Vice Principal"}
      Details2={"Govt. Engg. College Bilaspur"}
      profilePic1={require("../assets/picture2.png")}
      profilePic2={require("../assets/picture2.png")}/>

      <CommunityCard cardColor={"#2BC095"} 
      cardName={"Mentors"} 
      Name1={"Manesh Kumar Mandavi"} 
      Role1={"Asst. Professor"} 
      Details1={"Govt. Engg. College Bilaspur"} 
      Name2={"Indranee Borkar"}
      Role2={"Asst. Professor"}
      Details2={"Govt. Engg. College Bilaspur"}
      profilePic1={require("../assets/picture2.png")}
      profilePic2={require("../assets/picture2.png")}/>

      <CommunityCard cardColor={"#A99ABD"} 
      cardName={"Leaders"} 
      Name1={"Mrityunjay Kar"} 
      Role1={"NSS Lead"} 
      Details1={"B.Tech |  Electrical |  3rd Year\nGovt. Engg. College Bilaspur"} 
      Name2={"Shweta Lakra"}
      Role2={"NSS Lead"}
      Details2={"B.Tech |  Electrical |  3rd Year\nGovt. Engg. College Bilaspur"}
      profilePic1={require("../assets/picture2.png")}
      profilePic2={require("../assets/picture2.png")}/>

      <CommunityCard cardColor={"#AF9C79"} 
      cardName={"Co-Leaders"} 
      Name1={"Yashaswa Patel"} 
      Role1={"NSS Co-Lead"} 
      Details1={"B.Tech |  Electrical |  3rd Year\nGovt. Engg. College Bilaspur"} 
      Name2={"Divya Dron"}
      Role2={"NSS Co-Lead"}
      Details2={"B.Tech | IT | 3rd Year\nGovt. Engg. College Bilaspur"}
      profilePic1={require("../assets/picture2.png")}
      profilePic2={require("../assets/picture2.png")}/>

      <CommunityCard cardColor={"#BDD09D"} 
      cardName={"Technical Team"} 
      Name1={"Prakriti Gupta"} 
      Role1={"Tech-Lead"} 
      Details1={"B.Tech |  ET&T |  3rd Year\nGovt. Engg. College Bilaspur"} 
      Name2={"Manish Kunar"}
      Role2={"Tech-Lead"}
      Details2={"B.Tech |  Electrical | 3rd Year\nGovt. Engg. College Bilaspur"}
      profilePic1={require("../assets/picture2.png")}
      profilePic2={require("../assets/picture2.png")}
      />

      <CommunityCard
      cardColor={"#BDD09D"} 
      Name1={"Tanisha Deshmukh"}
      Role1={"Tech-Member"}
      Details1={"B.Tech |  Electrical | 3rd Year\nGovt. Engg. College Bilaspur"}
      profilePic1={require("../assets/picture2.png")}
      />

      <CommunityCard cardColor={"#847ECF"} 
      cardName={"NEWS REPORT AND DRAFTING TEAM"} 
      Name1={"Rishita Agrawal"} 
      Role1={"NRDT-Head"} 
      Details1={"B.Tech |  ET&T |  3rd Year\nGovt. Engg. College Bilaspur"} 
      profilePic1={require("../assets/picture2.png")}
      />

      <CommunityCard cardColor={"#847ECF"} 
      Name1={"Tanishka Singh Pawar"}
      Role1={"NRDT-Member"}
      Details1={"B.Tech |  Electrical | 2nd Year\nGovt. Engg. College Bilaspur"}
      Name2={"Nikhil Kumar Koshale"}
      Role2={"NRDT-Member"}
      Details2={"B.Tech |  ET&T |  2nd Year\nGovt. Engg. College Bilaspur"}
      profilePic1={require("../assets/picture2.png")}
      profilePic2={require("../assets/picture2.png")}
      />

      <CommunityCard cardColor={"#729C8A"} 
      cardName={"Cultural Team"} 
      Name1={"Swikrit Shukla"} 
      Role1={"Cultural-Lead"} 
      Details1={"B.Tech |  CSE |  3rd Year\nGovt. Engg. College Bilaspur"} 
      Name2={"Rashmi Singh Baghel"}
      Role2={"Cultural-Lead"}
      Details2={"B.Tech |  Electrical | 3rd Year\nGovt. Engg. College Bilaspur"}
      profilePic1={require("../assets/picture2.png")}
      profilePic2={require("../assets/picture2.png")}
      />

      <View style={{height:50}}></View>
    </ScrollView>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#ffffff",
    paddingVertical:15,
  },
  title:{
    color:"#322962",
    fontSize:wp(5),
    fontStyle:"italic",
    fontWeight:"bold",
    textAlign:"center",
  },
})