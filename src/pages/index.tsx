import { useEffect, useState } from 'react'
import PostCard from '../components/postCard'
import styles from './Home.module.css'


export default function Home() {
  const [posts, setPosts] = useState([])

  async function getPosts(): Promise<any[]> {
    let res = await fetch('http://192.168.0.105:3000/api/data')
    let posts =  await res.json()
    return posts
  }
  
  function renderPost() {
    return posts?.map((post, id) => {
      return (
        <div key={post.title} >
          <PostCard title={post.title} body={post.body}/>
        </div>
      )
    })
  }

  useEffect(() => {
    getPosts().then(res => {
      setPosts(res)
    }
  )}, [])

  return (
    <div className={styles.home}>
      <h1>Posts</h1>
      {renderPost()}
    </div>
  )
  
}