(function () {
	var data = window.siteData || {};

	function escapeHtml(value) {
		return String(value || "")
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#039;");
	}

	function renderTags(tags) {
		return '<ul class="tag-list">' + (tags || []).map(function (tag) {
			return '<li>' + escapeHtml(tag) + '</li>';
		}).join("") + '</ul>';
	}

	function renderLinks(links) {
		if (!links || !links.length) {
			return "";
		}

		return '<div class="project-links">' + links.map(function (link) {
			var icon = link.icon ? '<span class="icon ' + escapeHtml(link.icon) + '" aria-hidden="true"></span>' : "";
			return '<a class="button" href="' + escapeHtml(link.url) + '" target="_blank" rel="noreferrer">' + icon + escapeHtml(link.label) + '</a>';
		}).join("") + '</div>';
	}

	function renderHighlights(highlights) {
		return '<ul class="project-highlights">' + (highlights || []).map(function (item) {
			return '<li>' + escapeHtml(item) + '</li>';
		}).join("") + '</ul>';
	}

	function renderPlaceholderVisual(variant) {
		if (variant === "dashboard") {
			return '<div class="dashboard-layout" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>';
		}

		if (variant === "pipeline") {
			return '<div class="pipeline-steps" aria-hidden="true"><span>Ingest</span><span>Transform</span><span>Validate</span></div>';
		}

		if (variant === "architecture") {
			return '<div class="architecture-flow" aria-hidden="true"><span>Data</span><span>Workflow</span><span>Outputs</span></div>';
		}

		if (variant === "ai") {
			return '<div class="ai-log" aria-hidden="true"><span></span><span></span><span></span><span></span></div>';
		}

		return '<div class="forecast-bars" aria-hidden="true"><span></span><span></span><span></span><span></span></div>';
	}

	function renderDemo(demo, title) {
		if (!demo) {
			return "";
		}

		if (demo.type === "image") {
			return '<figure class="project-demo">' +
				'<div class="media-frame" data-fallback="' + escapeHtml(title) + ' visual placeholder">' +
				'<img src="' + escapeHtml(demo.image) + '" alt="' + escapeHtml(demo.alt || title) + '" loading="lazy" />' +
				'<span class="image-fallback">' + escapeHtml(title) + ' visual placeholder</span>' +
				'</div>' +
				'<figcaption>' + escapeHtml(demo.caption || "") + '</figcaption>' +
				'</figure>';
		}

		return '<aside class="project-demo" aria-label="' + escapeHtml(title) + ' demo placeholder">' +
			'<div class="project-demo__visual placeholder-visual">' +
			renderPlaceholderVisual(demo.variant) +
			'<p class="placeholder-visual__title">' + escapeHtml(demo.title) + '</p>' +
			'<p class="placeholder-visual__detail">' + escapeHtml(demo.detail) + '</p>' +
			'</div>' +
			'<div class="project-demo__caption">Placeholder demo area</div>' +
			'</aside>';
	}

	function renderSnapshot() {
		var target = document.querySelector('[data-render="snapshot"]');
		if (!target) {
			return;
		}

		target.innerHTML = (data.snapshot || []).map(function (item, index) {
			return '<article class="snapshot-card">' +
				'<span class="snapshot-card__label" aria-hidden="true">' + String(index + 1).padStart(2, "0") + '</span>' +
				'<h3>' + escapeHtml(item.title) + '</h3>' +
				'<p>' + escapeHtml(item.text) + '</p>' +
				'</article>';
		}).join("");
	}

	function renderProjects() {
		var target = document.querySelector('[data-render="projects"]');
		if (!target) {
			return;
		}

		target.innerHTML = (data.projects || []).map(function (project) {
			return '<article class="project-card">' +
				'<div class="project-card__body">' +
				'<div class="project-card__header">' +
				'<h3>' + escapeHtml(project.title) + '</h3>' +
				'<span class="project-card__status">' + escapeHtml(project.status) + '</span>' +
				'</div>' +
				'<p class="project-card__description">' + escapeHtml(project.description) + '</p>' +
				renderTags(project.tags) +
				renderHighlights(project.highlights) +
				renderLinks(project.links) +
				'</div>' +
				renderDemo(project.demo, project.title) +
				'</article>';
		}).join("");
	}

	function renderCapabilities() {
		var target = document.querySelector('[data-render="capabilities"]');
		if (!target) {
			return;
		}

		target.innerHTML = (data.capabilities || []).map(function (group) {
			return '<article class="capability-card">' +
				'<h3>' + escapeHtml(group.title) + '</h3>' +
				'<ul>' + (group.items || []).map(function (item) {
					return '<li>' + escapeHtml(item) + '</li>';
				}).join("") + '</ul>' +
				'</article>';
		}).join("");
	}

	function renderExperience() {
		var target = document.querySelector('[data-render="experience"]');
		if (!target) {
			return;
		}

		target.innerHTML = (data.experience || []).map(function (item) {
			return '<article class="timeline-item">' +
				'<div>' +
				'<h3 class="timeline-item__role">' + escapeHtml(item.role) + '</h3>' +
				'<p class="timeline-item__org">' + escapeHtml(item.org) + '</p>' +
				'</div>' +
				'<p>' + escapeHtml(item.text) + '</p>' +
				'</article>';
		}).join("");
	}

	function renderBeyondWork() {
		var summary = document.querySelector('[data-render="beyond-work-summary"]');
		var target = document.querySelector('[data-render="beyond-work"]');
		var section = data.beyondWork || {};

		if (summary) {
			summary.textContent = section.text || "";
		}

		if (!target) {
			return;
		}

		target.innerHTML = (section.items || []).map(function (item) {
			var visual = item.image ?
				'<div class="beyond-card__thumb media-frame" data-fallback="' + escapeHtml(item.title) + ' image placeholder">' +
				'<img src="' + escapeHtml(item.image) + '" alt="' + escapeHtml(item.alt || item.title) + '" loading="lazy" />' +
				'<span class="image-fallback">' + escapeHtml(item.title) + ' image placeholder</span>' +
				'</div>' :
				'<div class="beyond-card__thumb beyond-card__placeholder" aria-hidden="true">' + escapeHtml(item.placeholder || item.title) + '</div>';

			return '<article class="beyond-card">' +
				visual +
				'<div class="beyond-card__body">' +
				'<h3>' + escapeHtml(item.title) + '</h3>' +
				'<p>' + escapeHtml(item.text) + '</p>' +
				'</div>' +
				'</article>';
		}).join("");
	}

	function renderYear() {
		var target = document.querySelector('[data-render="year"]');
		if (target) {
			target.textContent = String(new Date().getFullYear());
		}
	}

	function bindImageFallbacks() {
		document.querySelectorAll(".media-frame img").forEach(function (image) {
			image.addEventListener("error", function () {
				var frame = image.closest(".media-frame");
				if (frame) {
					frame.classList.add("is-missing");
				}
				image.remove();
			});
		});
	}

	function bindActiveNavigation() {
		var links = Array.from(document.querySelectorAll(".site-nav a"));
		var sections = links.map(function (link) {
			return document.querySelector(link.getAttribute("href"));
		}).filter(Boolean);

		if (!("IntersectionObserver" in window) || !sections.length) {
			return;
		}

		var observer = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (!entry.isIntersecting) {
					return;
				}
				links.forEach(function (link) {
					link.removeAttribute("aria-current");
					if (link.getAttribute("href") === "#" + entry.target.id) {
						link.setAttribute("aria-current", "true");
					}
				});
			});
		}, {
			rootMargin: "-35% 0px -55% 0px",
			threshold: 0
		});

		sections.forEach(function (section) {
			observer.observe(section);
		});
	}

	function init() {
		renderSnapshot();
		renderProjects();
		renderCapabilities();
		renderExperience();
		renderBeyondWork();
		renderYear();
		bindImageFallbacks();
		bindActiveNavigation();
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", init);
	} else {
		init();
	}
})();
