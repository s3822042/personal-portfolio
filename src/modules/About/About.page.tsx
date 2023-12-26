import { Suspense } from 'react';

import { type NextPageProps } from '@/@types/global';
import AboutWrapper from '@/modules/About/components/AboutWrapper.client';
import ProjectList from '@/modules/Project/components/ProjectList'

function AboutPage(props: NextPageProps) {
  const { searchParams } = props;
  return (
    <AboutWrapper searchParams={searchParams}>
      <Suspense fallback={<p className="text-center">Loading...</p>}>
        <ProjectList />
      </Suspense>
    </AboutWrapper>
  );
}

export default AboutPage;
