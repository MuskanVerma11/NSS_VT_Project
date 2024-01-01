import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View,Image,TouchableOpacity,ScrollView } from 'react-native';
// import DrawerNavigation from '../Navigation/DrawerNavigation';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { heightPercentageToDP as hp} from 'react-native-responsive-screen';
import EventCard from './components/EventCard';
import AddPost from './components/AddPost';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomeScreen = ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
            <Image source={require('../assets/logo.png')} style={styles.menuBtn}/>
            </TouchableOpacity>
            <EventCard/>
            <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.HighlightBtn}>
                <Text style={styles.HighlightBtnText}>Highlights</Text>
                <FontAwesome5 name="highlighter" size={15} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.EmergencyBtn} >
                <Text style={styles.EmergencyBtnText}>Emergency</Text>
                <MaterialCommunityIcons name="alarm-light" size={18} color="white" />
            </TouchableOpacity>
            </View>
            <AddPost/>
            <AddPost/>
            <AddPost/>
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex:1,
        paddingHorizontal:24,
        paddingVertical:18
    },
    menuBtn:{
        height:wp(14),
        width:wp(14),
    },
    HighlightBtn:{
        backgroundColor:"#FADB39",
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:40,
        width:wp(42),
        flexDirection:"row",
        alignItems:"center",
        gap:5,
        justifyContent:"center"
    },
    HighlightBtnText:{
        fontSize:wp(3.5),
        fontWeight:"bold",
        textAlign:"center"
    },
    btnContainer:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    EmergencyBtn:{
        backgroundColor:"red",
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:40,
        width:wp(42),
        flexDirection:"row",
        alignItems:"center",
        gap:5,
        justifyContent:"center"
    },
    EmergencyBtnText:{
        fontSize:wp(3.5),
        fontWeight:"bold",
        textAlign:"center",
        color:"white"
    },
})

export default HomeScreen