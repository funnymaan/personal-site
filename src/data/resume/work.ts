/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: '广东工业大学',
    position: '人工智能专业本科生',
    url: 'https://www.gdut.edu.cn',
    startDate: '2024-09-01',
    summary:
      '人工智能专业在读，正在学习编程基础与 Web 开发技术，积极参加校园活动与社会实践。',
    highlights: [
      '参加校园十大歌手比赛',
      '参与大学生暑期"三下乡"社会实践活动',
      '积极参与假期志愿服务活动',
    ],
  },
];

export default work;
