(function(Scratch) {
  'use strict';
  const vm = Scratch.vm;
  let leveldata;
  let userdata;
  let status;
  let userstatus;

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('Sandbox Error: This must be unsandboxed. Thank you! - Radical');
  }
  class SMM {
    getInfo() {
      return {
        id: 'smm',
        name: 'Super Mario Maker 2',
        color1: "#af0000",
        blocks: [
          {
            opcode: 'getlevel',
            blockType: Scratch.BlockType.COMMAND,
            text: 'get Super Mario Maker 2 level [USER]',
            arguments: {
              USER: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '91CMPM7LF'
              }
            }
          },
          {
            opcode: 'getstatus',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'Level Status Code is Successful?',
          },
          {
            opcode: 'getdatas',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Get Level [DATA]',
            arguments: {
              DATA: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'title',
                menu: "DATA_MENU",
              }
            }
          },
          {
            opcode: 'getuser',
            blockType: Scratch.BlockType.COMMAND,
            text: 'get Super Mario Maker 2 user [USEB]',
            arguments: {
              USEB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "231723D7G"
              }
            }
          },
          {
            opcode: 'getuserstatus',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'User Status Code is Successful?'
          },
          {
            opcode: 'getuserdata',
            blockType: Scratch.BlockType.REPORTER,
            text: 'get User [DATA]',
            arguments: {
              DATA: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'region',
                menu: "USER_MENU"
              }
            }
          }
        ],
        menus: {
          DATA_MENU: {
            acceptReporters: true,
            items: ['title', 'description', 'author', 'courseid', 'uploaded', 'gamestyle', 'theme', 'difficulty', 'tags', 'comments', 'likes', 'clearrate', 'image', 'worldrecord']
          },
          USER_MENU: {
            acceptReporters: true,
            items: ['region', 'country', 'name', 'last active', 'mii image', 'pose name', 'hat name', 'shirt name', 'pants name', 'courses played', 'courses cleared', 'courses attempted', 'courses deaths', 'likes', 'maker points', 'endless easy highscore', 'endless normal highscore', 'endless expert highscore', 'endless super expert highscore', 'versus rating', 'versus rank', 'versus won', 'versus lost', 'co-op clears', 'co-op plays', 'first clears', 'world records', 'super world clears', 'uploaded levels', 'tags enabled', 'comments enabled', 'employee']
          }
        }
      };
    }
    async getlevel(args) {
      const response = await Scratch.fetch(`https://tgrcode.com/mm2/level_info/${args.USER}`);
      leveldata = await response.json();
      if (!leveldata.error) {
        status = true;
      } else {
        status = false;
      }
    };
    getstatus() {
      return status
    }
    getdatas({ DATA }) {
      if (!status === true) {
        return status
      }
      switch ( DATA ) {
        case "title":
          return leveldata.name;
        case "description":
          return leveldata.description;
        case "author":
          return leveldata.uploader.name;
        case "courseid":
          return leveldata.course_id;
        case "uploaded":
          return leveldata.uploaded_pretty;
        case "gamestyle":
          return leveldata.game_style_name;
        case "theme":
          return leveldata.theme_name;
        case "difficulty":
          return leveldata.difficulty_name;
        case "tags":
          return leveldata.tags_name;
        case "comments":
          return leveldata.num_comments;
        case "likes":
          return leveldata.likes;
        case "clearrate":
          return leveldata.clear_rate_pretty;
        case "image":
          return `https://tgrcode.com/mm2/level_thumbnail/${leveldata.course_id}`;
        case "worldrecord":
          return `${leveldata.world_record_pretty} - ${leveldata.record_holder.name}`;
      }
    }
    async getuser(args) {
      const response = await Scratch.fetch(`https://tgrcode.com/mm2/user_info/${args.USEB}`);
      userdata = await response.json();
      if (!userdata.error) {
        userstatus = true
      } else {
        userstatus = false;
      }
    };
    getuserstatus() {
      return userstatus
    }
    getuserdata({ DATA }) {
      if (!userstatus === true) {
        return userstatus
      }
      switch ( DATA ) {
        case "region":
          return userdata.region_name;
        case "country":
          return userdata.country;
        case "name":
          return userdata.name;
        case "last active":
          return userdata.last_active_pretty;
        case "mii image":
          return userdata.mii_image;
        case "pose name":
          return userdata.pose_name;
        case "hat name":
          return userdata.hat_name;
        case "shirt name":
          return userdata.shirt_name;
        case "pants name":
          return userdata.pants_name;
        case "courses played":
          return userdata.courses_played;
        case "courses cleared":
          return userdata.courses_cleared;
        case "courses attempted":
          return userdata.courses_attempted;
        case "courses deaths":
          return userdata.courses_deaths;
        case "likes":
          return userdata.likes;
        case "maker points":
          return userdata.maker_points;
        case "endless easy highscore":
          return userdata.easy_highscore;
        case "endless normal highscore":
          return userdata.normal_highscore;
        case "endless expert highscore":
          return userdata.expert_highscore;
        case "endless super expert highscore":
          return userdata.super_expert_highscore;
        case "versus rating":
          return userdata.versus_rating;
        case "versus rank":
          return userdata.versus_rank_name;
        case "versus won":
          return userdata.versus_won;
        case "versus lost":
          return userdata.versus_lost;
        case "co-op clears":
          return userdata.coop_clears;
        case "co-op plays":
          return userdata.coop_plays;
        case "first clears":
          return userdata.first_clears;
        case "world records":
          return userdata.world_records;
        case "last uploaded level":
          return userdata.last_uploaded_level_pretty;
        case "employee":
          return userdata.is_nintendo_employee;
        case "comments enabled":
          return userdata.comments_enabled;
        case "tags enabled":
          return userdata.tags_enabled;
        case "uploaded levels":
          return userdata.uploaded_levels;
        case "super world clears":
          return userdata.unique_super_world_clears;
      }
    }
  }
  Scratch.extensions.register(new SMM());
})(Scratch);
