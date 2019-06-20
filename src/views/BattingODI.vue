<template>
    <div class="batting-odi">

        <div class="card-center">
          <span class="title-imp">Factors determining the performance of players in ODI Match</span>
          <hr>
          <br>
          <span class="result-ps">1. <b>Strike Rate</b> plays an important role in the
            One Day format since it is equally important to score big runs as well
            score them fast
          </span>
          <span class="result-ps">2. <b>Number of 6's and 4's</b> provide runs faster
            compared to non-boundaries and hence are prefferable when you have to score fast
          </span>
        </div>
        <br>
        <br>
        <br>

       
        <div class="card">
            <PlayerDetailsCard :person="focusedPlayerBatting" />
            <Chart
            titleText="Average Runs Scored"
            subTitleText="A good average score of all matches is what makes a player dependable"
            chartType="bar"
            :chartData="AvgOverInngsData.data"
            :chartOptions="AvgOverInngsData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            winner="Sachin Tendulkar has the highest average run scored"
            titleText="Batting Average: Runs divided by (number of times out) = Runs divided by (Innings - Not Outs)."
            inference="Average Run"
            />
        </div>
        <br>
        <br>
        <br>
        

        <div class="card">
            <Chart
            titleText="Avg Runs Scored (Home vs Away)"
            subTitleText="According to a research, the players playing environment such as home ground or abroad ground plays a very important role, and the key 
            factor of discussion is Motivation"
            chartType="horizontalBar"
            :chartData="HomeAwayScoreData.data"
            :chartOptions="HomeAwayScoreData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            inference="Average Run - Factor influencing confidence"
            winner="Sir Viv Richards is the game player in the following category"
            titleText="Motivation plays a key role in the performance of a player, and it is gained by audience watching the game especially the ground spectators 
            who are rooting and cheering for their players.thus a player even with less cheering, if is able to play good, shows anything hardly matters to him on a personal level."
            />
            <br/>
            
        </div>
        <br>
        <br>
        <br>

        <div class="card">
            <Chart
            titleText="Conversion of 50s to 100s"
            subTitleText="Let's find ability of a player to play big knocks and provide the team
                          with the winning runs"
            chartType="horizontalBar"
            :chartData="ConversionToCenturyData.data"
            :chartOptions="ConversionToCenturyData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            inference="50s and 100s"
            winner="Sachin Tendulkar is the winner in this league."
            titleText="It is clearly evident that Sachin Tendulkar is the player who once settled,
                       goes for the big runs."
             /></div>
        <br>
        <br>
        <br>
        <div class="card">
            <Chart
            titleText="Conversion rate 100s to 200s"
            subTitleText="A double century is rare and unique for a player"
            chartType="horizontalBar"
            :chartData="ConversionToDoubleCenturyData.data"
            :chartOptions="ConversionToDoubleCenturyData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            inference="Double century"
            winner="Sachin Tendulkar is leading in the following category"
            titleText="Only Sachin Tendulkar is the player made a double century in ODI."
            />
        </div>
        <br>
        <br>
        <br>

<div class="card">
            <Chart
            titleText="Strike Rate"
            subTitleText="Scoring runs faster in ODI is primary target"
            chartType="bar"
            :chartData="StrikeRateData.data"
            :chartOptions="StrikeRateData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            winner="Both Sir Viv Richards & Sachin Tendulkar secure the category"
            inference="High strike Rate"
            titleText="Higher strike rate is a must for performance packed game where target chase is extreme and run scoring is a must.Thus an individual with high 
            strike rate is very useful for a team in that retrorespect."
            />
            
            
        </div>
        <br>
        <br>
        <br>
        <div class="card">
            <Chart
            titleText="Number of 4's & 6's"
            subTitleText="A player who hits more boundaries will score runs faster"
            chartType="horizontalBar"
            :chartData="BoundariesData.data"
            :chartOptions="BoundariesData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            inference="King of Boundaries"
            winner="Sachin Tendulkar is the winner in the following category"
            titleText="Sachin Tendulkar likes to send the balls out of the ground, scoring most of his
                       runs with 4's & 6's"
            />
        </div>
        <br>
        <br>
        <br>


        <div class="card-bottom">
          <h1>  Elemental Conclusion - Batting ODI</h1>
          <span class="result"> Sachin Tendulkar Won most of the category </span>
          
        </div>
        <br>
        <br>
        <br>

    </div>
</template>

<script>
import Chart from '@/components/Chart.vue';
import Inference from '@/components/Inference.vue';
import PlayerDetailsCard from '@/components/PlayerDetailsCard.vue';

import location_bat_odi from '../../json/locationbattingODI.json';

