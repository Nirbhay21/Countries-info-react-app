import React from 'react'

export default function ShimmerEffectCard() {
    return (
        <div className="h-[360px] overflow-hidden rounded-md shadow-light-blur dark:shadow-dark-blur">
            <div className="h-48 w-full bg-slate-100 shadow-dark-blur-bottom dark:bg-slate-600"></div>
            <div className="px-5 py-6 dark:bg-slate-800">
                <div className="mb-4 mt-1.5 h-6 w-2/5 bg-slate-200 dark:bg-slate-600"></div>
                <div className="mb-3 h-4 w-3/4 bg-slate-200 dark:bg-slate-600"></div>
                <div className="mb-3 h-4 w-3/4 bg-slate-200 dark:bg-slate-600"></div>
                <div className="mb-3 h-4 w-3/4 bg-slate-200 dark:bg-slate-600"></div>
            </div>
        </div>
    )
}
