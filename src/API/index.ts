import axios from "axios"

export const authAPI = {
    signIn: async (email: string, password: string) => {
        const body = { email, password }
        try {
            const response = await axios.post('http://localhost:6425/auth/sign-in', body)
            return response.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.response?.data.message)
            }
        }
    }
}

export const usersAPI = {
    setUserProfile: (user_id: string) => {
        return axios.get('http://localhost:6425/users/profile').then(response => response.data)
    }
}