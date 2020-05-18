/**
 * Represents the types of endpoints that is available through Nookipedia's API.
 */
type Endpoints = Villager | Fossil | Critter;

/**
 * Represents the names of endpoints available through Nookiepdia's API.
 */
type Names = 'villager' | 'fossil' | 'critter';

/**
 * Represents what the API will respond for a request about the events for a date.
 */
type Today = {
  /**
   * A brief message stating the current date and indicating whether there are any events for the day.
   */
  message: string;

  /**
   * An array of event messages, which includes a combination of holidays and birthdays.
   */
  events: string[];

  /**
   * An array of URLs for the images for villagers that have birthdays today.
   */
  villager_images: string[];
};

/**
 * Represents what the API will respond for a request about a critter.
 */
type Critter = {
  /**
   * Here's some information about this critter.
   */
  message: string;

  /**
   * The critter's name.
   */
  name: string;

  /**
   * A link to an image of this critter.
   */
  image: string;

  /**
   * The critter's scientific name.
   */
  'scientific-name': string;

  /**
   * What family this critter is a part of.
   */
  family: string;

  /**
   * Represents what months this critter is available.
   */
  'time-year': string;

  /**
   * Represents the hours that this critter is available.
   */
  'time-day': string;

  /**
   * Represents where this critter can be found.
   */
  location: string;

  /**
   * Represents this critter's size.
   */
  size: string;

  /**
   * Represents this critter's rarity.
   */
  rarity: string;

  /**
   * Represents how much this critter can sell for.
   */
  price: string;

  /**
   * Represents what the PC says when catching this critter.
   */
  caught: string;

  /**
   * A link to the entry for this critter on https://nookipedia.com.
   */
  link: string;

  /**
   * Represents the date that information for this critter was last updated.
   */
  updated: string;

  /**
   * Represents when this critter was last cached in the format "DD/MM/YYY".
   */
  cached: string;

  /**
   * Represents when this critter's cached data will expire.
   */
  'api-cache-expire': string;
};

/**
 * Represents what the API will respond for a request about a fossil.
 */
type Fossil = {
  /**
   * Here's some information about this fossil.
   */
  message: string;

  /**
   * The fossil's name.
   */
  name: string;

  /**
   * A link to an image of this villager.
   */
  image: string;

  /**
   * The fossil's scientific name.
   */
  'scientific-name': string;

  /**
   * Represents the sections that this fossil is a part of.
   */
  sections: string;

  /**
   * Represents the period of when this fossil existed.
   */
  period: string;

  /**
   * The length of this fossil.
   */
  length: string;

  /**
   * How much this fossil will sell for.
   */
  price: string;

  /**
   * A link to the entry for this fossil on Nookipedia.
   */
  link: string;

  /**
   * Represents the date that information for this fossil was last updated.
   */
  updated: string;

  /**
   * Represents when this fossil was last cached in the format "DD/MM/YYY".
   */
  cached: string;

  /**
   * Represents when this fossil's cached data will expire.
   */
  'api-cache-expire': string;
};

/**
 * Represents what the API will respond for a request about a villager.
 */
