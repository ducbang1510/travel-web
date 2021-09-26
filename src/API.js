import axios from 'axios'

export let endpoints = {
    'tours': '/tours/',
    'categories': '/categories/',
    'services': '/services/',
    'tour-images': '/tour-images/',
    'customers': '/customers/',
    'blogs': '/blogs/',
    'payers': '/payers/',
    'comments': '/comments/',
    'users': '/users/',
    'current-user': '/users/current-user/',
    'login': '/o/token/',
    'oAuthInfo': '/oauth2-info/',
    'payment': 'https://test-payment.momo.vn/gw_payment/transactionProcessor',
}

export default axios.create({
    baseURL: "http://127.0.0.1:8000/"
})