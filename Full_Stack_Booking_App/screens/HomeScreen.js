import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../componens/Header";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title:"Booking.com",
      headerTitleStyle:{
        fontSize:20,
        fontWeight:"bold",
        color:"white"
      },
      headerStyle:{
        backgroundColor:"#003580",
        height:110,
        borderBottomColor:"transparent",
        shadowColor:"transparent",
      },
      headerRight : () =>(
        <Ionicons name="notifications-outline" size={24} color="white" style={{marginRight:12}}/>
      )
    });
  }, []);

  return (
    <View>
      <Header/>
      <ScrollView style={{margin:20,borderColor:"#FFC72C",borderWidth:3,borderRadius:6}}>
        <View>
            {/*Destation // Место назначения*/}
            <Pressable>

            </Pressable>
            {/*Selected Dates// Выбранные даты*/}
            <Pressable>

            </Pressable>
            {/*Rooms and Guests// Номера и гости*/}
            <Pressable>

            </Pressable>
            {/*Search Button// Номера и гости*/}
            <Pressable>

            </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
