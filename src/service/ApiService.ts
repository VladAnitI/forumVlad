import api from '../pages/http/index';

interface AuthResponse {
	accessToken: string;
	refreshToken: string;
	id: string;
	username: string;
}

interface ErrorResponse {
	message: string;
}

interface SuccesRegistration {
	ok: boolean;
	dto: AuthResponse;
}

interface notSuccesRegistration {
	ok: boolean;
	message: string;
}

interface Isuc {
	ok: boolean;
}

function isSucces(obj: any): obj is AuthResponse {
	return 'id' in obj && 'accessToken' in obj;
}

class ApiService {
	static async registration(
		email: string,
		password: string,
		username: string
	): Promise<SuccesRegistration | notSuccesRegistration> {
		try {
			let res = await api.post<AuthResponse | ErrorResponse>('/registration', {
				email,
				password,
				username
			});
			if (isSucces(res.data)) {
				return {
					ok: true,
					dto: res.data
				};
			} else {
				return {
					ok: false,
					message: res.data.message
				};
			}
		} catch (error) {
			throw new Error();
		}
	}

	static async login(email: string, password: string): Promise<SuccesRegistration | notSuccesRegistration> {
		try {
			let res = await api.post<AuthResponse | ErrorResponse>('/login', {
				email,
				password
			});
			if (isSucces(res.data)) {
				return {
					ok: true,
					dto: res.data
				};
			} else {
				return {
					ok: false,
					message: res.data.message
				};
			}
		} catch (error) {
			throw new Error();
		}
	}

	static async logout(): Promise<void> {
		try {
			await api.post('/logout');
		} catch (error) {
			throw new Error();
		}
	}

	static async test(): Promise<void> {
		console.log(await api.get('/test'));
	}

	static async upload(file: File): Promise<Isuc> {
		const formData = new FormData();
		formData.append('file', file);
		try {
			console.log(await api.post('/upload', formData));
			return { ok: true };
		} catch (error) {
			return { ok: false };
		}
	}
}

export default ApiService;
