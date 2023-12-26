import IconFacebook from '#/icons/facebook.svg';
import IconGithub from '#/icons/github.svg';
import IconLinkedin from '#/icons/linkedin.svg';
import NextLink from '@/packages/components/base/Navigations/NextLink';
import { personalMetadata } from '@/packages/utils/metadata';

import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.container}>
      <div className="relative h-auto w-[1280px] flex-none">
        <div className="contents">
          <div className={styles['inner-container']}>
            <div className={styles['heading-group']}>
              <div className={styles['title-group']}>
                <div>
                  <h1 className={styles.title}>Let’s create your next big idea.</h1>
                </div>
              </div>
              <button className={styles['button-text']}>
                Schedule a call
              </button>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <ul className="flex space-x-8">
                <li className={styles['navigation-item']}>Home</li>
                <li className={styles['navigation-item']}>About</li>
                <li className={styles['navigation-item']}>Contact</li>
                <NextLink href={personalMetadata.authorBlog}>
                  <li className={styles['navigation-item']}>Blog</li>
                </NextLink>
              </ul>
              <div className="flex space-x-4">
                <NextLink href={personalMetadata.socialMedia.github}>
                  <IconGithub className={styles['social-media-icons']} />
                </NextLink>
                <NextLink href={personalMetadata.socialMedia.linkedin}>
                  <IconLinkedin className={styles['social-media-icons']} />
                </NextLink>
                <NextLink href={personalMetadata.socialMedia.facebook}>
                  <IconFacebook className={styles['social-media-icons']} />
                </NextLink>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

  );
}

export default Footer;
