import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

type NavBarProps = {
    tabs: Array<string>,
    handleChange: Function,
    tabStyle: {},
    tabsStyle: {}
}

export const NavBar: React.FC<NavBarProps> = ({tabs, handleChange, tabStyle, tabsStyle}) => {
    const [value, setValue] = React.useState(0);

    return (
        <Tabs
            value={value}
            onChange={(e, index) => {
                handleChange(tabs[index]);
                setValue(index)
            }}
            TabIndicatorProps={{style: {background: 'grey'}}}
            style={tabsStyle}
        >
            {tabs.map( tabName => <Tab style={tabStyle} label={tabName} key={tabName} />)}
        </Tabs>
    );
};
