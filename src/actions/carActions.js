export const PLUS_FEATURE = 'PLUS_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const plusFeat = feat => {
    console.log(feat)
  return { type: PLUS_FEATURE, payload: feat };
};

export const removeFeat = feat => {
    console.log(feat)
    return{ type: REMOVE_FEATURE, payload: feat}
}