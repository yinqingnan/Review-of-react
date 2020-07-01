import Mock from "mockjs";
const data=[
    //树状图目录添加
    {
        type: "radio",
        title: "菜单类型",
        code: "menuType",
        defaultValue: "01",
        rule: [],
        iVal: "",
        value: 1,
        show: true,
        options: []
    },
    {
        type: "input",
        title: "菜单名称",
        code: "name",
        placeholder: "菜单名称",
        rule: [
            {required: true, message: "必填项不能为空！"},
            {pattern: /^[^\s]*$/, message: "禁止输入空格"},
            {pattern: /^.{2,20}$/, message: "最多输入20位"}
        ],
        iVal: "",
        show: true,
        disabled: false
    },
    {
        type: "input",
        title: "编码",
        code: "code",
        placeholder: "code必填，且必须唯一",
        rule: [
            {required: true, message: "code必填，且唯一"},
            {pattern: /^[^\s]*$/, message: "禁止输入空格"},
            {pattern: /^.{2,20}$/, message: "最多输入20位"}
        ],
        iVal: "",
        show: true,
        disabled: false
    },
    {
        type: "input",
        title: "路径",
        code: "url",
        placeholder: "请输入路径（无路径请用#代替）",
        rule: [
            {required: true, message: "code必填，且唯一"},
            {pattern: /^[^\s]*$/, message: "禁止输入空格"},
            {pattern: /^.{2,50}$/, message: "最多输入50位"}
        ],
        iVal: "",
        show: true,
        disabled: false
    },
    {
        type: "input",
        title: "组件",
        code: "component",
        placeholder: "请填入对应的组件地址（相对路径）",
        rule: [
            {required: true, message: "必填项不能为空！"},
            {pattern: /^[^\s]*$/, message: "禁止输入空格"},
            {pattern: /^.{2,50}$/, message: "最多输入50位"}
        ],
        iVal: "",
        show: true,
        disabled: false
    },
    {
        type: "input",
        title: "重定向",
        code: "redirect",
        placeholder: "请填入重定向地址",
        rule: [
            {pattern: /^[^\s]*$/, message: "禁止输入空格"},
            {pattern: /^.{2,50}$/, message: "最多输入50位"}
        ],
        iVal: "",
        show: true,
        disabled: false
    },
    {
        type: "input",
        title: "权限编码",
        code: "perms",
        placeholder: "请填入权限编码",
        rule: [
            {pattern: /^[^\s]*$/, message: "禁止输入空格"},
            {pattern: /^.{2,50}$/, message: "最多输入50位"}
        ],
        iVal: "",
        show: false,
        disabled: false
    },
    {
        type: "number",
        title: "排序",
        code: "sort",
        placeholder: "请输入数字",
        rule: [
            {
                required: false,
                pattern: new RegExp(/^[0-9]\d*$/, "g"),
                message: "只支持纯数字"
            },
            {pattern: /^.{1,5}$/, message: "最少输入1位，最多输入5位"}
        ],
        iVal: "",
        show: true,
        disabled: false
    },
    {
        type: "switch",
        fieldName: "enable",
        title: "是否启用",
        code: "enable",
        defaultChecked: true,
        iVal: true,
        rule: [{}],
        show: true,
        disabled: false
    },
    {
        type: "switch",
        fieldName: "isRoute",
        title: "路由",
        code: "isRoute",
        defaultChecked: false,
        iVal: false,
        rule: [{}],
        show: true,
        disabled: false
    },
    {
        type: "switch",
        fieldName: "hidden",
        title: "是否隐藏",
        code: "hidden",
        defaultChecked: false,
        iVal: false,
        rule: [{}],
        show: true,
        disabled: false
    },
    {
        type: "switch",
        fieldName: "keepAlive",
        title: "是否缓存",
        code: "keepAlive",
        defaultChecked: false,
        iVal: false,
        rule: [{}],
        show: true,
        disabled: false
    },
    {
        type: "text",
        long: "long",
        title: "描述",
        code: "menuDescr",
        placeholder: "请输入描述",
        rule: [
            {pattern: /^[^\s]*$/, message: "禁止输入空格"},
            {pattern: /^.{1,200}$/, message: "最少输入位，最多输入200位"}
        ],
        iVal: "",
        disabled: false
    },
    
    {
        type: "btn",
        long: "long"
    }
];


Mock.mock(RegExp("/datalist"), "get", () => {
    return data;
});
