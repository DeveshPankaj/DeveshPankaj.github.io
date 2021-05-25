import React from 'react'
import {Badge, Descriptions, Skeleton, Typography} from "antd";
import {ApiOutlined, SubnodeOutlined} from '@ant-design/icons';

const Contact: React.FC<{}> = props => {
    return (
        <>
                <Descriptions title="User Info">
                    <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
                    <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
                    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
                    <Descriptions.Item label="Remark">empty</Descriptions.Item>
                    <Descriptions.Item label="Address">
                        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                    </Descriptions.Item>
                </Descriptions>
        </>
    )
}

export default Contact
