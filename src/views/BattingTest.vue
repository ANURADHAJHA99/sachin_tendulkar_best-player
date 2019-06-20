<template>
    <div class="batting-test">

        <div class="card-center">
          <span class="title-imp">Factors determining the performance of players in Test Match</span>
          <hr>
          <br>
          <span class="result-ps">1. Conversion of 50's into 100's plays an important role in the
         game as it gives big boost to the score.
          </span>
          <span class="result-ps">2. Conversion 100's into 200's plays an crucial role in
            Test cricket format shows the strength of the player, as he continues to score big even after playing for long.
          </span>
         </div>
        <br>
        <br>
        <br>
        
        
        <div class="card">
            <PlayerDetailsCard :person="focusedPlayerBattingTest" />
            <Chart
            titleText="Average Runs Scored"
            subTitleText="A good average score of all matches is what makes a player dependable"
            chartType="horizontalBar"
            :chartData="AvgOverInngsTestData.data"
            :chartOptions="AvgOverInngsTestData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            inference="Average Run"
            titleText="Batting Average: Runs divided by (number of times out) = Runs divided by (Innings - Not Outs)."
            winner="Sir Don Bradman has the highest average amongst all the respective players."
            />
        </div>
        <br
        <br>
        <br>
        

        <div class="card">
            <Chart
            titleText="Avg Runs Scored (HomeGround vs Abroad)"
            subTitleText="According to a research, the players playing environment such as home ground or abroad ground plays a very important role, and the key 
            factor of discussion is Motivation"
            chartType="horizontalBar"
            :chartData="HomeAwayScoreData.data"
            :chartOptions="HomeAwayScoreData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            winner="Sir Don Bradman is the winner in the following category."
            inference="Scoring under pressure"
            titleText="Motivation plays a key role in the performance of a player, and it is gained by audience watching the game especially the ground spectators 
            who are rooting and cheering for their players.Thus a player even with less cheering, if is able to play good, shows anything hardly matters to him on a personal level."
            />.
           <br>
        <br>
        <br>
        
        </div>

<br>
        <br>
        <br>
        
        
        <div class="card">
            <Chart
            titleText="Conversion of 50s to 100s"
            subTitleText="THe more easily a player scores 100's and 50's , the hardest the target becomes for the opposite team to achieve. "
            chartType="horizontalBar"
            :chartData="ConversionToCenturyData.data"
            :chartOptions="ConversionToCenturyData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            inference="The essence of 100's and 50's"
            winner="Sachin Tendulkar has the fastest rate among all the players."
            titleText="A half-century and a full-century is very important milestone in a match for a player."
            />
        </div>
       <br>
        <br>
        <br>
        

        <div class="card">
            <Chart
            titleText="Conversion 100s to 200s"
            subTitleText="If a player is able to retain scoring at a fast rate such that he scores a double century without getting tired, 
            it potrays the muscle strength the player has."
            chartType="horizontalBar"
            :chartData="ConversionToDoubleCenturyData.data"
            :chartOptions="ConversionToDoubleCenturyData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            winner="Sachin Tendulkar has the rate among all the players."
            titleText="A conversion rate where the player transforms the century to double century is very rare and important."
            inference="The importance of double century"
            />
        </div>
       <br>
        <br>
        <br>
        

      <div class="card">
            <Chart
            titleText="Strike Rate"
            subTitleText="Scoring runs faster always give an edge, whatever innings maybe"
            chartType="horizontalBar"
            :chartData="StrikeRateData.data"
            :chartOptions="StrikeRateData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            winner="Sir Viv Richards has the highest Strike rate amongst all the players."
            titleText=" Batting strike rate is a measure of how frequently a batsman achieves the primary goal of batting, namely scoring runs."
            inference="Strike Rate"
            />
            <br/>
            
        </div>
        <br>
        <br>
        <br>
        

        <div class="card">
            <Chart
            titleText="Ratio of 4's to 6's"
            subTitleText="A player who hits more boundaries will score runs faster and probably
                          much more than others"
            chartType="horizontalBar"
            :chartData="BoundariesData.data"
            :chartOptions="BoundariesData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            winner="Sachin Tendulkar has the highest number of fours and sixes."
            titleText="The high no. of fours and sixes determine easy target chase or target plan for the oppposing team, thus it is very important factor."
            inference="Four's and Sixes's"
            />
        </div>
       <br>
        <br>
        <br>
        

        <div class="card">
            <Chart
            titleText="Performance Contribution"
            subTitleText="The chart represents no. of wins Sachin and following players achieved while acting as the team Captain "
            chartType="horizontalBar"
            :chartData="WinPerformance.data"
            :chartOptions="WinPerformance.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            winner="Sir Don Bradman has the highest no. of win as a captain"
            titleText="Being a good player does not necessarily mean that a player is a good captain too.Thus Captaincy can be whole lot challenging"
            inference="Performance Measure"
            />
            <br>
            
        </div>
        <br>
        <br>
        <br>
        
