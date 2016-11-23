app.factory('SerieService', function ($http) {
	var factory = {
		getMySerie : function(id) {
              //console.log('https://api.themoviedb.org/3/tv/'+id+'?api_key=dabcd7d38547f175da6712fc2e6cb072');
              return $http.get('https://api.themoviedb.org/3/tv/'+id+'?api_key=dabcd7d38547f175da6712fc2e6cb072')
                .then ( function onSuccess ( response ) {
                  console.log(response.data.seasons.length);
                  return {
                      title : response.data.original_name,
                      image: response.data.poster_path ? 'http://image.tmdb.org/t/p/w500/'+response.data.poster_path: response.data.poster_path,
                      nomberEpisodes: response.data.number_of_episodes,
                    };
                } )
            .catch ( function onError ( reason ) {
              console.log('faute grav');
               reason ;
            } );

  		},
  		addMySerie : function(serie) {
        
        var series = localStorage.getItem("series") ? localStorage.getItem("series") : '[]';
        series = JSON.parse(series);
        series.push(serie);
        localStorage.setItem("series", JSON.stringify(series));
  	  },
  	  seekMySerie : function(str) {
          return $http.get('https://api.themoviedb.org/3/search/tv?api_key=dabcd7d38547f175da6712fc2e6cb072&language=fr&query='+str)
                .then ( function onSuccess ( response ) {
                
              //console.log(response.data.results);
              var res = [];
              angular.forEach(response.data.results, function(value) {
                
                res.push({
                  title : value.original_name,
                  image: value.poster_path ? 'http://image.tmdb.org/t/p/w500/'+value.poster_path: value.poster_path,
                  nomberEpisodes: value.id,
                });
              })

              return res;
              
            } )
            .catch ( function onError ( reason ) {
               reason ;
            } );
  		},
      isStored : function (serie){
        var series = localStorage.getItem("series") ? localStorage.getItem("series") : '[]';
        series = JSON.parse(series).map(function(x){return x.nomberEpisodes});
        console.log(series);

      }

	}
  return factory;

});