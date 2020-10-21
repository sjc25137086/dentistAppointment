export default{
    state: {
        hospitalid:1,
        ksid:1
    },
    mutations: {
        setHospitalid(state,hospitalid){
            state.hospitalid = hospitalid;
        },
        setKsid(state,ksid){
            state.ksid = ksid;
        }
    },
}