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
                    medal: 'medal.svg'
                },
                {
                    title: 'Completed 5 activities',
                    medal: 'medal2.svg'
                },
                {
                    title: 'Completed 10 activities',
                    medal: 'medal3.svg'
                },
                {
                    title: 'Completed your first Spark plan',
                    medal: 'medal4.svg'
                },
                {
                    title: 'Completed all activities 🤩',
                    medal: 'medal5.svg'
                },
            ]
        },
        {
            type: 'Learning',
            awards: [
                {
                    title: 'Completed one activity of each type',
                    medal: 'medal10.svg'
                },
                {
                    title: 'Completed a special activity',
                    medal: 'medal11.svg'
                },
                {
                    title: 'Completed 2 activities in a day',
                    medal: 'medal12.svg'
                },
                {
                    title: 'Completed 5 activities in one day',
                    medal: 'medal13.svg'
                },
            ]
        },
        {
            type: 'Myo membership',
            awards: [
                {
                    title: 'Member for a week',
                    medal: 'medal6.svg'
                },
                {
                    title: 'Member for a month',
                    medal: 'medal7.svg'
                },
                {
                    title: 'Member for 3 months',
                    medal: 'medal8.svg'
                },
                {
                    title: 'Member for a year!!',
                    medal: 'medal9.svg'
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