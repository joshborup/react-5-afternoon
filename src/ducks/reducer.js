var initialState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: false,
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
}

function reducer(state = initialState, action){
    switch(action.type){
        case 'UPDATE_LOAN_TYPE':
            return {...state, loanType: action.payLoad};
            break;
        case 'UPDATE_PROPERT_TYPE':
            return {...state, propertyType: action.payLoad};
            break;
        case 'UPDATE_CITY':
            return {...state, city: action.payLoad};
            break;
        case 'UPDATE_PROP':
            return {...state, propToBeUsedOn: action.payLoad};
            break;
        case 'UPDATE_FOUND':
            return {...state, found: action.payLoad};
            break;
        case 'UPDATE_REAL_ESTATE':
            return {...state, realEstateAgent: action.payLoad};
            break;
        case 'UPDATE_COST':
            return {...state, cost: action.payLoad};
        case 'UPDATE_DOWNPAYMENT':
            return {...state, downPayment: action.payLoad};
            break;
        case 'UPDATE_CREDIT':
            return {...state, credit: action.payLoad};
            break;
        case 'UPDATE_HISTORY':
            return {...state, history: action.payLoad};
            break;
        case 'UPDATE_ADDRESS_ONE':
            return {...state, addressOne: action.payLoad};
            break;
        case 'UPDATE_ADDRESS_TWO':
            return {...state, addressTwo: action.payLoad};
            break;
        case 'UPDATE_ADDRESS_THREE':
            return {...state, addressThree: action.payLoad};
            break;
        case 'UPDATE_FIRST_NAME':
            return {...state, firstName: action.payLoad};
            break;
        case 'UPDATE_LAST_NAME':
            return {...state, lastName: action.payLoad};
            break;
        case 'UPDATE_EMAIL':
            return {...state, email: action.payLoad};
            break;
        default:
            return state;
            break;
    }
}

export function updateLoanType(loanType){
    return  {
            type: 'UPDATE_LOAN_TYPE',
            payLoad: loanType
            }
}

export function updatePropertyType(property){
    return  {
            type: 'UPDATE_PROPERT_TYPE',
            payLoad: property
            }
}

export function updateCity(city){
    return {
        type:'UPDATE_CITY',
        payLoad: city
    }
}

export function updateProp(prop){
    return {
        type: 'UPDATE_PROP',
        payLoad: prop
    }
}

export function updateFound(found){
    return {
        type: 'UPDATE_FOUND',
        payLoad: found
    }
}

export function updateRealEstateAgent(found){
    return {
        type: 'UPDATE_REAL_ESTATE',
        payLoad: found
    }
}

export function updateCost(cost){
    return {
        type: 'UPDATE_COST',
        payLoad: cost
    }
}

export function updateDownPayment(downPayment){
    return {
        type: 'UPDATE_DOWNPAYMENT',
        payLoad: downPayment
    }
}

export function updateCredit(credit){
    return {
        type: 'UPDATE_CREDIT',
        payLoad: credit
    }
}

export function updateHistory(history){
    return {
        type: 'UPDATE_HISTORY',
        payLoad: history
    }
}

export function updateAddressOne(addressOne){
    return {
        type: 'UPDATE_ADDRESS_ONE',
        payLoad: addressOne
    }
}

export function updateAddressTwo(addressTwo){
    return {
        type: 'UPDATE_ADDRESS_TWO',
        payLoad: addressTwo
    }
}

export function updateAddressThree(addressThree){
    return {
        type: 'UPDATE_ADDRESS_THREE',
        payLoad: addressThree
    }
}

export function updateFirstName(firstName){
    return {
        type: 'UPDATE_FIRST_NAME',
        payLoad: firstName
    }
}

export function updateLastName(lastName){
    return {
        type: 'UPDATE_LAST_NAME',
        payLoad: lastName
    }
}

export function updateEmail(email){
    return {
        type: 'UPDATE_EMAIL',
        payLoad: email
    }
}



export default reducer;