import { useCallback, useState } from "react";
import { useEffect } from "react";
import { UseScrollHooksProps } from "./index";

const useScrollHooks = ({ receivedRef }: UseScrollHooksProps) => {
  const node = receivedRef;

  const [isShow, setIsShow] = useState<boolean>();

  const callBackFunction = useCallback(([entry]) => {
    const { current } = node;
    if (entry.isIntersecting) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callBackFunction);
    if (node.current) observer.observe(node.current);

    return () => {
      if (node.current) observer.unobserve(node.current);
    };
  }, []);

  return { isShow };
};

export default useScrollHooks;