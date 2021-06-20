import React from 'react';
import './UserMenu.css';

import UserHero from './UserHero';
import UserTabs from './UserTabs';
import UserAwards from './UserAwards';

export default function UserMenu() {

    const [currentTab, setCurrentTab] = React.useState(0)
    const [currentTabContent, setCurrentTabContent] = React.useState(null)
    
    React.useEffect(() => {
        const tabContent = () => {
            switch (currentTab) {
                case 0:
                    return <UserHero maximised={true}/>
                case 1: 
                    return <UserAwards />
                default:
                    return <UserHero maximised={true} />
            }
        }
        setCurrentTabContent (tabContent)
    }, [currentTab])

    return (
        <div className="UserMenu">
            <UserTabs currentTab={currentTab} setCurrentTab={setCurrentTab}/>
            {currentTabContent}
        </div>
    )
}