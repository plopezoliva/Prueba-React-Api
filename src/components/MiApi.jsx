import React, { useEffect, useState } from "react";
import Search from "./Search";
import CardPerson from "./CardPerson";

const MiApi = () => {

   let [search, setSearch] = useState("");

  return (
    <div className="container">
  <Search setSearch={setSearch}/>
  <CardPerson search={search}/>
    </div>
     
  )
}

export default MiApi


