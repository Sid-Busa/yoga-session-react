const initialState = {
    day: "",
    monthName:"",
    weekName : "",
    year:"",
    eventList:[]
};
export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_EVENT_LIST":
            return {
                ...state,
                day: action.payload.day,
                monthName:action.payload.monthName,
                weekName:action.payload.weekName,
                year:action.payload.year,
                eventList: action.payload.eventList,
            };
        default:
            return state;
    }
};
