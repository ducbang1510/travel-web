import axios from 'axios'

export let endpoints = {
    'tours': '/tours/',
    'tour-details': (tourId) => `/tours/${tourId}/`,
    'categories': '/categories/',
    'services': '/services/',
    'tour-images': '/tour-images/',
    'customers': '/customers/',
    'blogs': '/blogs/',
    'blog-details': (blogId) => `/blogs/${blogId}/`,
    'payers': '/payers/',
    'comments': (blogId) => `/blogs/${blogId}/comments/`,
    'rating': (tourId) => `/tours/${tourId}/rating/`,
    'users': '/users/',
    'current-user': '/users/current-user/',
    'login': '/o/token/',
    'oAuthInfo': '/oauth2-info/',
    'payment': 'https://test-payment.momo.vn/gw_payment/transactionProcessor',
}

export default axios.create({
    baseURL: "http://127.0.0.1:8000/"
})