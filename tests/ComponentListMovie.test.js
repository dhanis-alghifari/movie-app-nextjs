import { render, cleanup, waitFor } from "@testing-library/react";
import ListMovie from "../components/organism/ListMovie";
import { getMovie } from "../pages/api/index";

jest.mock("../pages/api", () => ({
  getMovie: jest.fn(),
}));

describe("ListMovie", () => {
  afterEach(cleanup);

  it("should render data movie when it's fetched successfully", async () => {
    const data = [
      {
        id: 1,
        title: "movie 1",
        release_date: "2022-01-01",
        overview: "This is a movie about ...",
      },
      {
        id: 2,
        title: "movie 2",
        release_date: "2022-02-01",
        overview: "This is a movie about ...",
      },
    ];
    getMovie.mockResolvedValue({ data: { results: data } });

    const { container, getByText } = render(<ListMovie />);

    await waitFor(() => {
      expect(getByText("Title Movie: movie 1")).toBeDefined();
      expect(getByText("Title Movie: movie 2")).toBeDefined();
    });

    expect(container).toMatchSnapshot();
  });

  it("should render loading message when the data movie is being fetched", async () => {
    getMovie.mockResolvedValue(() => new Promise(() => {}));

    const { container, getByText } = render(<ListMovie />);

    await waitFor(() => {
      expect(getByText("Loading....")).toBeDefined();
    });

    expect(container).toMatchSnapshot();
  });

  it("should render movie not found when the data movie is being fetched", async () => {
    const data = [];
    getMovie.mockResolvedValue({ data: { results: data } });

    const { container, queryByText } = render(<ListMovie />);

    await waitFor(() => {
      const element = queryByText("Movie Not Found");
      expect(element).toBeDefined();
    });

    expect(container).toMatchSnapshot();
  });
});
