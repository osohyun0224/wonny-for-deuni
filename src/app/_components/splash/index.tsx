'use client';
import * as React from 'react';
import { SplashWrapper } from './style';
import Image from 'next/image';
import {  Images } from '../../../styles/images'

export default function Splash(): React.JSX.Element {
  return (
    <SplashWrapper>
      <div className="main">
        <Image src={Images.ico_woonny_logo} alt={'Wonny'} />
      </div>
    </SplashWrapper>
  );
}
