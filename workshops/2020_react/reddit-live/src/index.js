import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import axios from "axios";

function Hi({ name, age }) {
  return (
    <div className="greet">
      Hello <strong>{name}</strong>
      <hr />
      {age + 10}
    </div>
  );
}

function Reddit() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`).then((res) => {
      const newPosts = res.data.data.children.map((obj) => obj.data);
      setPosts(newPosts);
    });
  }, []);

  return (
    <div>
      <h1>Reddit</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={post.url}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MediaCard({ title, body, imageUrl }) {
  const [isLit, setLit] = React.useState(true);
  const [temperature, setTemperature] = React.useState(21);
  const brightness = isLit ? "lit" : "dark";
  return (
    <div>
      <h2>{title}</h2>
      <button onClick={() => setLit(!isLit)}>Licht</button>
      <button onClick={() => setLit(true)}>An</button>
      <button onClick={() => setLit(false)}>Aus</button>
      <button onClick={() => setTemperature(temperature + 1)}>+</button>
      {temperature}
      <button onClick={() => setTemperature(temperature - 1)}>-</button>
      <p className={"body " + brightness}>{body}</p>
      <img src={imageUrl} alt="SomePic" width="100%" />
      <Reddit />
    </div>
  );
}

ReactDOM.render(
  <MediaCard
    title="Rüdiger Nehberg"
    body={
      <p>
        Cooler deutscher <b>Abenteurer & Aktivist</b>, leider im April 2020
        verstorben im Arlter von 84
      </p>
    }
    imageUrl="https://www.weser-kurier.de/cms_media/module_img/5835/2917675_1_articlefancybox_doc5ufhf3p2dcjb60hfbbm.jpg"
  />,
  document.querySelector("#root")
);