<div class="card-bottom">
          <h1>  Elemental Conclusion - Batting Test</h1>
          <span class="result"> Sachin Tendulkar Won most of the category </span>
          
        </div>

    </div>
</template>

<script>
import Chart from '@/components/Chart.vue';
import Inference from '@/components/Inference.vue';
import PlayerDetailsCard from '@/components/PlayerDetailsCard.vue';

import locationBatTest from '../../json/locationbattingTest.json';

export default {
  name: 'battingTest',
  components: {
    Chart,
    Inference,
    PlayerDetailsCard,
  },
  data() {
    return {
      chartContainerStyle: {
        margin: '10px',
        width: '45vw',
        display: 'inline-block',
        scaleFontColor: 'white',
      },
      AvgOverInngsTestData: {
        options: {
           scaleFontColor: 'white',
          responsive: true,
          scales: {
            xAxes: [{
              ticks: {
                beginAtZero: true,
                maxRotation: 0,
                minRotation: 0,
              },
              gridLines: {
                offsetGridLines: true,
                color: 'rgba(255, 0, 0, 1)'
              },
              barThickness: 50,
            }],
            yAxes: [{
              stacked: true,
              
              gridLines: {
                offsetGridLines: true,
                color: 'rgba(255, 0, 0, 1)'
              },
            }],
          },
          onClick: (evt, item) => {
            if (item && item[0] && item[0]._index != null) {
              this.focusedPlayerBattingTest = locationBatTest[item[0]._index];
            }
          },
        },
        data: {
          labels: [],
          datasets: [],
        },
      },
      HomeAwayScoreData: {
        options: {
          responsive: true,
          scales: {
            xAxes: [{
              stacked: true,
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
      ConversionToCenturyData: {
        options: {
          responsive: true,
          scales: {
            xAxes: [{
              stacked: true,
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
      ConversionToDoubleCenturyData: {
        options: {
          responsive: true,
          scales: {
            xAxes: [{
              stacked: true,
              color: 'rgba(255, 0, 0, 1)',
              gridLines: {
                offsetGridLines: true,
                color: 'rgba(255, 0, 0, 1)'
              },
            }],
            yAxes: [{
              stacked: true,
              color: 'rgba(255, 0, 0, 1)',
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
      StrikeRateData: {
        options: {
          responsive: true,
          scales: {
            xAxes: [{
              stacked: true,
              color: 'rgba(255, 0, 0, 1)',
              gridLines: {
                offsetGridLines: true,
                color: 'rgba(255, 0, 0, 1)'
              },
            }],
            yAxes: [{
              stacked: true,
              color: 'rgba(255, 0, 0, 1)',
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
      BoundariesData: {
        options: {
          responsive: true,
         scales: {
           xAxes: [{
                 stacked: true,
                 color: 'rgba(255, 0, 0, 1)',
                 gridLines: {
                offsetGridLines: true,
                color: 'rgba(255, 0, 0, 1)'
              },
             }],
             yAxes: [{
                 stacked: true,
                 color: 'rgba(255, 0, 0, 1)',
                  gridLines: {
                offsetGridLines: true,
                color: 'rgba(255, 0, 0, 1)'
              },
             }]
          }
        },
      
        data: {
          labels: [],
          datasets: [],
        },
      },
      MomData: {
        options: {
          responsive: true,
          scales: {
           xAxes: [{
                 stacked: true,
                 color: 'rgba(255, 0, 0, 1)',
                 gridLines: {
                offsetGridLines: true,
                color: 'rgba(255, 0, 0, 1)'
              },
             }],
             yAxes: [{
                 stacked: true,
                 color: 'rgba(255, 0, 0, 1)',
                  gridLines: {
                offsetGridLines: true,
                color: 'rgba(255, 0, 0, 1)'
              },
             }]
          }
        },
        data: {
          labels: [],
          datasets: [],
        },
      },

      WinPerformance : {
        options: {
          responsive: true,
          scales: {
            xAxes: [{
              stacked: true,
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
      
     focusedPlayerBattingTest: null,
    };
    
  },
  mounted() {
    const avgOverInngsTestData = [];
    Object.values(locationBatTest).forEach((player) => {
      avgOverInngsTestData.push({
        name: player.player_name,
        avg: player.details.total.avg,
      });
    });
    avgOverInngsTestData.sort((t1, t2) => t2.avg - t1.avg);
    this.AvgOverInngsTestData.data = {
      labels: avgOverInngsTestData.map(t => t.name),
      datasets: [{
        label: 'Average Runs of all Matches',
        data: avgOverInngsTestData.map(t => t.avg),
        backgroundColor: [
          'rgb(218,20,255)',
          'rgb(57,255,20)',
          'rgb(255,255,0)',
          'rgb(0,255,255)',
          'rgb(255,128,0)',
          'rgb(235, 224, 255, 0.5)',
          'rgb(244, 245, 245, 0.5)',
        ],
        borderWidth: 2,
        borderColor: [
          'rgb(243,179,255)',
          'rgb(12,79,0)',
          'rgb(255,123,0)',
          'rgb(0,107,255)',
          'rgb(255,170,0)',
          'rgb(153, 102, 255, 1)',
          'rgb(201, 203, 207, 1)',
        ],
        hoverBorderWidth: 1.2,
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

    const homeAwayScoreData = [];
    Object.values(locationBatTest).forEach((player) => {
      homeAwayScoreData.push({
        name: player.player_name,
        awayAvg: player.details.away.avg,
        homeAvg: player.details.home.avg,
      });
    });
    this.HomeAwayScoreData.data = {
      labels: homeAwayScoreData.map(t => t.name),
      datasets: [
        {
          label: 'Away',
          data: homeAwayScoreData.map(t => t.awayAvg),
          backgroundColor: 'rgb(0,213,255)',
          borderWidth: 2,
          borderColor: 'rgb(0,100,120)',
          hoverBorderWidth: 1,
          hoverBorderColor: 'rgb(255, 99, 132, 1)',
        },
        {
          label: 'Home',
          data: homeAwayScoreData.map(t => t.homeAvg),
          backgroundColor: 'rgb(255,105,105)',
          borderWidth: 2,
          borderColor: 'rgb(255,105,105)',
          hoverBorderWidth: 1,
          hoverBorderColor: 'rgb(75, 192, 192, 1)',
        }],
    };

    const conversionToCenturyData = [];
    Object.values(locationBatTest).forEach((player) => {
      conversionToCenturyData.push({
        name: player.player_name,
        hundreds: player.details.total.hundreds,
        fifties: player.details.total.fifties,
      });
    });
    this.ConversionToCenturyData.data = {
      labels: conversionToCenturyData.map(t => t.name),
      datasets: [
        {
          label: 'Half Century',
          data: conversionToCenturyData.map(t => t.fifties),
          backgroundColor: 'rgb(0,213,255)',
          borderWidth: 2,
          borderColor: 'rgb(0,100,120)',
          hoverBorderWidth: 1,
          hoverBorderColor: 'rgb(255, 159, 64, 1)',
        },
        {
          label: 'Century',
          data: conversionToCenturyData.map(t => t.hundreds),
          backgroundColor: 'rgb(255,105,105)',
          borderWidth: 2,
          borderColor: 'rgb(255,105,105)',
          hoverBorderWidth: 1,
          hoverBorderColor: 'rgb(54, 162, 235, 1)',
        },
      ],
    };

    const conversionToDoubleCenturyData = [];
    Object.values(locationBatTest).forEach((player) => {
      conversionToDoubleCenturyData.push({
        name: player.player_name,
        hundreds: player.details.total.hundreds,
        doublecentury: player.details.total.doublecentury,
      });
    });
    this.ConversionToDoubleCenturyData.data = {
      labels: conversionToDoubleCenturyData.map(t => t.name),
      datasets: [
        {
          label: 'Century',
          data: conversionToDoubleCenturyData.map(t => t.hundreds),
          backgroundColor: 'rgb(0,213,255)',
          borderWidth: 2,
          borderColor: 'rgb(0,100,120)',
          hoverBorderWidth: 1,
          hoverBorderColor: 'rgb(255, 99, 132, 1)',
        },
        {
          label: 'Double Century',
          data: conversionToDoubleCenturyData.map(t => t.doublecentury),
          backgroundColor: 'rgb(255,105,105)',
          borderWidth: 2,
          borderColor: 'rgb(255,105,105)',
          hoverBorderWidth: 1,
          hoverBorderColor: 'rgb(75, 192, 192, 1)',
        },
      ],
    };

    const strikeRateData = [];
    Object.values(locationBatTest).forEach((player) => {
      strikeRateData.push({
        name: player.player_name,
        strike_rate: player.details.total.strike_rate,
      });
    });
    strikeRateData.sort((t1, t2) => t2.strike_rate - t1.strike_rate);
    this.StrikeRateData.data = {
      labels: strikeRateData.map(t => t.name),
      datasets: [{
        label: 'Strike Rate',
        
        data: strikeRateData.map(t => t.strike_rate),
        backgroundColor: [
          'rgb(218,20,255)',
          'rgb(57,255,20)',
          'rgb(255,255,0)',
          'rgb(0,255,255)',
          'rgb(255,128,0)',
          'rgb(235, 224, 255, 0.5)',
          'rgb(244, 245, 245, 0.5)',
        ],
        borderWidth: 2,
        borderColor: [
          'rgb(243,179,255)',
          'rgb(12,79,0)',
          'rgb(255,123,0)',
          'rgb(0,107,255)',
          'rgb(255,170,0)',
          'rgb(153, 102, 255, 1)',
          'rgb(201, 203, 207, 1)',
        ],
        hoverBorderWidth: 1.2,
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

    const boundariesData = [];
    Object.values(locationBatTest).forEach((player) => {
      boundariesData.push({
        name: player.player_name,
        fours: player.details.total.fours,
        sixes: player.details.total.sixes,
      });
    });
    this.BoundariesData.data = {
      labels: boundariesData.map(t => t.name),
      datasets: [
        {
          label: 'Fours',
          data: boundariesData.map(t => t.fours),
          backgroundColor: 'rgb(0,213,255)',
          borderWidth: 2,
          borderColor: 'rgb(0,100,120)',
          hoverBorderWidth: 1,
          hoverBorderColor: 'rgb(255, 99, 132, 1)',
        },
        {
          label: 'Sixes',
          data: boundariesData.map(t => t.sixes),
          backgroundColor:'rgb(255,105,105)',
          borderWidth: 2,
          borderColor: 'rgb(255,105,105)',
          hoverBorderWidth: 1,
          hoverBorderColor: 'rgb(75, 192, 192, 1)',
        },
      ],
    };

    const momData = [];
    Object.values(locationBatTest).forEach((player) => {
      momData.push({
        name: player.player_name,
        mom: player.details.total.mom,
      });
    });
    momData.sort((t1, t2) => t2.mom - t1.mom);
    this.MomData.data = {
      labels: momData.map(t => t.name),
      datasets: [{
        label: 'Man of Match',
        data: momData.map(t => t.mom),
        backgroundColor: [
         'rgb(218,20,255)',
          'rgb(57,255,20)',
          'rgb(255,255,0)',
          'rgb(0,255,255)',
          'rgb(255,128,0)',
          'rgb(235, 224, 255, 0.5)',
          'rgb(244, 245, 245, 0.5)',
        ],
        borderWidth: 0.8,
        borderColor: [
          'rgb(243,179,255)',
          'rgb(12,79,0)',
          'rgb(255,123,0)',
          'rgb(0,107,255)',
          'rgb(255,170,0)',
          'rgb(153, 102, 255, 1)',
          'rgb(201, 203, 207, 1)',
        ],
        hoverBorderWidth: 0,
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
  const winPerformance = [];
    Object.values(locationBatTest).forEach((player) => {
      winPerformance.push({
        name: player.player_name,
        percen_win: player.details.total.win_percentage,
       });
    });
    winPerformance.sort((t1, t2) => t2.winPerformance - t1.winPerformance);
    this.WinPerformance.data = {
      labels: winPerformance.map(t => t.name),
      datasets: [
        {
          label: 'performance winning factor',
          data: winPerformance.map(t => t.percen_win),
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
  color:rgb(19, 20, 36);
}

.batting-test{
 background-color: rgb(19, 20, 36);
 background-position: 0%
}

.bottomtags {
  margin-top: 10px;
}

.center {
  text-align: center;
}
</style>
