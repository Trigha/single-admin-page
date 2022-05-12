import axios from 'axios'

export const fetchAllGenre = () => {
    return (dispatch) => {
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=2fccde01a371b106b09a241d6d1d5b49', {
            headers: {
                'Content-Type': 'application/json'
            }
            .then(({ data }) => {
                // console.log(data.data);
                dispatch(setGenre(data.data.genres))
            }
            )
            .catch(err => {
                console.log(err.response);
                // localStorage.removeItem("token");
            })
    }
        )}

}

    export const setGenre = (payload) => {
        return {
            type: "SET_GENRE", payload
        }
    }