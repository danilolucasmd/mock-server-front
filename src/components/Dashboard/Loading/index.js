import React from 'react';
import { connect } from 'react-redux';
import panaPng from 'assets/loading.png';
import styles from './styles.css';

const Loading = ({ loading }) => {
    let component = <span></span>;

    if(loading.active){
        component = (
            <div className={styles.loading}>
                <img className={ styles.pana } src={ panaPng } alt='' />
            </div>
        );
    }

    return <div> { component } </div>;
}

const mapStateToProps = state => ({
    loading: state.loading,
});

export default connect(mapStateToProps)(Loading);
