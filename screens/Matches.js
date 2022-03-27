import React, { Component } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from "react-native-table-component";

export const matchesBackground = {
  uri: "https://img.freepik.com/fotos-gratis/bola-de-futebol-no-fundo-do-campo-de-futebol_518421-221.jpg?size=626&ext=jpg",
};
const CONTENT = {
  tableData: [
    ["Castilho", "-:-", "Academica"],
    ["Mindelense", "-:-", "Derby"],
    ["G D Nhagar", "-:-", "Flor Jovem"],
    ["Mosteiros", "-:-", "Botafogo"],
  ],
};

export default class Matches extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={matchesBackground}
          resizeMode="cover"
          style={styles.image}
        >
          <Table borderStyle={{ borderWidth: 2 }}>
            <TableWrapper style={styles.wrapper}>
              <Rows
                data={CONTENT.tableData}
                flexArr={[2, 1.5, 2]}
                style={styles.row}
                textStyle={styles.text}
              />
            </TableWrapper>
          </Table>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: { textAlign: "center", color: "white", fontFamily: "Arial Black" },
  image: {
    flex: 1,
    justifyContent: "center",
    borderColor: "#000",
    borderWidth: 3,
    borderStyle: "solid",
  },
  wrapper: { flexDirection: "row", backgroundColor: "#434343" },
  row: { height: 28 },
});
