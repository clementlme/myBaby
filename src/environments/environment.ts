// const BASE_URL = 'http://localhost:3000';
const BASE_URL = 'http://145.239.77.42:3000';

export const environment = {
    production: false,
    api: {
        breastfeeding: BASE_URL + '/api/breastfeeding/',
        change: BASE_URL + '/api/change/',
        user: BASE_URL + '/api/user/'
    }
};
