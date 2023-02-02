export interface IExperiencesData {
  company: string;
  role: string;
  entryDate: string;
  status: string;
  desc: string[];
  icon: string;
}
export interface IIconData {
  icon: string;
  link: string;
  color?: string;
}

export type IIcons = {
  twitter: IIconData;
  github: IIconData;
  linkedin: IIconData;
  nextjs: IIconData;
  tailwind: IIconData;
  typescript: IIconData;
  vercel: IIconData;
  react: IIconData;
  redux: IIconData;
  arduino: IIconData;
  C: IIconData;
  html: IIconData;
  css: IIconData;
  javascript: IIconData;
  bootstrap: IIconData;
  sass: IIconData;
  vue: IIconData;
  node: IIconData;
  windicss: IIconData;
  git: IIconData;
  photoshop: IIconData;
  illustrator: IIconData;
  figma: IIconData;
};
