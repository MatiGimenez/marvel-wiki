import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY, HASH, DATE } from "../../config";
import CharacterCard from "../molecules/CharacterCard";
import SearchArea from "../molecules/SearchArea";
import ReactPaginate from "react-paginate";
import "./Dashboard.scss";
import "./Paginator.scss";

const Dashboard = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    let mounted = true;

    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters?ts=${DATE}&apikey=${API_KEY}&hash=${HASH}`
      )
      .then((response) => {
        if (mounted) {
          console.log(response.data.data.results);
          setCharacters(response.data.data.results);
        }
      });

    return () => (mounted = false);
  }, []);

  return (
    <>
      <SearchArea />
      <div className="main-container">
        <div className="dashboard">
          {characters &&
            characters.map((character) => (
              <CharacterCard
                key={character.id}
                name={character.name}
                thumbnail={character.thumbnail}
              />
            ))}
        </div>
        <ReactPaginate
          previousLabel={"Anterior"}
          nextLabel={"Siguiente"}
          breakLabel={"..."}
          breakClassName={"dots"}
          pageCount={20}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={(data) => console.log(data)}
          containerClassName={"paginator-container"}
          pageLinkClassName={"page-buttons"}
          pageClassName={"li-page-buttons"}
          activeClassName={"active"}
          previousClassName={"li-page-buttons page-buttons prev"}
          nextClassName={"li-page-buttons page-buttons next"}
        />
      </div>
    </>
  );
};

export default Dashboard;
