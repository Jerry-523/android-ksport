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
          <Table borderStyle={{ borderWidth: 2 }}>
            <Row
              data={["Equipa", "P", "V", "D", "E", "GM", "GS", "DG"]}
              style={styles.head}
              textStyle={styles.text}
              flexArr={[2]}
            />
            <TableWrapper style={styles.wrapper}>
              {tournament.classifications.map((row) => {
                return (
                  <Row
                    data={[
                      row.team.name,
                      row.points,
                      row.wins,
                      row.draws,
                      row.losses,
                      row.goalsScored,
                      row.goalsSuffered,
                      row.goalsDifference,
                    ]}
                    flexArr={[2]}
                    style={styles.row}
                    textStyle={styles.text}
                  />
                );
              })}
            </TableWrapper>
          </Table>
        )}
      </ImageBackground>
    </View>
  );
};
