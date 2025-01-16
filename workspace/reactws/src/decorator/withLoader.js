import { useEffect, useState } from "react"

// HOC, decorator
export default function withLoader(Component, url) {
    return props => {
        const [data, setData] = useState(null);

        useEffect(() => {
            fetch(url)
                .then(response => response.json())
                .then(data => setData(data));
        }, []);

        if(!data) {
            return <div> Loading....</div>
        }
        return <Component
            {...props}
            data ={data} />
    }
}