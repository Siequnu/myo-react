import React, { useEffect, useState } from "react";
import './ViewActivitiesComponent.css'

import CardComponent from '../Card/CardComponent';
import Activity from '../Activity/Activity';
import Onboarding from '../Onboarding/Onboarding'

function ViewActivitiesComponent(props) {

    const [activities, setActivities] = useState([]);
    const [activityId, setActivityId] = useState(null);

    useEffect(() => {
        getActivities();
    }, [])

    const getActivities = () => {
        fetch('/activities/api/get').then(res => res.json()).then(data => {
            setActivities(data.activities);
        });
    }

    const showActivity = (activityId) => {
        setActivityId(activityId);
    }

    const exitActivity = () => {
        setActivityId(null);
    }


    return (
        <div>
            { activityId == null ? (
                <div className="ViewActivitiesComponent">
                    <Onboarding />
                    <CardComponent cards={activities} callback={showActivity} />
                </div>
            ) : (
                <div>
                    <div>
                        <Activity activityId={activityId} activityObject={activities[activityId]} exitCallback={exitActivity} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default ViewActivitiesComponent;