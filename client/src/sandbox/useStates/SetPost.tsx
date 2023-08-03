// import UseState from "./UseState";
import React, { useState, MouseEvent } from "react";
import Button from "@mui/material/Button";
// import Table from "@mui/material/Table";

interface Posts {
  createdAt: string | Date;
  author: string;
  title: string;
  subtitle: string;
}

const SetPost = () => {
  const [isLogged, Logged] = useState(false);
  // console.log(isLogged);
  const INITIAL_POST = {
    title: "",
    subtitle: "",
    author: "",
    createdAt: "",
  };
  const [Post, setPost] = useState(INITIAL_POST);

  const [Posts, setPosts] = useState<[] | Posts[]>([]);

  type Event = MouseEvent<HTMLButtonElement>;

  const createNewPost = (e: Event) => {
    e.preventDefault();
    setPosts((prev) => [...prev, { ...Post, createdAt: new Date() }]);
    // Post.createdAt = String(new Date());
    return setPost(INITIAL_POST);
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => Logged((prev) => !prev)}
      >
        {isLogged ? "logout" : "login"}
      </Button>

      <h1>{Post.title}</h1>
      <h2>{Post.subtitle}</h2>
      <p> {Post.author}</p>
      {isLogged && (
        <form>
          <input
            type="text"
            placeholder="title"
            onChange={(e) =>
              setPost((prev) => ({ ...prev, title: e.target.value }))
            }
            value={Post.title}
          />
          <input
            type="text"
            placeholder="subtitle"
            onChange={(e) =>
              setPost((prev) => ({ ...prev, subtitle: e.target.value }))
            }
            value={Post.subtitle}
          />
          <input
            type="text"
            placeholder="author"
            onChange={(e) =>
              setPost((prev) => ({ ...prev, author: e.target.value }))
            }
            value={Post.author}
          />
        </form>
      )}
      <Button
        variant="outlined"
        color="success"
        onClick={createNewPost}
        disabled={!Post.title || !Post.subtitle || !Post.author}
      >
        {" "}
        Create Table{" "}
      </Button>
      {Posts.length !== 0 && isLogged && (
        <table style={{ border: "1px solid black", margin: "auto" }}>
          <thead style={{ border: "1px solid black" }}>
            <tr>
              <th>No.</th>
              <th>Title&nbsp;</th>
              <th>Subtitle&nbsp;</th>
              <th>Author&nbsp;</th>
              <th>Created At&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {Posts.map((post, index) => (
              <tr
                key={index}
                style={{
                  borderRight: "1px solid black",
                  borderBottom: "1px solid black",
                }}
              >
                <td
                  style={{
                    borderRight: "1px solid black",
                    borderBottom: "1px solid black",
                  }}
                >
                  {" "}
                  {index + 1}.
                </td>
                <td
                  style={{
                    borderRight: "1px solid black",
                    borderBottom: "1px solid black",
                  }}
                >
                  {post.title}
                </td>
                <td
                  style={{
                    borderRight: "1px solid black",
                    borderBottom: "1px solid black",
                  }}
                >
                  {post.subtitle}
                </td>
                <td
                  style={{
                    borderRight: "1px solid black",
                    borderBottom: "1px solid black",
                  }}
                >
                  {post.author}
                </td>
                <td style={{ borderBottom: "1px solid black" }}>
                  {post.createdAt.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SetPost;
