<template>
    <div class="batting_test_2004">
        <div class="card-center">
          <span class="title-imp">Before 2004 and after 2004 Analysis</span>
          <hr>
          <br>
          <span class="result-ps"> <b>The following analysis is based on the research and critical observation that due 
            to serious injuries Sachin tendulkar did not remain as effective as he was before 2004.This Analysis in the role of batsman(as 
            he is an aclaimed batsman)comprises of :-</b>
          </span>
          <br>
          
          <span class="result-ps">1. <b>His Average score in matches</b> 
          </span>
          <span class="result-ps">2. <b>Number of 6's</b> 
          </span>
          <span class="result-ps" >3. <b>Number of 4's</b> 
          </span>
          <span class="result-ps">4. <b>Average Strike Rate</b> 
          </span>
        </div>

       <br>
        <br>
        <br>
        

        <div class="card">
            <Chart
            titleText="Avg Runs Scored"
            subTitleText="Average run is important to determine players consistency"
            chartType="bar"
            :chartData="HomeAwayScoreData.data"
            :chartOptions="HomeAwayScoreData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            inference="Avg run Scored"
            titleText="A batting average represents how many runs, on average, a batsman scores before getting out."
           
            winner="The difference in average of Sachin before and after 2004 is around 30."
            />
            <br/>
            
           
        </div>

        <br>
        <br>
        <br>
       <div class="card">
            <Chart
            titleText="Total No. of fours"
            subTitleText="According to the research, no. of fours determine the ease with with the player finishes off the game. "
            chartType="bar"
            :chartData="FoursStat.data"
            :chartOptions="FoursStat.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            inference="Total no. of Fours"
            winner="The difference in total no. of fours in the two respective era is around 520."
            titleText="The higher no. of fours decide the players ability to score run fast"
            />
            <br/>
           
        </div>

        <br>
        <br>
        <br>

        <div class="card">
            <Chart
            titleText="Total No. of sixes scored"
            subTitleText="SInce Sixes are counted if the ball is hit outside the boundaries, therefore it also counts to the muscle power of the player. "
            chartType="bar"
            :chartData="SixesStat.data"
            :chartOptions="SixesStat.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            inference="Total no. of sixes"
            winner="The difference between the total no. of sixes in the two respective era is 11."
            titleText="The tactics, muscle power, pitch length, ground shape determines the no. of sixes a player can score on an average"
            />
            <br/>
            
        </div>

        <br>
        <br>
        <br>

<div class="card"> 
            <Chart
            titleText="Average Strike rate"
            subTitleText="It is an obvious fact that the higher strike rate of the player determines how good of a player he is and his capability to finish the match"
            chartType="bar"
            :chartData="SixesStat.data"
            :chartOptions="SixesStat.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            winner="It is fairly visible that there is difference in the average strike rate before and after 2004."
            titleText="The difference strike rate is an importsnt factor amongst all the other factor becuase it gives the player to chase the target smoothly."
            inference="Average Strike rate"
            />
            <br/>
            
        </div>
<br>
        <br>
        <br>
    </div>
</template>

<script>
import Chart from '@/components/Chart.vue';
import Inference from '@/components/Inference.vue';

import battingtest2004 from '../../json/batting_till_2004.json';

