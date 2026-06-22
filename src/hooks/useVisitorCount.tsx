import { useEffect, useState } from "react";

const useVisitorCount = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let visits = localStorage.getItem("visitor_count");

    if (!visits) {
      visits = "1";
    } else {
      visits = String(Number(visits) + 1);
    }

    localStorage.setItem("visitor_count", visits);
    setCount(Number(visits));
  }, []);

  return count;
};

export default useVisitorCount;
