import React from 'react';

import './UserAwards.css';

export default function UserAwards(props) {

    const medalUrlPrefix = '/assets/medals/'
    const awards = [
        {
            type: 'Activities',
            awards: [
                {
                    title: 'Completed your first activity',
                    medal: 'medal17.svg'
                },
                {
                    title: 'Completed 5 activities',
                    medal: 'medal13.svg'
                },
                {
                    title: 'Completed 10 activities',
                    medal: 'medal14.svg'
                },
                {
                    title: 'Completed your first Spark plan',
                    medal: 'medal11.svg'
                },
                {
                    title: 'Completed all activities 🤩',
                    medal: 'medal16.svg'
                },
            ]
        },
        {
            type: 'Learning',
            awards: [
                {
                    title: 'Completed one activity of each type',
                    medal: 'medal25.svg'
                },
                {
                    title: 'Completed an activity two times',
                    medal: 'medal26.svg'
                },
                {
                    title: 'Completed 2 activities in a day',
                    medal: 'medal27.svg'
                },
                {
                    title: 'Completed 5 activities in one day',
                    medal: 'medal24.svg'
                },
            ]
        },
        {
            type: 'Myo',
            awards: [
                {
                    title: 'Member for a week',
                    medal: 'medal.svg'
                },
                {
                    title: 'Member for a month',
                    medal: 'medal2.svg'
                },
                {
                    title: 'Member for 3 months',
                    medal: 'medal3.svg'
                },
                {
                    title: 'Member for a year!!',
                    medal: 'medal4.svg'
                },
            ]
        },
    ]

    return (
        <>
            {awards.map((award, i) => {
                return (
                <>
                    <h3 style={{margin: '20px'}}>{award.type}</h3>
                    {award.awards.map((awardObject, i) =>
                    (
                        <div class="AwardDiv">
                            <img className={`Award ${Math.random() > 0.3 ? '' : 'Disabled'}`} key={i} src={`${medalUrlPrefix}${awardObject.medal}`} alt="Graphic of an award" />
                            <p>{awardObject.title}</p>
                        </div>
                    )
                    )}
                </>
                )
            }

            )}


        </>
    )
}