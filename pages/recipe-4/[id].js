import { useRouter } from 'next/router';
import useSWR from 'swr';
import styles from './styles/about.module.css';

const fetcher = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    return json;
};

export default function About({ id }) {
    const router = useRouter();
    const { query } = router;

    const url = `https://www.omdbapi.com/?apikey=de1cc0e1&i=${query.id}`;
    const { data, error } = useSWR(url, fetcher);

    if (error) {
        return <div>Error loading content...</div>;
    } 
    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{data.Title}</h1>
            <img src={data.Poster} alt={data.Title} className={styles.poster} />
            <div className={styles.content}>
                <p>{data.Plot}</p>
                <p>Year: {data.Year}</p>
                <p>Director: {data.Director}</p>
            </div>
        </div>
    );
}