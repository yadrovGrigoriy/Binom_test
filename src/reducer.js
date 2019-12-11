const initialState = {
    form: {
        from: 'Москва',
        to: 'Санкт Петербург',
        date: '',
        changedPeople: [],
        services: []
    },
    people: [
        'Еремина Анна Евгеньевна',
        'Козлов Константин Викторович',
        'Попова Яна Борисовна',
        'Виктор Васильевич Константинов',
        'Баранов Алексей Семенович'
    ],
    places: ['Москва', 'Санкт Петербург', 'Лондон', 'Варшава', 'Берлин', 'Капенгаген', 'Париж', 'Барселона'],

    servicesList: ['Передет', 'Отель', 'ЖД', 'Трансфер', 'Аэроэксперсс', 'Страховки']
};
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SUBMIT_FORM':
            return {
                ...state
            };
        case 'INPUT_CHANGE':
            return {
                ...state,
                form: { ...state.form, [action.payload.name]: action.payload.value }
            };
        case 'REMOVE_PERSON':
            return {
                ...state,
                form: {
                    ...state.form,
                    changedPeople: state.form.changedPeople.filter(person => person !== action.payload)
                }
            };
        case 'SERVICE_CHANGED':
            const changedServices = [...state.form.services];
            changedServices.push(action.payload);
            return {
                ...state,
                form: { ...state.form, services: changedServices }
            };
        case 'SUBMIT':
            alert(JSON.stringify(state.form));
            return state;
        case 'SAVE':
            alert('Сохранено');
        default:
            return state;
    }
}
