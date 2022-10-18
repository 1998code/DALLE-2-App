import Head from "next/head";
import { useState } from "react";

import styles from "../styles/Home.module.css";

import axios from "axios";

export default function Home() {
  const [token, setToken] = useState("");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function getDalle2() {
    if (token != "" && query != "") {
      setError(false);
      setLoading(true);
      axios
        .post(`/api/dalle2?k=${token}&q=${query}`)
        .then((res) => {
          setResults(res.data.result);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(true);
        });
    } else {
      setError(true);
    }
  }

  const [type, setType] = useState("webp");

  function download(url) {
    axios
      .post(`/api/download`, { url: url, type: type })
      .then((res) => {
        const link = document.createElement("a");
        link.href = res.data.result;
        link.download = `${query}.${type.toLowerCase()}`;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create DALLE 2 App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Create images with <span className={styles.titleColor}>DALLE 2</span>
        </h1>
        <p className={styles.description}>
          <input
            id="token"
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Bearer Token"
          />
          <input
            id="query"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Query"
          />
          {"  "}
          <button onClick={getDalle2}>Get 4 Images</button>
        </p>
        <small>
          Download as:{" "}
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="webp">Webp</option>
            <option value="png">Png</option>
            <option value="jpg">Jpg</option>
            <option value="gif">Gif</option>
            <option value="avif">Avif</option>
          </select>
          {" "}
          Click the image below and save.
        </small>
        {error ? ( <div className={styles.error}>Something went wrong. Try again.</div> ) : ( <></> )}
        {loading && <p>Loading...</p>}
        <div className={styles.grid}>
          {results.map((result) => {
            return (
              <div className={styles.card}>
                <img
                  className={styles.imgPreview}
                  src={result.generation.image_path}
                  onClick={() => download(result.generation.image_path)}
                />
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
