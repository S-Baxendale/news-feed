import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

function useAsyncEffect(effect, dependencies) {
  return useEffect(() => {
    const cleanupPromise = effect();
    return () => {
      cleanupPromise.then(cleanup => cleanup && cleanup());
    };
  }, dependencies);
}

export const useFetch = (url, action) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setResponse(json);
      setLoading(false);
    };
    fetchData();
  }, []);
  dispatch(action(response));
  return { response, loading };
};

export const useFetchTopStories = (url, action) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useAsyncEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    setLoading(false);
    dispatch(action(data));
  }, []);
  return { data, loading };
};
