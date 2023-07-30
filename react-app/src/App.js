import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

// component : 사용자 정의 태그
function Header({ title, onChangeMode }) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onChangeMode();
          }}
        >
          {title}
        </a>
      </h1>
    </header>
  );
}

function Navigation({ topics, onChangeMode }) {
  let lis = [];
  for (let i = 0; i < topics.length; i++) {
    let t = topics[i];
    lis.push(
      <li key={t.id}>
        <a
          id={t.id}
          name={t.title}
          href={`/read/${t.id}`}
          onClick={(e) => {
            e.preventDefault();
            onChangeMode(parseInt(e.target.id));
          }}
        >
          {t.title}
        </a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

function Article({ title, body }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{body}</p>
    </article>
  );
}

function App() {
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);

  const topics = [
    { id: 1, title: "HTML", body: "html is ...." },
    { id: 2, title: "CSS", body: "css is ...." },
    { id: 3, title: "JavaScript", body: "js is ...." },
  ];

  let content = null;
  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="this is web." />;
  } else if (mode === "READ") {
    let currTopic = topics.filter((it) => it.id === id);
    content = <Article title={currTopic[0].title} body={currTopic[0].body} />;
  }

  return (
    <div className="App">
      <Header
        title="WEB"
        onChangeMode={() => {
          setMode("WELCOME");
        }}
      />
      <Navigation
        topics={topics}
        onChangeMode={(_id) => {
          setMode("READ");
          setId(_id);
        }}
      />
      {content}
    </div>
  );
}

export default App;
