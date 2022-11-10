import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} | Moons Law`;
    }, [title])
};

export default useTitle;