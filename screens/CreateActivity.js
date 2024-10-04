import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  ScrollView,
  Pressable,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
const CreateActivity = () => {
  const [sport, setSport] = useState("");
  const [area, setArea] = useState("");
  const [date, setDate] = useState("");
  const [timeInterval, setTimeInterval] = useState("");
  const [noOfPlayers, setnoOfPlayers] = useState(0);

  const [selected, setSelected] = useState(["Public"]);
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS == "android" ? 35 : 0,
      }}
    >
      <ScrollView>
        <View>
          <Ionicons name="arrow-back" size={24} color="black" />
        </View>

        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            Create Activity
          </Text>
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
              marginTop: 15,
              marginVertical: 15,
            }}
          >
            <MaterialCommunityIcons name="whistle" size={24} color="gray" />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 17, fontWeight: "500" }}>Sport</Text>
              <TextInput
                value={sport}
                onChange={setSport}
                style={{ marginTop: 7, fontSize: 15 }}
                placeholderTextColor="gray"
                placeholder="Eg Badminton/ Football / Cricket"
              />
            </View>
            <AntDesign name="arrowright" size={24} color="black" />
          </Pressable>
          <Text style={{ borderColor: "#E0E0E0", borderWidth: 1, height: 1 }} />
          <Pressable
            onPress={() => navigation.navigate("TagVenue")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
              marginTop: 15,
              marginVertical: 15,
            }}
          >
            <Entypo name="location" size={24} color="gray" />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 17, fontWeight: "500" }}>Area</Text>
              <TextInput
                value={area}
                onChange={setArea}
                style={{ marginTop: 7, fontSize: 15, color: "black" }}
                placeholderTextColor="gray"
                placeholder="Locality or venue name"
              />
            </View>
            <AntDesign name="arrowright" size={24} color="black" />
          </Pressable>
          <Text style={{ borderColor: "#E0E0E0", borderWidth: 1, height: 1 }} />
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
              marginTop: 15,
              marginVertical: 15,
            }}
          >
            <Feather name="calendar" size={24} color="gray" />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 17, fontWeight: "500" }}>Date</Text>
              <TextInput
                editable={false}
                value={date}
                onChange={setDate}
                style={{ marginTop: 7, fontSize: 15, color: "black" }}
                placeholderTextColor={date ? "black" : "gray"}
                placeholder={date ? date : "Pick a Day"}
              />
            </View>
            <AntDesign name="arrowright" size={24} color="black" />
          </Pressable>
          <Text style={{ borderColor: "#E0E0E0", borderWidth: 1, height: 1 }} />
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
              marginTop: 15,
              marginVertical: 15,
            }}
          >
            <AntDesign name="clockcircleo" size={24} color="gray" />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 17, fontWeight: "500" }}>Time</Text>
              <TextInput
                value={date}
                onChange={setDate}
                style={{ marginTop: 7, fontSize: 15 }}
                placeholderTextColor={timeInterval ? "black" : "gray"}
                placeholder={timeInterval ? timeInterval : "Pick a Exact Time"}
              />
            </View>
            <AntDesign name="arrowright" size={24} color="gray" />
          </Pressable>
          <Text style={{ borderColor: "#E0E0E0", borderWidth: 1, height: 1 }} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
              marginTop: 7,
              marginVertical: 10,
            }}
          >
            <Feather name="activity" size={24} color="gray" />
            <View style={{ marginTop: 10 }}>
              <Text
                style={{ marginBottom: 10, fontSize: 15, fontWeight: "500" }}
              >
                Activity Access
              </Text>
              <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
                <Pressable
                  onPress={() => setSelected("Public")}
                  style={
                    selected.includes("Public")
                      ? {
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 8,
                          backgroundColor: "#07bc0c",
                          width: 140,
                          justifyContent: "center",
                          borderRadius: 3,
                          padding: 10,
                        }
                      : {
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 8,
                          backgroundColor: "white",
                          width: 140,
                          justifyContent: "center",
                          borderRadius: 3,
                          padding: 10,
                        }
                  }
                >
                  <Ionicons
                    name="earth"
                    size={24}
                    color={selected.includes("Public") ? "white" : "black"}
                  />
                  <Text
                    style={
                      selected.includes("Public")
                        ? { color: "white", fontWeight: "bold", fontSize: 15 }
                        : { color: "black", fontWeight: "bold", fontSize: 15 }
                    }
                  >
                    Public
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => setSelected("Invite Only")}
                  style={
                    selected.includes("Invite Only")
                      ? {
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 8,
                          backgroundColor: "#07bc0c",
                          width: 140,
                          justifyContent: "center",
                          borderRadius: 3,
                          padding: 10,
                        }
                      : {
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 8,
                          backgroundColor: "white",
                          width: 140,
                          justifyContent: "center",
                          borderRadius: 3,
                          padding: 10,
                        }
                  }
                >
                  <AntDesign
                    name="lock1"
                    size={24}
                    color={selected.includes("Invite Only") ? "white" : "black"}
                  />
                  <Text
                    style={
                      selected.includes("Invite Only")
                        ? { color: "white", fontWeight: "bold", fontSize: 15 }
                        : { color: "black", fontWeight: "bold", fontSize: 15 }
                    }
                  >
                    Invite Only
                  </Text>
                </Pressable>
              </Pressable>
            </View>
          </View>
          <Text
            style={{
              borderColor: "#E0E0E0",
              borderWidth: 1,
              height: 1,
              marginTop: 7,
            }}
          />
          <Text style={{ marginTop: 20, fontSize: 16 }}>Total Players</Text>
          <View
            style={{
              padding: 10,
              backgroundColor: "#F0F0F0",
              marginTop: 10,
              borderRadius: 6,
            }}
          >
            <View style={{ marginVertical: 5 }}>
              <View>
                <TextInput
                  value={noOfPlayers}
                  onChangeText={setnoOfPlayers}
                  style={{
                    padding: 10,
                    backgroundColor: "white",
                    borderColor: "#D0D0D0",
                    borderWidth: 1,
                    borderRadius: 4,
                  }}
                  placeholder="Total Players (including you)"
                />
              </View>
            </View>
          </View>
          <Text
            style={{
              borderColor: "#E0E0E0",
              borderWidth: 1,
              height: 1,
              marginTop: 15,
            }}
          />
          <Text style={{ fontSize: 16, marginTop: 20 }}>Add Instructions</Text>
          <View
            style={{
              padding: 10,
              backgroundColor: "#F0F0F0",
              marginTop: 10,
              borderRadius: 6,
            }}
          >
            <View
              style={{
                marginVertical: 5,
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Ionicons name="bag-check" size={24} color={"red"} />
              <Text style={{ flex: 1, fontSize: 15, fontWeight: "500" }}>
                Bring your own equipment
              </Text>
              <FontAwesome name="check-square" size={24} color="green" />
            </View>
            <View
              style={{
                marginVertical: 5,
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <MaterialCommunityIcons
                name="directions-fork"
                size={24}
                color={"#FEBE10"}
              />
              <Text style={{ flex: 1, fontSize: 15, fontWeight: "500" }}>
                Cost Share
              </Text>
              <FontAwesome name="check-square" size={24} color="green" />
            </View>
            <View
              style={{
                marginVertical: 5,
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <FontAwesome5 name="syringe" size={24} color={"green"} />
              <Text style={{ flex: 1, fontSize: 15, fontWeight: "500" }}>
                Covid Vaccinated players preferred
              </Text>
              <FontAwesome name="check-square" size={24} color="green" />
            </View>
            <TextInput
              style={{
                padding: 10,
                backgroundColor: "white",
                borderColor: "#D0D0D0",
                borderWidth: 1,
                marginVertical: 8,
                borderRadius: 6,
              }}
              placeholder="Add Additonal Instructions"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              marginTop: 10,
              marginVertical: 15,
            }}
          >
            <AntDesign name="setting" size={24} color={"black"} />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 16, fontWeight: 500 }}>
                Advanced Settings
              </Text>
            </View>
            <AntDesign name="arrowright" size={24} color="gray" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateActivity;

const styles = StyleSheet.create({});
