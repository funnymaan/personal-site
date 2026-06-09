export interface Course {
  title: string;
  number: string;
  link: string;
  university: string;
}

const courses: Course[] = [
  {
    title: 'C 程序设计',
    number: 'CS 101',
    link: 'https://www.gdut.edu.cn',
    university: '广东工业大学',
  },
  {
    title: '数据结构',
    number: 'CS 201',
    link: 'https://www.gdut.edu.cn',
    university: '广东工业大学',
  },
  {
    title: '高等数学',
    number: 'MATH 101',
    link: 'https://www.gdut.edu.cn',
    university: '广东工业大学',
  },
  {
    title: '线性代数',
    number: 'MATH 201',
    link: 'https://www.gdut.edu.cn',
    university: '广东工业大学',
  },
];

export default courses;
