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
			var fitClass = demo.fit === "contain" ? " project-demo--contain" : "";
			var label = "Open larger view of " + title;
			return '<figure class="project-demo' + fitClass + '">' +
				'<div class="media-frame" data-fallback="' + escapeHtml(title) + ' visual placeholder">' +
				'<button class="image-zoom-button" type="button" data-full-src="' + escapeHtml(demo.image) + '" data-alt="' + escapeHtml(demo.alt || title) + '" data-caption="' + escapeHtml(demo.caption || "") + '" aria-label="' + escapeHtml(label) + '" title="' + escapeHtml(label) + '">' +
				'<img src="' + escapeHtml(demo.image) + '" alt="' + escapeHtml(demo.alt || title) + '" loading="lazy" />' +
				'</button>' +
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

	function renderProjects() {
		var target = document.querySelector('[data-render="projects"]');
		if (!target) {
			return;
		}

		target.innerHTML = (data.projects || []).filter(function (project) {
			return !project.hidden;
		}).map(function (project) {
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
			var periodHtml = item.period
				? '<p class="timeline-item__period">' + escapeHtml(item.period) + '</p>'
				: "";
			var detailsHtml = (item.details && item.details.length)
				? '<ul class="timeline-item__details">' +
					item.details.map(function (d) {
						return '<li>' + escapeHtml(d) + '</li>';
					}).join("") +
					'</ul>'
				: "";
			return '<article class="timeline-item">' +
				'<div class="timeline-item__meta">' +
				'<h3 class="timeline-item__role">' + escapeHtml(item.role) + '</h3>' +
				'<p class="timeline-item__org">' + escapeHtml(item.org) + '</p>' +
				periodHtml +
				'</div>' +
				'<div class="timeline-item__content">' +
				'<p class="timeline-item__summary">' + escapeHtml(item.text) + '</p>' +
				detailsHtml +
				'</div>' +
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
		var targets = document.querySelectorAll('[data-render="year"]');
		targets.forEach(function (target) {
			target.textContent = String(new Date().getFullYear());
		});
	}

	function bindImageFallbacks() {
		document.querySelectorAll(".media-frame img").forEach(function (image) {
			image.addEventListener("error", function () {
				var frame = image.closest(".media-frame");
				var trigger = image.closest(".image-zoom-button");
				if (frame) {
					frame.classList.add("is-missing");
				}
				if (trigger) {
					trigger.remove();
				} else {
					image.remove();
				}
			});
		});
	}

	var activeZoomTrigger = null;

	function ensureImageViewer() {
		var existing = document.querySelector(".image-viewer");
		if (existing) {
			return existing;
		}

		var viewer = document.createElement("div");
		viewer.className = "image-viewer";
		viewer.hidden = true;
		viewer.setAttribute("role", "dialog");
		viewer.setAttribute("aria-modal", "true");
		viewer.setAttribute("aria-label", "Expanded project visual");
		viewer.innerHTML = '<div class="image-viewer__backdrop" data-image-viewer-close></div>' +
			'<div class="image-viewer__panel">' +
			'<button class="image-viewer__close" type="button" data-image-viewer-close aria-label="Close larger view" title="Close larger view">' +
			'<span class="icon fas fa-times" aria-hidden="true"></span>' +
			'</button>' +
			'<img class="image-viewer__image" alt="" />' +
			'<p class="image-viewer__caption"></p>' +
			'</div>';
		document.body.appendChild(viewer);
		viewer.addEventListener("click", function (event) {
			var closeTarget = event.target.closest("[data-image-viewer-close]");
			if (closeTarget) {
				closeImageViewer();
			}
		});
		return viewer;
	}

	function openImageViewer(trigger) {
		var viewer = ensureImageViewer();
		var image = viewer.querySelector(".image-viewer__image");
		var caption = viewer.querySelector(".image-viewer__caption");
		var closeButton = viewer.querySelector(".image-viewer__close");

		activeZoomTrigger = trigger;
		image.src = trigger.getAttribute("data-full-src") || "";
		image.alt = trigger.getAttribute("data-alt") || "";
		caption.textContent = trigger.getAttribute("data-caption") || "";
		viewer.hidden = false;
		document.body.classList.add("is-viewer-open");
		closeButton.focus();
	}

	function closeImageViewer() {
		var viewer = document.querySelector(".image-viewer");
		if (!viewer || viewer.hidden) {
			return;
		}

		viewer.hidden = true;
		viewer.querySelector(".image-viewer__image").removeAttribute("src");
		document.body.classList.remove("is-viewer-open");

		if (activeZoomTrigger) {
			activeZoomTrigger.focus();
			activeZoomTrigger = null;
		}
	}

	function bindImageViewer() {
		document.addEventListener("click", function (event) {
			var trigger = event.target.closest(".image-zoom-button");
			if (trigger) {
				openImageViewer(trigger);
			}
		});

		document.addEventListener("keydown", function (event) {
			if (event.key === "Escape") {
				closeImageViewer();
			}
		});
	}

	function init() {
		renderProjects();
		renderCapabilities();
		renderExperience();
		renderBeyondWork();
		renderYear();
		bindImageFallbacks();
		bindImageViewer();
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", init);
	} else {
		init();
	}
})();
