(function (Scratch) {
  "use strict";

  // https://turbowarp.org/editor?extension=https://tw.knightbot63.repl.co/sports.js
  // To Do: Start other teams for more blocks possibly.
  var apiKey = "";
  var teamdata = "";
  var setteamnfl = "";
  var setteammlb = "";
  // NFL API SAMPLE //
  const url =
    "https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLPlayerInfo?playerName=karl%20brooks&getStats=true";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "apiKey",
      "X-RapidAPI-Host":
        "tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com",
      "Content-Type": "application/json",
    },
  };
  const teamoptions = {
    method: "GET",
    params: {
      rosters: "false",
      schedules: "false",
      topPerformers: "true",
      teamStats: "true",
    },
    headers: {
      "X-RapidAPI-Key": "apiKey",
      "X-RapidAPI-Host":
        "tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com",
    },
  };

  // MLB API SAMPLE //
  const mlburl =
    "https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBScoresOnly?gameDate=20230410&topPerformers=true";
  const mlboptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "apiKey",
      "X-RapidAPI-Host":
        "tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com",
    },
  };

  var result = "";
  var data = "";

  class Sports {
    getInfo() {
      return {
        id: "sports",
        name: "Sports",
        color1: "#156e2d",
        blocks: [
          {
            opcode: "setAPIkey",
            blockType: Scratch.BlockType.COMMAND,
            text: "set api key to [API_KEY]",
            arguments: {
              API_KEY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "To get an api key, go to https://rapidapi.com",
              },
            },
          },
          {
            blockType: "label",
            text: "Football/NFL",
          },
          {
            opcode: "player",
            blockType: Scratch.BlockType.REPORTER,
            text: "player [NAME] stats",
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Tom Brady",
              },
            },
          },
          "---",
          {
            opcode: "playerInfomation",
            blockType: Scratch.BlockType.REPORTER,
            text: "player's [OPTION]",
            arguments: {
              OPTION: { menu: "PLAYER_INFO_MENU", defaultValue: "short name" },
            },
          },
          {
            opcode: "stats",
            blockType: Scratch.BlockType.REPORTER,
            text: "player's [FORMAT] stats",
            hideFromPalette: true,
            arguments: {
              FORMAT: {
                type: Scratch.ArgumentType.STRING,
                menu: "FORMAT_MENU",
              },
            },
          },
          "---",
          {
            opcode: "teamcollection",
            blockType: Scratch.BlockType.REPORTER,
            text: "get NFL teams",
          },
          {
            opcode: "team",
            blockType: Scratch.BlockType.REPORTER,
            text: "team by index [ID] stats",
            arguments: {
              ID: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "1",
              },
            },
          },
          {
            opcode: "teamstats",
            blockType: Scratch.BlockType.REPORTER,
            text: "team's [FORMAT]",
            arguments: {
              FORMAT: {
                type: Scratch.ArgumentType.STRING,
                menu: "TEAM_FORMAT",
                defaultValue: "ratio",
              },
            },
          },
          {
            opcode: "rngteam",
            blockType: Scratch.BlockType.REPORTER,
            text: "random team stats from [HAR]",
            arguments: {
              HAR: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "31",
              },
            },
          },
          {
            opcode: "superbowl",
            blockType: Scratch.BlockType.REPORTER,
            text: "days until Super Bowl",
          },
          {
            blockType: "label",
            text: "Live Scores (Beta)",
          },
          {
            opcode: "livescore",
            blockType: Scratch.BlockType.REPORTER,
            text: "live scores in [GAME]",
            hideFromPalette: true,
            arguments: {
              GAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Soccer",
              },
            },
          },
          {
            blockType: "label",
            text: "Baseball/Softball/MLB (Coming 2024)",
          },
        ],
        menus: {
          FORMAT_MENU: {
            acceptReporters: true,
            items: ["rushing", "receiving", "passing"],
          },
          PLAYER_INFO_MENU: {
            items: [
              "short name",
              "jersey",
              "team",
              "height",
              "age",
              "birthday",
              "position",
            ],
          },
          TEAM_FORMAT: {
            items: ["ratio", "abbreviation", "streak"],
          },
        },
      };
    }

    setAPIkey({ API_KEY }) {
      apiKey = API_KEY;
      options.headers["X-RapidAPI-Key"] = apiKey;
      teamoptions.headers["X-RapidAPI-Key"] = apiKey;
      nbaoptions.headers["X-RapidAPI-Key"] = apiKey;
      mlboptions.headers["X-RapidAPI-Key"] = apiKey;
    }

    async player({ NAME }) {
      const response = await fetch(
        `https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLPlayerInfo?playerName=${NAME}&getStats=true`,
        options,
      );
      {
        result = await response.json();
        data = await result.body;
      }
      console.log(data.stats);
      if (result.error) {
        console.log("Error. Please check logs");
        return `Error: ${result.error}`;
      } else {
        return `Status: ${result.statusCode}`;
      }
    }

    playerInfomation({ OPTION }) {
      try {
        switch (OPTION) {
          case "short name":
            return data[0].cbsShortName;
          case "jersey":
            return data[0].jerseyNum;
          case "team":
            return data[0].team;
          case "height":
            return data[0].height;
          case "age":
            return data[0].age;
          case "birthday":
            return data[0].bDay;
          case "position":
            return data[0].pos;
        }
      } catch (error) {
        return "Error: Must have API Key or Player Name";
      }
    }

    stats(args) {
      const newdata = JSON.stringify(data);
      console.log(newdata); // New Data is stringified content
      console.log(newdata.stats); // Will always be undefined, not a code issue.
      if (args.FORMAT === "rushing") {
        return "Rushing Stats soon!";
      } else if (args.FORMAT === "receiving") {
        return "Receiving Stats soon!";
      } else if (args.FORMAT === "passing") {
        return "Passing Stats soon!";
      }
    }

    superbowl() {
      var countDownDate = new Date("Feb 11, 2024 15:37:25").getTime();
      // Super Bowl Time Feb 11 2024
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      return days;
    }
    async teamcollection() {
      const response = await fetch(
        "https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLTeams",
        teamoptions,
      );
      {
        teamdata = await response.json();
      }
      if (teamdata.error) {
        return `Error: ${teamdata.error}`;
      } else {
        return `Status: ${teamdata.statusCode}`;
      }
    }
    team(args) {
      if (args.ID === 0 || args.ID > 31) {
        return "Team ID cannot be fetched, must be within 1 to 31";
      }
      const newteamdata = JSON.stringify(teamdata);
      const datas = JSON.parse(newteamdata).body[args.ID];
      {
        setteamnfl = args.ID;
      }
      return `${datas.teamCity}, ${datas.teamName} Inserted.`;
    }

    rngteam(args) {
      const max = args.HAR;
      if (args.HAR > 31) {
        const max = 31;
      } else if (args.HAR < 1) {
        const max = 1;
      }
      var newteamdata = JSON.stringify(teamdata);
      var datas =
        JSON.parse(newteamdata).body[Math.floor(1 + Math.random() * max)];
      return `${datas.teamCity}, ${datas.teamName}`;
    }

    teamstats({ FORMAT }) {
      try {
        const newteamdata = JSON.stringify(teamdata);
        const datas = JSON.parse(newteamdata).body[setteamnfl];
        switch (FORMAT) {
          case "ratio":
            return `${datas.wins}-${datas.loss}`;
          case "abbreviation":
            return datas.teamAbv;
          case "streak":
            if (datas.currentStreak.result == "L") {
              return `Loss Streak/Length: ${datas.currentStreak.length}`;
            } else {
              return `Win Streak/Length: ${datas.currentStreak.length}`;
            }
        }
      } catch (error) {
        console.log(error);
        return "Error: Must have API Key or Team ID set.";
      }
    }
    async livescore(args) {
      // Soccer, Cricket, Basketball, Tennis, Hockey
      const url = `https://livescore6.p.rapidapi.com/matches/v2/list-live?Category=${args.GAME.toLowerCase()}&Timezone=-7`;
      const alloptions = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "5a2d8acca5msh6a7b6d8a42ef48cp129a36jsn8a6de92371c4",
          "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
        },
      };
      const response = await fetch(url, alloptions);
      const result = await response.text();
      const dump = JSON.stringify(result);
      const data = await JSON.parse(dump);
      console.log(data);
      try {
        if (data.error) {
          return `Error: ${data.error}`;
        }
        console.log(data);
        return data;
      } catch (error) {
        console.error("Fatal Error:", error);
        return "Please check console for the Error";
      }
    }
  }

  Scratch.extensions.register(new Sports());
})(Scratch);
