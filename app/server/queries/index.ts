import api from "@/server/api/api";

export const URLS = {
  CARDS: "/cards",

  // MULTI_SEARCH:
  //   '/search/:type?query=:name&include_adult=false&language=en-US&page=1',
  // GET_GENRE: '/genre/:genre/list?language=en',
  // ALL_TRENDINGS: '/trending/all/:time_window',

  // SEASON_EPISODES: '/seasons/:id/episodes',
  // SHOWS_BY_ACTOR: '/people/:id/castcredits?embed=show',
  // PEOPLE_BY_NAME: '/search/people?q=:name',
};

// const multiSearch = (
//   _type: 'person' | 'tv' | 'multi' | 'movie',
//   _name: string,
// ) => {
//   return api.get(
//     URLS.MULTI_SEARCH.replace(':type', _type).replace(
//       ':name',
//       encodeURI(_name),
//     ),
//   );
// };

// const getGenreByType = (_genre: string) => {
//   return api.get(URLS.GET_GENRE.replace(':genre', _genre));
// };

// const getAllTrendings = (_time_window: 'day' | 'week') => {
//   return api.get<TvShowProps[] | MoviesProps[]>(
//     URLS.ALL_TRENDINGS.replace(':time_window', _time_window),
//   );
// };

// const showsByActor = (_id: string) => {
//   return api.get(URLS.SHOWS_BY_ACTOR.replace(':id', _id));
// };

// const seasonEpisodes = (_id: string) => {
//   return api.get(URLS.SEASON_EPISODES.replace(':id', _id));
// };

const getCards = () => {
  return api.get(URLS.CARDS);
};

export const API = {
  GET_CARDS: getCards,

  // MULTI_SEARCH: multiSearch,
  // GET_GENRE: getGenreByType,
  // ALL_TRENDINGS: getAllTrendings,

  // SHOWS_BY_ACTOR: showsByActor,
  // SEASON_EPISODES: seasonEpisodes,
  // PEOPLE_BY_NAME: peopleByName,
};