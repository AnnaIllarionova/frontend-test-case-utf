import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { mockProducts } from "../const/mockProducts";
import { setLoading, setProducts } from "../store/slice";

export const useProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));

    const timer = setTimeout(() => {
      dispatch(setProducts(mockProducts));
      dispatch(setLoading(false));
    }, 1000);

    return () => clearTimeout(timer);
  }, [dispatch]);
};
