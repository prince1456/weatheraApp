import {StyleSheet, Dimensions} from "react-native"

const widthSize= Dimensions.get('window')

const styles = StyleSheet.create({

    container: {
      width: '100%',
      flexWrap: "wrap",
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },

    container2: {
      width: '100%',
      flexWrap: "wrap",
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    icon:{
      alignSelf: 'center',
      paddingTop: 50,
      color: 'black'
    },
    header:{
      width: '100%',
      display: 'flex',
      alignItems: "flex-start",
      justifyContent: "center",
      paddingHorizontal: 20,
    flex: 1
  },
    body:{
      width:'100%',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    date:{
      color: 'white',
      fontSize: 20,
      paddingVertical: 20,
    },
    bodyContainer:{
      paddingHorizontal:20,
      width:'100%',
      flexDirection: "row",
      justifyContent: 'space-between'
    },
     columnBody:{
       justifyContent: 'center',
       alignItems:'center',
    },
     textTop: {
       paddingHorizontal: 20,
       color: 'white',
       fontSize: 16,
       alignSelf: 'flex-start'
     },
     textBottom: {
       paddingHorizontal: 20,
       color: 'white',
       fontSize: 16,
       fontWeight: "500",
       alignSelf: 'flex-start',
       paddingVertical: 20,
     },
    city:{
      backgroundColor: 'transparent',
      color: "white",
      fontSize: 45,
      fontWeight: '600',
    },
    country:{
      backgroundColor: 'transparent',
      color: "white",
      fontSize: 30,
    },
    temp:{
      backgroundColor: 'transparent',
      paddingVertical: 30,
      paddingLeft: 45,
      color: "white",
      fontSize: 70,
      fontWeight: "300"
    },
})

 export default styles
