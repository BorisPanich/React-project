import React from 'react';
import analytics from './Analitics.module.css';

const Analytics = () => {
  return (
    <div className={analytics.wrapper}>
      <div className={analytics.container}>
        <p className={analytics.title}>Posts</p>
        <p className={analytics.text}>690</p>
      </div>
      <div className={analytics.container}>
        <p className={analytics.title}>Followers</p>
        <p className={analytics.text}>206</p>
      </div>
      <div className={analytics.container}>
        <p className={analytics.title}>Following</p>
        <p className={analytics.text}>100</p>
      </div>
    </div>
  )
}

export default Analytics;