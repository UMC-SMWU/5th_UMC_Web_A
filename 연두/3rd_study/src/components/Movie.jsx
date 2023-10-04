// componet만들어 export한 뒤 외부 폴더에서 사용가능
function Movie({id,poster_path,title,vote_average,overview}) {
  

    return (<>
      <div className="movie_item">
        <img className="out_image" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} title={title} />
        <div className="out_info">
          <p className="out_title">{title}</p>
          <p className="out_rate">{vote_average}</p>
        </div>

        <div className="movie_item_info">
          <div className="in_layout">
            <p className="in_title">{title}</p>
            <p className="in_overview">{overview}</p>
          </div>
        </div>
      </div>

      
      </>
    )
  }
  
  export default Movie