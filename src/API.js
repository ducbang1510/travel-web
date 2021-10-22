import axios from 'axios'

export let endpoints = {
    'tours': '/tours/',
    'tour-details': (tourId) => `/tours/${tourId}/`,
    'add-comment-tour': (tourId) => `/tours/${tourId}/add-comment/`,
    'tour-comments': (tourId) => `/tours/${tourId}/comments/`,
    'popular-tours': '/tours/popular/',
    'update-slots': (tourId) => `/tours/${tourId}/update-slots/` ,
    'categories': '/categories/',
    'services': '/services/',
    'tour-images': '/tour-images/',
    'customers': '/customers/',
    'blogs': '/blogs/',
    'blog-details': (blogId) => `/blogs/${blogId}/`,
    'like': (blogId) => `/blogs/${blogId}/like/`,
    'newest-blogs': '/blogs/newest/',
    'payers': '/payers/',
    'get-payer': (payerId) => `/payers/${payerId}`,
    'blog-comments': (blogId) => `/blogs/${blogId}/comments/`,
    'add-comment-blog': (blogId) => `/blogs/${blogId}/add-comment/`,
    'rating': (tourId) => `/tours/${tourId}/rating/`,
    'users': '/users/',
    'current-user': '/users/current-user/',
    'login': '/o/token/',
    'change-password': '/users/change-password/',
    'forgot-password': '/reset-password/',
    'verify-token': '/reset-password/validate_token/',
    'reset-password': '/reset-password/confirm/',
    'oAuthInfo': '/oauth2-info/',
    'momo-payment': '/momo-payment/',
    'momo-confirm-payment': '/momo-confirm-payment/',
    'zalopay-payment': '/zalopay-payment/',
    'zalopay-confirm': '/zalopay-confirm/',
}

export default axios.create({
    baseURL: "http://127.0.0.1:8000/"
})