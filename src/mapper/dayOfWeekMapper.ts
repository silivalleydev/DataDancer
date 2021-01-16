import { Language, LanguageCode } from '../common/type';
import {
	engDayOfWeek,
	jpDayOfWeek,
	korDayOfWeek,
	indiaDayOfWeek,
	hindiDayOfWeek,
	cDayOfWeek,
	germanDayOfWeek,
} from '../data/dateData';

export type DayOfWeekMap = {
    [key in Language]: string[]
};

export const dayOfWeekMapper: DayOfWeekMap = {
	[LanguageCode.korean]: korDayOfWeek,
	[LanguageCode.japanese]: jpDayOfWeek,
	[LanguageCode.india]: indiaDayOfWeek,
	[LanguageCode.hindi]: hindiDayOfWeek,
	[LanguageCode.german]: germanDayOfWeek,
	[LanguageCode.english]: engDayOfWeek,
	[LanguageCode.chinese]: cDayOfWeek,
};
