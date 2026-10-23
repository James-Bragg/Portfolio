import React from 'react';

interface Project {
	title: string;
	description: string;
	tech: string[]; 
	repo: string;
	demo: string;
}

const completedProjects: Project[] = [
	{
		title: 'Host Death Link',
		description:
			'• An Elden Ring Seamless Co-op add-on written in Rust: when the host dies, every other player in the session dies too. • Built as a native Windows DLL loaded through ModEngine2, hooking into game state via the fromsoftware-rs crates. • Per-player TOML configuration identifies the host, including sessions with three or more players. • Catches panics in the main loop so errors never crash the game.',
		tech: ['Rust', 'Windows API', 'DLL', 'Game Modding', 'Git'],
		repo: 'https://github.com/James-Bragg/hostdeath-link',
		demo: '',
	},
	{
		title: 'Local Business Website',
		description:
			'• Freelance project: designed, built and deployed a bespoke business website for a local client using Wix. • Implemented an online booking system, service catalogue, and clear location and contact information. • Responsive design for desktop and mobile, configured as a CMS so the client can update content independently. • Managed the full project lifecycle, from requirements gathering and client communication through to deployment.',
		tech: ['Wix', 'CMS', 'Responsive Design', 'Client Management'],
		repo: '',
		demo: 'https://www.thaitawanmassage.co.uk/',
	},
	{
		title: 'Cloud Computing for E-learning (Dissertation)',
		description:
			'• Designed and built a cloud-based social media and forum platform for e-learning, based on research into gaps in peer-collaboration tools during remote learning. • Role-based access for Students, Teachers and Admins, including forum creation/moderation, user profiles and direct messaging. • Python/Django back end with a MySQL database, and an HTML, CSS and JavaScript front end. • Deployed and configured a cloud-hosted MySQL database on AWS with access control for secure remote connections. • Led the end-to-end SDLC: requirements gathering, competitor analysis, design, development and testing.',
		tech: ['Python', 'Django', 'MySQL', 'AWS', 'HTML', 'CSS', 'JavaScript', 'Git'],
		repo: 'https://github.com/James-Bragg/StudentSocialWeb',
		demo: '',
	},
	{
		title: 'Facial Recognition using Machine Learning',
		description:
			'• Improved model accuracy from an 89% baseline to a 97% average, with a peak of 99%, through systematic hyperparameter tuning. • Tuned batch size, solver selection, principal components and hidden neuron count. • Built with Python and scikit-learn (MLPClassifier) on Google Colab using artificial neural networks.',
		tech: ['Python', 'scikit-learn', 'Neural Networks', 'Google Colab'],
		repo: '',
		demo: '',
	},
	{
		title: 'Algorithm Visualizer',
		description:
			'• Group project: a GUI-based Python application that visualizes sorting algorithms and compares their execution speed. • Led the team from initiation to completion as Project Manager, applying PRINCE2 principles to deliver on schedule. • Managed scope, timelines and responsibilities with Gantt charts and regular team meetings to track progress and resolve blockers. • Built using Python, SQL and the Tkinter GUI library.',
		tech: ['Python', 'Tkinter', 'Pygame', 'SQL', 'Git', 'PRINCE2', 'Project Management'],
		repo: 'https://github.com/James-Bragg/Y3-GroupProject',
		demo: '',
	},
	{
		title: 'Student Kiosk System',
		description: '• Co-developed a web-based kiosk application for the University of Bedfordshire, enabling students, staff, and local businesses to view and book campus events and services. • Built the application on Oracle APEX with a SQL back-end. • Led market research and requirements gathering, including a student questionnaire, and applied Scrum sprints and Soft Systems Methodology, including CATWOE, to define functional, non-functional and stakeholder requirements. • Designed and built the SQL database, including triggers, sequences and normalised table structures. • Developed authentication and authorisation features, including secure password hashing.',
		tech: ['Oracle APEX', 'SQL', 'Scrum'],
		repo: '',
		demo: '',
	},
	{
		title: 'DnD Companion',
		description:
			'Manage combat encounters with the built-in initiative tracker, as well as saving players and their initiative bonuses.',
		tech: ['HTML', 'CSS', 'JavaScript', 'Git'],
		repo: 'https://github.com/James-Bragg/DnD-Initiative-Tracker',
		demo: 'https://james-bragg.github.io/DnD-Initiative-Tracker/',
	},
	{
		title: 'Mathematical Game',
		description: 'A mathematical quiz game built for a university project in Java with SQLite storage. Users can create accounts to store their scores, compete on a leaderboard of top scores, and play through a custom GUI and game engine. An external API is used to look up user location data.',
		tech: ['Java', 'SQLite', 'GUI', 'API', 'OOP'],
		repo: '',
		demo: '',
	},
];

const ongoingProjects: Project[] = [
	{
		title: 'Learning Rust and Systems Programming',
		description: 'Currently exploring Rust programming language and systems-level concepts to build efficient, low-level applications and deepen understanding of computer systems.',
		tech: ['Rust', 'Systems Programming'],
		repo: '#',
		demo: '#',
	},
	{
		title: 'Raspberry Pi Web Server',
		description: 'Building a general-purpose server on Raspberry Pi using Rust for hosting applications, emphasizing efficiency, memory safety, and low-power operation.',
		tech: ['Rust', 'Raspberry Pi', 'Web Server'],
		repo: '#',
		demo: '#',
	},
];

const createRandomTitleColor = (usedColors: Set<string>) => {
	let color: string;
	do {
		const hue = Math.floor(Math.random() * 360);
		const saturation = Math.floor(Math.random() * 21) + 70;
		const lightness = Math.floor(Math.random() * 16) + 65;
		color = `hsl(${hue} ${saturation}% ${lightness}%)`;
	} while (usedColors.has(color));

	usedColors.add(color);
	return color;
};

