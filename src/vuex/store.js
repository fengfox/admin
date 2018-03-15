import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={
	data:[
                        {"route":"公司-机场-公司","id":"1","length":"20","ran":"5","type":"1","time":"2","remark":"备注1"},
                        {"route":"公司-火车站-公司","id":"3","length":"30","ran":"10","type":"2","time":"1","remark":"备注2"},
						{"route":"公司-郫县-公司","id":"9","length":"50","ran":"15","type":"1","time":"1","remark":"备注3"},
						{"route":"公司-北头-公司","id":"10","length":"60","ran":"20","type":"1","time":"1","remark":"备注4"},
                     ]
}
export default new Vuex.Store({
	state
})