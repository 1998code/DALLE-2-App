import Head from 'next/head'
import {useState} from 'react'

import styles from '../styles/Home.module.css'

export default function Home() {
  const [token, setToken] = useState('')
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  function getDalle2() {
    setLoading(true)
    fetch(`/api/dalle2?k=${token}&q=${query}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((res) => res.json())
    .then((data) => {
      setResults(data.result)
      setLoading(false)
    })
    .catch((err) => {
      console.log(err)
      setLoading(false)
    })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create DALLE 2 App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Create a DALLE 2 App
        </h1>
        <p className={styles.description}>
          Get started with
          <code className={styles.code}>/api/dalle2</code>
          ?
          <input
            id="token"
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Token"
          />
          &
          <input
  id = "query"
  type = "text"
  value = {query} onChange = {(e) => setQuery(e.target.value)} placeholder =
      "Query" / >
      <button onClick = {getDalle2}>Get 6 Images</button>
        </p> {loading && <p>Loading...</p>}
        <div className={styles.grid}>
          {results.map((result) => {
            return (
              <div className={styles.card}>
                <img width="100%" src={result.generation.image_path} />
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
      }
