export default {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCDN: process.env.NEXT_PUBLIC_SANITY_USE_CDN === 'true',
};
