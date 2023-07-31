import "./App.css";
import { useState } from "react";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

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

function Create({ onCreate }) {
  return (
    <article>
      <h2>create</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // page reload 없애기
          const title = e.target.title.value; // e.target : 이벤트가 발생한 태그객체(form 태그)
          const body = e.target.body.value;
          onCreate(title, body);
        }}
      >
        <p>
          <input type="text" name="title" placeholder="write down title" />
        </p>
        <p>
          <textarea name="body" placeholder="body"></textarea>
        </p>
        <p>
          <input type="submit" value="finish"></input>
        </p>
      </form>
    </article>
  );
}

function Update({ title, body, onEdit }) {
  const [content, setContent] = useState(body);
  const [title_, setTitle_] = useState(title);
  return (
    <article>
      <h2>update</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // page reload 없애기
          const title = e.target.title.value; // e.target : 이벤트가 발생한 태그객체(form 태그)
          const body = e.target.body.value;
          onEdit(title, body);
        }}
      >
        <p>
          <input
            type="text"
            name="title"
            value={title_}
            onChange={(e) => {
              setTitle_(e.target.value);
            }}
          />
        </p>
        <p>
          <textarea
            name="body"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></textarea>
        </p>
        <p>
          <input type="submit" value="update"></input>
        </p>
      </form>
    </article>
  );
}

function App() {
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  const [objId, setObjId] = useState(4);
  const [isCreate, setIsCreate] = useState("False");
  const [topics, setTopics] = useState([
    { id: 1, title: "HTML", body: "html is ...." },
    { id: 2, title: "CSS", body: "css is ...." },
    { id: 3, title: "JavaScript", body: "js is ...." },
  ]);

  let content = null;
  let contextControl = null;

  if (mode === "WELCOME") {
    content = (
      <Article title="Welcome" body="this is web. tell me what you want!" />
    );
  } else if (mode === "READ") {
    let currTopic = topics.filter((it) => it.id === id);
    content = <Article title={currTopic[0].title} body={currTopic[0].body} />;
    contextControl = (
      <>
        <li>
          <a
            href={`/update/${id}`}
            onClick={(e) => {
              e.preventDefault();
              setMode("UPDATE");
            }}
          >
            update
          </a>
        </li>
        <p></p>
        <button
          onClick={() => {
            const newTopics = topics.filter((it) => it.id !== id);
            setTopics(newTopics);
            setMode("WELCOME");
          }}
        >
          delete
        </button>
      </>
    );
  } else if (mode === "CREATE") {
    content = (
      <Create
        onCreate={(title, body) => {
          const newTopic = { id: objId, title, body };
          setTopics([...topics, newTopic]);
          // 생성 후
          setMode("READ");
          setId(objId);
          setObjId(objId + 1);
          setIsCreate("False");
        }}
      ></Create>
    );
  } else if (mode === "UPDATE") {
    let currTopic = topics.filter((it) => it.id === id);
    content = (
      <Update
        title={currTopic[0].title}
        body={currTopic[0].body}
        onEdit={(title, body) => {
          // 수정된 콘텐츠
          const targetTopic = { id: id, title: title, body: body };

          let newTopics = topics.map((it) => (it.id === id ? targetTopic : it));
          setTopics(newTopics);
          setMode("READ");
        }}
      ></Update>
    );
  }

  return (
    <div className="App">
      <Header
        title="MY WEB"
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
      <div>
        <ul>
          {isCreate === "False" ? (
            <li>
              <a
                href="/create"
                onClick={(e) => {
                  e.preventDefault();
                  setIsCreate("True");
                  setMode("CREATE");
                }}
              >
                create
              </a>
            </li>
          ) : (
            ""
          )}
          {contextControl}
        </ul>
      </div>
    </div>
  );
}

export default App;
