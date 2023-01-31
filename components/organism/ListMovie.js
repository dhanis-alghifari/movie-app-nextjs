import { getMovie } from "../../pages/api";
import { useState, useEffect, useCallback } from "react";
import CONFIG from "../../pages/config";
import Input from "../../components/atom/Input";
import Image from "next/image";

function ListMovie() {
  const [dataMovie, setDataMovie] = useState([]);
  const [search, setSearch] = useState("A");

  const getAllMovie = useCallback(() => {
    getMovie(`&query=${search}`).then((res) => {
      if (res && res.data) {
        var tempList = [];
        tempList = res.data.results;
        setDataMovie(tempList);
      }
    });
  }, [search]);

  useEffect(() => {
    if (search === "") {
      setSearch("A");
    } else {
      getAllMovie();
    }
  }, [search, getAllMovie]);

  const myLoader = ({ src }) => {
    return `${src}`;
  };

  const renderMovieNotFound = () => {
    return (
      <div>
        {(!dataMovie || dataMovie.length === 0) && search !== "A" ? (
          <p>Movie Not Found</p>
        ) : (
          <p>Loading....</p>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3 mb-10">
        <div className="m-auto w-2/5">
          <Input onchange={(e) => setSearch(e.target.value)} />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-4 gap-y-8">
        {dataMovie?.length > 0
          ? dataMovie?.map((item, index) => (
              <div key={index} className="block">
                <div className="container flex justify-center">
                  <div className="max-w-sm py-10">
                    <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg h-[980px]">
                      {item.poster_path === null ? (
                        <Image
                          loader={myLoader}
                          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=400&r=pg"
                          alt="img"
                          width={600}
                          height={800}
                          unoptimized={true}
                        />
                      ) : (
                        <Image
                          loader={myLoader}
                          src={`${CONFIG.Image_URL}${item.poster_path}`}
                          width={600}
                          height={800}
                          alt={item.title ? item.title : "-"}
                          unoptimized={true}
                        />
                      )}
                      <div className="py-6 px-8 rounded-lg bg-white">
                        <h1 className="text-gray-700 font-bold text-2xl mb-3">
                          Title Movie: {item.title ? item.title : "-"}
                        </h1>
                        <p className="text-gray-700 tracking-wide">
                          Release Date:
                          {item.release_date ? item.release_date : "-"}
                        </p>
                        <p className="text-gray-700 tracking-wide">
                          Overview: {item.overview ? item.overview : "-"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : renderMovieNotFound()}
      </div>
    </>
  );
}

export default ListMovie;
