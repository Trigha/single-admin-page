import axios from 'axios'

export const fetchAllMovie = () => {
    return (dispatch) => {
        axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=2fccde01a371b106b09a241d6d1d5b49&page=1', {
            headers: {
                'Content-Type': 'application/json'
            }
            .then(({ data }) => {
                dispatch(setMovie(data.data.genres))
            }
            )
            .catch(err => {
                console.log(err.response);
            })
    }
        )}

}

    export const setMovie = (payload) => {
        return {
            type: "SET_MOVIE", payload
        }
    }