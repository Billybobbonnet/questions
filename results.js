/*
Copyright 2018 Antoine Cordelois

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*/
$(document).ready(function() {
  // first, we get the data
  console.log(window.location);
  var url = new URL(window.location);
  var au = Math.round((url.searchParams.get("au") / 4) * 10) / 10
  var mc = Math.round((url.searchParams.get("mc") / 4) * 10) / 10
  var ss = Math.round((url.searchParams.get("ss") / 4) * 10) / 10
  var pe = Math.round((url.searchParams.get("pe") / 4) * 10) / 10
  var it = Math.round((url.searchParams.get("it") / 5) * 10) / 10
  var pm = Math.round((url.searchParams.get("pm") / 3) * 10) / 10
  var se = Math.round((url.searchParams.get("se") / 3) * 10) / 10

  $('#au span').text(au + "/5")
  $('#mc span').text(mc + "/5")
  $('#ss span').text(ss + "/5")
  $('#pe span').text(pe + "/5")
  $('#it span').text(it + "/5")
  $('#pm span').text(pm + "/5")
  $('#se span').text(se + "/5")

  $('#au > div:nth-child(1) > div:nth-child(1)').addClass("p"+ Math.round(au *20))
  $('#mc > div:nth-child(1) > div:nth-child(1)').addClass("p"+ Math.round(mc *20))
  $('#ss > div:nth-child(1) > div:nth-child(1)').addClass("p"+ Math.round(ss *20))
  $('#pe > div:nth-child(1) > div:nth-child(1)').addClass("p"+ Math.round(pe *20))
  $('#it > div:nth-child(1) > div:nth-child(1)').addClass("p"+ Math.round(it *20))
  $('#pm > div:nth-child(1) > div:nth-child(1)').addClass("p"+ Math.round(pm *20))
  $('#se > div:nth-child(1) > div:nth-child(1)').addClass("p"+ Math.round(se *20))






  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'radar',

      // The data for our dataset
      data: {
        labels: ["Autorité", "Modification du comportement", "Système social", "Accent sur la pédagogie", "Intimidation", "Permissivité", "Socioémotivité"],
        datasets: [{
          backgroundColor: '#307bbb99',
          borderColor: '#307bbb99',
          data: [au, mc, ss, pe, it, pm, se],
        }]
      },
      options: {
        pointRadius: 20,
        legend: {
          display: false
            },
        scale: {
          ticks: {
            max: 5,
            beginAtZero: true
        },
        scaleLabel : {
          fontSize:18
        }
      }
    }
  });
});
