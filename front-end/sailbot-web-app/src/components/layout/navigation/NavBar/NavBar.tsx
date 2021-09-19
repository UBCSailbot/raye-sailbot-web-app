import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { plainTabsStylesHook } from '@mui-treasury/styles/tabs';

type NavBarProps = {
    tabs: Array<string>,
    title: string 
}

export const NavBar: React.FC<NavBarProps> = ({tabs, title}) => {
    const [value, setValue] = React.useState(0);
    const tabsStyles = plainTabsStylesHook.useTabs();
    const tabItemStyles = plainTabsStylesHook.useTabItem();

    return (
        <Tabs
            classes={tabsStyles}
            value={value}
            onChange={(e, index) => setValue(index)}
        >
            {tabs.map( tabName => <Tab classes={tabItemStyles} label={tabName} key={tabName}></Tab>)}
        </Tabs>
    );
};
