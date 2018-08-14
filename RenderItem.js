import React ,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet

} from 'react-native';

type Props={
    info:Object

}
 class RenderItem extends  Component <Props>{
     render() {
         const {info} = this.props
         return(
             <View style={styles.container}>
                 <Text style={styles.txt}>{info.name}</Text>
                 <Text style={styles.txt}>{info.age}</Text>
                 <Text style={styles.txt}>{info.sex}</Text>
                 <Text style={styles.txt}>{info.education}</Text>
             </View>

         );
     }
 }

 const styles = StyleSheet.create({

     container:{
         marginTop: 20,
         borderBottomWidth: 1,
         borderColor: '#e5e5e5',
         backgroundColor: 'white',
     },
     txt:{
         fontSize:15,
         paddingHorizontal:20,
         color:'red'
     }

 });

 export default RenderItem

