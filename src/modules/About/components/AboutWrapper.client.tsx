'use client';

import { PropsWithChildren, useState } from 'react';

import type { NextPageProps } from '@/@types/global';
import Message from '@/modules/About/components/Message';
import Image from '@/packages/components/base/Images/Image';
import Link from '@/packages/components/base/Navigations/Link';
import useMounted from '@/packages/hooks/useMounted';

import styles from './AboutWrapper.client.module.css';

interface Props {
  searchParams: NextPageProps['searchParams'];
}

function AboutWrapper(props: PropsWithChildren<Props>) {
  const { children, searchParams } = props;
  const [maintainer, setMaintainer] = useState('');

  useMounted(() => {
    const Aborter = new AbortController();
    fetch('https://api.quran.gading.dev/', { signal: Aborter.signal })
      .then(raw => raw.json())
      .then(data => setMaintainer(data.maintaner));
    return () => {
      Aborter.abort();
    };
  });

  return (
    <div className="mb-10 flex w-full items-center justify-center">
      <main className="mt-10">
        <h1 className="mb-10 text-center text-xl">
          {maintainer || 'Loading...'}
        </h1>

        <div className={styles.avatar}>
          <Image
            effect="blur"
            src="https://gading.dev/assets/images/authors/gading-talks.jpeg"
            size={200}
            alt="Sutan Gading Fadhillah Nasution"
            wrapperClassName="rounded-full overflow-hidden cursor-grab active:cursor-grabbing"
          />
        </div>

        <div className="my-8 flex flex-col items-center justify-center">
          <p>
            Passed Query:
          </p>
          <p>
            {JSON.stringify(searchParams)}
          </p>
          <Message messages={searchParams.text?.toString()} />
          <Link href="/" className="mt-5 text-center text-fuchsia-400">
            Back to Homepage
          </Link>
        </div>

        {children}
      </main>
    </div>
  );
}

export default AboutWrapper;
