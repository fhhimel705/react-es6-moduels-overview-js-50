import { useState } from "react";
import "./Watch.css";
import { useEffect } from "react";
const Watch = () => {
  const [watches, setWatches] = useState([]);
  useEffect(() => {
    fetch("watches.json")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);
  return (
    <div>
      <h2>Watch</h2>
      <ul>
        {watches.map((watch) => (
          <li key={watch.id}> name :{watch.brand}</li>
        ))}
      </ul>
    </div>
  );
};

export default Watch;
