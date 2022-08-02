type BlogPost = {
  slug: string;
  url: string;
  locale: LocaleShortCode;
  title: string;
  subtitle: string;
  tag: string;
  author: string;
  date: Date;
  dateFormatted: string;
  showPricingModule: boolean;
  coverImageUrl: string;
  webpCoverImageUrl: string;
  featuredImageUrl: string;
  webpFeaturedImageUrl: string;
  content: string;
  htmlContent: string;
};
