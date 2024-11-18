import { useRouteError } from "react-router-dom"

export default function Error() {
    const error = useRouteError();

    console.log(error);

    return (
        <div className="text-xl text-primary">
            <p><span className="font-bold">Error Status</span> - {error.status}</p>
            <p><span className="font-bold">Error Status text</span> - {error.statusText}</p>
        </div>
    )
}
