export default ({
    //物品
    state: {
        doctorId: 1,
        ksid: 1,
        daystarttime: '',
        dayendtime: '',
    },
    //记账员 -- getters认为是store的计算属性 
    getters: {
        //统计仓库中商品的数量,state可以替换为任意的合法名称
        //但无论换成什么名称,其都代表当前store中的所有state

    },
    //搬运工
    mutations: {
        doctorId(state, i) {
            state.doctorId = i;
        }
    },
    //拉货的汽车
    actions: {},
    modules: {}
})