import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";

const VenueCard = ({ item }) => {
  return (
    <View style={{ margin: 15 }}>
      <Pressable
        style={{
          backgroundColor: "white",
          borderRadius: 5,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      >
        <View>
          <Image
            style={{
              width: "100",
              height: 200,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            source={{ uri: item?.image }}
          />
        </View>
        <View style={{ paddingVertical: 12, paddingHorizontal: 10 }}>
          <View>
            <Text>
              {item?.name.length > 40
                ? item?.name?.substring(0, 40) + "..."
                : item?.name}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "gray" }}>
              {item?.address.length > 40
                ? item?.address?.substring(0, 30) + "..."
                : item?.address}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
                backgroundColor: "green",
                padding: 6,
                borderRadius: 5,
              }}
            >
              <AntDesign name="star" size={20} color="white" />
              <Text style={{ color: "white", fontWeight: "bold" }}>
                {" "}
                {item?.rating}
              </Text>
            </View>
          </View>

          <View
            style={{
              height: 1,
              borderWidth: 0.6,
              borderColor: "#E0E0E0",
              marginVertical: 10,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text>Upto 10% Off</Text>
            <Text>INR 250 Onwards</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default VenueCard;

const styles = StyleSheet.create({});
