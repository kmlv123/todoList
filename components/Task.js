import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const  Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={StyleSheet.itemLeft}>
            <View style={styles.square}></View>
            <Text syle={styles.itemText}>{props.text}</Text>
         </View>
         <View style={styles.circular}></View>
    </View>
    )
}
    const styles = StyleSheet.create({
        item:{
            backgroundColor:'#ffffff',
            padding: 15,
            borderRadius:10,
            flexDirection:'row',
            marginBottom:5,
            marginTop:35,
            justifyContent:'space-between',
            alignItems:'center'
        },

        itemLeft:{
            flexDirection:'row',
            alignItems:'center',
            flexWrap:'wrap',
            textAlign:'left'         
         },

        itemText:
        {
        maxWidth:'80%',
        alignSelf:'center',
        },
      
        square:{
            width:25,
            height:25,
            backgroundColor:'#55BCF6',
            opacity:0.4,
        },

        circular:{
            width:12,
            height:12,
            borderColor:'#55bcf6',
            borderRadius:10,
            borderWidth:3,
            marginRight:10,
            marginTop:12
        },

        items:{
            marginTop:30
        }
    });

    export default Task;