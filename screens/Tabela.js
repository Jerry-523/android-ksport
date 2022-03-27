import React, { Component } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from "react-native-table-component";
import { Classificacao } from "./Classificacao";
import { tournaments } from "../data/data";

const Drawer = createDrawerNavigator();
export const image = {
  uri: "https://i.pinimg.com/originals/7c/68/fc/7c68fca262a9ac18cd2b21461d00889a.jpg",
};

const CONTENT = {
  tableHead: ["Equipes", "Jogos", "Golos", "Pts"],
  tableHead2: ["Equipes", "Jogos", "Golos", "Pts"],
  tableTitle: [
    "Batuque",
    "Derby",
    "Mindelense",
    "Academica",
    "F. do Norte",
    "Farense",
    "Castilho",
    "Salamansa",
  ],
  tableTitle2: [
    "Benfica Santa Cruz",
    "G D Varandinha",
    "Esperança FC",
    "SC Beira Mar",
    "Flor Jovem",
    "S. L. Orgãos",
    "G D Nhagar",
  ],
  tableData: [
    ["0", "0", "0"],
    ["0", "0", "0"],
    ["0", "0", "0"],
    ["0", "0", "0"],
    ["0", "0", "0"],
    ["0", "0", "0"],
    ["0", "0", "0"],
    ["0", "0", "0"],
  ],
  tableData2: [
    ["0", "0", "0"],
    ["0", "0", "0"],
    ["0", "0", "0"],
    ["0", "0", "0"],
    ["0", "0", "0"],
    ["0", "0", "0"],
    ["0", "0", "0"],
  ],
};
function TacaCaboVerde({ navigation }) {
  return <View></View>;
}
function SaoVicente({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Table borderStyle={{ borderWidth: 2 }}>
          <Row
            data={CONTENT.tableHead}
            flexArr={[1, 0.6, 0.6, 0.5]}
            style={styles.head}
            textStyle={styles.text}
          />
          <TableWrapper style={styles.wrapper}>
            <Col
              data={CONTENT.tableTitle}
              style={styles.title}
              heightArr={[28, 28]}
              textStyle={styles.text}
            />
            <Rows
              data={CONTENT.tableData}
              flexArr={[0.6, 0.6, 0.5]}
              style={styles.row}
              textStyle={styles.text}
            />
          </TableWrapper>
        </Table>
      </ImageBackground>
    </View>
  );
}

function SantiagoNorte({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Table borderStyle={{ borderWidth: 2 }}>
          <Row
            data={CONTENT.tableHead2}
            flexArr={[1, 0.6, 0.6, 0.5]}
            style={styles.head}
            textStyle={styles.text}
          />
          <TableWrapper style={styles.wrapper}>
            <Col
              data={CONTENT.tableTitle2}
              style={styles.title}
              heightArr={[28, 28]}
              textStyle={styles.text}
            />
            <Rows
              data={CONTENT.tableData2}
              flexArr={[0.6, 0.6, 0.5]}
              style={styles.row}
              textStyle={styles.text}
            />
          </TableWrapper>
        </Table>
      </ImageBackground>
    </View>
  );
}
function SantiagoSul({ navigation }) {
  return <View></View>;
}
function Fogo({ navigation }) {
  return <View></View>;
}
function Brava({ navigation }) {
  return <View></View>;
}
function SantoAntaoNorte({ navigation }) {
  return <View></View>;
}
function SantoAntaoSul({ navigation }) {
  return <View></View>;
}
function Maio({ navigation }) {
  return <View></View>;
}
function Boavista({ navigation }) {
  return <View></View>;
}
function Sal({ navigation }) {
  return <View></View>;
}
function SaoNicolau({ navigation }) {
  return <View></View>;
}
export default Tabela = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Campeonato Santiago Norte"
      screenOptions={{ headerStyle: { backgroundColor: "gold" } }}
    >
      {tournaments.map((tournament) => (
        <Drawer.Screen
          name={tournament.name}
          key={tournament.id}
          children={() => {
            return <Classificacao tournament={tournament} />;
          }}
        />
      ))}
      <Drawer.Screen name="Taça de Cabo Verde" component={TacaCaboVerde} />
      <Drawer.Screen
        name="Campeonato Santiago Norte"
        component={SantiagoNorte}
      />
      <Drawer.Screen name="Campeonato São Vicente" component={SaoVicente} />
      <Drawer.Screen name="Campeonato Santiago Sul" component={SantiagoSul} />
      <Drawer.Screen name="Campeonato Fogo" component={Fogo} />
      <Drawer.Screen name="Campeonato Brava" component={Brava} />
      <Drawer.Screen
        name="Campeonato Santo Antão Norte"
        component={SantoAntaoNorte}
      />
      <Drawer.Screen
        name="Campeonato Santo Antão Sul"
        component={SantoAntaoSul}
      />
      <Drawer.Screen name="Campeonato Maio" component={Maio} />
      <Drawer.Screen name="Campeonato Boavista" component={Boavista} />
      <Drawer.Screen name="Campeonato Sal" component={Sal} />
      <Drawer.Screen name="Campeonato São Nicolau" component={SaoNicolau} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: { textAlign: "center", color: "white" },
  image: {
    flex: 1,
    justifyContent: "center",
    borderColor: "#000",
    borderWidth: 3,
    borderStyle: "solid",
  },
  head: { height: 40, backgroundColor: "green" },
  wrapper: { flexDirection: "row", backgroundColor: "grey" },
  title: { flex: 1, backgroundColor: "brown" },
  row: { height: 28 },
});
