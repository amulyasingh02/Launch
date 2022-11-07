import * as React from "react";
import { View,Text,SafeAreaView,FlatList,StatusBar,Pressable, ScrollView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const Data=[
    
    {
        id:'Prof_Menu 1',
        title:'Menu 1',
    },
    
    {
        id:'Prof_Menu 2',
        title:'Menu 2',
    },
    
    {
        id:'Prof_Menu 3',
        title:'Menu 3',
    },
    
    {
        id:'Prof_Menu 4',
        title:'Menu 4',
    },
    {
        id:'Prof_Menu 5',
        title:'Menu 5',
    },  {
        id:'Prof_Menu 6',
        title:'Menu 6',
    },  {
        id:'Prof_Menu 7',
        title:'Menu 7',
    },

    ];

const ProfStack=createNativeStackNavigator();
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: 'teal',
      borderRadius:50,
      flex:0.25,
      padding: 10,
      marginVertical: 50,
      justifyContent:'center',
      alignItems:'center',
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
      fontWeight:'bold',
      color:'white',
    
    },
    dis:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

        
    }
  });


  export default function ProfileSCreen({navigation,route}){


    return(
            <ProfStack.Navigator initialRouteName="A" screenOptions={({route})=>({headerShown:false })} >
                <ProfStack.Screen  name="A" component={A}/>
                <ProfStack.Screen  name="Menu 1" component={B}/>
                <ProfStack.Screen  name="Menu 2" component={C}/>
                <ProfStack.Screen  name="Menu 3" component={D}/>
                <ProfStack.Screen  name="Menu 4" component={E}/>
                <ProfStack.Screen  name="Menu 5" component={F}/>
                <ProfStack.Screen  name="Menu 6" component={G}/>
                <ProfStack.Screen  name="Menu 7" component={H}/>


            </ProfStack.Navigator>
    );
}   


function Item({title}){
    const navigation=useNavigation();
return(
    <Pressable style={styles.item}
    onPress={()=>navigation.navigate(title,{dis:title})}>
  <Text style={styles.title}>{title}</Text>
</Pressable>

);}


function A({route})
{
const rendItem=({item})=>( <Item title={item.title}/>);
return(
            <SafeAreaView style={styles.container}>
        <FlatList style={{flex:1,}} 
        data={Data}
        renderItem={rendItem}
        keyExtractor={item=>item.id}
        />
    </SafeAreaView>

);
}
function C({navigation,route}){return(<View style={styles.dis}>
    <Text style={styles.title}> {route.params.dis}</Text>
</View>);}

function  B({navigation,route}){return(<View  style={styles.dis}>
    <Text style={styles.title}> {route.params.dis}</Text>
</View>);}

function D({navigation,route}){return(<View style={styles.dis}>
    <Text style={styles.title}> {route.params.dis}</Text>
</View>);}

function E({navigation,route}){return(<View style={styles.dis}>
    <Text style={styles.title}> {route.params.dis}</Text>
</View>);}
function F({navigation,route}){return(<View style={styles.dis}>
    <Text style={styles.title}> {route.params.dis}</Text>
</View>);}

function G({navigation,route}){return(<View style={styles.dis}>
    <Text style={styles.title}> {route.params.dis}</Text>
</View>);}
function H({navigation,route}){return(<View style={styles.dis}>
    <Text style={styles.title}> {route.params.dis}</Text>
</View>);}


