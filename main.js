/*
Copyright 2018 Antoine Cordelois

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*/


$(document).ready(function() {
  $('.ui.radio.checkbox').checkbox()
  var $form = $('.form')
  $form.form('reset')
  toastr.options.closeButton = true;
  $('.ui.submit.button').on('click', function(event) {
    var values = $form.form('get values')
    var keys = Object.keys(values)
    // if we miss a value
    if (keys.length < 27) {
      var missingKey = 1
      // check which one
      for (var i = 1; i < 27; i++) {
        if (+keys[i-1]!==i) {
          missingKey = i
          break
        }
      }
      $('html, body').animate({
        scrollTop: $("label[for=" + missingKey + "]").offset().top - 50
      }, 1000);
      window.setTimeout(function() {
        $("label[for=" + missingKey + "]").transition('shake')
      }, 1000)
      window.setTimeout(function() {
        toastr.warning('Certaines questions n\'ont pas eu de réponse.')
      }, 1200)
    } else {
      // we're good to go, let's compute
      var au = (+values[1] +
        +values[8] +
        +values[15] +
        +values[22])
      var mc = (+values[2] +
        +values[9] +
        +values[16] +
        +values[23])
      var ss = (+values[3] +
        +values[10] +
        +values[17] +
        +values[24])
      var pe = (+values[4] +
        +values[11] +
        +values[18] +
        +values[25])
      var it = (+values[5] +
        +values[12] +
        +values[19] +
        +values[26] +
        +values[27])
      var pm = (+values[6] +
        +values[13] +
        +values[20])
      var se = (+values[7] +
        +values[14] +
        +values[21])
      // go to results page
      window.location.href = "results.html?au=" + au + "&mc=" + mc + "&ss=" + ss + "&pe=" + pe + "&it=" + it + "&pm=" + pm + "&se=" + se

    }
  })
});
