navHome  = [
    {
        'name': 'SENSORS',
        'url': '#sensors',
    },
    {
        'name': 'WAYPOINT',
        'url': '#waypoint',
    },
]

navSensor = [
    {
        'name': 'HOME',
        'url': 'sailbot-home'
    },
    {
        'name': 'DATA',
        'url': '#Data',
    },
    {
        'name': 'FORM',
        'url': '#Form',
    },
    {
        'name': 'HISTORY',
        'url': '#History',
    },
]

def get_navbar(page):
    if page == 'home':
        return navHome
    elif page == 'sensor':
        return navSensor
