<script lang="ts">
	interface TimelineItem {
		title: string;
		subtitle?: string;
		date: string;
		content: string[];
	}

	const workExperience: TimelineItem[] = [
		{
			title: 'Android Developer - PPID Tuban',
			date: '2020',
			content: [
				'Develop a Mobile based application to digitalized old web data to more modern and easier to use application in Android using Kotlin and Firebase as storage.',
				'Manage compatibility for each device this includes web to android app.',
				'Implement real-time data retrieving and sending.',
				'Create non-sql database system that work together with the existing database'
			]
		},
		{
			title: 'Android Developer - SETDA Kesra Tuban',
			date: '2022',
			content: [
				'Able to developing an Android-based mobile application for automatic verification of proposals and reports using Kotlinprogramming language, and google maps API.',
				'Able to set system scope, requirement, and feature list before starting project.',
				'Automate report validation process, recap data, sort report data using data from database.',
				'Design an easy to use UI that follow the existing Setda web appearance while also improving readability, removed unused features.'
			]
		},
		{
			title: 'Freelance Developer (Self Employed)',
			date: '2023',
			content: [
				'Tasked to develop and maintain android apps and web for schedule management, income management, and monthly data recap using Kotlin programming language.',
				"Able to design and implementing intricate web designs that effectively show the company's image or theme.",
				'Skilled in utilizing Bootstrap, JavaScript, and Laravel to develop dynamic and responsive web solutions',
				'Update the existing website to use Svelte and Tailwind CSS in 2024',
				'Developing admin page using React Next JS and Typescript'
			]
		}
	];

	const education: TimelineItem[] = [
		{
			title: 'Computer Science - Brawijaya University',
			date: 'Graduated in 2023 with 3.53/4.00 Grade Point Average',
			content: [
				'Key coursework: Algorithms & Data Structures, AI, Database Systems, Software Engineering, Mobile & Web Programming.'
			]
		}
	];

	const organizationalExperience: TimelineItem[] = [
		{
			title: 'Acara Pengenalan Kehidupan Kampus Mahasiswa Baru',
			date: '2019',
			content: [
				'Handle multiple assets creation including but not limited to Images, Videos, Website UI/UX',
				'Contribute to capturing key moment or theme while keeping website UI clean and easy to use'
			]
		},
		{
			title: 'Krinda Mahasiswa: Startup Academy',
			subtitle: 'Startup Academy 2019',
			date: '2019',
			content: [
				'Be able to work under extra strict deadlines while also providing the required material for startup academy, this includes videos, pictures, web assets, and some other assets',
				'Demonstate strong collaboration and adaptability by following organizational guidelines and rules while keeping positive team dynamics and atmosphere.'
			]
		},
		{
			title: 'Bakti Sosial Bersama Kita: Sosialita',
			subtitle: 'Sosialita 2019',
			date: '2019',
			content: [
				'I successfully manage and make sure seamless documentation of all event highlights while also coordinate the creation of high quality promotional materials and engaging informational graphics under strict deadlines and ensuring a consistent, professional brand identity through all media.'
			]
		}
	];

	const skills: string[] = [
		'Java',
		'Kotlin',
		'Typescript',
		'Git',
		'Adobe Photoshop',
		'Adobe After Effects',
		'Adobe XD',
		'MS Word',
		'MS Excel',
		'Problem Solving',
		'Teamwork',
		'Critical Thinking',
		'Communication',
		'English (Conversational)',
		'Indonesia (Native)'
	];
</script>

<div
	class="bg-salt-100 dark:bg-midnight-500 flex flex-col items-center rounded-lg shadow-sm md:flex-row"
>
	<div class="dark:bg-midnight-500 bg-salt-100 flex w-full rounded-md p-4">
		<div class="w-full space-y-4">
			<details class="group border-salt-200 dark:border-midnight-text w-full rounded-lg border p-4">
				<summary
					class="text-salt-text dark:text-midnight-text w-full cursor-pointer text-lg font-semibold"
					>Work Experience</summary
				>
				<ol class="border-salt-600 relative mt-4 border-l dark:border-gray-700">
					{#each workExperience as item}
						<li class="ms-4 mb-10">
							<div
								class="border-salt-600 dark:border-midnight-text bg-salt-100 absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border dark:bg-gray-700"
							></div>
							<time class="mb-1 text-sm leading-none font-normal text-gray-400 dark:text-gray-500"
								>{item.date}</time
							>
							<h3 class="dark:text-midnight-text text-lg font-semibold text-gray-900">
								{item.title}
							</h3>
							{#if item.subtitle}
								<p class="text-sm text-gray-500 italic dark:text-gray-400">{item.subtitle}</p>
							{/if}
							{#each item.content as point}
								<p class="text-base font-normal text-gray-500 dark:text-gray-400">{point}</p>
							{/each}
						</li>
					{/each}
				</ol>
			</details>

			<details class="group border-salt-text dark:border-midnight-text rounded-lg border p-4">
				<summary class="text-salt-text dark:text-midnight-text cursor-pointer text-lg font-semibold"
					>Education</summary
				>
				<ol class="border-salt-600 relative mt-4 border-l dark:border-gray-700">
					{#each education as edu}
						<li class="ms-4 mb-10">
							<div
								class="border-salt-600 dark:border-midnight-text bg-salt-100 absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border dark:bg-gray-700"
							></div>
							<time class="mb-1 text-sm leading-none font-normal text-gray-400 dark:text-gray-500"
								>{edu.date}</time
							>
							<h3 class="dark:text-midnight-text text-lg font-semibold text-gray-900">
								{edu.title}
							</h3>
							{#each edu.content as point}
								<p class="text-base font-normal text-gray-500 dark:text-gray-400">{point}</p>
							{/each}
						</li>
					{/each}
				</ol>
			</details>

			<details class="group border-salt-text dark:border-midnight-text rounded-lg border p-4">
				<summary class="text-salt-text dark:text-midnight-text cursor-pointer text-lg font-semibold"
					>Organizational Experience</summary
				>
				<ol class="border-salt-600 relative mt-4 border-l dark:border-gray-700">
					{#each organizationalExperience as org}
						<li class="ms-4 mb-10">
							<div
								class="border-salt-600 dark:border-midnight-text bg-salt-100 absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border dark:bg-gray-700"
							></div>
							<time class="mb-1 text-sm leading-none font-normal text-gray-400 dark:text-gray-500"
								>{org.date}</time
							>
							<h3 class="dark:text-midnight-text text-lg font-semibold text-gray-900">
								{org.title}
							</h3>
							{#if org.subtitle}
								<p class="text-sm text-gray-500 italic dark:text-gray-400">{org.subtitle}</p>
							{/if}
							{#each org.content as point}
								<p class="text-base font-normal text-gray-500 dark:text-gray-400">{point}</p>
							{/each}
						</li>
					{/each}
				</ol>
			</details>

			<details class="group border-salt-text dark:border-midnight-text rounded-lg border p-4">
				<summary class="text-salt-text dark:text-midnight-text cursor-pointer text-lg font-semibold"
					>Skills</summary
				>
				<div class="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
					{#each skills as skill}
						<span
							class="bg-salt-200 dark:bg-midnight-600 dark:text-midnight-text inline-block rounded-full px-3 py-1 text-sm text-gray-800"
							>{skill}</span
						>
					{/each}
				</div>
			</details>
		</div>
	</div>
</div>
