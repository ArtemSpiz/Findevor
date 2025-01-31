import { useState, useEffect } from 'react'
import './Benefits.css'
import benefitsCircle from '../../../assets/benefitsCircle.png'
import rocket from '../../../assets/rocket.png'

export function Benefits() {
	const [activeBenefit, setActiveBenefit] = useState(1)

	const benefits = [
		{
			id: 1,
			title: 'Improve profitability',
			subtitle:
				'Optimize decisions with precise risk evaluation and data analysis.',
			icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='64'
					height='64'
					viewBox='0 0 64 64'
					fill='none'
				>
					<path
						d='M53.3327 53.3332H10.666V10.6665'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M10.666 44L31.9993 24L39.9993 32L51.9993 20'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M24 53.3332L24 38.6665'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
					/>
					<path
						d='M16 53.3332L16 46.6665'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
					/>
					<path
						d='M31.9846 53.3333L32 32'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
					/>
					<path
						d='M40 53.3335L40 37.3335'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
					/>
					<path
						d='M48 53.3333L48 32'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
					/>
				</svg>
			),
			iconMob: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 64 64'
					fill='none'
				>
					<path
						d='M53.3327 53.3332H10.666V10.6665'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M10.666 44L31.9993 24L39.9993 32L51.9993 20'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M24 53.3332L24 38.6665'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
					/>
					<path
						d='M16 53.3332L16 46.6665'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
					/>
					<path
						d='M31.9846 53.3333L32 32'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
					/>
					<path
						d='M40 53.3335L40 37.3335'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
					/>
					<path
						d='M48 53.3333L48 32'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
					/>
				</svg>
			),
		},
		{
			id: 2,
			title: 'Expand with confidence',
			subtitle:
				'Seamlessly enter underserved markets with AI-powered insights.',
			icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='64'
					height='64'
					viewBox='0 0 64 64'
					fill='none'
				>
					<path
						d='M16 8H8M8 8V16M8 8L16 16'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M48 8H56M56 8V16M56 8L48 16'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M16 56H8M8 56V48M8 56L16 48'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M48 56H56M56 56V48M56 56L48 48'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M33.3713 47.1768L44.038 40.7768C44.8412 40.2949 45.3327 39.4269 45.3327 38.4901V28.1766C45.3327 27.2398 44.8412 26.3718 44.038 25.8899L33.3713 19.4899C32.5268 18.9832 31.4719 18.9832 30.6273 19.4899L19.9607 25.8899C19.1575 26.3718 18.666 27.2398 18.666 28.1766V38.4901C18.666 39.4269 19.1575 40.2949 19.9607 40.7768L30.6273 47.1768C31.4719 47.6835 32.5268 47.6835 33.3713 47.1768Z'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M20 28L32 34.6653M32 34.6653C32 34.6653 42.0365 29.1979 44 28M32 34.6653V46.6667'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
			),
			iconMob: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 64 64'
					fill='none'
				>
					<path
						d='M16 8H8M8 8V16M8 8L16 16'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M48 8H56M56 8V16M56 8L48 16'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M16 56H8M8 56V48M8 56L16 48'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M48 56H56M56 56V48M56 56L48 48'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M33.3713 47.1768L44.038 40.7768C44.8412 40.2949 45.3327 39.4269 45.3327 38.4901V28.1766C45.3327 27.2398 44.8412 26.3718 44.038 25.8899L33.3713 19.4899C32.5268 18.9832 31.4719 18.9832 30.6273 19.4899L19.9607 25.8899C19.1575 26.3718 18.666 27.2398 18.666 28.1766V38.4901C18.666 39.4269 19.1575 40.2949 19.9607 40.7768L30.6273 47.1768C31.4719 47.6835 32.5268 47.6835 33.3713 47.1768Z'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M20 28L32 34.6653M32 34.6653C32 34.6653 42.0365 29.1979 44 28M32 34.6653V46.6667'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
			),
		},
		{
			id: 3,
			title: 'Recover lost revenue',
			subtitle: 'Address premium leakage with smarter underwriting solutions.',
			icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='50'
					height='50'
					viewBox='0 0 50 50'
					fill='none'
				>
					<path
						d='M35.6673 27.6668C28.3036 27.6668 22.334 24.682 22.334 21.0002C22.334 17.3183 28.3036 14.3335 35.6673 14.3335C43.031 14.3335 49.0006 17.3183 49.0006 21.0002C49.0006 24.682 43.031 27.6668 35.6673 27.6668Z'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M22.334 31.6665C22.334 35.3484 28.3036 38.3332 35.6673 38.3332C43.031 38.3332 49.0006 35.3484 49.0006 31.6665'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M1 18.3335C1 22.0154 6.96955 25.0002 14.3333 25.0002C17.3355 25.0002 20.1059 24.5042 22.3347 23.6668'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M1 27.6665C1 31.3484 6.96955 34.3332 14.3333 34.3332C17.335 34.3332 20.1048 33.8372 22.3333 33.0004'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M1 7.6665V36.9998C1 40.6817 6.96955 43.6665 14.3333 43.6665C17.335 43.6665 20.1048 43.1702 22.3333 42.3332'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M27.666 15.6665V7.6665'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M22.334 21V42.3333C22.334 46.0152 28.3036 49 35.6673 49C43.031 49 49.0006 46.0152 49.0006 42.3333V21'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M14.3333 14.3333C6.96955 14.3333 1 11.3486 1 7.66667C1 3.98477 6.96955 1 14.3333 1C21.6971 1 27.6667 3.98477 27.6667 7.66667C27.6667 11.3486 21.6971 14.3333 14.3333 14.3333Z'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
			),
			iconMob: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 50 50'
					fill='none'
				>
					<path
						d='M35.6673 27.6668C28.3036 27.6668 22.334 24.682 22.334 21.0002C22.334 17.3183 28.3036 14.3335 35.6673 14.3335C43.031 14.3335 49.0006 17.3183 49.0006 21.0002C49.0006 24.682 43.031 27.6668 35.6673 27.6668Z'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M22.334 31.6665C22.334 35.3484 28.3036 38.3332 35.6673 38.3332C43.031 38.3332 49.0006 35.3484 49.0006 31.6665'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M1 18.3335C1 22.0154 6.96955 25.0002 14.3333 25.0002C17.3355 25.0002 20.1059 24.5042 22.3347 23.6668'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M1 27.6665C1 31.3484 6.96955 34.3332 14.3333 34.3332C17.335 34.3332 20.1048 33.8372 22.3333 33.0004'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M1 7.6665V36.9998C1 40.6817 6.96955 43.6665 14.3333 43.6665C17.335 43.6665 20.1048 43.1702 22.3333 42.3332'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M27.666 15.6665V7.6665'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M22.334 21V42.3333C22.334 46.0152 28.3036 49 35.6673 49C43.031 49 49.0006 46.0152 49.0006 42.3333V21'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M14.3333 14.3333C6.96955 14.3333 1 11.3486 1 7.66667C1 3.98477 6.96955 1 14.3333 1C21.6971 1 27.6667 3.98477 27.6667 7.66667C27.6667 11.3486 21.6971 14.3333 14.3333 14.3333Z'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
			),
		},
		{
			id: 4,
			title: 'Enhance Operational Efficiency',
			subtitle:
				' Streamline workflows to reduce manual costs and turnaround times.',
			icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='64'
					height='64'
					viewBox='0 0 64 64'
					fill='none'
				>
					<path
						d='M32 40C36.4184 40 40 36.4184 40 32C40 27.5816 36.4184 24 32 24C27.5816 24 24 27.5816 24 32C24 36.4184 27.5816 40 32 40Z'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M50.2938 28.149L47.6593 21.7875L51.2 17.6L46.4 12.8L42.2353 16.3591L35.7387 13.6874L34.2447 8H29.5544L28.0378 13.7627L21.6906 16.4383L17.6 12.8L12.8 17.6L16.2881 21.8932L13.694 28.2711L8 29.6V34.4L13.7627 35.9732L16.4378 42.3193L12.8 46.4L17.6 51.2L21.8988 47.6967L28.1528 50.2695L29.6 56H34.4L35.8508 50.2717L42.2122 47.6372C43.2726 48.3951 46.4 51.2 46.4 51.2L51.2 46.4L47.6382 42.1986L50.2734 35.8352L55.9998 34.3453L56 29.6L50.2938 28.149Z'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
			),
			iconMob: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 64 64'
					fill='none'
				>
					<path
						d='M32 40C36.4184 40 40 36.4184 40 32C40 27.5816 36.4184 24 32 24C27.5816 24 24 27.5816 24 32C24 36.4184 27.5816 40 32 40Z'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M50.2938 28.149L47.6593 21.7875L51.2 17.6L46.4 12.8L42.2353 16.3591L35.7387 13.6874L34.2447 8H29.5544L28.0378 13.7627L21.6906 16.4383L17.6 12.8L12.8 17.6L16.2881 21.8932L13.694 28.2711L8 29.6V34.4L13.7627 35.9732L16.4378 42.3193L12.8 46.4L17.6 51.2L21.8988 47.6967L28.1528 50.2695L29.6 56H34.4L35.8508 50.2717L42.2122 47.6372C43.2726 48.3951 46.4 51.2 46.4 51.2L51.2 46.4L47.6382 42.1986L50.2734 35.8352L55.9998 34.3453L56 29.6L50.2938 28.149Z'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
			),
		},
		{
			id: 5,
			title: 'Accelerate Time-to-Market',
			subtitle: 'Launch new products faster with actionable data intelligence.',
			icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='64'
					height='64'
					viewBox='0 0 64 64'
					fill='none'
				>
					<path
						d='M42.8306 27.7432L37.3335 45.3333H26.6668L21.1699 27.7432C19.6024 22.7272 20.598 17.2615 23.8332 13.1204L30.7394 4.28049C31.3799 3.46054 32.6204 3.46054 33.261 4.28049L40.1671 13.1204C43.4023 17.2615 44.3978 22.7272 42.8306 27.7432Z'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M26.666 53.3335C26.666 58.6668 31.9993 61.3335 31.9993 61.3335C31.9993 61.3335 37.3327 58.6668 37.3327 53.3335'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M22.6674 33.3335C13.3341 40.0002 18.6674 50.6668 18.6674 50.6668L26.6674 45.3335'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M42.4824 33.3335C51.8158 40.0002 46.4824 50.6668 46.4824 50.6668L38.4824 45.3335'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M31.9993 29.3332C29.0537 29.3332 26.666 26.9454 26.666 23.9998C26.666 21.0543 29.0537 18.6665 31.9993 18.6665C34.9449 18.6665 37.3327 21.0543 37.3327 23.9998C37.3327 26.9454 34.9449 29.3332 31.9993 29.3332Z'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
			),
			iconMob: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 64 64'
					fill='none'
				>
					<path
						d='M42.8306 27.7432L37.3335 45.3333H26.6668L21.1699 27.7432C19.6024 22.7272 20.598 17.2615 23.8332 13.1204L30.7394 4.28049C31.3799 3.46054 32.6204 3.46054 33.261 4.28049L40.1671 13.1204C43.4023 17.2615 44.3978 22.7272 42.8306 27.7432Z'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M26.666 53.3335C26.666 58.6668 31.9993 61.3335 31.9993 61.3335C31.9993 61.3335 37.3327 58.6668 37.3327 53.3335'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M22.6674 33.3335C13.3341 40.0002 18.6674 50.6668 18.6674 50.6668L26.6674 45.3335'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M42.4824 33.3335C51.8158 40.0002 46.4824 50.6668 46.4824 50.6668L38.4824 45.3335'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M31.9993 29.3332C29.0537 29.3332 26.666 26.9454 26.666 23.9998C26.666 21.0543 29.0537 18.6665 31.9993 18.6665C34.9449 18.6665 37.3327 21.0543 37.3327 23.9998C37.3327 26.9454 34.9449 29.3332 31.9993 29.3332Z'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
			),
		},
		{
			id: 6,
			title: 'Build Long-Term Partnerships',
			subtitle:
				'Enhance broker and client relationships with consistent results.',
			icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='64'
					height='64'
					viewBox='0 0 64 64'
					fill='none'
				>
					<path
						d='M18.666 48V45.3333C18.666 37.9696 24.6356 32 31.9993 32C39.3631 32 45.3327 37.9696 45.3327 45.3333V48'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M2.66602 48.0002V45.3335C2.66602 40.9151 6.24775 37.3335 10.666 37.3335'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M61.334 48.0002V45.3335C61.334 40.9151 57.7524 37.3335 53.334 37.3335'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M32 32C36.4184 32 40 28.4184 40 24C40 19.5817 36.4184 16 32 16C27.5816 16 24 19.5817 24 24C24 28.4184 27.5816 32 32 32Z'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M10.6673 37.3332C13.6128 37.3332 16.0007 34.9454 16.0007 31.9998C16.0007 29.0542 13.6128 26.6665 10.6673 26.6665C7.7218 26.6665 5.33398 29.0542 5.33398 31.9998C5.33398 34.9454 7.7218 37.3332 10.6673 37.3332Z'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M53.3333 37.3332C56.2789 37.3332 58.6667 34.9454 58.6667 31.9998C58.6667 29.0542 56.2789 26.6665 53.3333 26.6665C50.3877 26.6665 48 29.0542 48 31.9998C48 34.9454 50.3877 37.3332 53.3333 37.3332Z'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
			),
			iconMob: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 64 64'
					fill='none'
				>
					<path
						d='M18.666 48V45.3333C18.666 37.9696 24.6356 32 31.9993 32C39.3631 32 45.3327 37.9696 45.3327 45.3333V48'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M2.66602 48.0002V45.3335C2.66602 40.9151 6.24775 37.3335 10.666 37.3335'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M61.334 48.0002V45.3335C61.334 40.9151 57.7524 37.3335 53.334 37.3335'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M32 32C36.4184 32 40 28.4184 40 24C40 19.5817 36.4184 16 32 16C27.5816 16 24 19.5817 24 24C24 28.4184 27.5816 32 32 32Z'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M10.6673 37.3332C13.6128 37.3332 16.0007 34.9454 16.0007 31.9998C16.0007 29.0542 13.6128 26.6665 10.6673 26.6665C7.7218 26.6665 5.33398 29.0542 5.33398 31.9998C5.33398 34.9454 7.7218 37.3332 10.6673 37.3332Z'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M53.3333 37.3332C56.2789 37.3332 58.6667 34.9454 58.6667 31.9998C58.6667 29.0542 56.2789 26.6665 53.3333 26.6665C50.3877 26.6665 48 29.0542 48 31.9998C48 34.9454 50.3877 37.3332 53.3333 37.3332Z'
						stroke='#2E3F5C'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
			),
		},
	]
	const scrollBenefit = direction => {
		setActiveBenefit(prev =>
			direction === 'up'
				? (prev + 1) % benefits.length
				: (prev - 1 + benefits.length) % benefits.length
		)
	}

	useEffect(() => {
		const interval = setInterval(() => scrollBenefit('up'), 3000)
		return () => clearInterval(interval)
	}, [])

	const getClassName = index => {
		const total = benefits.length
		const isActive = index === activeBenefit
		const isPrev = index === (activeBenefit - 1 + total) % total
		const isNext = index === (activeBenefit + 1) % total
		const isLast = index === (activeBenefit + 2) % total

		if (isActive) return 'benefit active'
		if (isPrev) return 'benefit previous'
		if (isNext) return 'benefit next'
		if (isLast) return 'benefit last'
		return 'benefit hidden'
	}

	return (
		<div className='benefits'>
			<div className='benefits-container'>
				<div className='benefits-title'>
					Why Choose <a className='benefits-title2'>Findevor?</a>
				</div>
				<div className='benefits-main'>
					<div className='benefits-slider'>
						{benefits.map((benefit, index) => (
							<div key={benefit.id} className={getClassName(index)}>
								<div className='benefit-icon'>{benefit.icon}</div>
								<div className='benefit-iconMob'>{benefit.iconMob}</div>
								<div className='benefit-right'>
									<div className='benefit-title'>{benefit.title}</div>
									<div className='benefit-subtitle'>{benefit.subtitle}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
