import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = title
            ? `${title} | Shaun Khang`
            : "Shaun Khang";
    }, [title]);
};

export default useTitle;