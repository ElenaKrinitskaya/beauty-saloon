import jwtDecode from 'jwt-decode'
import {TOKEN_KEY} from '../constatnts'

class TokenService {
    setToken(token: string) {
        localStorage.setItem(TOKEN_KEY, token)
    }

    getToken() {
        return localStorage.getItem(TOKEN_KEY)
    }

    removeToken() {
        localStorage.removeItem(TOKEN_KEY)
    }

    isTokenValid(): boolean {
        const token = this.getToken()
        if (!token) {
            return false
        }
        const decodedToken: any = jwtDecode(token)
        return tokenValid(decodedToken)
    }

}

function tokenValid(token: any = {}) {
    const now = Date.now() / 1000
    return token.exp > now
}

export default new TokenService()