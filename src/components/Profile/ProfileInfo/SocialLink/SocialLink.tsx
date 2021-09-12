import React from 'react';
import social from './SocialLink.module.css';

const SocialLink = () => {
  return (
    <div className={social.wrapper}>
      <ul className={social.list}>
        <li className={social.item}>
          <a className={social.link}>
            <img className={social.img} src='https://iqonic.design/themes/socialv/html/images/icon/08.png'/>
          </a>
        </li>
        <li className={social.item}>
          <a className={social.link}>
            <img className={social.img} src='https://iqonic.design/themes/socialv/html/images/icon/10.png'/>
          </a>
        </li>
        <li className={social.item}>
          <a className={social.link}>
            <img className={social.img} src='https://iqonic.design/themes/socialv/html/images/icon/13.png'/>
          </a>
        </li>
        <li className={social.item}>
          <a className={social.link}>
            <img className={social.img} src='https://iqonic.design/themes/socialv/html/images/icon/12.png'/>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialLink;