import * as types from '../types'
import { login, logout } from '../../api/login'
import { getToken, setToken, removeToken } from '../../utils/auth'
const state = {
    user: {},
    title: '',
    token: getToken(),
    name: '',
    avatar: '',
    roles: []
}
const getters = {
    isLogin: state => state.isLogin,
    token: state => state.token
}
// 设置属性状态
const mutations = {
    //保存登录状态
    userStatus(state, flag) {
        state.isLogin = flag
    },
    [types.LOGIN]: (state, data) => {
        localStorage.token = data;
        state.token = data;
    },
    [types.LOGOUT]: (state) => {
        localStorage.removeItem('token');
        state.token = null
    }

}
const actions = {
    //登录
    Login({ commit }, userInfo) {
        const username = userInfo.username;
        return new Promise((resolve, reject) => {
            login(username, userInfo.password).then(response => {
                const data = response.data
                // const tokenStr = data.tokenHead + data.token
                // setToken(tokenStr)
                // commit('user', tokenStr)
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    // 获取用户信息
    GetInfo({ commit }, state) {
        return new Promise((resolve, reject) => {
            // getInfo().then(response => {
            //     const data = response.data
            //     if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
            //         commit('SET_ROLES', data.roles)
            //     } else {
            //         reject('getInfo: roles must be a non-null array !')
            //     }
            //     commit('SET_NAME', data.username)
            //     commit('SET_AVATAR', data.icon)
            //     resolve(response)
            // }).catch(error => {
            //     reject(error)
            // })
        })
    },
    // 登出
    FedLogOut({ commit }) {
        return new Promise(resolve => {
            commit('SET_TOKEN', '')
            removeToken()
            resolve()
        })
    },

}

export default {
    //用于在全局引用此文里的方法时标识这一个的文件名
    state,
    getters,
    mutations,
    actions
}