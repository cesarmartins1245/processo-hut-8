import Api from './api'

export const getUser = () => Api.get('/user')
export const getCourses = () => Api.get('/courses')
export const getCourseID = () => Api.get('/courses/:id')