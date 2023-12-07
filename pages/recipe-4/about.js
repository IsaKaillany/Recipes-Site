import styles from "./styles/about.module.css";

export default function About2({ data, error }) {
    if (error) {
        return <div>{error}</div>;
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

export async function getServerSideProps(context) {
    const { id } = context.query;
    const url = `https://www.omdbapi.com/?apikey=de1cc0e1&i=${id}`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        return {
            props: {
                data,
            },
        };
    } catch (error) {
        return {
            props: {
                error: "Error loading content...",
            },
        };
    }
}
