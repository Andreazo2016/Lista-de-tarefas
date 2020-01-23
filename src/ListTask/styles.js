import {StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex:1,
        marginTop:30,
        padding:40
    },
    input:{
        height: 48,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        fontSize: 16,
        paddingHorizontal: 20,
        marginTop: 30,
    },
    btnAdd:{
        borderRadius:5,
        padding:12,
        marginTop:10,
        backgroundColor:'#7159c1',
        fontWeight:"bold"

    },
    btnText:{
        textAlign:"center"
    },
    scrollList:{
        flex:1,
        marginTop:30
    },
    listContainer:{
        marginTop:30,
        justifyContent:"center",
        alignItems:"center"
    },
    task:{
        flex:1,
        height:50,
        borderWidth:1,
        borderColor:'#ddd',
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row',

    },
    textTask:{
        fontWeight:"bold",
        fontSize:16
    },
});

export default styles;