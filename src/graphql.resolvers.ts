import { Language, Timezone } from './graphql';

export const languageResolver: Record<keyof typeof Language, any> = {
  EN_US: 'en-US',
  JA_JP: 'ja-JP',
  ZH_CN: 'zh-CN',
};

export const timezoneResolver: Record<keyof typeof Timezone, any> = {
  ASIA_TOKYO: 'Asia/Tokyo',
  ASIA_SINGAPORE: 'Asia/Singapore',
  ASIA_BANGKOK: 'Asia/Bangkok',
  ASIA_YANGON: 'Asia/Yangon',
  ASIA_DHAKA: 'Asia/Dhaka',
  ASIA_KOLKATA: 'Asia/Kolkata',
};
