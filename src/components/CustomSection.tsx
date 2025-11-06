import { type ReactNode } from "react";

type CustomSectionProps = {
    heading: string;
    desc: ReactNode[];
    id: string;
    className?: string;
};

export default function CustomSection(props: CustomSectionProps) {
    const { heading, desc, id, className = "" } = props;

    return (
        <section className={`description ${className}`} id={id}>
            <h3 className="text-[26px] font-semibold">{heading}</h3>
            <div>
                {desc.map(description => (<p>{description}</p>))}
            </div>
        </section>
    );
}
