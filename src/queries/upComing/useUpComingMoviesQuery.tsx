import { useQuery } from '@tanstack/react-query';
import api from '../../utils/api';

const fetchUpComingMovies = () => {
    return api
        .get(`/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.data); // 'res.data'를 반환하여 data를 바로 사용할 수 있게
};

export const useUpComingMoviesQuery = () => {
    return useQuery({
        queryKey: ['movie-upcoming'],
        queryFn: fetchUpComingMovies,
    });
};
