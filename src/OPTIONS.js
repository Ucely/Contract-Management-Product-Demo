function getURL() {
  let list = [
    'https://www.bing.com',
    'https://www.jincenda.com',
    'https://mail.qq.com',
  ];
  return list[Math.floor(Math.random() * 3)];
}

const OPTIONS = [
  // 一、起草审批
  {
    name: '起草审批',
    children: [
      {
        name: '模板建立',
        URL: getURL(),
        desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
      },
      {
        name: '合同发起',
        URL: getURL(),
        desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
      },
      {
        name: '业务审批',
        URL: getURL(),
        desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
      },
      {
        name: '文本审阅',
      },
      {
        name: '内外协同',
      },
    ],
  },

  // 二、电子签署
  {
    name: '电子签署',
    children: [
      {
        name: '身份认证',
      },
      {
        name: '内部签署',
      },
      {
        name: '外发签署',
      },
      {
        name: '一致性校验',
      },
      {
        name: '印控管理',
      },
    ],
  },
  // 三、电子台账
  {
    name: '电子台账',
    children: [
      {
        name: '合同卡片',
      },
      {
        name: '合同台账',
      },
      {
        name: '收付台账',
      },
      {
        name: '历史合同台账',
      },
      {
        name: '风险台账',
      },
    ],
  },
  // 四、合同履约
  {
    name: '合同履约',
    children: [
      {
        name: '业务协同',
      },
      {
        name: '合同付款',
      },
      {
        name: '合同收款',
      },
      {
        name: '履约控制',
      },
      {
        name: '合同权限',
      },
    ],
  },
  // 五、合同归档
  {
    name: '合同归档',
    children: [
      {
        name: '一体化归档',
      },
      {
        name: '四性检测',
      },
      {
        name: '多维度检索',
      },
      {
        name: '全文检索',
      },
      {
        name: '合同借阅',
      },
    ],
  },
  // 六、合同报表
  {
    name: '合同报表',
    children: [
      {
        name: '领导驾驶舱',
      },
      {
        name: '签署报表',
      },
      {
        name: '办结报表',
      },
      {
        name: '风险报表',
      },
      {
        name: '效率报表',
      },
    ],
  },
];

export default OPTIONS;
