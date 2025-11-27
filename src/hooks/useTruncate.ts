import  { type RefObject, useEffect, useState } from "react";

export const useTruncate = (ref: RefObject<HTMLParagraphElement | HTMLDivElement | null>) => {
    console.log('entered/////////////');
    const element = ref?.current;
    const clientWidth = element?.clientWidth;
    const scrollWidth = element?.scrollWidth;
    const [isTruncated, setIsTruncated] = useState(false);

    useEffect(() => {
        console.log(element, clientWidth, scrollWidth, '/////////////');
        setIsTruncated(scrollWidth > clientWidth);
    }, [ref.current]);

    return {
        isTruncated: isTruncated
    };
}

// import { MutableRefObject, useEffect, useState } from "react";

// export default function useTruncate(ref: MutableRefObject<HTMLElement | null>) {
// 	const [isTruncated, setIsTruncated] = useState(false);
// 	const calcIsTruncated = (entry?: ResizeObserverEntry) => {
// 		const element = entry?.target || ref.current;
// 		if (element) {
// 			const truncated = element.scrollWidth > element.clientWidth || element.scrollHeight > element.clientHeight;
// 			setIsTruncated(truncated);
// 		}
// 	};

// 	useEffect(() => {
// 		if (ref.current) {
// 			calcIsTruncated();
// 			// Defer DOM reads/writes to the next animation frame to avoid ResizeObserver
// 			// loop warnings when the callback triggers layout changes.
// 			const observer = new ResizeObserver(([entry]) => requestAnimationFrame(() => calcIsTruncated(entry)));
// 			observer.observe(ref.current);
// 			return () => {
// 				observer.disconnect();
// 			};
// 		}
// 	}, [ref.current]);
// 	return {
// 		isTruncated
// 	}
// }