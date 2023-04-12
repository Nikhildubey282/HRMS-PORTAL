import {toTitleCase} from './messages';
import { PATTERN } from './patterns';

export const PATTERN_ERRORS = (pattern:string | RegExp, key:string) :any => {
    if (pattern == PATTERN.phone) {
        return `Please enter a valid Mobile no.`;
    }
    if (pattern == PATTERN.email) {
        return `Please enter a valid ${key.toLowerCase()}`;
    }
    if (pattern == PATTERN.alphaNumeric) {
        return `Please enter a valid ${key.toLowerCase()}`;
    }
    if (pattern == PATTERN.youtubeID) {
        return `Please enter a valid ${key.toLowerCase()}`;
    }
    if (pattern == PATTERN.password) {
        return `Password must contain one capital letter,one special character and one number`;
    }
    if (pattern == PATTERN.name) {
        return `Spaces,number and special character are not allowed`;
    }
    if (pattern == PATTERN.boothNumber) {
        return `${toTitleCase(key)} must contain only digits`;
    }
    if(pattern ==PATTERN.onlyNUmber){
      return`Please enter a correct Input`;
    }
    // return 'nikhil';
};
