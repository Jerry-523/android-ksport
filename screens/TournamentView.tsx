import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import {
  getTournamentData,
  getTournamentMatches,
  Match,
  Tournament,
  TournamentMinimal,
} from "../data/data";
import { Classificacao } from "./Classificacao";
import { MatchesView } from "./MatchesView";

const gamesTab = () => <Text>GamesTab</Text>;

interface Props {
  tournament: TournamentMinimal;
}

export const TournamentView: React.FC<Props> = (props) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "table",
      title: "Tabela",
    },
    {
      key: "games",
      title: "Jogos",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    table: () => <Classificacao tournament={tournament} />,
    games: () => <MatchesView matches={matches} />,
  });

  const [tournament, setTournament] = React.useState<Tournament | null>(null);
  const [matches, setMatches] = React.useState<Match[]>([]);
  React.useEffect(() => {
    const getTournament = async () => {
      const tournament = await getTournamentData(props.tournament.id);
      setTournament(tournament);
    };
    const getMatches = async () => {
      const matches = await getTournamentMatches(props.tournament.id);
      setMatches(matches);
    };
    getTournament();
    getMatches();
  }, []);

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};
