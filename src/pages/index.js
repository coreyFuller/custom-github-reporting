import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import axios from 'axios'
import MainScreen from '../components/MainScreen'
import Login from '../components/Login'
import React, { useEffect } from 'react'




export default function Home() {

  const [loggedIn, setLoggedIn] = React.useState(false)
  const [repoData, setRepoData] = React.useState([])
  const [language, setLanguage] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [mostRecent, setMostRecent] = React.useState([])
  const [topRepos, setTopRepos] = React.useState([])
  const [repoDate, setRepoDate] = React.useState({})
  const [pullAll, setPullAll] = React.useState(false)
  
 
  useEffect(()=>
  { 
    if(repoData.length == 0) return
    const lang_dict = {}
    const langs = repoData.map(repo => repo.language)
    langs.map(lang => lang_dict[lang] = (lang_dict[lang] || 0)+1)
    repoData.forEach(repo => repo.pushed_at = new Date(String(repo.pushed_at).split("T")[0]))
    const lang = (Object.keys(lang_dict).reduce(function(a, b){ return lang_dict[a] > lang_dict[b] ? a : b }))
    setLanguage(lang)
    repoData.sort((a,b) => b.pushed_at - a.pushed_at)
    const most_recent = repoData.slice(0, Math.floor(repoData.length/3))
    setMostRecent(mostRecent)
    const starred_repo = repoData.filter(repo => repo.stargazers_count > 0)
    starred_repo.sort((a, b) => b.stargazers_count - a.stargazers_count)
    const top_reps = starred_repo.slice(0, Math.floor(starred_repo.length/3))
    setTopRepos(top_reps)
    setPullAll(true)
  }
  ,[repoData])

  return (
    <div className={styles.container}>

      {!loggedIn ? 
      <div>
      <Head>
        <title>Github Reporting</title>
        <link rel="icon" href="/Github-Mark-32px.png" />
      </Head>
      <Login name={setUsername} logged={setLoggedIn} repo={setRepoData}/>
      </div>
      :
      <div>
      {pullAll && <MainScreen recent={mostRecent} top={topRepos} lang={language}/>}
      </div>
      }
      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main> */}

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
