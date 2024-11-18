import { useState } from "react";
import DropDownIcon from "../assets/images/DropDownIcon"

export default function DropDownList({ filterRegion, setFilterRegion }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative w-48 cursor-pointer rounded-md px-4 py-2 text-primary shadow-light-blur after:absolute after:left-0 after:block after:h-6 after:w-full after:content-[''] dark:bg-dark-primary dark:text-dark-text-primary dark:shadow-dark-blur"
            onMouseEnter={() => { setIsOpen(true); }}
            onMouseLeave={() => { setIsOpen(false); }}
            onPointerDown={() => { setIsOpen(!isOpen); }}>

            <div className="flex items-center justify-between">
                <span>Filter By Region</span>
                <DropDownIcon className={`h-3 w-3 origin-center fill-current transition-transform duration-200 ${(isOpen) && "rotate-180"}`} />
            </div>
            {
                (isOpen) && (
                    <ul className="absolute left-0 top-14 w-full bg-white px-2 py-3 shadow-light-blur dark:bg-dark-primary dark:text-dark-text-primary dark:shadow-dark-blur">
                        {
                            ["Asia", "Africa", "Europe", "North America", "South America", "Oceania"].map((region, i) => {
                                return (
                                    <li className={`cursor-pointer px-2 py-0.5 hover:bg-slate-200 dark:hover:bg-dark-secondary ${(filterRegion.toLowerCase() === region.toLowerCase()) ? "bg-slate-200 dark:bg-dark-secondary" : ""}`} onPointerDown={(event) => {
                                        event.stopPropagation();
                                        setTimeout(() => {
                                            setIsOpen(false);
                                        }, 200);

                                        setFilterRegion(region);
                                    }} key={i}>{region}</li>
                                );
                            })
                        }
                    </ul>
                )
            }
        </div >
    )
}
