import { useEffect, useState } from "react";

export const useFech = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null
    });

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const getFetch = async () => {
            if (!url) {
                setState({
                    data: null,
                    isLoading: false,
                    error: new Error('No se proporcionó una URL')
                });
                return;
            }

            try {
                const response = await fetch(url, { signal });
                
                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`);
                }

                const data = await response.json();
                setState({ 
                    data, 
                    isLoading: false, 
                    error: null 
                });
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setState({ 
                        data: null, 
                        isLoading: false, 
                        error: error.message 
                    });
                }
            }
        };

        getFetch();

        return () => {
            controller.abort();
        };
    }, [url]);  

    return {
        data: state.data,
        isLoading: state.isLoading,
        error: state.error
    };
};