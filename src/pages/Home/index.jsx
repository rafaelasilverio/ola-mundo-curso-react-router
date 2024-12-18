import Banner from 'src/components/Banner';
import styles from './Home.module.css';
import posts from 'src/json/posts.json'
import Post from 'src/components/Post';

const Home = () => {
    return (
        <main>
            <Banner />
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Post post={post}/>
                    </li>
                ))}
            </ul>
        </main>
    );
}
export default Home;