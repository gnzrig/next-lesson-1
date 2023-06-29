import React, { useEffect, useState, ReactNode } from "react";
import { fetchData } from "./api/api";
import Paginate from "@/component/Paginate";
import Main from "./layout/Main";

const Call = () => {
  interface Flags {
    alt: string;
    png: string;
    svg: string;
  }
  type Data = {
    region: string;
    flags: Flags;
    capital: string[];
    population: number;
    fifa: string;
    flag: string;
    subregion: string;
    area: number;
  };

  const [data, setData] = useState<Data[] | null>(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const jsonData = await fetchData();
      setData(jsonData);
    };

    fetchDataFromApi();
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  }
  return (
    <Main>
      <Paginate />
      <div
        style={{
          display: "grid",
          overflow: "auto",
          gridTemplateColumns: "repeat(6 ,1fr)",
        }}
      >
        {data.map((e: Data, index: number) => {
          return (
            <div key={index} style={{ border: "1px solid gray" }}>
              <ul id={index + ""}>
                <li>{e.region}</li>
                <img src={e.flags["png"]} height={"200px"} />
                <li>{e.population}</li>
                <li>{e.flag}</li>
                <li>{e.subregion}</li>
                <li>{e.area}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </Main>
  );
};

export default Call;
