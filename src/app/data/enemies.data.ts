import { Enemy } from '../models/player';

export const ENEMIES = {
  // LEVEL 1
  FROG: new Enemy('Frog', 1, 9, 2),
  GARDENER: new Enemy('Gardener', 1, 12, 2),
  HOTHEAD: new Enemy('Hothead', 1, 14, 2),
  MAGICIAN: new Enemy('Magician', 1, 9, 1),
  ROBOBOT: new Enemy('RoboBot', 1, 12, 3),
  ROSE: new Enemy('Rose', 1, 12, 2),
  SLIME: new Enemy('Slime', 1, 14, 3),
  SPACE_MARINE: new Enemy('Space Marine', 1, 14, 3),
  WOLF_PUPPY: new Enemy('Wolf Puppy', 1, 12, 3),

  // LEVEL 2
  ALCHEMIST: new Enemy('Alchemist', 2, 28, 3),
  BABY_SQUID: new Enemy('Baby Squid', 2, 26, 3),
  DRYAD: new Enemy('Dryad', 2, 26, 3),
  MARSHMALLOW: new Enemy('Marshmallow', 2, 28, 2),
  MIMIC: new Enemy('Mimic', 2, 28, 3),
  PIRATE: new Enemy('Pirate', 2, 26, 2),
  SNEEZY: new Enemy('Sneezy', 2, 24, 3),
  STEREOHEAD: new Enemy('Stereohead', 2, 28, 2),
  STICKY_HANDS: new Enemy('Sticky Hands', 2, 28, 1),
  WIZARD: new Enemy('Wizard', 2, 28, 1),

  // LEVEL 3
  BULLY: new Enemy('Bully', 3, 34, 2),
  CACTUS: new Enemy('Cactus', 3, 32, 3),
  COPYCAT: new Enemy('Copycat', 3, 34, 3),
  FIREMAN: new Enemy('Fireman', 3, 34, 4),
  HANDYMAN: new Enemy('Handyman', 3, 32, 3),
  HAUNTED_JAR: new Enemy('Haunted Jar', 3, 34, 4),
  KEYMASTER: new Enemy('Keymaster', 3, 34, 1),
  SORCERESS: new Enemy('Sorceress', 3, 34, 2),
  VACUUM: new Enemy('Vacuum', 3, 30, 3),
  YETI: new Enemy('Yeti', 3, 34, 3),

  // LEVEL 4
  AURORA: new Enemy('Aurora', 4, 42, 4),
  CRYSTALINA: new Enemy('Crystalina', 4, 48, 4),
  DIRE_WOLF: new Enemy('Dire Wolf', 4, 42, 4),
  KRAKEN: new Enemy('Kraken', 4, 44, 5),
  LOUD_BIRD: new Enemy('Loud Bird', 4, 44, 4),
  RHINO_BEETLE: new Enemy('Rhino Beetle', 4, 46, 3),
  ROTTEN_APPLE: new Enemy('Rotten Apple', 4, 44, 3),
  SNOWMAN: new Enemy('Snowman', 4, 44, 4),
  WICKER_MAN: new Enemy('Wicker Man', 4, 44, 3),
  WISP: new Enemy('Wisp', 4, 42, 4),

  // LEVEL 5
  BANSHEE: new Enemy('Banshee', 5, 50, 4),
  BOUNTY_HUNTER: new Enemy('Bounty Hunter', 5, 48, 4),
  CORNELIUS: new Enemy('Cornelius', 5, 100, 0),
  COWBOY: new Enemy('Cowboy', 5, 42, 3),
  GARGOYLE: new Enemy('Gargoyle', 5, 48, 2),
  PAPER_KNIGHT: new Enemy('Paper Knight', 5, 48, 3),
  RAT_KING: new Enemy('Rat King', 5, 42, 3),
  SINGER: new Enemy('Singer', 5, 48, 4),
  SKELETON: new Enemy('Skeleton', 5, 50, 3),
  WARLOCK: new Enemy('Warlock', 5, 48, 3),

  // LEVEL 6
  AOIFE: new Enemy('Aoife', 6, 56, 5),
  AUDREY: new Enemy('Audrey', 6, 74, 4),
  BEATRICE: new Enemy('Beatrice', 6, 70, 4),
  BUSTER: new Enemy('Buster', 6, 68, 4),
  DRAKE: new Enemy('Drake', 6, 62, 4),
  MADISON: new Enemy('Madison', 6, 66, 5),
  SCATHACH: new Enemy('Scathach', 6, 70, 1),
};
