import axios from "axios"

export const usersAPI = {
    setUserProfile: (user_id: string) => {
        return axios.get('http://localhost:6425/users/profile').then(response => response.data)
    }
}