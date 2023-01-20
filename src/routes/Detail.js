import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [detailmv, setDetailmv] = useState("");
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetailmv(json);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={detailmv.data.movie.medium_cover_image}></img>
          <h3> Title : {detailmv.data.movie.title}</h3>
          <h3> Genres : {detailmv.data.movie.genres[0]}</h3>
          <h3> Year : {detailmv.data.movie.year}</h3>
          <h3> Languages : {detailmv.data.movie.language}</h3>
          <h3>
            <Link to="/">Back</Link>
          </h3>
        </div>
      )}
    </div>
  );
}

export default Detail;
