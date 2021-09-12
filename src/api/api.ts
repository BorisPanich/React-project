import axios from 'axios';
import {ProfileType} from '../types/types';


const instance = axios.create({
	withCredentials: true,
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	headers: {
		'API-KEY': '0e95a4fa-922c-4e5c-96fa-c712f53359b8'
	}
})

export const userAPI = {

	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => {
				return response.data;
			})
	},

	following(userId: number) {
		return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
			.then(response => {
				return response.data;
			})
	},

	unFollowing(userId: number) {
		return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
			.then(response => {
				return response.data;
			})
	}
}

export const profileAPI = {
	getUserProfile(userID: number) {
		return instance.get(`profile/${userID}`)
			.then(response => {
				return response.data;
			})
	},

	getStatus(userID: number) {
		return instance.get(`profile/status/${userID}`)
	},

	updateStatus(status: string) {
		return instance.put(`profile/status`, {status: status})
	},

	savePhoto(file: File) {
		const formData = new FormData()
		formData.append('image', file)
		return instance.put('profile/photo', formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
	},
	saveProfile(profile: ProfileType) {
		return instance.put(`profile`, profile).then(res => res.data);
	}
}

export const authAPI = {
	getAuthMe() {
		return instance.get('auth/me')
			.then(response => {
				return response.data;
			})
	},
	login(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
		return instance.post('auth/login', {email, password, rememberMe, captcha})
			.then(response => {
				return response.data;
			})
	},
	logout() {
		return instance.delete('auth/login')
			.then(response => {
				return response.data;
			})
	}
}

type GetCaptchaUrlResponseType = {
	url: string
}

export const securityAPI = {
	getCaptchaUrl() {
		return instance.get<GetCaptchaUrlResponseType>(`security/get-captcha-url`).then(res => res.data);
	}
}