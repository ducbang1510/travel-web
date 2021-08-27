import axios from 'axios'

export let endpoints = {
    'tours': '/tours/',
    'categories': '/categories/',
    'services': '/services/',
    'tour-images': '/tour-image/',
    'customers': '/customers/',
    'users': '/users/',
    'current-user': '/users/current-user/',
    'login': '/o/token/',
}

export default axios.create({
    baseURL: "http://127.0.0.1:8000/"
})