import React from 'react';
import classNames from 'classnames';
import styles from './Footer.less';
import layout from './Layout.less';
function Footer() {
  const links = () => {
    return [
      {
        title: '搜狐IT',
        url: 'http://it.sohu.com/'
      },
      {
        title: 'IT之家',
        url: 'http://www.ithome.com/'
      },
      {
        title: '凤凰科技',
        url: 'http://tech.ifeng.com/'
      },
      {
        title: '站长之家',
        url: 'http://www.chinaz.com/'
      },
      {
        title: '天眼查',
        url: 'https://www.tianyancha.com/'
      },
      {
        title: '蜜蜂区块链学院',
        url: 'http://51bitbee.com/'
      },
      {
        title: '星河互联',
        url: 'http://www.galaxyinternet.com/'
      },
      {
        title: 'AI慕课学院',
        url: 'http://www.mooc.ai'
      },
      {
        title: '网易智能',
        url: 'http://tech.163.com/smart'
      },
      {
        title: '亿邦动力',
        url: 'http://www.ebrun.com/'
      },
      {
        title: '百度VR',
        url: 'http://ivr.baidu.com/'
      },
      {
        title: '爱搞机',
        url: 'http://www.igao7.com/'
      },
      {
        title: '超好玩',
        url: 'http://www.18touch.com'
      },
      {
        title: '前瞻网',
        url: 'http://www.qianzhan.com'
      },
      {
        title: '软件下载',
        url: 'http://www.onlinedown.net'
      },
      {
        title: '快科技',
        url: 'http://www.mydrivers.com'
      },
      {
        title: '威锋网',
        url: 'http://www.feng.com'
      },
      {
        title: 'i黑马',
        url: 'http://www.iheima.com/'
      },
      {
        title: '雷科技',
        url: 'http://www.leikeji.com/'
      }
    ];
  };
  return (
    <div className={classNames(styles['zf-footer'])}>
      <div className={styles['footer-warp']}>关于知否 | 广告服务 | 联系我们 | 侵权投诉</div>
    </div>
  );
}

Footer.propTypes = {};

export default Footer;
