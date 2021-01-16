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
	german_male_name
} from '../data/nameData';

type NameMap = {
    key: string,
    lastName: string[],
    
}

export const nameMapper = [
    {
        key: 'kor',
        lastName: "",
        maleName: "",
        femaleName: "",
    }
]