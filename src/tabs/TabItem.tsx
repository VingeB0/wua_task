import React from "react";

export type TabItemProps = {
    text: string,
    onClick: () => void,
    active: boolean,
}

const decorLine: string = 'relative after:content after:w-full after:h-0.5 after:bg-white after:absolute after:-bottom-0.5 after:right-0 after:left-0';
const animation: string = 'transition-opacity duration-300 ease-linear hover:opacity-60';

export const TabItem = ({text, onClick, active, ...props}: TabItemProps) => {
    return (
        <li {...props}>
            <button
                className={`h-full py-2 px-7 border-x border-t border-solid border-gray ${active ? `bg-white cursor-auto ${decorLine}` : `bg-gray ${animation}`}`}
                onClick={onClick}
                type="button"
            >
                {text}
                <a href="#" className={`ml-2 underline text-red-600 hover:no-underline ${!active && 'pointer-events-none'}`}>link</a>
            </button>

        </li>
    );
}