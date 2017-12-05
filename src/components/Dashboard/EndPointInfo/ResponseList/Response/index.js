import React from 'react';
import { Card, CardHeader, CardText, TextField, Toggle } from 'material-ui';
import styles from './styles.css';

const Response = ({ data, use, defaultJson, onToggle, onChangeCode, onChangeData }) => (
    <Card className={ styles.card }>
        <CardHeader
            title={
                <div className={ styles.cardHeader }>
                    <div className={ styles.cardHeaderToggle }>
                        <Toggle
                            toggled={ Number(use) === Number(data.code) }
                            onToggle={ () => onToggle(Number(data.code)) }
                        />
                    </div>
                    <div className={ styles.cardHeaderResponse }>
                        <TextField
                            underlineShow={ false }
                            name='responseName'
                            defaultValue={ data.code }
                            placeholder='New Response'
                            onChange={ onChangeCode }
                        />
                    </div>
                </div>
            }
            actAsExpander={ false }
            showExpandableButton={ true }
        />
        <CardText expandable={ true }>
            <TextField
                name='ResponseJson'
                className={ data.isJsonWrong ? {...styles.textArea, ...styles.inputError} : {...styles.textArea, ...styles.inputNormal} }
                multiLine={ true }
                defaultValue={ defaultJson }
                rows={ 20 }
                underlineShow={ false }
                onChange={ onChangeData }
            />
        </CardText>
    </Card>
);

export default Response;
