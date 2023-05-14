import React, { useLayoutEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Header from "../componens/Header";
import DatePicker from "react-native-date-ranges";
import {
  BottomModal,
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedDates, setselectedDates] = useState();
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Booking.com",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{ marginRight: 12 }}
        />
      ),
    });
  }, []);

  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{
          width: "80%",
          marginHorizontal: "3%",
          fontSize: 20,
        }}
        color="#003580"
        title="Submit"
      />
    );
  };

  return (
    <>
    <View>
      <Header />
      <ScrollView
        style={{
          margin: 20,
          borderColor: "#FFC72C",
          borderWidth: 3,
          borderRadius: 6,
        }}
      >
        <View>
          {/*Destination // Место назначения*/}
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingHorizontal: 10,
              borderColor: "#FFC72C",
              borderWidth: 2,
              paddingVertical: 15,
            }}
          >
            <Feather name="search" size={24} color="black" />
            <TextInput placeholder="Enter your Destination" />
          </Pressable>
          {/*Selected Dates// Выбранные даты*/}
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingHorizontal: 10,
              borderColor: "#FFC72C",
              borderWidth: 2,
              paddingVertical: 15,
            }}
          >
            <Feather name="calendar" size={24} color="black" />
            <DatePicker
              style={{
                width: 350,
                height: 30,
                borderRadius: 0,
                borderWidth: 0,
                borderColor: "transparent",
              }}
              customStyles={{
                placeholderText: {
                  fontSize: 15,
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: "auto",
                },
                headerStyle: {
                  backgroundColor: "#003580",
                },
                contentText: {
                  fontSize: 15,
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: "auto",
                },
              }}
              selectedBgColor="#0047AB"
              customButton={customButton}
              onConfirm={(startData, endData) =>
                setselectedDates(startData, endData)
              }
              allowFontScaling={false}
              placeholder={"Apr 27, 2018 → Jul 10, 2018"}
              mode={"range"}
            />
          </Pressable>
          {/*Rooms and Guests// Номера и гости*/}
          <Pressable
            onPress={() => setModalVisibile(!modalVisibile)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingHorizontal: 10,
              borderColor: "#FFC72C",
              borderWidth: 2,
              paddingVertical: 15,
            }}
          >
            <Ionicons name="person-outline" size={24} color="black" />
            <TextInput
              placeholderTextColor="red"
              placeholder={`${rooms} room ● ${abults} abults ● ${childeren} Childeren`}
            />
          </Pressable>
          {/*Search Button// Кнопка поиска*/}
          <Pressable
            style={{
              paddingHorizontal: 10,
              borderColor: "#FFC72C",
              borderWidth: 2,
              paddingVertical: 15,
              backgroundColor: "#2a52be",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 15,
                fontWeight: "500",
                color: "white",
              }}
            >
              Search
            </Text>
          </Pressable>
        </View>
      </ScrollView>
      <Text style={{marginHorizontal:17,fontSize:17,fontWeight:"500"}}>Trevel More spend less</Text>
      <ScrollView>
          <Pressable style={{width:200,height:150,marginTop:10,backgroundColor:"#003580"}}>
              <Text>Genius</Text>
              <Text>You are ate genius level one in our loyalty program</Text>
          </Pressable>
      </ScrollView>
    </View>
    <BottomModal
      swipeThreshold={200}
      onBackdropPress={() => setModalVisibile(!modalVisibile)}
      swipeDirection={["up", "down"]}
      footer={
        <ModalFooter>
          <ModalButton
            text="Apply"
            style={{
              marginBottom: 20,
              color: "white",
              backgroundColor: "#003580",
            }}
            onPress={() => setModalVisibile(!modalVisibile)}
          />
        </ModalFooter>
      }
      modalTitle={<ModalTitle title="Select rooms and guests" />}
      modalAnimation={
        new SlideAnimation({
          slideFrom: "bottom",
        })
      }
      onHardwareBackPress={() => setModalVisibile(!modalVisibile)}
      visible={modalVisibile}
      onTouchOutside={() => setModalVisibile(!modalVisibile)}
    >
      <ModalContent style={{ width: "100%", height: 310 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 15,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "500" }}>Rooms</Text>
          <Pressable
            style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
          >
            <Pressable
              onPress={() => setRooms(Math.max(1, rooms - 1))}
              style={{
                width: 26,
                height: 26,
                borderRadius: 13,
                borderColor: "#BEBEBE",
                backgroundColor: "#E0E0E0",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "600",
                  paddingHorizontal: 6,
                }}
              >
                -
              </Text>
            </Pressable>
            <Pressable>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 18,
                  fontWeight: "500",
                  paddingHorizontal: 6,
                }}
              >
                {rooms}
              </Text>
            </Pressable>

            <Pressable
              onPress={() => setRooms((c) => c + 1)}
              style={{
                width: 26,
                height: 26,
                borderRadius: 13,
                borderColor: "#BEBEBE",
                backgroundColor: "#E0E0E0",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "600",
                  paddingHorizontal: 6,
                }}
              >
                +
              </Text>
            </Pressable>
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 15,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "500" }}>Abults</Text>
          <Pressable
            style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
          >
            <Pressable
            onPress={() => setAbults(Math.max(1,abults-1))}
              style={{
                width: 26,
                height: 26,
                borderRadius: 13,
                borderColor: "#BEBEBE",
                backgroundColor: "#E0E0E0",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "600",
                  paddingHorizontal: 6,
                }}
              >
                -
              </Text>
            </Pressable>
            <Pressable>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 18,
                  fontWeight: "500",
                  paddingHorizontal: 6,
                }}
              >
                {abults}
              </Text>
            </Pressable>

            <Pressable
            onPress={() => setAbults((c) => c +1)}
              style={{
                width: 26,
                height: 26,
                borderRadius: 13,
                borderColor: "#BEBEBE",
                backgroundColor: "#E0E0E0",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "600",
                  paddingHorizontal: 6,
                }}
              >
                +
              </Text>
            </Pressable>
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 15,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "500" }}>Childeren</Text>
          <Pressable
            style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
          >
            <Pressable
            onPress={() => setChildren(Math.max(0,childeren-1))}
              style={{
                width: 26,
                height: 26,
                borderRadius: 13,
                borderColor: "#BEBEBE",
                backgroundColor: "#E0E0E0",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "600",
                  paddingHorizontal: 6,
                }}
              >
                -
              </Text>
            </Pressable>
            <Pressable>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 18,
                  fontWeight: "500",
                  paddingHorizontal: 6,
                }}
              >
                {childeren}
              </Text>
            </Pressable>
            <Pressable
            onPress={() => setChildren((c) => c+1)}
              style={{
                width: 26,
                height: 26,
                borderRadius: 13,
                borderColor: "#BEBEBE",
                backgroundColor: "#E0E0E0",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "600",
                  paddingHorizontal: 6,
                }}
              >
                +
              </Text>
            </Pressable>
          </Pressable>
        </View>
      </ModalContent>
    </BottomModal>
  </>
);
};

export default HomeScreen;

const styles = StyleSheet.create({});
