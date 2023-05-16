import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
  Button,
  Image,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
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
  const [abults, setAbults] = useState(2);
  const [childeren, setChildren] = useState(0);
  const [modalVisibile, setModalVisibile] = useState(false);
  console.log(selectedDates);
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
          container: { width: "80%", marginHorizontal: "3%" },
          text: { fontSize: 20 },
        }}
        primary
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
            onPress={() => navigation.navigate("Search")}
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
        <Text style={{ marginHorizontal: 17, fontSize: 17, fontWeight: "500" }}>
          Trevel More spend less
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Pressable
            style={{
              width: 200,
              height: 150,
              marginTop: 10,
              backgroundColor: "#003580",
              borderRadius: 10,
              padding: 20,
              marginHorizontal: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 15,
                fontWeight: "bold",
                marginVertical: 7,
              }}
            >
              Genius
            </Text>
            <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>
              You are ate genius level one in our loyalty program
            </Text>
          </Pressable>
          <Pressable
            style={{
              width: 200,
              height: 150,
              marginTop: 10,
              borderColor: "#E0E0E0",
              borderWidth: 2,
              borderRadius: 10,
              padding: 20,
              marginHorizontal: 10,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                marginVertical: 7,
              }}
            >
              10% Discounts
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "500" }}>
              Enjoy Discounts at particpating at properties worldwide
            </Text>
          </Pressable>
          <Pressable
            style={{
              width: 200,
              height: 150,
              marginTop: 10,
              borderColor: "#E0E0E0",
              borderWidth: 2,
              borderRadius: 10,
              padding: 20,
              marginHorizontal: 20,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                marginVertical: 7,
              }}
            >
              15% Discounts
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "500" }}>
              complete 5 status to unlock level 2
            </Text>
          </Pressable>
        </ScrollView>
      </View>
      <Pressable
        style={{
            marginTop:40,
            justifyContent:'center',
            alignItems:"center",
        }}
      >
        <Image
            style={{width:250,height:50,resizeMode:"center"}}
            source={{
                url:"https://w7.pngwing.com/pngs/136/117/png-transparent-booking-com-stacked-logo-tech-companies.png"
            }}
        />

      </Pressable>



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
                onPress={() => setAbults(Math.max(1, abults - 1))}
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
                onPress={() => setAbults((c) => c + 1)}
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
                onPress={() => setChildren(Math.max(0, childeren - 1))}
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
                onPress={() => setChildren((c) => c + 1)}
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
