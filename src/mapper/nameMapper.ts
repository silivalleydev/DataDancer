import { Language, LanguageCode } from '../common/type';
import {
	kor_first_name,
	kor_last_name,
	eng_female_name,
	eng_male_name,
	jp_female_name,
	jp_male_name,
	jp_last_name,
	chi_male_name,
	chi_female_name,
	india_male_name,
	india_female_name,
	hindi_female_name,
	hindi_male_name,
	hindi_last_name,
	german_female_name,
	german_last_name,
	german_male_name,
} from '../data/nameData';

export type NameMap = {
    [key in Language]: {
        last: string[],
        male: string[],
        female: string[]
    }
};

export const nameMapper: NameMap = {
	[LanguageCode.korean]: {
        last: kor_last_name,
        male: kor_first_name,
        female: kor_first_name
    },
	[LanguageCode.japanese]: {
        last: jp_last_name,
        male: jp_male_name,
        female: jp_female_name
    },
	[LanguageCode.india]: {
        last: undefined,
        male: india_male_name,
        female: india_female_name
    },
	[LanguageCode.hindi]: {
        last: hindi_last_name,
        male: hindi_male_name,
        female: hindi_female_name
    },
	[LanguageCode.german]: {
        last: german_last_name,
        male: german_male_name,
        female: german_female_name
    },
	[LanguageCode.english]: {
        last: undefined,
        male: eng_male_name,
        female: eng_female_name
    },
	[LanguageCode.chinese]: {
        last: undefined,
        male: chi_male_name,
        female: chi_female_name
    },
};
