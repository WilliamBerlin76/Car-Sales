export const PLUS_FEATURE = 'PLUS_FEATURE';
export const plusFeat = feat => {
    console.log(feat)
  return { type: PLUS_FEATURE, payload: feat };
};
