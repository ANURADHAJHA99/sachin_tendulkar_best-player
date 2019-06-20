<template>
  <div class="home">
    <div class="card ">
      <span class="big">
        <span class="medium"> </span>
      </span>
      <blockquote>
      <p class="quote">
        "Is Sachin the best player of all times?"
      </p>
      </blockquote>
   
      <p class="instruction">
        Let's do the analysis to prove or disapprove the point.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
};
</script>

<style scoped>
.card{
  height:1000px;
  width: 1400px;
   margin-left: 20px;
   
}

.quote {
  text-align: left;
  font-weight: bold;
  font-size: 30px;
  margin-top: 70px;
  font-family: 'inconsolata';
}
.big {
  font-family: 'inconsolata';
  font-size: 200px;
  color: rgb(58,55,52);
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.medium {
  font-family: 'inconsolata';
  font-size: 100px;
  color: rgb(58,55,52);
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.intro-card {
  height: 500px;
}
.instruction {
  text-align: left;
  font-weight: bold;
  font-size: 28px;
  margin-top: 70px;
  margin-left:50px;
  /* font-family: 'inconsolata'; */
}
</style>