/*
 * @Author: heaven.wu heaven.wu@cloudwise.com
 * @Date: 2022-11-01 14:30:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-30 21:43:13
 * @FilePath: /flyfish2.0-web/src/locales/en.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { flattenMessages } from './utils';

export default flattenMessages({
  common: {
    save: '保存',
    cancel: 'Cancel',
    create: '添加',
    edit: 'Edit',
    editDetail: '编辑信息',
    delete: 'Delete',
    ok: 'OK',
    disable: '禁用',
    deactivate: '停用',
    recovery: '恢复',
    download: '下载',
    all: '全部',
    copy: 'Copy',
    export: 'Export',
    preview: 'Preview',
    build: 'Develop',
    import: 'import',
    actions: '操作',
    none: 'null',
    pleaseInput: '请输入',
    pleaseUpload: '请上传',
    pleaseSelect: '请选择',
    saveError: '保存失败，请稍后重试！',
    saveSuccess: '保存成功！',
    disableSuccess: '禁用成功！',
    disableError: '禁用失败，请稍后重试！',
    recoverySuccess: '恢复成功！',
    recoveryError: '恢复失败，请稍后重试！',
    addError: 'Add failed, please try again later!',
    addSuccess: 'Add Success!',
    reductionSuccess: '还原成功！',
    reductionError: '还原失败，请稍后重试！',
    deleteError: 'Delete failed, please try again later!',
    deleteSuccess: 'Delete succeeded!',
    changeSuccess: 'Edit succeeded!',
    changeError: 'Edit failed, please try again later!',
    copySuccess: 'Copy succeeded!',
    useSuccess: '创建成功!',
    useError: '创建失败，请稍后重试！',
    copyError: 'Copy failed, please try again later!',
    exportError: '导出失败，请稍后重试！',
    loadDataError: '加载{name}失败，请稍后重试！',
    recommendSuccess: '推荐成功!',
    recommendError: '推荐失败,请稍后重试！',
    noRecommendSuccess: '取消推荐成功!',
    noRecommendError: '取消推荐失败,请稍后重试！',
    createApp: 'Create application',
    appName: 'Name',
    inputAppNameInfo: 'Enter application name',
    inputCorrectAppNameInfo: 'Please enter the correct application name!',
    validAppNameLengthMessage: 'Application name cannot exceed 20 characters!',
    relyProject: 'Project',
    relyProjectInfo: 'Select the project to which the application belongs',
    tags: 'Tag',
    tagsInfo: 'Select or add a tag',
    developStatus: 'Status',
    editApp: 'Edit application',
    copyApp: 'Copy application',
    sureDelete: 'Are you sure that you want to delete the application?',
    underDevelopment: 'Developing',
    delivered: 'Complete',
    underTest: 'Testing',
    demo: 'Demo',
    versionInfo: 'Version',
    noPicture: 'No picture',
    chooseDevelopStatus: 'Please select development status',
  },
  siderMenus: {
    // 左侧菜单
    workbench: 'Overview', // 工作台
    applicationCreation: 'Applications',
    projectManagement: 'Projects',
    applicationDevelopment: 'Developer',
    ComponentList: 'Component Editor',
    dataSourceManagement: 'Data Sources',
    dataQuery: 'Explore',
    templateLibrary: 'Templates',
    applicationTemplateLibrary: 'Applications',
    componentLibrary: 'Components',
    APIManager: 'API Manager',
    APIList: 'APIs',
    applicationManagement: 'API Applications',
    APICallMonitoring: 'Statistics',
  },
  business: {},
  components: {
    addComponent: {
      validTagLengthMessage: 'Label name cannot exceed 20 characters!',
    },
  },
  pages: {
    overview: {
      // 工作台
      dwf: 'Enter DWF platform',
      total: ' ',
      unit: ' ',
      totalItems: 'Projects',
      totalApplications: 'Applications',
      totalComponents: 'Components',
      totalApplicationTemplates: 'Application templates',
      totalComponentTemplates: 'Component templates',
      totalServices: 'Services',
      totalInterfaces: 'APIs',
      applicationScreen_2D: '2D dashboards',
      applicationScreen_3D: '3D dashboards',
      templateRecommend: 'Recommendations',
      viewAll: 'All',
      useTemplates: 'Apply',
      validTagLengthMessage: 'Label name cannot exceed 20 characters!',
      industry: 'Industry',
      myApps: 'My applications',
      lastCreate: 'Applications created by you within 14 days',
      addApp: 'Create',
      componentAlreadyBelongApp: 'The component already belongs to the project',
      currentDeveloper: 'Developer',
      createUser: 'Created by',
      previewApplication: 'Preview',
      buildApplication: 'Develop',
      notConnected: 'Null',
      nullConnectedInfo:
        'This panel is not connected to any data source. You can contact the administrator to access your own data source.',
    },
    apiManage: {
      create: '新建',
      edit: '编辑应用',
      createOne: '创建应用',
      searchInputName: '按名称搜索',
      searchInputAppkey: '按appKey搜索',
      searchInputTime: '按有效期搜素',
      changeTime: '编辑有效期',
    },
    apiList: {
      editor: {
        basicInfo: '基本信息',
        apiName: '接口名称',
        inputApiNameSizeRule: '请最多输入20个字符！',
        catalogId: '接口分类',
        path: '接口路径',
        requestParams: '请求参数',
        requestParamsHeader: '请求头Headers',
        requestParamsHeaderColName: 'header名',
        requestParamsHeaderColValue: 'header值',
        requestParamsQuery: '请求参数Query',
        requestParamsQueryName: '请求参数',
        requestParamsQueryValue: '参考值',
        createUser: '创建人',
        updateTime: '更新时间',
        requestBodyHeaderJsonTitle: '文本',
        requestBody: '请求体',
        responseData: '返回数据',
        loadApiDetailError: '加载接口详情失败，请稍后重试！',
      },
    },
    projectManage: {
      create: '新建',
      edit: '编辑项目',
      goToProject: '进入项目',
      searchInputPlaceholder: '输入项目名称/行业/描述进行查询',
      searchInputTag: '选择标签进行查询',
    },
    data: {
      searchInputPlaceholder: '请输入名称进行搜索',
      connectError: '连接失败',
    },
    applyDevelop: {
      create: '添加应用',
      reset: '还原应用',
      copy: '复制应用',
      edit: '编辑应用',
      use: '使用模板',
      goToProject: '进入应用',
      searchInputPlaceholder: '选择应用类型进行查询',
      searchInputDevelopmentState: '选择开发状态进行查询',
      searchSelectProgressName: '选择项目名称进行查询',
      searchInputAppName: '输入应用名称进行查询',
      searchInputApplyLabel: '选择应用标签进行查询',
    },
    projectDetailDevelop: {
      searchInputKey: '输入组件名称/描述查找组件',
      selectTags: '输入组件标签进行查询',
      search: '搜索',
    },
    applyTemplate: {
      trade: '选择行业进行查询',
      applyName: '选择应用名称进行查询',
      name: '输入组件名称/描述/查找组件',
      searchInputApplyLabel: '选择应用标签进行查询',
      searchtype: '选择组件类别进行查询',
    },
    userManage: {
      create: '添加用户',
      edit: '编辑用户',
      configurePermissions: '配置权限',
      searchInputUsername: '输入用户名进行查询',
      searchInputEmail: '输入邮箱进行查询',
      searchInputproject: '选择所属项目进行查询',
      searchInputstate: '选择状态进行查询',
    },
    roleManage: {
      create: '添加角色',
      edit: '编辑角色',
      member: '成员列表',
      role: '权限配置',
      searchInputRoleName: '选择角色名进行查询',
    },
    dataSearch: {
      createBasic: '新建基础查询',
      searchInputPlaceholder: '请输入查询名称',
      searchInputSourceNamePlaceholder: '请输入所属数据源名称',
      pleaseSelectTypePlaceholder: '请选择查询类型',
      deleteConfirmMessage: '如果查询已关联应用，删除后应用内组件将展示异常',
      editConfirmMessage:
        '如果查询已关联应用，修改后应用内组件将有可能展示异常。',
      queryName: '查询名称',
      pleaseInputQueryName: '请输入查询名称！',
      inputQueryNameSizeRule: '请最多输入20个字符！',
      types: {
        basic: '基础查询',
        singleValueGroup: '单值组合',
        singleValueGroupDesc:
          '每个基础查询的结果必须只有一个数据，将每个查询的结果，组合成一个数据表，该组合常见于生成饼图。',
        multipleValueGroup: '多值组合',
        multipleValueGroupDesc:
          '每个基础查询得到一个数据表，多个数据表之间可以进行组合，组合方式分为按行组合和按列组合两种。',
        multipleValueRowGroup: '多值行组合',
        multipleValueRowGroupDesc:
          '将各个基础查询的数据表表头按照被选择顺序组合，相同列合并，每行数据不合并，没有数据的列为空，该组合常见于生成条形统计图。',
        multipleValueColGroup: '多值列组合',
        multipleValueColGroupDesc:
          '将第一个基础查询的首列数据作为主列，该列最好为唯一值，需确保每个查询的数据表都有该列，然后将各个数据表的表头做并集，按照基础查询的排列顺序将表头排序。',
        timeSeriesValueGroup: '时序值组合',
        timeSeriesValueGroupDesc:
          '每个基础查询会得到一列时间以及对应数据的数据表，将这些数据表以时间为主键，每个查询结果为一列所组合成的数据表，某一时间节点该查询无数据则为空。常见于时序趋势图。',
      },
      detail: {
        chooseDataSource: '选择数据源',
        noDataSource: '暂无数据源',
        chooseTable: '选择数据表',
        noTable: '暂无数据表',
        configDataSearch: '配置查询',
        pleaseInputSql: '请输入sql语句',
        componentVisual: '可视化',
        componentVisualSetting: '设置',
        searchSqlError: '执行sql失败，请检查sql书写是否正确！',
        searchSqlEmpty: '当前查询结果为空！',
        sqlRun: '执行',
        sqlParams: '设置参数',
      },
      groupDetail: {
        preview: '预览',
        addSearchQueryItem: '添加查询项',
        searchItemPrefix: '查询',
        selectItemTips: '默认展示20条数据，请输入进行精确匹配',
        selectItemNullMessage: '请选择查询项！',
        selectItemErrorMessage: '选中的查询项存在问题，请检查查询项！',
        mergeWayLabel: '合并方式',
        mergeByRow: '按行合并',
        mergeByCol: '按列合并',
        pleaseChooseOneItem: '请至少选择一个查询项！',
        previewSearchQueryError: '预览查询项失败，请稍后重试！',
      },
    },
  },
  columns: {
    projectManage: {},
  },
});