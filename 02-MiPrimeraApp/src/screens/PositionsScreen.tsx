import React from 'react'
import { StyleSheet, View } from 'react-native';

export const PositionsScreen = () => {
    return (
        <View style={styles.conteiner}>

            <View style={styles.cajaMorada}/>

            <View style={styles.cajaNaranja}/>
            
        </View>
    )
}

const styles = StyleSheet.create({

    conteiner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderStartColor:'#28C4D9'
    },

    cajaMorada:{
        width:100,
        height:100,
        backgroundColor:'#5856D6',
        borderWidth:10,
        borderColor:'white',
        
    },

    cajaNaranja:{
        width:100,
        height:100,
        backgroundColor:'#FOA23B',
        borderWidth:10,
        borderColor:'white',
        
    }
    
});