export default {
  name: 'battingODI',
  components: {
    Chart,
    Inference,
    PlayerDetailsCard,
  },
  data() {
    return {
      chartContainerStyle: {
        margin: '100px',
        width: '45vw',
        display: 'inline-block',
      },
      AvgOverInngsData: {
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
          onClick: (evt, item) => {
            if (item && item[0] && item[0]._index != null) {
              this.focusedPlayerBatting = location_bat_odi[item[0]._index];
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
      ConversionToCenturyData: {
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
      ConversionToDoubleCenturyData: {
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
      StrikeRateData: {
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
      BoundariesData: {
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
      MomData: {
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
      focusedPlayerBatting: null,
    };
  },
  mounted() {
    const avgOverInngsData = [];
    Object.values(location_bat_odi).forEach((player) => {
      avgOverInngsData.push({
        name: player.player_name,
        avg: player.details.total.avg,
      });
    });
    avgOverInngsData.sort((t1, t2) => t2.avg - t1.avg);
    this.AvgOverInngsData.data = {
      labels: avgOverInngsData.map(t => t.name),
      datasets: [{
        label: 'Average Runs of all Matches',
        data: avgOverInngsData.map(t => t.avg),
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
    Object.values(location_bat_odi).forEach((player) => {
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
    Object.values(location_bat_odi).forEach((player) => {
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
          borderWidth: 0.5,
          borderColor: 'rgb(0,100,120)',
          hoverBorderWidth: 1,
          hoverBorderColor: 'rgb(255, 99, 132, 1)',
        },
        {
          label: 'Century',
          data: conversionToCenturyData.map(t => t.hundreds),
          backgroundColor: 'rgb(255,105,105)',
          borderWidth: 0.5,
          borderColor: 'rgb(255,105,105)',
          hoverBorderWidth: 1,
          hoverBorderColor: 'rgb(75, 192, 192, 1)',
        },
      ],
    };

    const conversionToDoubleCenturyData = [];
    Object.values(location_bat_odi).forEach((player) => {
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
          borderWidth: 0.5,
          borderColor: 'rgb(0,100,120)',
          hoverBorderWidth: 1,
          hoverBorderColor: 'rgb(255, 159, 64, 1)',
        },
        {
          label: 'Double Century',
          data: conversionToDoubleCenturyData.map(t => t.doublecentury),
          backgroundColor: 'rgb(255,105,105)',
          borderWidth: 0.5,
          borderColor: 'rgb(255,105,105)',
          hoverBorderWidth: 1,
          hoverBorderColor: 'rgb(54, 162, 235, 1)',
        },
      ],
    };

    const strikeRateData = [];
    Object.values(location_bat_odi).forEach((player) => {
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
          'rgb(255,128,0)',,
          'rgb(255, 245, 221, 0.5)',
          'rgb(244, 245, 245, 0.5)',
        ],
        borderWidth: 0.8,
        borderColor: [
          'rgb(243,179,255)',
          'rgb(12,79,0)',
          'rgb(255,123,0)',
          'rgb(0,107,255)',
          'rgb(255,170,0)',
          'rgb(255, 205, 86, 1)',
          'rgb(201, 203, 207, 1)',
        ],
        hoverBorderWidth: 1.2,
        hoverBorderColor: [
          'rgb(75, 192, 192, 1)',
          'rgb(54, 162, 235, 1)',
          'rgb(153, 102, 255, 1)',
          'rgb(255, 99, 132, 1)',
          'rgb(255, 159, 64, 1)',
          'rgb(255, 205, 86, 1)',
          'rgb(201, 203, 207, 1)',
        ],
      }],
    };

    const boundariesData = [];
    Object.values(location_bat_odi).forEach((player) => {
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
          borderWidth: 0.5,
          borderColor: 'rgb(0,100,120)',
          hoverBorderWidth: 1,
          hoverBorderColor: 'rgb(255, 159, 64, 1)',
        },
        {
          label: 'Sixes',
          data: boundariesData.map(t => t.sixes),
          backgroundColor: 'rgb(255,105,105)',
          borderWidth: 0.5,
          borderColor: 'rgb(255,105,105)',
          hoverBorderWidth: 1,
          hoverBorderColor: 'rgb(54, 162, 235, 1)',
        },
      ],
    };

    const momData = [];
    Object.values(location_bat_odi).forEach((player) => {
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
          'rgb(255, 224, 230, 0.5)',
          'rgb(215, 236, 251, 0.5)',
          'rgb(255, 226, 217, 0.5)',
          'rgb(255, 245, 221, 0.5)',
          'rgb(219, 242, 242, 0.5)',
          'rgb(235, 224, 255, 0.5)',
          'rgb(244, 245, 245, 0.5)',
        ],
        borderWidth: 0.8,
        borderColor: [
          'rgb(255, 99, 132, 1)',
          'rgb(54, 162, 235, 1)',
          'rgb(255, 159, 64, 1)',
          'rgb(255, 205, 86, 1)',
          'rgb(75, 192, 192, 1)',
          'rgb(153, 102, 255, 1)',
          'rgb(201, 203, 207, 1)',
        ],
        hoverBorderWidth: 1.2,
        hoverBorderColor: [
          'rgb(255, 99, 132, 1)',
          'rgb(54, 162, 235, 1)',
          'rgb(255, 159, 64, 1)',
          'rgb(255, 205, 86, 1)',
          'rgb(75, 192, 192, 1)',
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
  margin-bottom: 25px;
  font-size: 0px;
  color:rgb(19, 20, 36);

  
}
.batting-odi{
  background-color: rgb(19, 20, 36);
  color: azure
}

.bottomtags {
  margin-top: px;
  color:rgb(19, 20, 36);
}

.center {
  text-align: center;
  color: azure
}
</style>
