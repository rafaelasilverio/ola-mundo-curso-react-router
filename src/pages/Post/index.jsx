import "./Post.css";
import styles from "./Post.module.css";
import PostModel from "src/components/PostModel";
import { Routes, Route, useParams } from "react-router";
import posts from "src/json/posts.json";
import ReactMarkdown from "react-markdown";
import NotFound from "src/components/NotFound";
import DefaultPage from "src/components/DefaultPage";
import PostCard from "src/components/PostCard";

const Post = () => {
  const params = useParams();

  const post = posts.find((post) => {
    return post.id === Number(params.id);
  });

  if (!post) {
    return <NotFound />;
  }

  const postsRecomendados = posts
    .filter((post) => post.id !== Number(params.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  return (
    <Routes>
      <Route path="*" element={<DefaultPage />}>
        <Route
          index
          element={
            <PostModel
              fotoCapa={`/assets/posts/${post.id}/capa.png`}
              titulo={post.titulo}
            >
              <div className="post-markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>

              <h2 className={styles.tituloOutrosPosts}>
                Outros posts que você pode gostar:
              </h2>

              <ul className={styles.postsRecomendados}>
                {postsRecomendados.map((post) => (
                  <li key={post.id}>
                    <PostCard post={post}/>
                  </li>
                ))}
              </ul>
            </PostModel>
          }
        />
      </Route>
    </Routes>
  );
};

export default Post;
