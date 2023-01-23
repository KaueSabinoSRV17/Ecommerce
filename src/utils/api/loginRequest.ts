import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase'
import { LoginData } from '../../pages/Login'

export async function loginRequest({email, password}: LoginData) {
        const response = await signInWithEmailAndPassword(auth, email, password)
        console.log(response)
        return response.user.displayName
}