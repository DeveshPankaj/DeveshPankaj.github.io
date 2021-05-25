import React from 'react'
import {Badge, Button, Descriptions, Result, Skeleton, Typography} from "antd";
import {ApiOutlined, SubnodeOutlined} from '@ant-design/icons';

const Gallery: React.FC<{}> = props => {
    return (
        <>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary">Back Home</Button>}
            />
        </>
    )
}

export default Gallery
