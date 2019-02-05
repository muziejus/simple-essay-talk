$("p").filter( function() {
  return (this.textContent || this.innerText).match(/^-->/);
}) .addClass("credit").html(function(i, html){
  return html.replace(/^--&gt; /, "");
});


