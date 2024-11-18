import React from 'react'
import { useState } from 'react';
import SearchBar from "./SearchBar";
import DropDownList from "./DropDownList";
import CountryCardContainer from "./CountryCardContainer";

export default function Home() {
    const [filterRegion, setFilterRegion] = useState("");
    const [searchName, setSearchName] = useState("");

    return (
        <main className='flex-grow dark:bg-dark-secondary'>
            <div className="mx-auto max-w-screen-2xl p-8 sm:p-10 lg:px-16">
                <section className="mb-8 flex flex-col items-start gap-6 sm:flex-row sm:justify-between">
                    <SearchBar setSearchName={setSearchName} />
                    <DropDownList filterRegion={filterRegion} setFilterRegion={setFilterRegion} />
                </section>
                <CountryCardContainer filterRegion={filterRegion} searchName={searchName} />
            </div>
        </main>
    )
}
