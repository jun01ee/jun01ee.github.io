window.siteData = {
	snapshot: [
		{
			title: "PhD-trained quantitative modeller",
			text: "Experienced in statistical inference, uncertainty-aware analysis, and translating messy scientific datasets into defensible results."
		},
		{
			title: "Python, SQL, R, PySpark, Databricks",
			text: "Hands-on stack for analysis, data engineering, distributed workflows, and production-minded experimentation."
		},
		{
			title: "ETL, validation, reproducible workflows",
			text: "Builds structured pipelines with checks, documentation, and repeatable outputs rather than one-off notebooks."
		},
		{
			title: "ML forecasting and scheduled inference",
			text: "XGBoost, MLflow, feature engineering, time-series validation, and daily inference workflows."
		},
		{
			title: "GenAI and agentic AI experimentation",
			text: "Uses structured prompts, scoring functions, and AI-assisted development loops for reproducible experiments."
		},
		{
			title: "Visual analytics portfolio in progress",
			text: "Dashboarding work is being shaped around KPI design, stakeholder reporting, and decision-ready insight briefs."
		}
	],
	projects: [
		{
			title: "Solar Yield Forecasting MLOps Pipeline",
			status: "Public GitHub repo",
			description: "Databricks Free Edition pipeline for solar energy forecasting, designed as operational evidence for ETL, validation, ML forecasting, scheduled inference, and reproducible MLOps.",
			tags: ["Databricks", "Open-Meteo", "pvlib", "XGBoost", "MLflow", "PySpark", "MLOps", "time-series validation"],
			highlights: [
				"Bronze, Silver, and Gold data layers for forecast-ready features.",
				"Scheduled daily inference for 7-day plane-of-array Global Tilted Irradiance (GTI) forecasts.",
				"Forecast output published daily to GitHub via the GitHub Content API.",
				"Operational monitoring and reproducibility are explicit design goals."
			],
			links: [
				{
					label: "Latest forecast available on GitHub",
					url: "https://github.com/jun01ee/solar-yield-forecasting-pipeline",
					icon: "fab fa-github"
				}
			],
			demo: {
				type: "image",
				image: "images/7_Day_GTI_Power_Yield_Profile.png",
				alt: "Seven-day solar power yield forecast output from the solar forecasting pipeline.",
				caption: "Example 7-day solar power yield forecast published by the scheduled Databricks pipeline.",
				fit: "contain"
			}
		},
		{
			title: "Spatially Resolved Galaxy Spectra Analysis Software",
			status: "Public release planned",
			description: "Rebuilding PhD-era spatially resolved galaxy spectra analysis code into modular, documented research software for reproducible community use, with improved workflow design, validation, AI-assisted development, and extensibility.",
			tags: ["Research software", "Python", "scientific computing", "reproducible workflows", "astronomy", "spectral analysis", "modularisation", "validation", "documentation", "AI-assisted development", "workflow design"],
			highlights: [
				"Current postdoctoral project re-engineering notebook-based and project-specific scripts into reusable software.",
				"Extends the original PhD implementation with improved workflow design, validation logic, and clearer user-facing structure.",
				"Uses AI-assisted and agentic coding workflows for refactoring, debugging, documentation, and design iteration.",
				"Software in preparation for community release; private source is not linked."
			],
			links: [
				{
					label: "View updated architecture in Miro",
					url: "https://miro.com/app/board/uXjVHJ-Kk4k=/?share_link_id=306679700894",
					icon: "fas fa-external-link-alt"
				}
			],
			demo: {
				type: "image",
				image: "images/galaxy-software-architecture.svg",
				alt: "Architecture flowchart for spatially resolved galaxy spectra analysis software",
				caption: "Current architecture flowchart for the software design; interactive view available through Miro.",
				fit: "contain"
			}
		},
		{
			title: "Visualisation / Dashboarding Portfolio",
			hidden: true,
			status: "Coming soon",
			description: "A planned BI project for demonstrating dashboard design, KPI selection, data storytelling, business analysis, and stakeholder-ready reporting.",
			tags: ["Power BI", "Tableau", "dashboard design", "KPIs", "data storytelling", "star schema", "business analysis"],
			highlights: [
				"Candidate themes: student outcomes, health insurance performance, or operational KPI monitoring.",
				"Planned sections: problem statement, dataset, KPIs, screenshots, data model, insights brief, recommendations, and repo link.",
				"Designed to show decision support rather than cosmetic dashboarding."
			],
			links: [],
			demo: {
				type: "placeholder",
				variant: "dashboard",
				title: "Dashboard screenshots coming soon.",
				detail: "Choose the business theme and add screenshots, KPI notes, and the future Power BI/Tableau/GitHub link."
			}
		},
		{
			title: "Data Engineering Zoomcamp Capstone",
			status: "Public GitLab repo",
			description: "End-to-end data engineering capstone covering ingestion, transformation, validation, orchestration, structured modelling, testing, CI/CD, documentation, and Terraform-managed infrastructure. Interactive dashboards were created using Looker Studio (a free, web-based visualization tool in the Google ecosystem, similar to Tableau/Power BI).",
			tags: ["data engineering", "ETL", "orchestration", "validation", "CI/CD", "Terraform", "structured data modelling", "Looker Studio"],
			highlights: [
				"Reproducible data engineering workflow with Terraform-managed infrastructure.",
				"Structured modelling and validation for analysis-ready datasets.",
				"Workflow diagrams and interactive dashboards (Looker Studio) for stakeholder reporting."
			],
			links: [
				{
					label: "GitLab",
					url: "https://gitlab.com/jun01ee/data-engineering-zoomcamp/-/tree/main/07-project?ref_type=heads",
					icon: "fab fa-gitlab"
				}
			],
			demo: {
				type: "image",
				image: "https://gitlab.com/jun01ee/data-engineering-zoomcamp/-/raw/main/07-project/project_workflow.png",
				alt: "Data Engineering Zoomcamp capstone project workflow diagram",
				caption: "Capstone workflow diagram showing the data engineering pipeline structure and orchestration flow.",
				fit: "contain"
			}
		},
		{
			title: "OpenEvolve AI Experiments",
			hidden: true,
			status: "Public Github repo",
			description: "Experiments with LLM-driven optimisation workflows, automated code improvement, program synthesis, structured prompts, scoring functions, and iterative refinement.",
			tags: ["GenAI", "agentic AI", "LLM workflows", "automated evaluation", "program synthesis", "reproducible experimentation"],
			highlights: [
				"Demonstrates AI-assisted development with measurable scoring loops.",
				"Focuses on structured prompts and repeatable experiment design.",
				"Placeholder ready for best-result summary, log screenshot, or experiment notes."
			],
			links: [
				{
					label: "GitHub",
					url: "https://github.com/jun01ee/OpenEvolve",
					icon: "fab fa-github"
				}
			],
			demo: {
				type: "placeholder",
				variant: "ai",
				title: "Experiment summary coming soon.",
				detail: "Add best result, scoring trace, or log screenshot."
			}
		},
		{
			title: "Large-Scale Astronomical Data Pipeline",
			status: "Private research pipeline",
			description: "R-based archival imaging workflow for metadata construction, spatial overlap detection, multi-visit grouping, and joint HST-JWST image processing.",
			tags: ["R", "large-scale data", "metadata engineering", "spatial data", "validation", "reproducible workflows", "HST archive", "JWST"],
			highlights: [
				"Built a master metadata catalogue for 249,861 calibrated HST images spanning roughly 26 TB of archival data.",
				"Developed an R-based spatial algorithm using image footprints and polygon overlap detection to group repeated observations.",
				"Produced 38,027 single-visit and 7,893 multi-visit mosaics for deeper, analysis-ready datasets.",
				"Extended the workflow to support joint HST-JWST matching, alignment, photometry, and quality control.",
				"Technical details are documented in Sections 2.1.1 and 2.2 of my PhD thesis."
			],
			links: [
				{
					label: "Read full thesis — see pp. 18–22",
					url: "https://research-repository.uwa.edu.au/en/publications/sharpening-our-view-of-massive-galaxies-in-the-early-universe/",
					icon: "fas fa-book-open"
				}
			],
			demo: {
				type: "image",
				image: "images/jwst-workflow-v5.png",
				alt: "Joint HST-JWST data workflow diagram",
				caption: "Joint HST-JWST data workflow showing archival data matching, image processing, source detection, multiband photometry, quality control, and downstream analysis.",
				fit: "contain"
			}
		}
	],
	capabilities: [
		{
			title: "Data science & ML",
			items: ["Statistical modelling", "Forecasting", "Feature engineering", "Model validation", "XGBoost"]
		},
		{
			title: "Data engineering & MLOps",
			items: ["Python and SQL pipelines", "PySpark and Databricks", "Bronze/Silver/Gold layers", "MLflow", "Scheduled inference"]
		},
		{
			title: "BI & visual analytics",
			items: ["KPI design", "Dashboard planning", "Data storytelling", "Power BI & Tableau", "Portfolio in progress"]
		},
		{
			title: "Programming & reproducibility",
			items: ["Modularisation", "Documentation", "Validation logic", "Workflow design", "Scientific computing"]
		},
		{
			title: "Communication & stakeholder enegament",
			items: ["Decision-ready summaries", "Technical documentation", "Collaborator-facing tools", "Insight briefs"]
		}
	],
	experience: [
		{
			role: "Postdoctoral Researcher & Research Software Developer",
			org: "The University of Western Australia",
			period: "Oct 2025 – present",
			text: "Re-engineering spatially resolved galaxy spectra analysis workflows into reusable, documented research software for reproducible community use.",
			details: [
				"Refactoring PhD-era notebook-based scripts into a modular Python package with validation logic and user-facing documentation.",
				"Applying AI-assisted and agentic coding workflows (LLM-based refactoring, debugging, and design iteration) to accelerate development.",
				"Improving workflow design, data validation, and extensibility for downstream scientific users.",
				"Software in preparation for community release."
			]
		},
		{
			role: "Doctoral Researcher",
			org: "The University of Western Australia",
			period: "2022 – 2025",
			text: "Completed a PhD on the structural and photometric properties of massive galaxies in the early universe, requiring large-scale archival data engineering, statistical modelling, and reproducible scientific software.",
			details: [
				"Built an R-based archival pipeline to construct a master metadata catalogue of 249,861 calibrated HST images spanning ~26 TB of data.",
				"Developed a spatial overlap detection algorithm to group repeated observations, producing 38,027 single-visit and 7,893 multi-visit mosaics.",
				"Extended the workflow to support joint HST-JWST image matching, alignment, multiband photometry, and quality control.",
				"Applied statistical modelling and uncertainty-aware inference to analyse galaxy morphology and stellar populations.",
				"Tools: R, Python, statistical inference, large-scale data engineering, scientific computing."
			]
		},
		{
			role: "Research Assistant",
			org: "University of Hong Kong",
			period: "2018 – 2022",
			text: "Supported astronomy research and teaching workflows, contributing to observational planning and analysis tooling.",
			details: [
				"Assisted with observational planning and scheduling for telescope-based data collection.",
				"Developed and maintained analysis materials for teaching and collaborative research projects.",
				"Tools: Python, data analysis, observational astronomy."
			]
		},
		{
			role: "Quantitative Developer Intern",
			org: "Mai Capital Ltd",
			period: "2019",
			text: "Built quantitative analytical tools in a financial context, connecting statistical modelling with practical software delivery.",
			details: [
				"Developed quantitative tooling for financial modelling and analysis workflows.",
				"Translated statistical model outputs into actionable, software-delivered artefacts.",
				"Tools: Python, quantitative finance, statistical modelling."
			]
		}
	],
	beyondWork: {
		text: "Outside work, I have recently taken up running and completed a 12 km local race. I also enjoy photography, including travel photography and telescope-based astronomical imaging where I capture and stack my own observations. Research collaborations have taken me across Europe, and I value the perspective that comes from working and travelling across different cultures.",
		items: [
			{
				title: "Running",
				text: "I started running recently and completed my first 12 km race in HBF Run for a Reason, which has become a practical way for me to build consistency and resilience outside work.",
				image: "images/12km.jpg",
				alt: "Photo of finishing medal for the 12 km distance in the HBF Run for a Reason event against neutral background."
			},
			{
				title: "Travel",
				text: "Research has taken me across Europe for conferences and collaborations. This photo shows me at a conference dinner with traditional Italian customed performers at the 15th-century Villa Contarini.",
				image: "images/italy.jpg",
				alt: "Author attending a conference dinner at 15th-century Villa Contarini; traditional Italian customed performers entertain the dinner."
			},
			{
				title: "Photography",
				text: "I also enjoy photography, from travel images to telescope-based astronomical imaging, including stacking my own observations of deep-sky objects.",
				image: "images/m8.jpg",
				alt: "Telescope-based astronomical image of M8, the Lagoon Nebula, captured and processed by the author."
			}
		]
	}
};
