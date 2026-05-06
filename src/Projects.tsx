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
		title: 'DnD Companion',
		description:
			'Manage Combat Encounters with the built in Initiative Tracker. As well as saving Users and initiative bonuses.',
		tech: ['HTML', 'CSS', 'JavaScript', 'Git'],
		repo: 'https://github.com/James-Bragg/DnD-Initiative-Tracker',
		demo: 'https://james-bragg.github.io/DnD-Initiative-Tracker/',
	},
	{
		title: 'My Dissertation project.',
		description:
			'A Forum/Social media platform built to allow student collaboration across universities to allow for greater developed of social skills and collaboration.',
		tech: ['HTML', 'CSS', 'JAVAScript', 'Python', 'Django', 'AWS', 'SQL', 'Git'],
		repo: 'https://github.com/James-Bragg/StudentSocialWeb',
		demo: '#',
	},
	{
		title: 'This Portfolio Site',
		description:
			'A personal portfolio website to showcase my projects and skills as a software developer.',
		tech: ['REACT', 'TAILWIND', 'TypeScript', 'VITE', 'Git', 'GitHub-Pages'],
		repo: 'https://github.com/James-Bragg/Portfolio',
		demo: 'https://james-bragg.github.io/Portfolio/#/projects',
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

const Projects: React.FC = () => {
	return (
		<main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100 py-12">
			<div className="max-w-5xl mx-auto px-6">
				<div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900/60 via-gray-800/40 to-gray-900/60 border border-gray-800 p-8 shadow-2xl">
					<svg
						className="pointer-events-none absolute -right-28 -top-28 opacity-10"
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
						<h1 className="text-4xl font-extrabold text-cyan-200 leading-tight animate-fade-in-down">
							My <span className="text-cyan-400">Projects</span>
						</h1>
						<p className="text-gray-300 text-lg leading-relaxed mt-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
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
										className="group relative bg-gray-900 border border-gray-800 p-5 rounded-lg shadow hover:shadow-xl transition"
									>
										<div className="flex items-start justify-between gap-4">
											<div>
												<h3 className="text-lg font-semibold text-gray-100">
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
												{p.demo !== '#' && (
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
						<h2 className="text-2xl font-bold text-green-200 mb-4">
							Completed Projects
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							{completedProjects.map((p) => (
								<article
									key={p.title}
									className="group relative bg-gray-900 border border-gray-800 p-5 rounded-lg shadow hover:shadow-xl transition"
								>
									<div className="flex items-start justify-between gap-4">
										<div>
											<h3 className="text-lg font-semibold text-gray-100">
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
											<a
												href={p.demo}
												className="text-xs px-3 py-1 rounded-md bg-cyan-500 hover:bg-cyan-600 text-black font-medium transition"
												target="_blank"
												rel="noopener noreferrer"
											>
												Demo
											</a>
											<a
												href={p.repo}
												className="text-xs px-3 py-1 rounded-md bg-transparent border border-gray-700 hover:bg-gray-800 text-gray-200 transition"
												target="_blank"
												rel="noopener noreferrer"
											>
												Repo
											</a>
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
