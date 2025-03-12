import React from "react";
import { useTrendingData } from "../../hooks/useTrendingData";
import Card from "../../component/card/card";
import { Movie } from "../../services/type";

const Home: React.FC = () => {
  const { trending, paginationInfo, setPaginationInfo } = useTrendingData();

  const handlePrevButton = () => {
    if (paginationInfo.page > 1) {
      setPaginationInfo({
        page: paginationInfo.page - 1,
      });
    }
  };

  const handleNextButton = () => {
    if (paginationInfo.page !== paginationInfo.total_pages) {
      setPaginationInfo({
        page: paginationInfo.page + 1,
      });
    }
  };

  return (
    <div className="flex flex-col w-full">
      <section className="flex flex-col py-10">
        <h1 className="font-semibold text-3xl pl-10">Trending Movie</h1>

        <div className="flex gap-3 overflow-x-auto overflow-visible px-10 mt-5">
          {trending?.map((item: Movie) => (
            <Card key={item.id} data={item} />
          ))}
        </div>

        <div className="flex flex-row justify-around mt-10">
          <button
            onClick={handlePrevButton}
            className="bg-blue-200 p-4 rounded-lg hover:bg-blue-300"
          >
            Previous
          </button>
          <button
            onClick={handleNextButton}
            className="bg-blue-200 p-4 rounded-lg hover:bg-blue-300"
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
