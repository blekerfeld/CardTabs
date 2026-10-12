/*!
 * CardTabs
 * https://github.com/blekerfeld/cardtabs
 *
 * Released under the MIT license
 */

(function(global){
	'use strict';

	const DEFAULTS = {
		theme: ''
	};

	function normalizeTargets(target){
		if (!target) {
			return [];
		}

		if (typeof target === 'string') {
			return Array.from(document.querySelectorAll(target));
		}

		if (target instanceof Element) {
			return [target];
		}

		if (target instanceof NodeList || Array.isArray(target)) {
			return Array.from(target).filter(Boolean);
		}

		return [];
	}

	function setActiveTab(container, tabName){
		const buttons = container.querySelectorAll('.card-tabs-bar button');
		const panels = container.querySelectorAll('.card-tabs-stack > [data-tab]');

		buttons.forEach((button) => {
			const isActive = button.dataset.tab === tabName;
			button.classList.toggle('active', isActive);
			button.setAttribute('aria-selected', String(isActive));
			button.tabIndex = isActive ? 0 : -1;
		});

		panels.forEach((panel) => {
			const isActive = panel.dataset.tab === tabName;
			panel.hidden = !isActive;
			panel.setAttribute('aria-hidden', String(!isActive));
		});
	}

	function init(root, options = {}){
		if (!(root instanceof Element)) {
			return null;
		}

		const settings = Object.assign({}, DEFAULTS, options);
		const panels = Array.from(root.children).filter((child) => child.matches('[data-tab]'));

		if (!panels.length) {
			return root;
		}

		root.classList.add('card-tabs');
		root.innerHTML = '';

		const bar = document.createElement('div');
		bar.className = 'card-tabs-bar';

		const stack = document.createElement('div');
		stack.className = 'card-tabs-stack';

		const initialTab = panels.find((panel) => panel.classList.contains('active'))?.dataset.tab || panels[0].dataset.tab;

		panels.forEach((panel) => {
			const name = panel.dataset.tab;
			const panelId = `card-tab-panel-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;
			const button = document.createElement('button');
			button.type = 'button';
			button.className = 'card-tabs-tab';
			button.dataset.tab = name;
			button.textContent = name;
			button.setAttribute('role', 'tab');
			button.setAttribute('aria-controls', panelId);
			button.addEventListener('click', () => setActiveTab(root, name));
			bar.appendChild(button);

			panel.classList.add('card-tabs-panel');
			panel.setAttribute('role', 'tabpanel');
			panel.id = panelId;
			panel.hidden = panel.dataset.tab !== initialTab;
			panel.setAttribute('aria-hidden', String(panel.dataset.tab !== initialTab));
			stack.appendChild(panel);
		});

		if (settings.theme) {
			bar.classList.add(settings.theme);
			stack.classList.add(settings.theme);
		}

		root.appendChild(bar);
		root.appendChild(stack);
		setActiveTab(root, initialTab);

		return root;
	}

	function cardTabs(target, options){
		const elements = normalizeTargets(target);
		return elements.map((element) => init(element, options));
	}

	global.CardTabs = { init, cardTabs };
	global.cardTabs = cardTabs;

	if (typeof Element !== 'undefined' && !Element.prototype.cardTabs) {
		Element.prototype.cardTabs = function(options){
			return init(this, options);
		};
	}

	if (typeof global.document !== 'undefined') {
		global.document.addEventListener('DOMContentLoaded', () => {
			const autoInit = global.document.querySelectorAll('[data-cardtabs]');
			autoInit.forEach((element) => {
				if (!element.dataset.cardtabsInitialized) {
					element.dataset.cardtabsInitialized = 'true';
					init(element, { theme: element.dataset.theme || '' });
				}
			});
		});
	}
}(typeof window !== 'undefined' ? window : globalThis));

