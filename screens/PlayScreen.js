import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const PlayScreen = () => {
  const [option, setOption] = useState("My Sports");
  const [sport, setSport] = useState("Badminton");
  //1:36
  return (
    <SafeAreaView>
      <View style={{ padding: 12, backgroundColor: "#223536" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Text style={{ fontSize: 16, fontWeight: 500, color: "white" }}>
              Ealam Taher
            </Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="white" />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Ionicons name="chatbox-outline" size={24} color="white" />
            <Ionicons name="notifications-outline" size={24} color="white" />
            <Pressable>
              <Image
                style={{ width: 30, height: 30, borderRadius: 15 }}
                source={{
                  uri: "https://yt3.ggpht.com/yti/ANjgQV9wUNirKM11sSXKaEXZN8tBM1sMbHJq3ZP5eux9DlxOc_I=s88-c-k-c0x00ffffff-no-rj",
                }}
              />
            </Pressable>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginVertical: 13,
          }}
        >
          <Pressable onPress={() => setOption("Calendar")}>
            <Text
              style={{
                color: option == "Calendar" ? "#12e04c" : "white",
                fontWeight: 500,
                fontSize: 15,
              }}
            >
              Calendar
            </Text>
          </Pressable>
          <Pressable onPress={() => setOption("My Sports")}>
            <Text
              style={{
                color: option == "My Sports" ? "#12e04c" : "white",
                fontWeight: 500,
                fontSize: 15,
              }}
            >
              My Sports
            </Text>
          </Pressable>
          <Pressable onPress={() => setOption("Other Sports")}>
            <Text
              style={{
                color: option == "Other Sports" ? "#12e04c" : "white",
                fontWeight: 500,
                fontSize: 15,
              }}
            >
              Other Sports
            </Text>
          </Pressable>
        </View>
        {/* Type of sport */}
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Pressable
              onPress={() => setSport("Badminton")}
              style={{
                borderColor: "white",
                marginRight: 10,
                borderRadius: 8,
                padding: 10,
                borderWidth: sport == "Badminton" ? 0 : 1,
                backgroundColor:
                  sport == "Badminton" ? "#1dbf22" : "transparent",
              }}
            >
              <Text style={{ color: "white", fontWeight: 600, fontSize: 15 }}>
                Badminton
              </Text>
            </Pressable>
            <Pressable
              style={{
                borderColor: "white",
                marginRight: 10,
                borderRadius: 8,
                padding: 10,
                borderWidth: sport == "Cricket" ? 0 : 1,
                backgroundColor: sport == "Cricket" ? "#1dbf22" : "transparent",
              }}
              onPress={() => setSport("Cricket")}
            >
              <Text style={{ color: "white", fontWeight: 600, fontSize: 15 }}>
                Cricket
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setSport("Cycling")}
              style={{
                borderColor: "white",
                marginRight: 10,
                borderRadius: 8,
                padding: 10,
                borderWidth: sport == "Cycling" ? 0 : 1,
                backgroundColor: sport == "Cycling" ? "#1dbf22" : "transparent",
              }}
            >
              <Text style={{ color: "white", fontWeight: 600, fontSize: 15 }}>
                Cycling
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setSport("Running")}
              style={{
                borderColor: "white",
                marginRight: 10,
                borderRadius: 8,
                padding: 10,
                borderWidth: sport == "Running" ? 0 : 1,
                backgroundColor: sport == "Running" ? "#1dbf22" : "transparent",
              }}
            >
              <Text style={{ color: "white", fontWeight: 600, fontSize: 15 }}>
                Running
              </Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
          backgroundColor: "white",
        }}
      >
        <Pressable>
          <Text style={{ fontWeight: "bold" }}>Create Game</Text>
        </Pressable>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Pressable>
            <Text style={{ fontWeight: "bold" }}>Filter</Text>
          </Pressable>
          <Pressable>
            <Text style={{ fontWeight: "bold" }}>Sort</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PlayScreen;

const styles = StyleSheet.create({});
