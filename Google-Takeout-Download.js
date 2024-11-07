(()=>{
    //Grab all the download links, you will need to click the show exports, to first show all the downloadable files.
    //The selector may need to be updated each time a new page is loaded.
    function getLinks(startIndex=0){
        let dupes={},
            links = Array.prototype.slice.call(document.body.querySelectorAll('#yDmH0d > div.NBxL9e.iWO5td > div > div.I7OXgf.nxteG.ZEeHrd.Inn9w.iWO5td a'),0).filter((a)=>{
               if(dupes[a.getAttribute('aria-label')]) return true;
                dupes[a.getAttribute('aria-label')] = a;
                return false;
            }).slice(startIndex);
        console.log(links);
        return links;
    }
    //Waits 1hr 30mins before starting the next download. This was just a quick and dirty way to "know" when to start the next download.
    function chain(a, time=1000*60*60+1000*60*30, i=0) {
        a[i++].click();
        setTimeout(()=>{
            chain(a, i);
        }, time);
    }
    //Download all files starting from the 8th file.
    chain(getLinks(8));
})();
