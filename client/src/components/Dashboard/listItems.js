import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import AccountBox from '@material-ui/icons/AccountBox';
import FolderSpecial from '@material-ui/icons/FolderSpecial';
import ShowChart from '@material-ui/icons/ShowChart';

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <AccountBox/>
            </ListItemIcon>
            <ListItemText primary="Account Info"/>
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <FolderSpecial/>
            </ListItemIcon>
            <ListItemText primary="Saved Renovations"/>
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <ShowChart/>
            </ListItemIcon>
            <ListItemText primary="Home Value Graph"/>
        </ListItem>

    </div>
)