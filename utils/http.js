/**
* Created by kite on 2018/01/20.
*/
import axios from 'axios';
import jsonp from 'jsonp';
import { getUserToKen } from './util';

const qs = require('qs');
const baseUrl = require('../../config/proxy').base_url;

// ???? axios ????
axios.defaults.baseURL = baseUrl;

export default {
  /**
   * ??get??
   * @param {*} path string 
   * @param {*} config {} 
   */
  get(path, params = {}) {

    const { header, params } = config;
    // if(header == undefined || header == '' ) {
    //   header = getUserToKen();
    // }

    // params = Object.assign( getUserToKen(), params);
    return axios.get(path, header, params).then( res => {
      return res.data;
    }).catch( error => {
        console.log(error);
    });
  },

  post(path,params = {},header = getResetToken()){
    if(header.headers && header.headers['Content-Type'] === 'application/x-www-form-urlencoded'){
      params = qs.stringify(params);
    }
    return axios.post(path,params,header).then((res)=>{
      if(res.data.code == 403){
        window.location.href = window.location.href.split('/#')[0] + '#/login';
      }
      return res.data;
    }).catch(error=>{
      console.log(error)
    })
  },
  all(arr){
    let arrtemp = [];
    for(let i=0;i<arr.length;i++){
      arrtemp.push(arr[i]())
    }
    return axios.all(arrtemp);
  },
  jsonp(url,params={},cb){
    jsonp(url,params,function(err,data){
      if(err){
        alert(err.message)
      }else{
        if(cb && typeof cb == 'function'){
          cb(data)
        }
      }
    })
  }
};
