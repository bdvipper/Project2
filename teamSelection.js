function teamSelected(name){
    fetch("https://api.mysportsfeeds.com/v2.1/pull/nfl/2019-regular/team_stats_totals.json",{
        headers:
               {
                    "Authorization": "Basic "+btoa('de5a192d-26bf-4948-9495-5cc786:MYSPORTSFEEDS'),
                    "Accept": "application/json, text/plain",
                    "Content-Type": "text/html"
               },
               method: "get"
    }).then(function(response){
        let data=response.json();
        data.then(function(information){
            for(let i=0;i<information.teamStatsTotals.length;i++){
                if(information.teamStatsTotals[i].team.name==name){
                    document.getElementById('teams').innerHTML="<img class='Logo' src="+information.teamStatsTotals[i].team.officialLogoImageSrc+">"+
                    "<h1 class='name'>"+information.teamStatsTotals[i].team.city+" "+information.teamStatsTotals[i].team.name+" ("+information.teamStatsTotals[i].team.abbreviation+")"+"</h1>"+
                    "<p class='home'>Home Stadium : "+information.teamStatsTotals[i].team.homeVenue.name+"</p>"+
                    "<ul class='media'>";
                    for(let j=0;j<information.teamStatsTotals[i].team.socialMediaAccounts.length; j++){
                        document.getElementById('teams').innerHTML+="<li>"+information.teamStatsTotals[i].team.socialMediaAccounts[j].mediaType+" : "+information.teamStatsTotals[i].team.socialMediaAccounts[j].value+"</li>"
                    }
                    document.getElementById('teams').innerHTML+="</ul>";
                }
            }
            
        })
    })
    return false;
}