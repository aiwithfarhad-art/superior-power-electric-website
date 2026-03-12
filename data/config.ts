import { business } from "./business";

// Compatibility layer for Lovable components that import siteConfig
export const siteConfig = {
  name: business.name,
  phone: business.phone,
  phoneFormatted: business.phoneFull,
  email: business.email,
  address: business.address,
  esaLicense: business.esaLicense,
  yearsExperience: business.yearsInBusiness,
  googleRating: String(business.googleReviews.rating),
  googleReviewCount: business.googleReviews.count,
  social: business.social,
  tagline: business.tagline,
  domain: business.domain,
};
