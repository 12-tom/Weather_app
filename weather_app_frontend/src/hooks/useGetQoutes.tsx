import { useState, useEffect } from 'react';
import axios from 'axios';
import { Quote } from '../types/types';

export const useGetQuotes = () => {
    const [quote, setQuote] = useState<Quote | null>();
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>();

    useEffect(() => {
        const getQuotes = async (url: string) => {
            try {
                const response = await axios.get(url);
                setQuote(response.data);
            } catch (error) {
                setError('Error fetching data');
            } finally {
                setLoading(false)
            }
        };

        let interval = setInterval(() => {
            getQuotes("https://dummyjson.com/quotes/random");
        }, 10000);
        return () => {
            clearInterval(interval)
        }
        
    }, [])

    return {quote, loading, error}
}

