const component = require('./index.jsx');
export default {
  src: 'https://zos.alipayobjects.com/rmsportal/UTHsfGMNXXbpEoL.jpg',
  component,
  text: '带用户型',
  dataSource: [
    {
      key: 'height',
      the: 'style',
      name: '区块高度',
      value: 64,
    },
    {
      key: 'block1',
      name: '内容修改',
      value: {
        logo: {
          name: 'logo图片',
          value: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
        },
        menu1: {
          name: '导航一',
          value: '导航一',
        },
        menu2: {
          name: '导航二',
          value: '导航二',
        },
        menu3: {
          name: '导航三',
          value: '导航三',
        },
        menu4: {
          name: '导航四',
          value: '导航四',
        },
      },
    },
  ],
};
