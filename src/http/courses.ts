import axios from 'axios';

export interface Course {
    title : string
    price : number
    top1 : string
    top2 : string
    top3 : string
    url : string
} 

export const courses = async () => {
    const res = await axios.get<Course[]>('http://localhost:4000/api/courses')
    return res
} 