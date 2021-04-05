import React from 'react';
import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "d5df1483-fabd-4509-9f07-cc778848b14b"
    },

});


export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    unfollow(id: number) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data
        })
    },
    follow(id: number) {
        return instance.post(`follow/${id}`, {}).then(response => {
            return response.data
        })
    },
    // getProfile(userId: number) {
    //     console.warn('Obsolete method. Please profileAPI object.')
    //     return profileAPI.getProfile(`profile/` + userId);
    //     }
}

export const profileAPI = {
    getProfile(userId: number | undefined) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId: number | undefined) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status})
    }
}


