import React, {CSSProperties} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import me from './me.svg'
import {
    Layout,
    Menu,
    Image,
    Breadcrumb,
    Button,
    Tooltip,
    Badge,
    Space,
    Card,
    Typography,
    Avatar,
    Radio,
    Timeline,
    Skeleton,
    notification,
    Input, Switch, AutoComplete, Modal, message, Spin
} from 'antd';
import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
    AntDesignOutlined,
    BulbOutlined,
    SearchOutlined,
    CloseOutlined,
    CheckOutlined,
    SmileOutlined
} from '@ant-design/icons';
import About from "./components/About";
import SideNav from "./components/SideNav";
import Project from "./components/Project";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import {useDispatch, useSelector} from "react-redux";
import {UIStateType} from "./reducers/UIReducer";
import store from "./store";
import GameOfLife from "./components/GameOfLife";
import CustomDrawer from "./components/Drawer";
import Gallery from "./components/Gallery";
import loadingMessages from "./utils/loading-message";


const {Title, Paragraph, Text, Link} = Typography;

const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;


function App() {

    const currentPage = useSelector((state: { ui: UIStateType }) => state.ui.currentPage)


    const [lineCord, setLineCord] = React.useState<{ x1: number, y1: number, x2: number, y2: number }>({
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0
    })

    const connectLine = () => {
        const el = document.getElementById('view-detail-header')
        const sidenav = document?.getElementById('side-nav')
        const sidenavAbout = document?.getElementById('side-nav-about')

        const sidenavRect = sidenav?.getBoundingClientRect() || {x: 0, y: 0}
        const rect = el?.getBoundingClientRect() || {x: 0, y: 0}


        setLineCord({...lineCord, x1: rect.x, y1: rect.y - sidenavRect.y})
        console.log(rect)
    }

    React.useEffect(() => {
        connectLine()
    }, [])

    const _line = (points: [number, number, number, number], color: string = 'green') => {
        let midPoint = (points[0] + points[2]) / 2
        return <path
            d={`M${points[0]},${points[1]} C${midPoint},${points[1]} ${midPoint},${points[3]} ${points[2]},${points[3]}`}
            fill={'transparent'} stroke={color} strokeWidth={3}/>
    }

    return (
        <Layout className="layout">
            {/*<Header>*/}
            {/*    <div className="logo" />*/}
            {/*    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>*/}
            {/*        <Menu.Item key="1">nav 1</Menu.Item>*/}
            {/*        <Menu.Item key="2">nav 2</Menu.Item>*/}
            {/*        <Menu.Item key="3">nav 3</Menu.Item>*/}
            {/*    </Menu>*/}
            {/*</Header>*/}
            <Content style={{padding: '0 50px', height: '300vh'}}>
                {/*<Breadcrumb style={{ margin: '16px 0' }}>*/}
                {/*    <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                {/*    <Breadcrumb.Item>List</Breadcrumb.Item>*/}
                {/*    <Breadcrumb.Item>App</Breadcrumb.Item>*/}
                {/*</Breadcrumb>*/}

                <div style={{padding: '1rem', position: 'sticky', top: '0px', zIndex: 30, backgroundColor: '#f0f2f5'}}>

                    <Tooltip title="search">
                            <Button type="default" shape="circle" icon={<SearchOutlined/>} onClick={() => {
                                success()
                            }}/>

                    </Tooltip>
                    <div style={{
                        display: 'inline-block',
                        backgroundColor: '#fff',
                        marginLeft: '1rem',
                        borderRadius: '1rem'
                    }}>

                        <Complete/>
                        {/*<Input style={{borderRadius: '1rem'}} bordered={false} placeholder="Search in page"/>*/}
                    </div>
                    <div style={{display: 'inline-block', marginLeft: '1rem'}}>
                        <Breadcrumb separator=">">
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
                            <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
                            <Breadcrumb.Item>An Application</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>

                    {/*<div style={{display: 'inline-block', float: "right"}}>*/}
                    {/*    <Switch*/}
                    {/*        checkedChildren={<BulbOutlined/>}*/}
                    {/*        unCheckedChildren={<CloseOutlined/>}*/}
                    {/*        defaultChecked*/}
                    {/*    />*/}
                    {/*</div>*/}
                </div>


                <div className="site-layout-content">

            

                    <div style={{display: 'flex', gap: '10rem', height: '80vh', position: 'relative'}}>


                        <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10}}>
                            <svg style={{width: '100%', height: '100%'}} xmlns="http://www.w3.org/2000/svg">
                                {/*{_line([lineCord.x1, lineCord.y1, 0, 0])}*/}
                                {_line([150, 120, 350, 30], currentPage === 'HOME'?' #1890ff':'transparent')}
                                {_line([150, 200, 350, 30], currentPage === 'PROJECTS' ? 'purple': 'transparent')}
                                {_line([150, 280, 350, 30], currentPage === 'CONTACT' ? '#2db7f5' : 'transparent')}
                            </svg>

                        </div>

                        <div style={{zIndex: 12, position: 'sticky', top: '10px', marginTop: '100px'}}>
                            <SideNav/>
                        </div>

                        {/*<div style={{width: '20vw', padding: '1rem'}}>*/}

                        {/*</div>*/}

                        <div className='pageContent' style={{
                            backgroundColor: '#fff',
                            padding: '1rem',
                            flexGrow: 1,
                            zIndex: 11,
                            width: 'min-content',
                            height: '100%', 
                            overflowY: 'auto',
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none'
                        }}>

                            {
                                currentPage === 'HOME' ? <About/> : null
                            }
                            {
                                currentPage === 'PROJECTS' ? <Project/> : null
                            }
                            {
                                currentPage === 'CONTACT' ? <Contact/> : null
                            }
                            {
                                currentPage === 'GALLERY' ? <Gallery/> : null
                            }


                            {/*<About/>*/}
                            {/*<Project />*/}
                            {/*<Projects />*/}
                            {/*<Contact />*/}
                        </div>


                    </div>

                </div>
                <CustomDrawer/>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}


const options = [
    {value: 'Github profile'},
    {value: 'Linkedin profile'},
    {value: 'CodeChef profile'},
    {value: 'College'},
    {value: 'Language'},
    {value: 'YouTube'},
];

const Complete: React.FC = () => (
    <AutoComplete
        style={{width: 200, borderRadius: '1rem'}}
        options={options}
        placeholder="search quick links"
        filterOption={(inputValue, option) =>
            option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
        onSelect={(e) => alert(`Loading: ${e}`)}
    />
);


function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

const success = () => {
    message
        .loading('Action in progress..', 2.5)
        .then(() => message.success('Loading finished', 2.5))
        .then(() => message.info('Loading finished is finished', 2.5));
};

function countDown() {
    let secondsToGo = 10;
    let delay = 3 * 1000
    const modal = Modal.success({
        title: 'Loading search result',
        icon: <SmileOutlined style={{color: '#108ee9'}}/>,
        content: loadingMessages[getRandomInt(loadingMessages.length)],
        okText: `Cancel`,
        onOk: () => {

        }
    });
    const timer = setInterval(() => {
        secondsToGo -= 1;
        modal.update({
            content: loadingMessages[getRandomInt(loadingMessages.length)],
        });

        if (secondsToGo < 1) {
            secondsToGo = 5
            clearInterval(timer);
            modal.destroy();
        }
    }, delay);

}


export default App;
