import React from 'react'
import {Avatar, Badge, Descriptions, Skeleton, Typography} from "antd";
import {ApiOutlined, SubnodeOutlined, AntDesignOutlined} from '@ant-design/icons';

import me from '../me.svg'

const {Paragraph, Text, Title} = Typography

const About: React.FC<{}> = props => {

    return (
        <>
            <div className="site-page-header-ghost-wrapper" style={{textAlign: 'center'}}>
                <img src={me} alt="ME" style={{width: '200px', borderRadius: '50%'}}/>

                {/* <div id={'view-detail-header'}>
                    <Badge status="success"/>
                    <Badge status="error"/>
                    <Badge status="default"/>
                    <Badge status="processing"/>
                    <Badge status="warning"/>
                </div> */}

                {/* <Paragraph>
                    THIS IS <Text mark>ME</Text>
                </Paragraph> */}
                <Title level={4}>PANKAJ DEVESH</Title>

                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, modi!
                </Paragraph>

                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, commodi ea explicabo fugit illum
                    incidunt nemo officiis placeat porro suscipit.
                </Paragraph>
                <Paragraph>
                    <blockquote>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </blockquote>
                </Paragraph>

                <Skeleton/>

                
                {/* <Avatar  size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} icon={<AntDesignOutlined/>} /> */}
            </div>
        </>
    )
}

export default About

