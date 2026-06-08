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
			status: "Public repo",
			description: "Databricks Free Edition pipeline for solar energy forecasting, designed as operational evidence for ETL, validation, ML forecasting, scheduled inference, and reproducible MLOps.",
			tags: ["Databricks", "Open-Meteo", "pvlib", "XGBoost", "MLflow", "PySpark", "MLOps", "time-series validation"],
			highlights: [
				"Bronze, Silver, and Gold data layers for forecast-ready features.",
				"Scheduled daily inference for 7-day plane-of-array Global Tilted Irradiance forecasts.",
				"Forecast output published daily to GitHub via the GitHub Content API.",
				"Operational monitoring and reproducibility are explicit design goals."
			],
			links: [
				{
					label: "GitHub",
					url: "https://github.com/jun01ee/solar-yield-forecasting-pipeline",
					icon: "fab fa-github"
				}
			],
			demo: {
				type: "placeholder",
				variant: "forecast",
				title: "Live 7-day forecast output will appear here.",
				detail: "Replace this with the latest forecast PNG or published output path when available."
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
			links: [],
			demo: {
				type: "placeholder",
				variant: "architecture",
				title: "Program architecture flowchart coming soon.",
				detail: "Preferred replacement: exported Miro SVG or PNG. A public Miro link can be added as a secondary link."
			}
		},
		{
			title: "Visualisation / Dashboarding Portfolio",
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
			status: "GitLab repo",
			description: "End-to-end data engineering capstone covering ingestion, transformation, validation, orchestration, structured modelling, testing, CI/CD, documentation, and Docker-based reproducibility.",
			tags: ["data engineering", "ETL", "orchestration", "validation", "CI/CD", "Docker", "structured data modelling"],
			highlights: [
				"Reproducible data engineering workflow with Docker-based services.",
				"Structured modelling and validation steps for analysis-ready datasets.",
				"Architecture diagram placeholder is ready for a future project visual."
			],
			links: [
				{
					label: "GitLab",
					url: "https://gitlab.com/jun01ee/data-engineering-zoomcamp",
					icon: "fab fa-gitlab"
				}
			],
			demo: {
				type: "placeholder",
				variant: "pipeline",
				title: "Architecture diagram placeholder.",
				detail: "Add a pipeline diagram or README screenshot when ready."
			}
		},
		{
			title: "OpenEvolve AI Experiments",
			status: "Public repo",
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
			description: "R pipeline for scanning, processing, and indexing roughly 20TB of archival Hubble Space Telescope imaging data, producing structured metadata and analysis-ready overlap information.",
			tags: ["R", "large-scale data", "metadata engineering", "spatial data", "validation", "reproducible workflows", "HST archive"],
			highlights: [
				"Generated structured metadata while preserving spatial and coordinate information.",
				"Identified overlapping observations for deeper analysis-ready datasets.",
				"Summary available on request; private research source is not linked."
			],
			links: [],
			demo: {
				type: "image",
				image: "images/mosaic.JPG",
				alt: "Astronomical image mosaic used as visual evidence for large-scale imaging workflows",
				caption: "Schematic visual placeholder for archival image processing and overlap detection."
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
			items: ["Python and SQL pipelines", "PySpark and Databricks", "Bronze/Silver/Gold layers", "MLflow", "scheduled inference"]
		},
		{
			title: "BI & visual analytics",
			items: ["KPI design", "dashboard planning", "data storytelling", "Power BI/Tableau portfolio in progress"]
		},
		{
			title: "Research software & reproducibility",
			items: ["Modularisation", "documentation", "validation logic", "workflow design", "scientific computing"]
		},
		{
			title: "Communication & stakeholder analytics",
			items: ["Decision-ready summaries", "technical documentation", "collaborator-facing tools", "insight briefs"]
		}
	],
	experience: [
		{
			role: "Postdoctoral Researcher / Research Software Developer",
			org: "UWA/ICRAR",
			text: "Re-engineering spatially resolved galaxy spectra workflows into reusable, documented research software."
		},
		{
			role: "Doctoral Researcher",
			org: "UWA/ICRAR",
			text: "Completed PhD research involving complex scientific datasets, statistical modelling, and reproducible analysis."
		},
		{
			role: "Research Assistant",
			org: "University of Hong Kong",
			text: "Supported astronomy research and teaching workflows, including observation planning and analysis materials."
		},
		{
			role: "Quantitative Developer Intern",
			org: "Mai Capital Ltd",
			text: "Built quantitative tooling in a finance context, connecting modelling work with practical software delivery."
		}
	],
	beyondWork: {
		text: "Outside work, I have recently taken up running and completed a 12 km local race. I also enjoy photography, including travel photography and telescope-based astronomical imaging where I capture and stack my own observations. Research collaborations have taken me across Europe, and I value the perspective that comes from working and travelling across different cultures.",
		items: [
			{
				title: "Running",
				text: "I started running recently and completed my first 12 km race in HBF Run for a Reason, which has become a practical way for me to build consistency and resilience outside work.",
				placeholder: "12 km"
			},
			{
				title: "Travel",
				text: "Research has also taken me across Europe for conferences and collaborations, alongside personal travel in Asia, shaping the way I work across cultures and disciplines.",
				image: "images/tibet.jpg",
				alt: "Travel photography from a mountain landscape"
			},
			{
				title: "Photography",
				text: "I also enjoy photography, from travel images to telescope-based astronomical imaging, including stacking my own observations of deep-sky objects.",
				image: "images/m8.jpg",
				alt: "Telescope-based astronomical image"
			}
		]
	}
};
