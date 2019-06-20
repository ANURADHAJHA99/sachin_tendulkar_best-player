<template>
<div>
     <div class="inference-container">
        <h2>{{inference}}</h2>
        <span v-if="inference" class="inference">{{titleText}}</span>
        
    </div>

 <div class="description">
        <h2>Conclusion of the chart</h2>
        <span v-if="inference" class="inference"></span>
        <span v-if="winner" class="winner">{{winner}}</span>
    </div>

</div>
</template>

<script>
export default {
  name: 'Inference',
  props: ['inference', 'winner', 'titleText','Description'],
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Playfair+Display&display=swap');
.inference-container {
    
    display: block;
    float: right;
    
    
    margin-left: 12px;
    margin-right:12px;
    
   

    border-left: 0px solid rgba(2,0,36,1) 0%;
    border-right: 0px solid  rgba(24,92,40,1);

    border-top: 0px solid rgba(52,255,0,1);
    border-bottom : 0px solid rgba(52,255,0,1);
   background: rgb(11,82,13);
background: linear-gradient(90deg, rgba(11,82,13,1) 27%, rgba(62,126,7,1) 78%);
border-radius: 10px;
  
    height: 200px;
    width: 450px;
   
   
}
.description{
width: 25%;
    display: block;
    float: right;
    
    
    margin-left: 50px;
    margin-right: 538px;
    margin-bottom: 12px;
   
    
    border-left: 0px solid rgba(2,0,36,1) 0%;
    border-right: 0px solid  rgba(24,92,40,1);

    border-top: 0px solid rgba(52,255,0,1);
    border-bottom : 0px solid rgba(52,255,0,1);
     
  background: rgb(184,43,43);
background: linear-gradient(90deg, rgba(184,43,43,1) 68%, rgba(214,84,14,1) 82%);

border-radius: 15px;
 

    height: 150px;
    width: 450px;

}


.inference {
    color: rgb(252, 252, 248);
    font-size: 15px;
    font-weight: normal;
    display: block;
    margin-block-start: 0.42em;
    margin-block-end: 0.42em;
    margin-inline-start: 12px;
    margin-inline-end: 0px;
}

.winner {
    color: rgb(255, 255, 255);
    font-size: 15px;
    
    display: block;
    margin-top: 10px;
    margin-left: 12px;
    margin-right: 12px;
    margin-block-start: 0.42em;
    margin-block-end: 0.42em;
    margin-inline-start: 12px;
    margin-inline-end: 0px;
    font-style: 'Playfair Display', serif;
    
}

</style>
