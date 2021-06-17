const config = 
{
    authLogin: '/auth/login',
    authRefresh: '/auth/refresh',
    afterLogout: '/login',
    resetWithToken: '/auth/reset/token',
    authSignUp: '/auth/register',
    authValidate: '/auth/validate',
    confirmEmail: 'auth/confirm',
    userProfileUrl: '/auth/profile',

    activitiesListUrl: '/activities/api/list',
    activityGetUrl: '/activities/api/get/',// +/${activityId}
    activityCompleteUrl: '/activities/api/complete',

    getSparkPlan: '/activities/api/spark/get',

    onboardingStatusUrl: '/onboarding/status',

    onboardingSteps: ['About yourself', 'You and art', 'Final details'],
    onboardingQuestions: [
        {
            question: "What kind of creative activity are you most interested in?",
            answers:[
                "Drawing",
                "Writing",
                "Painting",
                "Crafts",
                "Photography"
            ]
        },
        {
            question: "What would you like to use Myo for?",
            answers :[
                "To relax",
                "To learn new skills",
                "To use my imagination",
                "To better express myself",
                "To discover new arts"
            ]
        },
        {
            question: "What would you like Myo to offer?",
            answers: [
                "Breadth of activities",
                "In depth skill building",
                "Global perspectives",
                "Interaction with artists & users"
            ]
        },
        {
            question: "What skills are you most interested in developing?",
            answers: [
                "Imagination",
                "Persistence",
                "Discipline",
                "Inquisitiveness",
                "Collaboration"
            ]
        },
        {
            question: "Generally, how often do you engage in creative activities?",
            answers: [
                "Everyday",
                "Two or three times a week",
                "Once every now and again",
                "Never!"
            ]
        },
        {
            question: "How often would you like to engage in creative activities?",
            answers: [
                "Everyday",
                "Two or three times a week",
                "Once every now and again",
                "Never!"
            ]
        },
        {
            question: "For how long?",
            answers: [
                "No more than 5mins at a time",
                "5mins to 10mins",
                "10mins to 20mins",
                "20mins to 40mins",
                "Sky’s the limit!"
            ]
        },
        {
            question: "How ‘experienced’ do you think you are?",
            answers: [
                "Complete beginner",
                "Want to take it easy",
                "I like a challenge!",
                "Experience grrrr!!"
            ]
        },
        {
            question:"What materials do you have access to?",
            answers: [
                "Pens and paper only",
                "Own some pencils",
                "Watercolour paints",
                "Acrylic paints",
                "General arts & crafts stuff",
                "Camera (phone will do)"
            ],
            //type: 'multiple'
        }
    ]
}

export default config