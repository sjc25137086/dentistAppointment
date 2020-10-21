export default{
    state: {
        hospitalid:1,
        ksid:1
    },
    mutations: {
        setHospitalid(hospitalid){
            state.hospitalid = hospitalid;
            console.log(hospitalid);
        }
    },
}