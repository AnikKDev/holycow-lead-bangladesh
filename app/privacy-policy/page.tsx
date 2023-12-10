import Head from 'next/head'
import { FaCheckCircle } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import SectionContents from '@/components/privacy-policy/section-contents'
import SectionTitle from '@/components/privacy-policy/section-title'

const PrivacyPolicy = () => {
	return (
		<div className='min-h-screen'>
			<Head>
				<title>Privacy Policy - Holycow Fine Indian Restaurant</title>
			</Head>
			<header className='privacy-policy__header flex h-80 items-center justify-center bg-[#332d21] bg-cover bg-center bg-no-repeat py-4 text-center text-white bg-blend-overlay'>
				<h1 className='text-5xl font-bold text-primary'>
					Privacy & Cookies Policy
				</h1>
			</header>

			<div className='mx-auto mt-8 max-w-6xl rounded-lg p-6'>
				{/* Privacy Policy Sections */}
				<SectionContents
					para='At Holycow Fine Indian Restaurant, accessible from https://holycowonline.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Holycow Fine Indian Restaurant (hereafter also referred as Holycow) and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.

'
				/>
				<section className='mb-6'>
					<SectionTitle title='General Data Protection Regulation (GDPR)' />
					<SectionContents
						para='We are a Data Controller of your information. Holycow legal
								basis for collecting and using the personal information
								described in this Privacy Policy depends on the Personal
								Information we collect and the specific context in which we
								collect the information:'
					/>
					<ul className='my-3 text-lg leading-8 text-gray-500'>
						<li className='flex items-center'>
							<span className='me-2 text-primary'>
								<FaCheckCircle />
							</span>
							Holycow needs to perform a contract with you
						</li>
						<li className='flex items-center'>
							<span className='me-2 text-primary'>
								<FaCheckCircle />
							</span>
							You have given Holycow permission to do so
						</li>
						<li className='flex items-center'>
							<span className='me-2 text-primary'>
								<FaCheckCircle />
							</span>
							Processing your personal information is in Holycow's legitimate
							interests
						</li>
						<li className='flex items-center'>
							<span className='me-2 text-primary'>
								<FaCheckCircle />
							</span>
							Holycow needs to comply with the law
						</li>
					</ul>
					<SectionContents para='Holycow will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies. If you are a resident of the European Economic Area (EEA), you have certain data protection rights. If you wish to be informed what Personal Information we hold about you and if you want it to be removed from our systems, please contact us. In certain circumstances, you have the following data protection rights:' />
					<ul className='mt-3 text-lg leading-8 text-gray-500'>
						<li className='flex items-center'>
							<span className='me-2 text-primary'>
								<FaCheckCircle />
							</span>
							The right to access, update or to delete the information we have
							on you.
						</li>
						<li className='flex items-center'>
							<span className='me-2 text-primary'>
								<FaCheckCircle />
							</span>
							The right of rectification.
						</li>
						<li className='flex items-center'>
							<span className='me-2 text-primary'>
								<FaCheckCircle />
							</span>
							The right to object.
						</li>
						<li className='flex items-center'>
							<span className='me-2 text-primary'>
								<FaCheckCircle />
							</span>
							The right of restriction.
						</li>
						<li className='flex items-center'>
							<span className='me-2 text-primary'>
								<FaCheckCircle />
							</span>
							The right to data portability
						</li>
						<li className='flex items-center'>
							<span className='me-2 text-primary'>
								<FaCheckCircle />
							</span>
							The right to withdraw consent
						</li>
					</ul>
					<SectionContents para='We collect several different types of information for various purposes to provide and improve our Service to you.' />
				</section>
				<section>
					<SectionTitle title='Personal Data' />
					<SectionContents para='While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (“Personal Data”). Personally identifiable information may include, but is not limited to: Email address Phone Number First name and last name Cookies and Usage Data' />
				</section>
				<section>
					<SectionTitle title='Usage Data' />
					<SectionContents para='We may also collect information how the Service is accessed and used (“Usage Data”). This Usage Data may include information such as your computer’s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.' />
				</section>
				<section>
					<SectionTitle title='Tracking & Cookies Data' />
					<SectionContents para='We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.' />
				</section>
				<section>
					<SectionTitle title='Examples of Cookies we use:' />
					<SectionContents para='Session Cookies. We use Session Cookies to operate our Service. Preference Cookies. We use Preference Cookies to remember your preferences and various settings. Security Cookies. We use Security Cookies for security purposes.' />
				</section>
				<section>
					<SectionTitle title='Use of Data' />
					<SectionContents para='Holycow uses the collected data for various purposes: To provide and maintain the Service To notify you about changes to our Service To allow you to participate in interactive features of our Service when you choose to do so To provide customer care and support To provide analysis or valuable information so that we can improve the Service To monitor the usage of the Service To detect, prevent and address technical issues' />
				</section>
				<section>
					<SectionTitle title='Transfer of Data' />
					<SectionContents para='Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction. If you are located outside the United Kingdom and choose to provide information to us, please note that we transfer the data, including Personal Data, to the United Kingdom and process it there. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer. Holycow will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.' />
				</section>
				<section>
					<SectionTitle title='Disclosure of Data Legal Requirement' />
					<SectionContents para='Holycow may disclose your Personal Data in the good faith belief that such action is necessary to: To comply with a legal obligation To protect and defend the rights or property of Holycow To prevent or investigate possible wrongdoing in connection with the Service To protect the personal safety of users of the Service or the public To protect against legal liability.' />
				</section>
				<section>
					<SectionTitle title='Security of Data' />
					<SectionContents para='The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security. Service Providers We may employ third-party companies and individuals to facilitate our Service (“Service Providers”), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.' />
				</section>
				<section>
					<SectionTitle title='Analytics' />
					<p className='text-lg leading-8 text-gray-500'>
						We may use third-party Service Providers to monitor and analyze the
						use of our Service. Google Analytics is a web analytics service
						offered by Google that tracks and reports website traffic. Google
						uses the data collected to track and monitor the use of our Service.
						This data is shared with other Google services. Google may use the
						collected data to contextualize and personalize the ads of its own
						advertising network. You can opt-out of having made your activity on
						the Service available to Google Analytics by installing the Google
						Analytics opt-out browser add-on. The add-on prevents the Google
						Analytics JavaScript (ga.js, analytics.js, and dc.js) from sharing
						information with Google Analytics about visits activity. For more
						information on the privacy practices of Google, please visit the
						Google Privacy & Terms web page:{' '}
						<a
							className='text-primary'
							href='https://policies.google.com/privacy?hl=en'
						>
							Google's terms and privacy policy
						</a>
					</p>
				</section>
				<section>
					<SectionTitle title='Links to Other Sites' />
					<SectionContents para='Our Service may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.' />
				</section>
				<section>
					<SectionTitle title='Children’s Information' />
					<SectionContents para='Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. HolyCow does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately, and we will do our best efforts to promptly remove such information from our records.' />
				</section>
				<section>
					<SectionTitle title='Online Privacy Policy Only' />
					<SectionContents para='Our Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Holycow. This policy is not applicable to any information collected offline or via channels other than this website.' />
				</section>
				<section>
					<SectionTitle title='Consent' />
					<SectionContents para='By using our website, you hereby consent to our Privacy Policy and agree to its terms.' />
				</section>

				<section>
					<SectionTitle title='Contact' />
					<p className='text-lg leading-8 text-gray-500'>
						If you have any questions about this Privacy Policy, please contact
						us: By email:{' '}
						<span className='flex items-center'>
							<MdEmail className='me-2 text-xl text-primary' />
							info@holycowonline.com
						</span>{' '}
						Document updated date: November 27, 2019
					</p>
				</section>
			</div>
		</div>
	)
}

export default PrivacyPolicy