type Villager = {
  /**
   * Here's some information of this villager.
   */
  message: string;

  /**
   * The name of the villager.
   */
  name: string;

  /**
   * A link to an image of this villager.
   */
  image: string;

  /**
   * The villager's phrase.
   */
  quote: string;

  /**
   * The villager's gender.
   */
  gender: string;

  /**
   * The villager's personality.
   */
  personality: string;

  /**
   * The villager's species.
   */
  species: string;

  /**
   * The villager's birthday.
   */
  birthday: string;

  /**
   * The villager's zodiac sign.
   */
  sign: string;

  /**
   * The villager's initial phrase.
   */
  phrase: string;

  /**
   * The villager's initial clothes.
   */
  clothes: string;

  /**
   * The villager's favorite fruit (for Animal Crossing on Gamecube).
   */
  'islander-favorite': string;

  /**
   * What the villager is allergic to.
   */
  'islander-allergic': string;

  /**
   * A link to an image of the villager's picture frame.
   */
  picture: string;

  /**
   * Represents how many siblings this villager has.
   */
  siblings: string;

  /**
   * Represents the villager's skill.
   */
  skill: string;

  /**
   * Represents the villager's goal.
   */
  goal: string;

  /**
   * Represents the villager's fear.
   */
  fear: string;

  /**
   * Represents the villager's favorite clothing.
   */
  favclothing: string;

  /**
   * Represents the villager's least favorite clothing.
   */
  leastfavclothing: string;

  /**
   * Represents the villager's favorite color.
   */
  favcolor: string;

  /**
   * Represents the villager's favorite coffee type.
   */
  'coffee-type': string;

  /**
   * Represents how the villager likes their milk.
   */
  'coffee-milk': string;

  /**
   * Represents how the villager likes their sugar.
   */
  'coffee-sugar': string;

  /**
   * The villager's name in Japanese.
   */
  'name-jp': string;

  /**
   * The romanization for the villager's Japanese name.
   */
  'name-jp-r': string;

  /**
   * The meaning for the villager's Japanese name.
   */
  'name-jp-m': string;

  /**
   * The villager's name in Korean.
   */
  'name-ko': string;

  /**
   * The romanization for the villager's Korean name.
   */
  'name-ko-r': string;

  /**
   * The meaning for the villager's Korean name.
   */
  'name-ko-m': string;

  /**
   * The villager's name in Chinese (simplified).
   */
  'name-zh': string;

  /**
   * The romanization for the villager's Chinese (simplified) name.
   */
  'name-zh-r': string;

  /**
   * The meaning for the villager's Chinese (simplified) name.
   */
  'name-zh-m': string;

  /**
   * The villager's Chinese (traditional) name.
   */
  'name-zht': string;

  /**
   * The villager's name in Chinese (iQue player).
   */
  'name-zhq': string;

  /**
   * The romanization for the villager's Chinese (iQue player) name.
   */
  'name-zhq-r': string;

  /**
   * The meaning for the villager's Chinese (iQue player) name.
   */
  'name-zhq-m': string;

  /**
   * The villager's name in Arabic.
   */
  'name-ar': string;

  /**
   * The romanization for the villager's Arabic name.
   */
  'name-ar-r': string;

  /**
   * The meaning for the villager's Arabic name.
   */
  'name-ar-m': string;

  /**
   * The villager's name in Russian.
   */
  'name-ru': string;

  /**
   * The romanization for the villager's Russian name.
   */
  'name-ru-r': string;

  /**
   * The meaning for the villager's Russian name.
   */
  'name-ru-m': string;

  /**
   * The villager's name in Dutch.
   */
  'name-nl': string;

  /**
   * The meaning for the villager's Dutch name.
   */
  'name-nl-m': string;

  /**
   * The villager's name in German.
   */
  'name-de': string;

  /**
   * The meaning for the villager's German name.
   */
  'name-de-m': string;

  /**
   * The villager's name in Spanish (European).
   */
  'name-es': string;

  /**
   * The meaning for the villager's Spanish (European) name.
   */
  'name-es-m': string;

  /**
   * The villager's name in Spanish (Latin American).
   */
  'name-esl': string;

  /**
   * The meaning for the villager's Spanish (Latin American) name.
   */
  'name-esl-m': string;

  /**
   * The villager's name in French (European).
   */
  'name-fr': string;

  /**
   * The meaning for the villager's French (European) name.
   */
  'name-fr-m': string;

  /**
   * The villager's name in French (Quebec).
   */
  'name-frq': string;

  /**
   * The meaning for the villager's French (Quebec) name.
   */
  'name-frq-m': string;

  /**
   * The villager's name in Italian.
   */
  'name-it': string;

  /**
   * The meaning for the villager's Italian name.
   */
  'name-it-m': string;

  /**
   * The villager's name in Portuguese.
   */
  'name-pt': string;

  /**
   * The meaning for the villager's Portuguese name.
   */
  'name-pt-m': string;

  /**
   * A link to the entry for this villager on https://nookipedia.com.
   */
  link: string;

  /**
   * Represents the date that this villager was last updated.
   */
  updated: string;

  /**
   * Represents the date that information for this villager was last updated.
   */
  cached: string;

  /**
   * Represents when this villager's cached data will expire.
   */
  'api-cache-expire': string;
};

export { Endpoints, Names, Today, Villager, Critter, Fossil };
