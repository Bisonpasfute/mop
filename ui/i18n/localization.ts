import i18n from './config';
import { getLang, setLang, supportedLanguages } from './locale_service';

export function translateClass(className: string): string {
	const normalizedClassName = className.toLowerCase().replace(/_/g, '');
	const i18nKey = normalizedClassName === 'deathknight' ? 'death_knight' : normalizedClassName;
	return i18n.t(`common.classes.${i18nKey}`);
}

export function translateSpec(className: string, specName: string): string {
	const normalizedClassName = className.toLowerCase().replace(/_/g, '');
	const classKey = normalizedClassName === 'deathknight' ? 'death_knight' : normalizedClassName;
	const specKey = specName.toLowerCase();
	return i18n.t(`common.specs.${classKey}.${specKey}`);
}

export function extractClassAndSpecFromLink(link: HTMLAnchorElement): { className?: string; specName?: string } {
	const parts = link.pathname.split('/').filter(Boolean);
	if (parts.length >= 2) {
		return {
			className: parts[1],
			specName: parts[2]
		};
	}
	return {};
}

export function extractClassAndSpecFromDataAttributes(): { className: string; specName: string } | null {
	const titleElement = document.querySelector('title');
	if (titleElement) {
		const className = titleElement.getAttribute('data-class');
		const specName = titleElement.getAttribute('data-spec');
		if (className && specName) {
			return { className, specName };
		}
	}

	const metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
	if (metaDescription) {
		const className = metaDescription.getAttribute('data-class');
		const specName = metaDescription.getAttribute('data-spec');
		if (className && specName) {
			return { className, specName };
		}
	}
	return null;
}

export function updateLanguageDropdown(): void {
	const dropdownMenu = document.querySelector('.dropdown-menu[aria-labelledby="languageDropdown"]');
	if (!dropdownMenu) return;

	const currentLang = getLang();
	dropdownMenu.innerHTML = '';

	Object.entries(supportedLanguages).forEach(([code, name]) => {
		const li = document.createElement('li');
		const a = document.createElement('a');
		a.className = `dropdown-item ${code === currentLang ? 'active' : ''}`;
		a.href = '#';
		a.dataset.lang = code;
		a.textContent = name;
		a.onclick = e => {
			e.preventDefault();
			setLang(code);
			window.location.reload();
		};
		li.appendChild(a);
		dropdownMenu.appendChild(li);
	});
}

export function updateDataI18nElements(): void {
	document.querySelectorAll('[data-i18n]').forEach(element => {
		const key = element.getAttribute('data-i18n');
		if (key) {
			element.textContent = i18n.t(key);
		}
	});
}

export function updateSimPageMetadata(): void {
	const classSpecInfo = extractClassAndSpecFromDataAttributes();
	if (!classSpecInfo) return;

	const { className, specName } = classSpecInfo;

	const translatedClass = translateClass(className);
	const translatedSpec = translateSpec(className, specName);

	const titleElement = document.querySelector('title');
	if (titleElement) {
		const titleTemplate = i18n.t('sim.title');
		titleElement.textContent = titleTemplate
			.replace('{class}', translatedClass)
			.replace('{spec}', translatedSpec);
	}

	const metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
	if (metaDescription) {
		const descriptionTemplate = i18n.t('sim.description');
		metaDescription.content = descriptionTemplate
			.replace('{class}', translatedClass)
			.replace('{spec}', translatedSpec);
	}
}

export function updateSimLinks(): void {
	document.querySelectorAll('.sim-link-content').forEach(content => {
		const classLabel = content.querySelector('.sim-link-label');
		const specTitle = content.querySelector('.sim-link-title');
		const link = content.closest('a');

		if (classLabel && specTitle && link instanceof HTMLAnchorElement) {
			const info = extractClassAndSpecFromLink(link);
			if (info && info.className && info.specName) {
				classLabel.textContent = translateClass(info.className);
				specTitle.textContent = translateSpec(info.className, info.specName);
			}
		} else if (specTitle && link instanceof HTMLAnchorElement) {
			const info = extractClassAndSpecFromLink(link);
			if (info && info.className) {
				specTitle.textContent = translateClass(info.className);
			}
		}
	});
}

export interface LocalizationOptions {
	updateSimMetadata?: boolean;
	updateSimLinks?: boolean;
	updateLanguageDropdown?: boolean;
}

export function updateTranslations(options: LocalizationOptions = {}): void {
	document.documentElement.lang = getLang();
	updateDataI18nElements();

	if (options.updateSimMetadata) {
		updateSimPageMetadata();
	}

	if (options.updateSimLinks) {
		updateSimLinks();
	}

	if (options.updateLanguageDropdown) {
		updateLanguageDropdown();
	}
}

export function initializeLocalization(options: LocalizationOptions = {}): void {
	if (!i18n.isInitialized) {
		i18n.init();
	}

	i18n.on('languageChanged', () => {
		updateTranslations(options);
	});

	updateTranslations(options);
}

export function localizeHomePage(): void {
	const homeOptions: LocalizationOptions = {
		updateSimLinks: true,
		updateLanguageDropdown: true
	};

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', () => initializeLocalization(homeOptions));
	} else {
		initializeLocalization(homeOptions);
	}
}

export function localizeSimPage(): void {
	const simOptions: LocalizationOptions = {
		updateSimMetadata: true
	};

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', () => initializeLocalization(simOptions));
	} else {
		initializeLocalization(simOptions);
	}
}
