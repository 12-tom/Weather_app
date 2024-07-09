import React from 'react';
import { Link } from "react-router-dom";
import { useGetQuotes } from "../hooks/useGetQoutes";

const HomePage: React.FC = () => {
  const { quote, loading } = useGetQuotes();

  return (
    <div className="bg-secondary h-screen py-32 overflow-x-hidden">
      <h2 className="p-4 text-back text-[24px] font-[MonstBold]">
        Today's Quotes:
      </h2>
      {!loading?
        <div className="bg-primary py-4 shadow-xl">
          <div className="animate-[slide_15s_linear_infinite] p-8 text-back text-[36px] font-[MonstBold] hover-pause-animation">
            {quote?.quote}
            <br />
            <strong className="float-right">~{quote?.author}</strong>
          </div>
        </div>
        : <h2 className="text-back text-[36px] font-[MonstBold] pl-4 animate-pulse">
          Loading
          <strong className='animate-ping'>...</strong></h2>}
      {!loading? <button
        className="my-16 mx-2 p-2 bg-primary rounded-lg border border-border text-back text-[22px] font-[MontsLight] relative left-1/2 shadow-lg">
          <Link to={"/cities"}>+ Explore</Link>
      </button>
        :null}
    </div>
  );
};
export default HomePage;
