import Api from '../api'

export default {
    getAll() {
        return Api.get('/users')
    },
    getDetail(userId) {
        return Api.get(`/users/${userId}`)
    }
}