const initialState = {
    sectionId : {
        cSectionId:"clothing-section",
        aSectionId:"accessories-section"
    }
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case "GET_Section_DETAILS":
        return { ...state, sectionId : payload }

    default:
        return state
    }
}
