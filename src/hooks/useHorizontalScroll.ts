import { useRef, useState } from "react";

interface IHorizontalScroll {
    elementRef: any;
    handleHorizantalScroll: (element: HTMLElement, speed: number, distance: number, step: number) => void;
    arrowDisable: boolean;
    setArrowDisable: React.Dispatch<React.SetStateAction<boolean>>;
    handleScrollToStart: () => void;
    handleScrollToEnd: () => void;
  }
  
  export const useHorizontalScroll = (): IHorizontalScroll => {
    const elementRef = useRef<HTMLElement>(null);
    const [arrowDisable, setArrowDisable] = useState(true);
  
    const handleHorizantalScroll = (element: HTMLElement, speed: number, distance: number, step: number) => {
      let scrollAmount = 0;
      const slideTimer = setInterval(() => {
        element.scrollLeft += step;
        scrollAmount += Math.abs(step);
        if (scrollAmount >= distance) {
          clearInterval(slideTimer);
        }
        if (element.scrollLeft === 0) {
          setArrowDisable(true);
        } else {
          setArrowDisable(false);
        }
      }, speed);
    };
  
    const handleScrollToStart = () => {
      if (elementRef.current) {
        elementRef.current.scrollLeft = 0;
        setArrowDisable(true);
      }
    };
  
    const handleScrollToEnd = () => {
      const element = elementRef.current;
      if (element) {
        const maxScrollLeft = element.scrollWidth - element.clientWidth;
        element.scrollLeft = maxScrollLeft;
        setArrowDisable(false);
      }
    };
  
    return {
      elementRef,
      handleHorizantalScroll,
      arrowDisable,
      setArrowDisable,
      handleScrollToStart,
      handleScrollToEnd,
    };
  };