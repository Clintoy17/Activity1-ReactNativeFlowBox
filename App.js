import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Image} from 'react-native';

const Picture = () => {
  return(
    <View>
       <Image source={{uri: 'https://m.media-amazon.com/images/I/717OCyB96BL.jpg'}} style = {styles.Picture}/>
     </View>
  ) 
};
const BioData = () =>{
  return(
    <View> 
<Text style ={styles.name}> Johnbhert Clint Magalona </Text>
<Text style={styles.course}> Information Technology 3 </Text> 
</View>
  )
}

const SubjectLabel = () =>{
  return(
    <View>
      <Text style={styles.label}> My Subjects </Text>
    </View>
  )
}

const SubjectOfferings = ()=>{
  return(
     
       <View style = {styles.subjectContainer}>
  <View style = {styles.subjectOfferings}>
        <View>
          <Text style = {styles.subjectCode}>ELEC 2</Text>
          </View>
          <View>
          <Text style = {styles.subjectDescription}>Web Development/Web Enterprise</Text>
          <Text style = {styles.subjectUnits}> Units: 3</Text>
        </View>
        </View>

    <View style = {styles.subjectOfferings}>
        <View>
          <Text style = {styles.subjectCode}>ELEC 3</Text>
          </View>
          <View>
          <Text style = {styles.subjectDescription}>Mobile Application</Text>
          <Text style = {styles.subjectUnits}> Units: 3</Text>
        </View>
        </View>
    
    <View style = {styles.subjectOfferings}>
        <View>
          <Text style = {styles.subjectCode}>IT 311</Text>
          </View>
          <View>
          <Text style = {styles.subjectDescription}>Software Engineering</Text>
          <Text style = {styles.subjectUnits}> Units: 3</Text>
        </View>
        </View>

    <View style = {styles.subjectOfferings}>
        <View>
          <Text style = {styles.subjectCode}>IT 312</Text>
          </View>
          <View>
          <Text style = {styles.subjectDescription}>Information and Assurance 2</Text>
          <Text style = {styles.subjectUnits}> Units: 3</Text>
        </View>
        </View>
    
    <View style = {styles.subjectOfferings}>
        <View>
          <Text style = {styles.subjectCode}>IT 313</Text>
          </View>
          <View>
          <Text style = {styles.subjectDescription}>Quantitative Methods</Text>
          <Text style = {styles.subjectUnits}> Units: 3</Text>
        </View>
        </View>

    </View>
  )
}


export default function App() {
  return (
  
    <View style={styles.container}> 
      
    
      <View style={styles.profile}>
        <Picture/>
        <BioData/>
      </View>

      <View style ={styles.label}>
        <SubjectLabel/>
      </View>

      <View>
        <SubjectOfferings/>
      </View>

      <View>
        <Text style={styles.seeMore}>      Click here to see more</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'left',
    backgroundColor: '#778899',
  },

  profile: {
    backgroundColor: '#24469C',
    alignItems: 'left',
    width: 360,
    height: 190,
    marginBottom:'15px',
    marginTop:'25px',
    marginLeft:'15px',
    marginRight:'15px',
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'center',  
  },
  
  Picture: {
    width: 80,
    height: 80,
    borderRadius: 100 / 2,
    marginLeft: '15px' 
  },

  name:{
    color: '#fff',
    fontSize: '25px',
    marginLeft: '15px' 
  },

  course: {
    color: '#fff',
    fontSize: '17px',
    marginLeft: '15px',
  },

  label:{
    backgroundColor: '#ffOOff',
    color: '#ffOOff',
    marginLeft: '6px',
    fontSize: '16px',
   },

   subjectOfferings:{
    flex: 1,
   flexDirection: 'row',
   justifyContent: 'flex-start',
   alignItems: 'center',
   with: 150,
   backgroundColor: '#DCDCDC',
   borderTopRightRadius: 10,
   borderTopLeftRadius: 10,
   borderBottomRightRadius: 10,
   borderBottomLeftRadius: 10,
   marginBottom:'8px',
   marginTop:'8px',
   },

   subjectOfferings:{
    flex: 1,
   flexDirection: 'row',
   justifyContent: 'flex-start',
   alignItems: 'center',
   with: 150,
   backgroundColor: '#DCDCDC',
   borderTopRightRadius: 10,
   borderTopLeftRadius: 10,
   borderBottomRightRadius: 10,
   borderBottomLeftRadius: 10,
   marginBottom:'8px',
   marginTop:'8px',
   },

   subjectCode:{
    fontSize: '22px', 
    padding:5,
    fontWeight:'bold',
    marginLeft:'16px',
   },

   subjectDescription:{
    marginLeft:'30px',
    borderBottomRightRadius: 10,
   },

   subjectUnits:{
    marginLeft:'25px',
    borderBottomRightRadius: 10,
  },
  
  subjectContainer:{
    marginLeft: '15px',
  marginRight: '15px',
   },
  
   seeMore:{
    color:'#24469C',
    marginBottom:'35px',
    marginTop:'10px',
    marginLeft:'200px',
    marginRight: '10px',
    fontSize: '15px',  
  }
});