export default {
  name: 'battingtest2004',
  components: {
    Chart,
    Inference,
    
  },
  data() {
    return {
      chartContainerStyle: {
        margin: '10px',
        width: '45vw',
        display: 'inline-block',
      },
      
       HomeAwayScoreData: {
        options: {
          responsive: true,
           scales: {
            xAxes: [{
              stacked: true,
              maxBarThickness: 70,
              gridLines: {
                offsetGridLines: true,
                color: 'rgba(255, 0, 0, 1)'
              },
            }],
            yAxes: [{
              stacked: true,
              
              gridLines: {
                offsetGridLines: true,
                color: 'rgba(255, 0, 0, 1)'
              },
            }],
            
          },
        },
        data: {
          labels: [],
          datasets: [],
        },
      },

      FoursStat: {
        options: {
          responsive: true,
           scales: {
            xAxes: [{
              stacked: true,
              maxBarThickness: 70,
              gridLines: {
                offsetGridLines: true,
                color: 'rgba(255, 0, 0, 1)'
              },
            }],
            yAxes: [{
              stacked: true,
              
              gridLines: {
                offsetGridLines: true,
                color: 'rgba(255, 0, 0, 1)'
              },
            }],
            
          },
        },
        data: {
          labels: [],
          datasets: [],
        },
      },

      SixesStat: {
        options: {
          responsive: true,
           scales: {
            xAxes: [{
              stacked: true,
              maxBarThickness: 70,
              gridLines: {
                offsetGridLines: true,
                color: 'rgba(255, 0, 0, 1)'
              },
            }],
            yAxes: [{
              stacked: true,
              
              gridLines: {
                offsetGridLines: true,
                color: 'rgba(255, 0, 0, 1)'
              },
            }],
            
          },
        },
        data: {
          labels: [],
          datasets: [],
        },
      },
    

    AverageSr: {
        options: {
          responsive: true,
           scales: {
            xAxes: [{
              stacked: true,
              maxBarThickness: 70,
              gridLines: {
                offsetGridLines: true,
                color: 'rgba(255, 0, 0, 1)'
              },
            }],
            yAxes: [{
              stacked: true,
              
              gridLines: {
                offsetGridLines: true,
                color: 'rgba(255, 0, 0, 1)'
              },
            }],
            
          },
        },
        data: {
          labels: [],
          datasets: [],
        },
      },
    
    
    };
  },
     
 mounted(){
    const homeAwayScoreData = [];
    Object.values(battingtest2004).forEach((player) => {
      homeAwayScoreData.push({
        name: player.year,
        awayAvg: player.info.batting_score,
       });
    });
    this.HomeAwayScoreData.data = {
      labels: homeAwayScoreData.map(t => t.name),
      datasets: [
        {
          label: 'Avg run scored',
          data: homeAwayScoreData.map(t => t.awayAvg),
          backgroundColor: [
          'rgb(218,20,255)',
          'rgb(57,255,20)',
          'rgb(255,255,0)',
          'rgb(0,255,255)',
          'rgb(255,128,0)',
          'rgb(235, 224, 255, 0.5)',
          'rgb(244, 245, 245, 0.5)',
        ],
          borderWidth: 0.5,
          borderColor: [
          'rgb(243,179,255)',
          'rgb(12,79,0)',
          'rgb(255,123,0)',
          'rgb(0,107,255)',
          'rgb(255,170,0)',
          'rgb(153, 102, 255, 1)',
          'rgb(201, 203, 207, 1)',
        ],
          hoverBorderWidth: 1,
          hoverBorderColor: [
          'rgb(255, 99, 132, 1)',
          'rgb(255, 159, 64, 1)',
          'rgb(255, 205, 86, 1)',
          'rgb(75, 192, 192, 1)',
          'rgb(54, 162, 235, 1)',
          'rgb(153, 102, 255, 1)',
          'rgb(201, 203, 207, 1)',
        ],
       
        
        }],
    };
    const foursStat = [];
    Object.values(battingtest2004).forEach((player) => {
      foursStat.push({
        year: player.year,
        awayfours: player.info.total_no_of_fours
       });
    });
    this.FoursStat.data = {
      labels: foursStat.map(t => t.year),
      datasets: [
        {
          label: 'Total no. of fours',
          data: foursStat.map(t => t.awayfours),
          backgroundColor: [
          'rgb(218,20,255)',
          'rgb(57,255,20)',
          'rgb(255,255,0)',
          'rgb(0,255,255)',
          'rgb(255,128,0)',
          'rgb(235, 224, 255, 0.5)',
          'rgb(244, 245, 245, 0.5)',
        ],
          borderWidth: 0.5,
          borderColor: [
          'rgb(243,179,255)',
          'rgb(12,79,0)',
          'rgb(255,123,0)',
          'rgb(0,107,255)',
          'rgb(255,170,0)',
          'rgb(153, 102, 255, 1)',
          'rgb(201, 203, 207, 1)',
        ],
          hoverBorderWidth: 1,
          hoverBorderColor: [
          'rgb(255, 99, 132, 1)',
          'rgb(255, 159, 64, 1)',
          'rgb(255, 205, 86, 1)',
          'rgb(75, 192, 192, 1)',
          'rgb(54, 162, 235, 1)',
          'rgb(153, 102, 255, 1)',
          'rgb(201, 203, 207, 1)',
        ],
       
        
        }],
    };


    const sixesStat = [];
    Object.values(battingtest2004).forEach((player) => {
      sixesStat.push({
        year: player.year,
        awaysixes: player.info.total_no_of_sixes
       });
    });
    this.SixesStat.data = {
      labels: sixesStat.map(t => t.year),
      datasets: [
        {
          label: 'Total no. of sixes',
          data: sixesStat.map(t => t.awaysixes),
          backgroundColor: [
          'rgb(218,20,255)',
          'rgb(57,255,20)',
          'rgb(255,255,0)',
          'rgb(0,255,255)',
          'rgb(255,128,0)',
          'rgb(235, 224, 255, 0.5)',
          'rgb(244, 245, 245, 0.5)',
        ],
          borderWidth: 0.5,
          borderColor: [
          'rgb(243,179,255)',
          'rgb(12,79,0)',
          'rgb(255,123,0)',
          'rgb(0,107,255)',
          'rgb(255,170,0)',
          'rgb(153, 102, 255, 1)',
          'rgb(201, 203, 207, 1)',
        ],
          hoverBorderWidth: 1,
          hoverBorderColor: [
          'rgb(255, 99, 132, 1)',
          'rgb(255, 159, 64, 1)',
          'rgb(255, 205, 86, 1)',
          'rgb(75, 192, 192, 1)',
          'rgb(54, 162, 235, 1)',
          'rgb(153, 102, 255, 1)',
          'rgb(201, 203, 207, 1)',
        ],
       
        
        }],
    };


    const averageSr = [];
    Object.values(battingtest2004).forEach((player) => {
      averageSr.push({
        name: player.year,
        averagesr: player.info.average_sr,
       });
    });
    this.AverageSr = {
      labels: averageSr.map(t => t.name),
      datasets: [
        {
          label: 'Average Strike Rate',
          data: averageSr.map(t => t.averagesr),
          backgroundColor: [
          'rgb(218,20,255)',
          'rgb(57,255,20)',
          'rgb(255,255,0)',
          'rgb(0,255,255)',
          'rgb(255,128,0)',
          'rgb(235, 224, 255, 0.5)',
          'rgb(244, 245, 245, 0.5)',
        ],
          borderWidth: 0.5,
          borderColor: [
          'rgb(243,179,255)',
          'rgb(12,79,0)',
          'rgb(255,123,0)',
          'rgb(0,107,255)',
          'rgb(255,170,0)',
          'rgb(153, 102, 255, 1)',
          'rgb(201, 203, 207, 1)',
        ],
          hoverBorderWidth: 1,
          hoverBorderColor: [
          'rgb(255, 99, 132, 1)',
          'rgb(255, 159, 64, 1)',
          'rgb(255, 205, 86, 1)',
          'rgb(75, 192, 192, 1)',
          'rgb(54, 162, 235, 1)',
          'rgb(153, 102, 255, 1)',
          'rgb(201, 203, 207, 1)',
        ],
       
        
        }],
    };


    
   },
 };

</script>

<style scoped>
.tags {
  margin-bottom: 20px;
  font-size: 0px;
  background-color: rgb(19, 20, 36)
}
.bottomtags {
  margin-top: 30px;
}
.center {
  text-align: center;
}
</style>
 