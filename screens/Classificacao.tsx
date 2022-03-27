import React, { FC, useEffect, useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import { getTournamentData, Tournament, TournamentMinimal } from "../data/data";
import styles from "../style/MainStyle";
import {
  Col,
  Row,
  Rows,
  Table,
  TableWrapper,
} from "react-native-table-component";
import { DataTable } from "react-native-paper";

interface Props {
  tournament: TournamentMinimal;
}

export const image = {
  uri: "https://i.pinimg.com/originals/7c/68/fc/7c68fca262a9ac18cd2b21461d00889a.jpg",
};

export const Classificacao: FC<Props> = (props) => {
  const [tournament, setTournament] = useState<Tournament | null>(null);
  useEffect(() => {
    const getTournament = async () => {
      const tournament = await getTournamentData(props.tournament.id);
      setTournament(tournament);
    };
    getTournament();
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        {!tournament ? (
          <Text>Carregando</Text>
        ) : (
          <DataTable>
            <DataTable.Header
              style={{
                borderTopWidth: 1,
                borderTopColor: "rgb(200, 200, 200)",
                backgroundColor: "rgb(250, 100, 100)",
              }}
            >
              <DataTable.Title
                style={{
                  borderRightWidth: 1,
                  borderRightColor: "rgb(200, 200, 200)",
                  flex: 4,
                }}
              >
                <Text style={{ color: "rgb(10,10,10)" }}>Equipa</Text>
              </DataTable.Title>
              <DataTable.Title style={columnStyle}>
                <Text style={{ color: "rgb(10,10,10)" }}>Pts</Text>
              </DataTable.Title>
              <DataTable.Title style={columnStyle}>
                <Text style={{ color: "rgb(10,10,10)" }}>V</Text>
              </DataTable.Title>
              <DataTable.Title style={columnStyle}>
                {" "}
                <Text style={{ color: "rgb(10,10,10)" }}>E</Text>
              </DataTable.Title>
              <DataTable.Title style={columnStyle}>
                {" "}
                <Text style={{ color: "rgb(10,10,10)" }}>D</Text>
              </DataTable.Title>
              <DataTable.Title style={columnStyle}>
                {" "}
                <Text style={{ color: "rgb(10,10,10)" }}>GM</Text>
              </DataTable.Title>
              <DataTable.Title style={columnStyle}>
                {" "}
                <Text style={{ color: "rgb(10,10,10)" }}>GS</Text>
              </DataTable.Title>
              <DataTable.Title style={{ ...columnStyle, borderRightWidth: 0 }}>
                {" "}
                <Text style={{ color: "rgb(10,10,10)" }}>DG</Text>
              </DataTable.Title>
            </DataTable.Header>

            {tournament.classifications.map((classification, index) => {
              return (
                <DataTable.Row
                  style={{
                    backgroundColor: index % 2 ? "#DDD" : "#FFF",
                    opacity: 0.8,
                  }}
                  key={index}
                >
                  <DataTable.Cell style={{ ...columnStyle, flex: 4 }}>
                    {classification.team.shortName}
                  </DataTable.Cell>
                  <DataTable.Cell style={columnStyle} numeric>
                    {classification.points}
                  </DataTable.Cell>
                  <DataTable.Cell numeric style={columnStyle}>
                    {classification.wins}
                  </DataTable.Cell>
                  <DataTable.Cell numeric style={columnStyle}>
                    {classification.draws}
                  </DataTable.Cell>
                  <DataTable.Cell numeric style={columnStyle}>
                    {classification.losses}
                  </DataTable.Cell>
                  <DataTable.Cell numeric style={columnStyle}>
                    {classification.goalsScored}
                  </DataTable.Cell>
                  <DataTable.Cell numeric style={columnStyle}>
                    {classification.goalsSuffered}
                  </DataTable.Cell>
                  <DataTable.Cell numeric>
                    {classification.goalsDifference}
                  </DataTable.Cell>
                </DataTable.Row>
              );
            })}
          </DataTable>
        )}
      </ImageBackground>
    </View>
  );
};

const columnStyle = {
  borderRightWidth: 1,
  borderRightColor: "rgb(200, 200, 200)",
};
