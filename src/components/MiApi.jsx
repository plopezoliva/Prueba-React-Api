import React, { useEffect, useState } from "react";
import Search from "./Search";
import CardPerson from "./CardPerson";



const MiApi = () => {

  // const [buscarItem,setBuscarItem]= useState('');
 
  let [search, setSearch] = useState("");

  return (
    <div className="container">

  <Search setSearch={setSearch}  />
  <CardPerson search={search}/>
    </div>
    //   <Search setBuscarItem={setBuscarItem}/>
    //    buscarItem={buscarItem}/>
    // 
  )
}

export default MiApi


