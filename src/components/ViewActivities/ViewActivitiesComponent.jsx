import React, { useEffect, useState } from "react";
import './ViewActivitiesComponent.css'

import CardComponent from '../Card/CardComponent';
import Onboarding from '../Onboarding/Onboarding'

function ViewActivitiesComponent() {

    const [activities, setActivities] = useState([]);

    useEffect(() => {
        getActivities();
    }, [])

    const getActivities = () => {
        fetch('/activities/api/get').then(res => res.json()).then(data => {
            setActivities(data.activities);
        });
    }

    return (
        <div className="ViewActivitiesComponent">
            <Onboarding />
            <CardComponent cards={activities} />
        </div>
    )
}

export default ViewActivitiesComponent;