import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import {menu} from '../model/home';
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
            >
                {
                    menu.map((v, i) => {
                      if (v.subMenu) {
                        return <SubMenu key={v.key} title={<span>{v.title}</span>}>
                          {
                            v.subMenu.map((w, j) => {
                              if (w.subMenu) {
                                return <SubMenu key={w.key} title={<span>{w.title}</span>}>
                                  {
                                    w.subMenu.map(x => <Item key={x.key}><a href={x.url}>{x.title}</a></Item>)
                                  }
                                </SubMenu>;
                              } else {
                                return <Item key={w.key}><a href={w.url}>{w.title}</a></Item>;
                              }
                            })
                          }
                        </SubMenu>;
                      } else {
                        return <Item key={v.key}><a href={v.url}>{v.title}</a></Item>;
                      }
                    })
                  }
            </Menu>
            </div>
        );
    }
}