const Projects: React.FC = () => {
	const [titleColors] = React.useState<Record<string, string>>(() => {
		const usedColors = new Set<string>();

		return Object.fromEntries(
			[...ongoingProjects, ...completedProjects].map((project) => [
				project.title,
				createRandomTitleColor(usedColors),
			]),
		);
	});

	return (
		<main className="min-h-screen rounded-2xl overflow-hidden bg-linear-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100 py-12">
			<div className="max-w-5xl mx-auto px-4 sm:px-6">
				<div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-gray-900/60 via-gray-800/40 to-gray-900/60 border border-gray-800 p-6 sm:p-8 shadow-2xl">
					<svg
						className="pointer-events-none absolute -right-28 -top-28 opacity-10 hidden sm:block"
						width="420"
						height="420"
						viewBox="0 0 420 420"
						fill="none"
						aria-hidden
					>
						<defs>
							<linearGradient id="projectsGrad" x1="0" x2="1">
								<stop offset="0" stopColor="#06b6d4" />
								<stop offset="1" stopColor="#7c3aed" />
							</linearGradient>
						</defs>
						<circle
							cx="210"
							cy="210"
							r="200"
							stroke="url(#projectsGrad)"
							strokeWidth="2"
						/>
					</svg>

					<header className="mb-8">
						<h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-cyan-200 leading-tight animate-fade-in-down">
							My <span className="text-cyan-400">Projects</span>
						</h1>
						<p className="text-gray-300 text-base sm:text-lg leading-relaxed mt-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
							Explore my portfolio of completed projects, spanning web applications, system programming, and general software development. Each project highlights innovative solutions, efficient algorithms, and a dedication to clean, maintainable code.
						</p>
					</header>

					{/* Ongoing Projects Section */}
					<section className="mb-12">
						<h2 className="text-2xl font-bold text-purple-200 mb-4">
							Ongoing Projects
						</h2>
						{ongoingProjects.length > 0 ? (
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
								{ongoingProjects.map((p) => (
									<article
										key={p.title}
										className="group relative bg-gray-900 border border-gray-800 p-5 rounded-lg shadow hover:shadow-xl transition animate-card-reveal hover:-translate-y-1"
									>
										<div className="flex items-start justify-between gap-4">
											<div>
														<h3
															className="text-lg font-semibold"
															style={{ color: titleColors[p.title] }}
														>
													{p.title}
												</h3>
												<p className="text-sm text-gray-300 mt-2">
													{p.description}
												</p>

												<div className="mt-3 flex flex-wrap gap-2">
													{p.tech.map((t) => (
														<span
															key={t}
															className="text-xs px-2 py-1 rounded-full bg-gray-800/60 text-gray-200"
														>
															{t}
														</span>
													))}
												</div>
											</div>

											<div className="flex flex-col items-end gap-2">
												{p.demo && p.demo !== '#' && (
													<a
														href={p.demo}
														className="text-xs px-3 py-1 rounded-md bg-cyan-500 hover:bg-cyan-600 text-black font-medium transition"
														target="_blank"
														rel="noopener noreferrer"
													>
														Demo
													</a>
												)}
											</div>
										</div>

										<div className="mt-4 text-xs text-gray-400">
										</div>
									</article>
								))}
							</div>
						) : (
							<p className="text-gray-400 italic">
								No ongoing projects at the moment.
							</p>
						)}
					</section>

					{/* Completed Projects Section */}
					<section>
						<h2 className="text-xl sm:text-2xl font-bold text-green-200 mb-4">
							Completed Projects
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							{completedProjects.map((p) => (
								<article
									key={p.title}
									className="group relative bg-gray-900 border border-gray-800 p-5 rounded-lg shadow hover:shadow-xl transition animate-card-reveal hover:-translate-y-1"
								>
									<div className="flex items-start justify-between gap-4">
										<div>
										<h3
											className="text-base sm:text-lg font-semibold"
											style={{ color: titleColors[p.title] }}
										>
											{p.title}
										</h3>
										{p.description.includes(' • ') ? (
											<ul className="text-xs sm:text-sm text-gray-300 mt-2 list-disc list-inside space-y-1">
												{p.description.split(' • ').map((point) => (
													<li key={point}>{point.replace(/^•\s*/, '')}</li>
												))}
											</ul>
										) : (
											<p className="text-xs sm:text-sm text-gray-300 mt-2">
												{p.description}
											</p>
										)}

											<div className="mt-3 flex flex-wrap gap-2">
												{p.tech.map((t) => (
													<span
														key={t}
														className="text-xs px-2 py-1 rounded-full bg-gray-800/60 text-gray-200"
													>
														{t}
													</span>
												))}
											</div>
										</div>

										<div className="flex flex-col items-end gap-2">
											{p.demo && p.demo !== '#' && (
												<a
													href={p.demo}
													className="text-xs px-3 py-1 rounded-md bg-cyan-500 hover:bg-cyan-600 text-black font-medium transition"
													target="_blank"
													rel="noopener noreferrer"
												>
													Demo
												</a>
											)}
											{p.repo && p.repo !== '#' && (
												<a
													href={p.repo}
													className="text-xs px-3 py-1 rounded-md bg-transparent border border-gray-700 hover:bg-gray-800 text-gray-200 transition"
													target="_blank"
													rel="noopener noreferrer"
												>
													Repo
												</a>
											)}
										</div>
									</div>
								</article>
							))}
						</div>
					</section>
				</div>
			</div>
		</main>
	);
};

export default Projects;
