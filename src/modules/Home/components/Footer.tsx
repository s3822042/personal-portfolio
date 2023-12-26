import IconFacebook from '#/icons/facebook.svg';
import IconGithub from '#/icons/github.svg';
import IconLinkedin from '#/icons/linkedin.svg';
import NextLink from '@/packages/components/base/Navigations/NextLink';
import { personalMetadata } from '@/packages/utils/metadata';

function Footer() {
  return (
    <div className="w-full px-10 text-gray-500 dark:text-gray-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between py-4 sm:flex-row">
        <div className="text-center">
          <div>
            {`© ${new Date().getFullYear()}`}{' '}
            <span className="text-lg font-bold text-yellow-400">
              {personalMetadata.author}
            </span>
            . All Rights Reserved.
          </div>
        </div>
        <div className="mt-2 text-center text-xl text-gray-500 dark:text-gray-400 md:mt-0">
          <NextLink href={personalMetadata.socialMedia.github} className="mx-1 inline-block pt-1">
            <IconGithub className="social-media-icons"
            />
          </NextLink>
          <NextLink href={personalMetadata.socialMedia.linkedin} className="mx-1 inline-block pt-1">

            <IconLinkedin

              className="social-media-icons" />

          </NextLink>
          <NextLink href={personalMetadata.socialMedia.facebook} className="mx-1 inline-block pt-1">
            <IconFacebook               className="social-media-icons" />

          </NextLink>
        </div>
      </div>
    </div>
  );
}

export default Footer;
