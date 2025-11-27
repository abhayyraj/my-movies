
import { useTruncate } from "../hooks/useTruncate";
import { useRef } from "react";

export default function Card() {
    const textRef = useRef<HTMLParagraphElement | null>(null);
    const { isTruncated } = useTruncate(textRef);

    return (<div className="card">
        <img src="/wp2073468-shutter-island-wallpapers.jpg" />
        <div className="flex flex-col gap-[12px] mb-[8px]">
            <h3>Genre</h3>
            <div className="flex flex-col gap-[20px]">
                <h2 className="text-[26px] font-semibold">Movie name</h2>
                <p ref={textRef} className={`text-nowrap ${isTruncated ? 'truncate' : ''}`}>dfsf dfsdf sdfs fsfs dfhgh fff rrgfdfgdfg</p>
            </div>
        </div>
    </div>);
}