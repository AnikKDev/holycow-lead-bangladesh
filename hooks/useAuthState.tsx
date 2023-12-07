import { useAppSelector } from '@/redux/hooks'
import { selectAuthUser } from '@/redux/slices/authSlice/authSlice'

export const useAuthState = () => {
	const auth = useAppSelector(selectAuthUser)
	return { auth }
}
