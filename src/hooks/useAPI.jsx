import { useEffect, useState } from 'react';

export function useAPI(callback, param) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getData() {
            try {
                setLoading(true);
                setError(false);
                setData(await callback(param));
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        getData();
    }, [callback, param]);
    return [data, setData, { loading, error }];
}
