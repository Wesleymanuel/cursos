import { useQuery } from "@tanstack/react-query";
import { courses } from "../http/courses";

export function useFetchCourses() {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['getCourses'],
        queryFn: courses,
        retry: 3
    })

    return{
        data,
        isError,
        isLoading
    }
}