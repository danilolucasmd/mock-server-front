import React from 'react';
import Header from './Header';
import EndPointList from './EndPointList';
import EndPointInfo from './EndPointInfo';
import Loading from './Loading';
import styles from './styles.css';

console.log(styles);

const Dashboard = () => (
    <div className={ styles.container }>
        <Loading />
        <div className={ styles.sideList }>
            <EndPointList />
        </div>
        <div className={ styles.content }>
            <Header />
            <EndPointInfo />
        </div>
    </div>
);

export default Dashboard;
