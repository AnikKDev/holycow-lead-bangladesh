import ProfileContainer from '@/components/account/profile/profile-container'

type Props = {}

export default function Profile({}: Props) {
	return (
		<div className='flex flex-col gap-4'>
			<h2 className='text-xl font-medium'>Profile</h2>
			<ProfileContainer />
		</div>
	)
}
