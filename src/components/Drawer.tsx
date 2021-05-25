import React, {ReactNode} from 'react'
import {Col, Divider, Drawer, Row} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {UIStateType} from "../reducers/UIReducer";
import store from "../store";
import {closeSidebar, openSidebar} from "../actions/UIAction";


const DescriptionItem = ({title, content}: { title: string, content: string | ReactNode }) => (
    <div className="site-description-item-profile-wrapper">
        <p className="site-description-item-profile-p-label">{title}:</p>
        {content}
    </div>
)

const CustomDrawer: React.FC<{}> = (props) => {

    const sidebar = useSelector((state: UIStateType) => state.ui.sidebar)
    const dispatch = useDispatch<typeof store.dispatch>()

    const onClose = () => {
        dispatch(closeSidebar())
    };

    return (
        <Drawer
            title="About"
            placement="right"
            closable={false}
            onClose={onClose}
            visible={sidebar}
            width={'50%'}
        >

            <p className="site-description-item-profile-p" style={{marginBottom: 24}}>
                User Profile
            </p>
            <p className="site-description-item-profile-p">Personal</p>
            <Row>
                <Col span={12}>
                    <DescriptionItem title="Full Name" content="Pankaj"/>
                </Col>
                <Col span={12}>
                    <DescriptionItem title="Account" content="pankajdevesh@gmail.com"/>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <DescriptionItem title="City" content="Gwalior"/>
                </Col>
                <Col span={12}>
                    <DescriptionItem title="Country" content="India"/>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <DescriptionItem title="Birthday" content="January 6,1997"/>
                </Col>
                <Col span={12}>
                    <DescriptionItem title="Github" content="deveshpankaj"/>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <DescriptionItem
                        title="Message"
                        content="Make things as simple as possible but no simpler."
                    />
                </Col>
            </Row>
            <Divider/>
            <p className="site-description-item-profile-p">Company</p>
            <Row>
                <Col span={12}>
                    <DescriptionItem title="Position" content="Programmer"/>
                </Col>
                <Col span={12}>
                    <DescriptionItem title="Responsibilities" content="Coding"/>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <DescriptionItem title="Department" content="XTech"/>
                </Col>
                <Col span={12}>
                    <DescriptionItem title="Supervisor" content={<a>Lin</a>}/>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <DescriptionItem
                        title="Skills"
                        content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
                    />
                </Col>
            </Row>
            <Divider/>
            <p className="site-description-item-profile-p">Contacts</p>
            <Row>
                <Col span={12}>
                    <DescriptionItem title="Email" content={
                        <a href="mailto:pankajdevesh3@gmail.com">
                            pankajdevesh3@gmail.com
                        </a>
                    }/>
                </Col>
                <Col span={12}>
                    <DescriptionItem title="Phone Number" content="+91 769 2909 306"/>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <DescriptionItem
                        title="Github"
                        content={
                            <a href="http://github.com/ant-design/ant-design/">
                                github.com/deveshpankaj
                            </a>
                        }
                    />
                </Col>
            </Row>
        </Drawer>
    )
}

export default CustomDrawer
