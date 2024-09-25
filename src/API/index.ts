import axios from "axios"
import { ApiResponse } from "../Interfaces/API/apiResponse"

const baseURL = 'http://localhost:6425/'

const responses = {
    errorResponse: (error: any) => {
        return {
            statusCode: error.response.status,
            message: error.response.data.message,
            error: error.response.data.error
        }
    },

    coolResponse: (response: any) => {
        return {
            statusCode: response.status,
            data: response.data
        }
    }
}

export const authAPI = {
    verifyAuth: async (): Promise<ApiResponse> => {
        try {
            const response = await axios.get(`${baseURL}auth/verify`, { withCredentials: true })
            return responses.coolResponse(response)
        } catch (error: any) {
            return responses.errorResponse(error)
        }
    },

    signIn: async (email: string, password: string): Promise<ApiResponse> => {
        const body = { email, password }
        try {
            const response = await axios.post(`${baseURL}auth/sign-in`, body, { withCredentials: true })
            return responses.coolResponse(response)
        } catch (error: any) {
            return responses.errorResponse(error)
        }
    }
}

export const usersAPI = {
    setProfile: async (user_id: string): Promise<ApiResponse> => {
        try {
            const response = await axios.get(`${baseURL}users/profile?user-id=${user_id}`, { withCredentials: true })
            return responses.coolResponse(response)
        } catch (error: any) {
            return responses.errorResponse(error)
        }
    },
}

export const subscribesAPI = {
    getSubscribeStatus: async (user_id: string): Promise<ApiResponse> => {
        try {
            const response = await axios.get(`${baseURL}subscribes/status?user-id=${user_id}`, { withCredentials: true })
            return responses.coolResponse(response)
        } catch (error: any) {
            return responses.errorResponse(error)
        }
    },

    createSubscribe: async (user_id: string): Promise<ApiResponse> => {
        try {
            const response = await axios.post(`${baseURL}subscribes/create?user-id=${user_id}`, null, { withCredentials: true })
            return responses.coolResponse(response)
        } catch (error: any) {
            return responses.errorResponse(error)
        }
    },

    deleteSubscribe: async (subscribe_id: string): Promise<ApiResponse> => {
        try {
            const response = await axios.delete(`${baseURL}subscribes/delete?sub-id=${subscribe_id}`, { withCredentials: true })
            return responses.coolResponse(response)
        } catch (error: any) {
            return responses.errorResponse(error)
        }
    },

    getSubscribes: async (user_id: string): Promise<ApiResponse> => {
        try {
            const response = await axios.get(`${baseURL}subscribes/page?user-id=${user_id}&page=1&size=5`, { withCredentials: true })
            return responses.coolResponse(response)
        } catch (error: any) {
            return responses.errorResponse(error)
        }
    }
}