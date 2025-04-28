import { getCurrentLang, setCurrentLang } from '../locale_service';

export const wowheadSupportedLanguages: Record<string, string> = {
	'en': 'English',
	'cn': '简体中文',
	'de': 'Deutsch',
	'es': 'Español',
	'fr': 'Français',
	'it': 'Italiano',
	'ko': '한국어',
	'pt': 'Português Brasileiro',
	'ru': 'Русский',
};

// Returns a 2-letter language code if it is a wowhead-supported language, or '' otherwise.
export function getBrowserLanguageCode(): string {
	const browserLang = (navigator.language || '').substring(0, 2);
	if (Object.keys(wowheadSupportedLanguages).includes(browserLang)) {
		return browserLang;
	} else {
		return '';
	}
}

export function getLanguageCode(): string {
	return getCurrentLang();
}

export function getWowheadLanguagePrefix(): string {
	const lang = getCurrentLang();
	return lang === 'en' ? '' : lang + '/';
}

export function setLanguageCode(newLang: string) {
	setCurrentLang(newLang);
}
