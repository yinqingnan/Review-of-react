import React, {Component} from 'react';
import {Table, Button ,Tooltip } from 'antd';




const  dlt = (msg) =>{
     console.log(msg)
};
const columns = [
    {
        title: '序号',
        dataIndex: 'key',
        ellipsis: {
            showTitle: false,
        },
        width:60,
        render: address => (
            <Tooltip placement="topLeft" title={address}>
                {address}
            </Tooltip>
        ),
    },
    {
        title: '商品编号',
        dataIndex: 'serialnum',
        minWidth:100,
        ellipsis: {
            showTitle: false,
        },
        render: address => (
            <Tooltip placement="topLeft" title={address}>
                {address}
            </Tooltip>
        ),
    },
    {
        title: '商品名称',
        dataIndex: 'serialname',
        ellipsis: {
            showTitle: false,
        },
        minWidth:100,
        render: address => (
            <Tooltip placement="topLeft" title={address}>
                {address}
            </Tooltip>
        ),
    },
    {
        title: '条码',
        dataIndex: 'barcode',
        ellipsis: {
            showTitle: false,
        },
        minWidth:100,
        render: address => (
            <Tooltip placement="topLeft" title={address}>
                {address}
            </Tooltip>
        ),
    },
    {
        title: '状态',
        dataIndex: 'state',
        width:100,
    },
    {
        title: '单价',
        dataIndex: 'Price',
        minWidth:100,
        ellipsis: {
            showTitle: false,
        },
        render: address => (
            <Tooltip placement="topLeft" title={address}>
                {address}
            </Tooltip>
        ),
    },
    {
        title: '数量',
        dataIndex: 'cont',
    },
    {
        title: '金额',
        dataIndex: 'Totalamount',
    },
    {
        title: '操作',
        dataIndex: 'operation',
        width:300,
        render: (text,record) =>   <div>
            <Button type='primary' onClick={()=>dlt(record)}>删除</Button>
            <Button type='primary' style={{
                marginRight: 8,
                marginLeft: 8,
            }}>编辑</Button>
            <Button type='primary'>禁用</Button>
        </div> ,
    },
];
const tabledata = [
    {
        key:'1',
        date: new Date().getFullYear() + '-' +  new Date().getMonth()  + '-'  + new Date().getDate()  + new Date().toLocaleString().slice(11),
        serialnum:('000000' + Math.floor(Math.random() * 999999)).slice(-6),
        serialname:'可乐',
        barcode:('000000' + Math.floor(Math.random() * 999999)).slice(-10),
        state:0,
        Price:('000000' + Math.floor(Math.random() * 999999)).slice(-3),
        cont: ('0000000' + Math.floor(Math.random() * 9998999)).slice(-3),
        Totalamount: ('000000' + Math.floor(Math.random() * 999999)).slice(-8)
    },
    {
        key:'2',
        date: new Date().getFullYear() + '-' +  new Date().getMonth()  + '-'  + new Date().getDate()  + new Date().toLocaleString().slice(11),
        serialnum:('000000' + Math.floor(Math.random() * 999999)).slice(-6),
        serialname:'啤酒',
        barcode:('000000' + Math.floor(Math.random() * 999999)).slice(-10),
        state:1,
        Price:('000000' + Math.floor(Math.random() * 999999)).slice(-3),
        cont: ('0000000' + Math.floor(Math.random() * 9998999)).slice(-3),
        Totalamount: ('000000' + Math.floor(Math.random() * 999999)).slice(-8)
    },
    {
        key:'3',
        date: new Date().getFullYear() + '-' +  new Date().getMonth()  + '-'  + new Date().getDate()  + new Date().toLocaleString().slice(11),
        serialnum:('000000' + Math.floor(Math.random() * 999999)).slice(-6),
        serialname:'二锅头',
        barcode:('000000' + Math.floor(Math.random() * 999999)).slice(-10),
        state:1,
        Price:('000000' + Math.floor(Math.random() * 999999)).slice(-3),
        cont: ('0000000' + Math.floor(Math.random() * 9998999)).slice(-3),
        Totalamount: ('000000' + Math.floor(Math.random() * 999999)).slice(-8)
    },
    {
        key:'4',
        date: new Date().getFullYear() + '-' +  new Date().getMonth()  + '-'  + new Date().getDate()  + new Date().toLocaleString().slice(11),
        serialnum:('000000' + Math.floor(Math.random() * 999999)).slice(-6),
        serialname:'牛栏山',
        barcode:('000000' + Math.floor(Math.random() * 999999)).slice(-10),
        state:1,
        Price:('000000' + Math.floor(Math.random() * 999999)).slice(-3),
        cont: ('0000000' + Math.floor(Math.random() * 9998999)).slice(-3),
        Totalamount: ('000000' + Math.floor(Math.random() * 999999)).slice(-8)
    },
    {
        key:'5',
        date: new Date().getFullYear() + '-' +  new Date().getMonth()  + '-'  + new Date().getDate()  + new Date().toLocaleString().slice(11),
        serialnum:('000000' + Math.floor(Math.random() * 999999)).slice(-6),
        serialname:'格瓦斯',
        barcode:('000000' + Math.floor(Math.random() * 999999)).slice(-10),
        state:0,
        Price:('000000' + Math.floor(Math.random() * 999999)).slice(-3),
        cont: ('0000000' + Math.floor(Math.random() * 9998999)).slice(-3),
        Totalamount: ('000000' + Math.floor(Math.random() * 999999)).slice(-8)
    },
    {
        key:'6',
        date: new Date().getFullYear() + '-' +  new Date().getMonth()  + '-'  + new Date().getDate()  + new Date().toLocaleString().slice(11),
        serialnum:('000000' + Math.floor(Math.random() * 999999)).slice(-6),
        serialname:'脉动',
        barcode:('000000' + Math.floor(Math.random() * 999999)).slice(-10),
        state:0,
        Price:('000000' + Math.floor(Math.random() * 999999)).slice(-3),
        cont: ('0000000' + Math.floor(Math.random() * 9998999)).slice(-3),
        Totalamount: ('000000' + Math.floor(Math.random() * 999999)).slice(-8)
    },
    {
        key:'7',
        date: new Date().getFullYear() + '-' +  new Date().getMonth()  + '-'  + new Date().getDate()  + new Date().toLocaleString().slice(11),
        serialnum:('000000' + Math.floor(Math.random() * 999999)).slice(-6),
        serialname:'鲜橙多',
        barcode:('000000' + Math.floor(Math.random() * 999999)).slice(-10),
        state:0,
        Price:('000000' + Math.floor(Math.random() * 999999)).slice(-3),
        cont: ('0000000' + Math.floor(Math.random() * 9998999)).slice(-3),
        Totalamount: ('000000' + Math.floor(Math.random() * 999999)).slice(-8)
    },
    {
        key:'8',
        date: new Date().getFullYear() + '-' +  new Date().getMonth()  + '-'  + new Date().getDate()  + new Date().toLocaleString().slice(11),
        serialnum:('000000' + Math.floor(Math.random() * 999999)).slice(-6),
        serialname:'王老吉',
        barcode:('000000' + Math.floor(Math.random() * 999999)).slice(-10),
        state:0,
        Price:('000000' + Math.floor(Math.random() * 999999)).slice(-3),
        cont: ('0000000' + Math.floor(Math.random() * 9998999)).slice(-3),
        Totalamount: ('000000' + Math.floor(Math.random() * 999999)).slice(-8)
    },
    {
        key:'9',
        date: new Date().getFullYear() + '-' +  new Date().getMonth()  + '-'  + new Date().getDate()  + new Date().toLocaleString().slice(11),
        serialnum:('000000' + Math.floor(Math.random() * 999999)).slice(-6),
        serialname:'江小白',
        barcode:('000000' + Math.floor(Math.random() * 999999)).slice(-10),
        state:0,
        Price:('000000' + Math.floor(Math.random() * 999999)).slice(-3),
        cont: ('0000000' + Math.floor(Math.random() * 9998999)).slice(-3),
        Totalamount: ('000000' + Math.floor(Math.random() * 999999)).slice(-8)
    },
    {
        key:'10',
        date: new Date().getFullYear() + '-' +  new Date().getMonth()  + '-'  + new Date().getDate()  + new Date().toLocaleString().slice(11),
        serialnum:('000000' + Math.floor(Math.random() * 999999)).slice(-6),
        serialname:'红牛',
        barcode:('000000' + Math.floor(Math.random() * 999999)).slice(-10),
        state:0,
        Price:('000000' + Math.floor(Math.random() * 999999)).slice(-3),
        cont: ('0000000' + Math.floor(Math.random() * 9998999)).slice(-3),
        Totalamount: ('000000' + Math.floor(Math.random() * 999999)).slice(-8)
    }
];
class Tables extends Component {
    state = {
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
    };

    start = () => {
        this.setState({ loading: true });
        // ajax request after empty completing
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    };

    onSelectChange = (selectedRowKeys,renderCell) => {
        console.log('selectedRowKeys changed: ',renderCell);
        this.setState({ selectedRowKeys });
    };

    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                    <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
                        上传
                    </Button>
          {/*          <span style={{ marginLeft: 8 }}>*/}
          {/*  {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}*/}
          {/*</span>*/}
                </div>
                <Table
                    rowSelection={rowSelection}
                       columns={columns} dataSource={tabledata} />
            </div>
        );
    }
}

export default Tables;
