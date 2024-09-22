import axios from "axios"

const baseURL = 'http://localhost:6425/'

export const authAPI = {
    verifyAuth: async () => {
        try {
            const response = await axios.get(`${baseURL}auth/verify`, { withCredentials: true })
            return {
                statusCode: response.status,
                data: response.data
            }
        } catch (error: any) {
            return {
                statusCode: error.response.status,
                message: error.response.data.message,
                error: error.response.data.error
            }
        }
    },

    signIn: async (email: string, password: string) => {
        const body = { email, password }
        try {
            const response = await axios.post(`${baseURL}auth/sign-in`, body, { withCredentials: true })
            return {
                statusCode: response.status,
                data: response.data
            }
        } catch (error: any) {
            return {
                statusCode: error.response.status,
                message: error.response.data.message,
                error: error.response.data.error
            }
        }
    }
}

export const usersAPI = {
    setProfile: async (user_id: string) => {
        return await axios.get(`${baseURL}users/profile`, { withCredentials: true }).then(response => response.data)
    }
}