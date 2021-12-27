import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

type NavBarProps = {
    tabs: Array<string>,
    currentTab: string,
    handleChange: Function,
    tabStyle: {},
    tabsStyle: {}
}

export const NavBar: React.FC<NavBarProps> = ({tabs, currentTab, handleChange, tabStyle, tabsStyle}) => {
    const [value, setValue] = React.useState(tabs.findIndex((tab) => {return tab === currentTab}) || 0);

    return (
        <Tabs
            variant="fullWidth"
            value={value}
            onChange={(e, index) => {
                handleChange(tabs[index]);
                setValue(index)
            }}
            TabIndicatorProps={{style: {background: '#26619c', height: "4px"}}}
            style={tabsStyle}
        >
            {tabs.map( tabName => <Tab style={tabStyle} label={tabName} key={tabName}/>)}
        </Tabs>
    );
};
