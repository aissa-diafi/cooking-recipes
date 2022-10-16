import { useEffect, useRef, useState, useMemo } from "react";
import { projectFirestore } from "../firebase/config";

export const useCollection = (collection, _query, _orderBy) => {
  const [documents, setDocuments] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  // we use useMemo instead of useRef to track the change in the query's 3rd element
  // useRef handle _query as the same value even the string (3rd element) has changed
  const query = useMemo(() => _query, [_query[2]]);

  // if we don't use a ref --> infinite loop in useEffect
  // _query is an array and is "different" on every function call

  const orderBy = useRef(_orderBy).current;

  useEffect(() => {
    setIsPending(true);

    let ref = projectFirestore.collection(collection);

    if (query) {
      ref = ref.where(...query);
    }
    if (orderBy) {
      ref = ref.orderBy(...orderBy);
    }

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        // update state
        setDocuments(results);
        setIsPending(false);
        setError(null);
      },
      (error) => {
        console.log(error);
        setIsPending(false);
        setError("could not fetch the data");
      }
    );

    // unsubscribe on unmount
    return () => unsubscribe();
  }, [collection, query, orderBy]);

  return { documents, error, isPending };
};
