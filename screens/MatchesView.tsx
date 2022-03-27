import { Center } from "native-base";
import React, { FC, Fragment } from "react";
import { View, Text, ImageBackground } from "react-native";
import { DataTable } from "react-native-paper";
import { Match } from "../data/data";
import styles from "../style/MainStyle";
import { columnStyle } from "./Classificacao";
import { matchesBackground } from "./Matches";

interface Props {
  matches: Match[];
}

export interface EventDay {
  date: string;
  matches: Match[];
}

/**
 * Esta função recebe um array de jogos e devolve uma outra array com
 * os jogos agrupados por dia
 * @param matches
 * @returns
 */
export const getGamesByDay = (matches: Match[]): EventDay[] => {
  let eventDays = {};

  // Extraír a data do jogo em formato yyyy-mm-dd e adiconá-lo à estrutura eventDays
  matches.forEach((match) => {
    const date = match.date.toISOString().substring(0, 10);
    if (eventDays[date]) {
      eventDays[date].push(match);
    } else {
      eventDays[date] = [match];
    }
  });

  // Todas as datas que encontramos
  const dates = Object.keys(eventDays);

  const matchDays: EventDay[] = [];

  // Adicionar à array matchDays os jogos de cada dia
  dates.forEach((date) => {
    matchDays.push({ date: date, matches: eventDays[date] });
  });

  // Ordenar o array por ordem crescente da data
  matchDays.sort((a, b) => (a.date < b.date ? -1 : 1));

  return matchDays;
};

export const MatchesView: FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={matchesBackground}
        resizeMode="cover"
        style={styles.image}
      >
        <DataTable
          style={{
            backgroundColor: "#FFF",
            opacity: 0.7,
          }}
        >
          {getGamesByDay(props.matches).map((day, index) => (
            <Fragment>
              <DataTable.Row
                key={day.date}
                style={{
                  minHeight: 20,
                  alignItems: "center",
                  backgroundColor: "#DDD",
                }}
              >
                <Text
                  style={{
                    textAlignVertical: "bottom",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  {day.date}{" "}
                </Text>
              </DataTable.Row>
              {day.matches.map((match) => (
                <DataTable.Row key={day}>
                  <DataTable.Cell
                    style={{ ...columnStyle, flex: 5, borderColor: "black" }}
                  >
                    <Text style={{ textAlign: "center" }}>
                      {match.homeStats.team.shortName}
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={{
                      ...columnStyle,
                      flex: 2,
                      justifyContent: "center",
                      borderColor: "black",
                    }}
                  >
                    -:-
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={{
                      ...columnStyle,
                      flex: 5,
                      justifyContent: "center",
                    }}
                  >
                    <Text>{match.awayStats.team.shortName}</Text>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
              <DataTable.Row
                style={{
                  minHeight: 5,
                  borderBottomColor: "black",
                  borderBottomWidth: 5,
                }}
              ></DataTable.Row>
            </Fragment>
          ))}
        </DataTable>
      </ImageBackground>
    </View>
  );
};
