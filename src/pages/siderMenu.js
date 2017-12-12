import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import './siderMenu.less';
const { SubMenu, Item } = Menu;

export default class SiderMenu extends Component {
    state = {
        collapsed: false,
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        return (
            <div className="sider-menu">
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                className="pinkTheme"
                /* theme="dark" */
            >
                <Item key="1">
                    <Icon type="pie-chart" />
                    <span>Option 1</span>
                </Item>
                <Item key="2">
                    <Icon type="desktop" />
                    <span>Option 2</span>
                </Item>
                <Item key="3">
                    <Icon type="inbox" />
                    <span>Option 3</span>
                </Item>
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                    <Item key="5">Option 5</Item>
                    <Item key="6">Option 6</Item>
                    <Item key="7">Option 7</Item>
                    <Item key="8">Option 8</Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                    <Item key="9">Option 9</Item>
                    <Item key="10">Option 10</Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Item key="11">Option 11</Item>
                        <Item key="12">Option 12</Item>
                    </SubMenu>
                </SubMenu>
            </Menu>
            </div>
        );
    }
}
