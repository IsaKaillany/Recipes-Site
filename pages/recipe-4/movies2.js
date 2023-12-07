import useSWR from "swr";
import styles from "./styles/movies2.module.css";
import Link from "next/link";

export default function Movies2() {
    const { data, error } = useSWR(
        `https://www.omdbapi.com/?apikey=de1cc0e1&s=brasil`,
        fetcher
    );

    if (error) return <div>Request failed...</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <div>
            {data.Search.map((m) => (
                <MovieLink key={m.imdbID} movie={m} />
            ))}
        </div>
    );
}

async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

function MovieLink({ movie }) {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.moviesContainer}>
                <Link href={`/recipe-4/${movie.imdbID}`}>
                <div style={{ cursor: "pointer" }}>
                    {movie.Title} --- {movie.Year}
                </div>
                </Link>
            </div>
        </div>
    );
}
