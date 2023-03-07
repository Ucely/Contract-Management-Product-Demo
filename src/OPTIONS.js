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
        scene: [
          {
            title: '模板库',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板提交',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板审批',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
        ],
      },
      {
        name: '合同发起',
        URL: getURL(),
        desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
        scene: [
          {
            title: '模板库',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板提交',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板审批',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
        ],
      },
      {
        name: '业务审批',
        URL: getURL(),
        desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
        scene: [
          {
            title: '模板库',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板提交',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板审批',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
        ],
      },
      {
        name: '文本审阅',
        URL: getURL(),
        desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
        scene: [
          {
            title: '模板库',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板提交',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板审批',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
        ],
      },
      {
        name: '内外协同',
        URL: getURL(),
        desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
        scene: [
          {
            title: '模板库',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板提交',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板审批',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
        ],
      },
    ],
  },

  // 二、电子签署
  {
    name: '电子签署',
    children: [
      {
        name: '身份认证',
        URL: getURL(),
        desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
        scene: [
          {
            title: '模板库',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板提交',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板审批',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
        ],
      },
      {
        name: '内部签署',
        URL: getURL(),
        desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
        scene: [
          {
            title: '模板库',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板提交',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板审批',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
        ],
      },
      {
        name: '外发签署',
        URL: getURL(),
        desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
        scene: [
          {
            title: '模板库',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板提交',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板审批',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
        ],
      },
      {
        name: '一致性校验',
        URL: getURL(),
        desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
        scene: [
          {
            title: '模板库',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板提交',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板审批',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
        ],
      },
      {
        name: '印控管理',
        URL: getURL(),
        desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
        scene: [
          {
            title: '模板库',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板提交',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板审批',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
        ],
      },
    ],
  },

  // 三、电子台账
  {
    name: '电子台账',
    children: [
      {
        name: '合同卡片',
        URL: getURL(),
        desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
        scene: [
          {
            title: '模板库',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板提交',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板审批',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
        ],
      },
      {
        name: '合同台账',
        URL: getURL(),
        desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
        scene: [
          {
            title: '模板库',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板提交',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板审批',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
        ],
      },
      {
        name: '收付台账',
        URL: getURL(),
        desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
        scene: [
          {
            title: '模板库',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板提交',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板审批',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
        ],
      },
      {
        name: '历史合同台账',
        URL: getURL(),
        desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
        scene: [
          {
            title: '模板库',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板提交',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板审批',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
        ],
      },
      {
        name: '风险台账',
        URL: getURL(),
        desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
        scene: [
          {
            title: '模板库',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板提交',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板审批',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
        ],
      },
    ],
  },

  // 四、合同履约
  {
    name: '合同履约',
    children: [
      {
        name: '业务协同',
        URL: getURL(),
        desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
        scene: [
          {
            title: '模板库',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板提交',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板审批',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
        ],
      },
      {
        name: '合同付款',
        URL: getURL(),
        desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
        scene: [
          {
            title: '模板库',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板提交',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板审批',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
        ],
      },
      {
        name: '合同收款',
        URL: getURL(),
        desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
        scene: [
          {
            title: '模板库',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板提交',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板审批',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
        ],
      },
      {
        name: '履约控制',
        URL: getURL(),
        desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
        scene: [
          {
            title: '模板库',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板提交',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板审批',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
        ],
      },
      {
        name: '合同权限',
        URL: getURL(),
        desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
        scene: [
          {
            title: '模板库',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板提交',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板审批',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
        ],
      },
    ],
  },

  // 五、合同归档
  {
    name: '合同归档',
    children: [
      {
        name: '一体化归档',
        URL: getURL(),
        desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
        scene: [
          {
            title: '模板库',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板提交',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板审批',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
        ],
      },
      {
        name: '四性检测',
        URL: getURL(),
        desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
        scene: [
          {
            title: '模板库',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板提交',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板审批',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
        ],
      },
      {
        name: '多维度检索',
        URL: getURL(),
        desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
        scene: [
          {
            title: '模板库',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板提交',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板审批',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
        ],
      },
      {
        name: '全文检索',
        URL: getURL(),
        desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
        scene: [
          {
            title: '模板库',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板提交',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板审批',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
        ],
      },
      {
        name: '合同借阅',
        URL: getURL(),
        desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
        scene: [
          {
            title: '模板库',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板提交',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板审批',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
        ],
      },
    ],
  },

  // 六、合同报表
  {
    name: '合同报表',
    children: [
      {
        name: '领导驾驶舱',
        URL: getURL(),
        desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
        scene: [
          {
            title: '模板库',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板提交',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板审批',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
        ],
      },
      {
        name: '签署报表',
        URL: getURL(),
        desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
        scene: [
          {
            title: '模板库',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板提交',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板审批',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
        ],
      },
      {
        name: '办结报表',
        URL: getURL(),
        desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
        scene: [
          {
            title: '模板库',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板提交',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板审批',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
        ],
      },
      {
        name: '风险报表',
        URL: getURL(),
        desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
        scene: [
          {
            title: '模板库',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板提交',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板审批',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
        ],
      },
      {
        name: '效率报表',
        URL: getURL(),
        desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
        scene: [
          {
            title: '模板库',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板提交',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
          {
            title: '模板审批',
            url: getURL(),
            description: '',
            fp: [
              {
                name: '新增模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '修改模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
              {
                name: '完善模板',
                URL: getURL(),
                desc: '合同模板的建立，主要分为三个步骤，写模板，提交模板，审批模板',
              },
            ],
          },
        ],
      },
    ],
  },
];

export default OPTIONS;
