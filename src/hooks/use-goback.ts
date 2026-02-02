import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function useGoBack() {
    const navigate = useNavigate();
    const { data: previous_url_string } = useQuery({
        queryKey: ["get_previous_path"],
        queryFn: () => {
            return localStorage.getItem("preview_url_string");
        },
    });
    function handleBack() {
        if (!previous_url_string || previous_url_string === "") {
            navigate("/");
        } else {
            navigate("/", { state: { url_string: previous_url_string } });
        }
    }
    return {
        handleBack, previous_url_string
    };
}