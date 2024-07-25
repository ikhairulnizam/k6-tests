import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
    stages: [
        { duration: '30s', target: 20 }, // Ramp up to 20 users over 30 seconds
        { duration: '1m30s', target: 10 }, // Stay at 10 users for 1 minute and 30 seconds
        { duration: '20s', target: 0 }, // Ramp down to 0 users over 20 seconds
    ],
};

export default function () {
    let res = http.get('https://test.k6.io');
    check(res, { 'status was 200': (r) => r.status == 200 });
    sleep(1);
}

//nizam add komen sini
//ayer8