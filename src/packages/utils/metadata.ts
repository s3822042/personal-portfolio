import type { Metadata, ResolvingMetadata } from 'next';

import type { NextPageProps } from '@/@types/global';

type ICallbackGenerateMetadata<T> = (props: NextPageProps<T>, parent: ResolvingMetadata) => Promise<Metadata>;

export function withMetadata(metadata: Metadata): Metadata {
  return metadata;
}

interface SocialMediaLinks {
  github: string;
  linkedin: string;
  facebook: string;
  twitter: string;
}

interface PersonalPortfolioMetadata<T extends SocialMediaLinks> {
  author: string;
  authorImageUrl: string;
  socialMedia: T;
}

export const personalMetadata: PersonalPortfolioMetadata<SocialMediaLinks> = {
  author: 'Vo Thanh Luan',
  authorImageUrl: 'https://imgur.com/wnuKAT5.jpg',
  socialMedia: {
    github: 'https://github.com/s3822042',
    linkedin: 'https://www.linkedin.com/in/vo-thanh-luan/',
    facebook: 'https://www.facebook.com/profile.php?id=100008659242682',
    twitter: 'https://twitter.com/luanvothanh__'
  }
};

/**
 * @usage
 * type Props = {
 *  params: { productId: string; }
 * }
 *
 * export const generateMetadata = withGenerateMetadata<Props>(async(props, parent) => {
 *   const productName = await getProductName(props.params.productId);
 *   return {
 *     title: productName
 *   };
 * })
 */
export function withGenerateMetadata<T>(cb: ICallbackGenerateMetadata<T>) {
  return (props: NextPageProps<T>, parent: ResolvingMetadata) => cb(props, parent);
}
