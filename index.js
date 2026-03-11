function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

// num points scored
function numPointsScored(playerName) {
    const game = gameObject();
    // home team players
    if (game.home.players[playerName]) {
        return game.home.players[playerName].points;
    }
    // away team players
    if (game.away.players[playerName]) {
        return game.away.players[playerName].points;
    }

    return null; 
}

// shoe size
function shoeSize(playerName) {
    const game = gameObject();

    // away players
    if (game.away.players[playerName]) {
        return game.away.players[playerName]. shoe
    }

    // home players
    if (game.home.players[playerName]) {
        return game.home.players[playerName].shoe
    }

    return null; 
}

// team colors
function teamColors(teamName) {
    const game = gameObject();

    // home team
    if (game.home.teamName === teamName) {
        return game.home.colors;
    }

    // away team
    if (game.away.teamName === teamName) {
        return game.away.colors;
    }

    return [];
}

// team names
function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName]; 
}

// player numbers
function playerNumbers(teamName) {
  const game = gameObject();
  let selectedTeam = null;

  //  which team object to use
  if (game.home && game.home.teamName === teamName) {
    selectedTeam = game.home;
  } else if (game.away && game.away.teamName === teamName) {
    selectedTeam = game.away;
  }

  // team not found, return empty
  if (!selectedTeam) return [];

  // numbers from the players object
  return Object.values(selectedTeam.players).map(p => p.number);
}

// player stats
function playerStats(playerName) {
    const game = gameObject();
    
    // home team 
    if (game.home.players[playerName]) {
        return game.home.players[playerName];
    }
    
    // away team 
    if (game.away.players[playerName]) {
        return game.away.players[playerName];
    }
    
    return "Player not found";
}

function bigShoeRebounds() {
    const game = gameObject();

    // home and away teams in one array 
    const allPlayers = [
    ...Object.values(game.home.players),
    ...Object.values(game.away.players)
  ];

  // find player largest shoe size (reduce)
  const bigShoePlayer = allPlayers.reduce((highest, player) => {
    return (player.shoe > highest.shoe) ? player : highest;
  }, { shoe: 0, rebounds: 0 }); // init with 0

  return bigShoePlayer.rebounds;
}