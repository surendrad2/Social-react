import React, { useContext } from "react";
import { useFetch } from "../../useFetch";
import Postitems from "./Postitems";
import "./Post.css"
import { AppContext } from "../../context/appContext";
export default function Post() {
  const {user} = useContext(AppContext)
  const url = `https://jsonplaceholder.typicode.com/posts/?userId=${user.email}`;
  const [data] = useFetch(url);
  return (
    <div>
      <h1>News Feeds</h1>
      <div className="Post-container">
        {data &&
          data.map((elem) => (
            <div key={elem.id}>
              <Postitems item={elem} />
              <hr></hr>
            </div>
           
          ))}
      </div>
    </div>
  );
}

