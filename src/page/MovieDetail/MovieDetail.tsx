import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Define the Movie interface
interface Movie {
    id: number;
    title: string;
    imageUrl: string;
    year: number;
    rating: number;
    description: string;
}

const MovieDetail = () => {
    const { movieId } = useParams<{ movieId: string }>();
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const fetchedMovie: Movie = {
                id: parseInt(movieId || '0'),
                title: '진행전',
                imageUrl:
                    'https://image.tmdb.org/t/p/w500/your_image_path_here.jpg',
                year: 2010,
                rating: 8.8,
                description:
                    'A mind-bending thriller about dreams and reality.',
            };
            setMovie(fetchedMovie);
        };

        fetchMovieDetails();
    }, [movieId]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4 mt-16 max-w-[1024px]">
            <div className="flex flex-col items-center">
                <img
                    src={movie.imageUrl}
                    alt={movie.title}
                    className="w-80 h-auto object-cover"
                />
                <h2 className="text-3xl font-bold mt-4">{movie.title}</h2>
                <p className="text-lg text-gray-700">
                    Release Year: {movie.year}
                </p>
                <p className="text-lg text-gray-700">
                    Rating: {movie.rating}/10
                </p>
                <p className="mt-4 text-lg">{movie.description}</p>
            </div>
        </div>
    );
};

export default MovieDetail;
