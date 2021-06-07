import sanityClient from '@sanity/client';
import siteConfig from '../config/siteConfig';

export const client = sanityClient({
  projectId: siteConfig.projectId,
  dataset: siteConfig.dataset,
  useCdn: true,
  apiVersion: '2021-06-06'
});
