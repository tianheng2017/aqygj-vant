// 员工版
const personnel = []

// 企业管理员版
const enterprise = [
    {
        id: 1,
        icon: 'todo-list-o',
        title: '教育培训',
        children: [
            { id: 101, title: '培训计划', url: '/pages/enterprise/train/id101' },
            { id: 102, title: '安全常识', url: '/pages/enterprise/train/id102' },
            { id: 103, title: '三级培训', url: '/pages/enterprise/train/id103' },
            { id: 104, title: '应知应会', url: '/pages/enterprise/train/id104' },
            { id: 105, title: '案例分析', url: '/pages/enterprise/train/id105' },
            { id: 106, title: '考试系统', url: '/pages/enterprise/train/id106' },
        ]
    },
    {
        id: 2,
        icon: 'apps-o',
        title: '档案管理',
        children: [
            { id: 201, title: '规章制度' },
            { id: 202, title: '档案上传标准' },
            { id: 203, title: '档案资料' },
        ]
    },
    {
        id: 3,
        icon: 'warn-o',
        title: '现场安全',
        children: [
            { id: 301, title: '风险管理' },
            { id: 302, title: '隐患排查' },
            { id: 303, title: '重大危险源' },
            { id: 304, title: '安全设施' },
            { id: 305, title: '职业健康' },
            { id: 306, title: '主要设备' },
            { id: 307, title: '管控措施' },
        ]
    },
    {
        id: 4,
        icon: 'user-circle-o',
        title: '履职记录',
        children: [],
    },
    {
        id: 5,
        icon: 'bar-chart-o',
        title: '企业信息',
        children: [
            { id: 501, title: '风险管理' },
            { id: 502, title: '隐患排查' },
            { id: 503, title: '重大危险源' },
            { id: 504, title: '安全设施' },
            { id: 505, title: '职业健康' },
            { id: 506, title: '主要设备' },
            { id: 507, title: '管控措施' },
        ]
    },
    {
        id: 6,
        icon: 'flag-o',
        title: '依法生产',
        children: [
            { id: 601, title: '危化安全标准化' },
            { id: 602, title: '重点县检查' },
            { id: 603, title: '重大危险源检查' },
        ]
    },
    {
        id: 7,
        icon: 'bulb-o',
        title: '事故管理',
        children: [
            { id: 701, title: '事故上报' },
            { id: 702, title: '事故调查' },
        ]
    },
    {
        id: 8,
        icon: 'logistics',
        title: '应急管理',
        children: [
            { id: 801, title: '应急资源' },
            { id: 802, title: '救援电话' },
            { id: 803, title: '风险管控' },
            { id: 804, title: '综合预案' },
            { id: 805, title: '应急处置' },
        ]
    },
    {
        id: 9,
        icon: 'upgrade',
        title: '事故上报',
        children: [
            { id: 901, title: '信息上报' },
            { id: 902, title: '整改通知' },
        ]
    },
]

// 监管部门版
const supervisor = []

// 九宫格
export const grids = {
    enterprise,
    personnel,
    supervisor,
}