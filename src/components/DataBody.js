import React, { useContext } from "react";
import "../styles/DataBody.css";
import DataAreaContext from "../utils/DataAreaContext";

const DataBody = () => {
    const context = useContext(DataAreaContext);

    function formatDate(date) {
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month = dateArray[1];
        const dayArray = dateArray[2].split("T");
        const day = dayArray[0];
        const formattedDate = [month, day, year].join("-");
        return formattedDate;
      }
    