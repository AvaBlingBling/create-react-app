import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routers from './router';

import registerServiceWorker from './registerServiceWorker';
//页面ant样式没有引入，在这里引入全部的样式，这是一个待解决问题
import 'antd/dist/antd.css';

ReactDOM.render(<Routers />, document.getElementById('root'));
registerServiceWorker();
