export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
}

const data: Project[] = [
  {
    title: '个人网站',
    subtitle: '从零搭建的个人主页',
    link: 'https://github.com/funnyman/personal-site',
    image: '/images/projects/personal-site.jpg',
    date: '2026-06-09',
    desc: '基于 Next.js 构建的个人网站，支持亮色/暗色主题切换，包含关于、简历、项目展示等页面。从零开始学习 Web 开发，这是第一个实践项目。',
    tech: ['TypeScript', 'React', 'Next.js', 'CSS'],
    featured: true,
  },
];

export default data;
