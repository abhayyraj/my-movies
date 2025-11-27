type DividerPropsType = {
    vertical?: boolean;
    className?: string;
};

export default function Divider(props: DividerPropsType) {
    const { vertical = false, className = '' }= props;

    return (
        <div className={`${vertical ? 'h-[100%] w-[1px]' : 'h-[1px]'} ${className}`} />
    );
};