import styles from './Home.module.css';
import posts from 'src/json/posts.json'
import Post from 'src/components/Post';

const Home = () => {
    return (

            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Post post={post}/>
                    </li>
                ))}
            </ul>

    );
}
export default Home;