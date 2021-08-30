import styles from './PostCard.module.css'

interface PostCardProps {
  title: string
  body: string
}

export default function PostCard(props: PostCardProps) {
  return (
    <div className={styles.postCard}>
      <h2>{props.title}</h2>
      <p>{props.body?.slice(1, 256)}</p>
    </div>
  )
}