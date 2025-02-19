import { ImageResponse } from 'next/og';

import { Smiley } from '@/app/components/atoms/smiley';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(<Smiley favicon />, {
    ...size,
  });
}
