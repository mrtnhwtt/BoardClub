import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';


class Game extends Component {
    render () {
        const { classes, game } = this.props;

        return (
            <Paper className={classes.paper}>                 
                <div>
                    <h3 className={classes.login}>
                        {game.title}
                        <span className={classes.time}>{(new Date(game.gameDate)).toLocaleString()}</span>
                    </h3>
                </div>
            </Paper>
        )
    }
}


const styles = {
    paper: {
        padding: 10,
        display: 'flex',
        marginTop: 10
    },
    avatar: {
        minWidth: 10,
        margin: '4px 10px 4px 4px'
    },
    login: {
        marginBottom: 5
    },
    time: {
        marginLeft: 10,
        color: '#bbb',
        fontSize: 14
    },
    btnBlock: {
        width: '100%',
        textAlign: 'right'
    },
    btnDelete: {
        backgroundColor: '#7584ff',
        color: 'white',
        '&:hover': {
            color: '#7584ff',
            borderColor: '#7584ff',
            backgroundColor: 'white'
        }
    },
    btnEdit: {
        marginRight: "3px",
        backgroundColor: '#7584ff',
        color: 'white',
        '&:hover': {
            color: '#7584ff',
            borderColor: '#7584ff',
            backgroundColor: 'white'
        }
    }
}


export default (withStyles(styles)(Game));