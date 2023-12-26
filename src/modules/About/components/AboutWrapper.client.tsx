'use client';

import { PropsWithChildren } from 'react';

import type { NextPageProps } from '@/@types/global';

interface Props {
  searchParams: NextPageProps['searchParams'];
}

function AboutWrapper(props: PropsWithChildren<Props>) {

  return (
    <div className="mb-10 flex w-full items-center justify-center">

    </div>
  );
}

export default AboutWrapper;
