import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View , Image, FlatList, TouchableOpacity} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { PostCert } from '../Data/PostCert';
import { ScrollView } from 'react-native-gesture-handler';
import ProfileCard from './components/ProfileCard';


const Profile = () => {
    return(
        
        <ScrollView style={{flex:1, flexDirection:'column',backgroundColor:"#FFFFFF" }}>
        <ProfileCard/>
        <View style={styles.container}>
        <View style={styles.miniContainer}>
            <View >
            <Text style={styles.volunteerMilestone}>560</Text>
            <Text style={styles.volunteeringData}>Volunteering Hours</Text>
            </View>
            <View>
            <Text style={styles.volunteerMilestone}>1</Text>
            <Text style={styles.volunteeringData}>Leaderboard Ranking</Text>
            </View>
            <View>
            <Text style={styles.volunteerMilestone}>3</Text>
            <Text style={styles.volunteeringData}>Camp</Text>
            </View>
        </View>
        <View style={{flex:1,marginBottom:20, marginLeft:15,}}>
            <Text style={{fontSize:18, marginBottom:10 }}>Certificates</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginRight:5}}>
            <FlatList
            data={PostCert.filter(item => item.id === 1 || item.id === 2)}
            keyExtractor={(item)=>item.id.toString()}
            numColumns={2}
            scrollEnabled={false}
            renderItem={({item})=>(
              <TouchableOpacity style={{flexWrap:'wrap', flexDirection:'row',  margin:5 }}>
                <Image  style={styles.image} source={item.uri}/>
              </TouchableOpacity>
            )}
            />
            </View>
            <Text style={{fontSize:18,  marginBottom:10 }}>Post</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginRight:5}}>
            <FlatList
            data={PostCert}
            keyExtractor={(item)=>item.id.toString()}
            numColumns={2}
            scrollEnabled={false}
            renderItem={({item})=>(
                <TouchableOpacity style={{flexWrap:'wrap', flexDirection:'row',  margin:5 }}>
                <Image  style={styles.image} source={item.uri}/>
              </TouchableOpacity>
            )}
            />
            </View>
        </View>
        </View>
        </ScrollView>
        
    )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:hp(20)
    },
    miniContainer:{
        height:hp(60),
        width:wp(30),
        marginLeft:20,
        borderRadius:30,
        flexDirection:'column',
        justifyContent:'space-evenly',
        // backgroundColor:'#ffffff',
        // elevation:15
        backgroundColor:"#d9d9d9"
    },
    volunteeringData:{
        color:'#322962',
        textAlign:'center',
        fontSize:14
    },
    volunteerMilestone:{
        textAlign:'center',
        fontSize:30,
    },
    image : {
        height:wp(30),
        width: wp(27),
        borderRadius:20
    },
})