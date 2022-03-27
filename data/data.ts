export interface Team {
  id: string;
  name: string;
  shortName: string;
}

export interface Tournament {
  id: string;
  name: string;
  classifications: Classification[];
}

export interface TournamentMinimal {
  id: string;
  name: string;
}

export interface Classification {
  team: Team;
  points: number;
  wins: number;
  losses: number;

  /**
   * Empates
   */
  draws: number;
  goalsScored: number;
  goalsSuffered: number;
  goalsDifference: number;
}

export interface Match {
  tournamentId: string;
  homeStats: MatchStats;
  awayStats: MatchStats;
  location: string;
  date: Date;
  roundDesignation: string;
  /**
   * Árbitro
   */
  referee: string;
  gameStatus: "Decorring" | "Endded" | "Not started";
  gameTime?: number;
}

export interface MatchStats {
  team: Team;
  gols: number;
}

/**
 * Estatísticas do jogo
 */
export const teams: Team[] = [
  {
    id: "1",
    name: "Sporting Clube da Praia",
    shortName: "Sporting Praia",
  },
  {
    id: "2",
    name: "Grémio Desportivo Nhagar",
    shortName: "Gremio Nhagar",
  },
  {
    id: "3",
    name: "Académica de Tarrafal",
    shortName: "Acad. Tarrafal",
  },
  {
    id: "4",
    name: "Associação de Futebol de Juntus",
    shortName: "AssoJuventus",
  },
];

export const matchs: Match[] = [
  {
    tournamentId: "1",
    homeStats: {
      team: teams[1],
      gols: 0,
    },

    awayStats: {
      team: teams[0],
      gols: 0,
    },

    date: new Date(2022, 4, 1, 18, 45),
    location: "Estádio Nacional",
    roundDesignation: "Jornada 1",
    referee: "Jão Fortes",
    gameStatus: "Decorring",
  },
];

export const tournaments: Tournament[] = [
  {
    id: "1",
    name: "Campeonato Regional",
    classifications: [
      {
        team: teams[0],
        points: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        goalsScored: 0,
        goalsSuffered: 0,
        goalsDifference: 0,
      },
      {
        team: teams[1],
        points: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        goalsScored: 0,
        goalsSuffered: 0,
        goalsDifference: 0,
      },
      {
        team: teams[2],
        points: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        goalsScored: 0,
        goalsSuffered: 0,
        goalsDifference: 0,
      },
      {
        team: teams[3],
        points: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        goalsScored: 0,
        goalsSuffered: 0,
        goalsDifference: 0,
      },
    ],
  },
];

/**
 * Função para simular o tempo de espera na comunicação backend servidor
 * @param ms number of millisencods to wait
 */
const wait = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Função para simular pedido ao backend para obter dados de torneios
 * @returns
 */
const getTournaments = async (): Promise<TournamentMinimal[]> => {
  await wait(1000);
  return tournaments;
};

/**
 * Função para simular pedido ao backend para obter dados de um torneio específico
 * @param tournamentId - o id do torneio para solicitar pedido ao backend
 * @returns o torneio pedido
 */
export const getTournamentData = async (
  tournamentId: string
): Promise<Tournament> => {
  await wait(1000);

  // Encontrar o torneio com id igual ao torneio solicitado
  const torneio = tournaments.filter(
    (tournament) => tournament.id === tournamentId
  )[0];

  return torneio;
};
