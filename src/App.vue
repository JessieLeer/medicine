<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  max-width: 1440px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

<script>
export default {
  name: 'App',
	created() {
	  this.checkBrowser()
	},
	methods: {
	  checkBrowser(){
		  var sys = {}
			var ua = navigator.userAgent.toLowerCase()
      var re =/(msie|firefox|chrome|opera|version).*?([\d.]+)/
      var m = ua.match(re)
      sys.browser = m[1].replace(/version/, "safari")
      sys.ver = m[2]
      console.log(sys)
    }
	}
}
</script>
