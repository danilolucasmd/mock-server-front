import React from 'react';
import { connect } from 'react-redux';
import panaPng from 'assets/loading.png';
import style from './style.css';

console.log(style);

const Loading = ({ loading }) => {
    let component = <span></span>;

    if(loading.active){
        component = (
            <div className={style.loading}>
                <img className={ style.pana } src={ panaPng } alt='' />
            </div>
        );
    }

    return <div> { component } </div>;
}

const mapStateToProps = state => ({
    loading: state.loading,
});

export default connect(mapStateToProps)(Loading);
