<template>
    <div>
      <header>
    <mt-header title="个人中心">
        <router-link  slot="left" to="<" >
      <mt-button icon="back"></mt-button>
        </router-link>
            </mt-header>
      </header>
         <div class="aa">
     <img src="../../assets/2.png" alt="" id="img">
     <span id="ab">Daisy</span>
         </div>
       
          <p>已预约详情</p>

           <div class="bb">
        <ul>
        <li>预约人:管丽</li>
        <li>预约时间：2020-06-20</li>
        <li>治疗门诊：深圳中医院龙华分院</li>
      </ul>
           </div>
           <div class="bb">
       <ul>
        <li>预约人:管丽</li>
        <li>预约时间：2020-08-20</li>
        <li>治疗门诊：深圳中医院龙华分院</li>
      </ul>
           </div>
            <div class="bb">  
       <ul>
        <li>预约人:管丽</li>
        <li>预约时间：2020-08-28</li>
        <li>治疗门诊：深圳中医院龙华分院</li>
      </ul>
        </div>
  <div class="bb">  
       <ul>
        <li>预约人:管丽</li>
        <li>预约时间：2020-09-29</li>
        <li>治疗门诊：深圳中医院龙华分院</li>
      </ul>
        </div>

   


    </div>
   
</template>
<style scoped>
   #img{
    width:100px ;
   margin-left:60% ;
  } 
   .aa{width: 100%;
   background-color:floralwhite}
  .bb{
    background-color:whitesmoke;
  }
 ul{
   list-style: none;
   color:grey;
 
 }
 #ab{
   margin-left:80%;

 }
</style>