const { default: axios } = require("axios");

const getMovie = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/search/movie?api_key=bd73e4973a245701c7e1a2a4a393fddc&language=en-US&page=1&include_adult=false&query=2023"
  );
  const data = response.data.results;
  return data;
};

describe("check we get all movie data", () => {
  test("check if have any movie", async () => {
    const movie = await getMovie([]);
    expect(movie.length > 0).toBeTruthy();
  });
});
