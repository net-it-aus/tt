// GLOBAL VARIABLES

//   // Get the root element
//   let r = document.querySelector(':root');
// // SET CSS VARIABLES USING JAVASCRIPT
//   // Create a function for getting a variable value
//   function myFunction_get() {
//     // Get the styles (properties and values) for the root
//     var rs = getComputedStyle(r);
//     // Alert the value of the --blue variable
//     alert("The value of --blue is: " + rs.getPropertyValue('--blue'));
//   }

//   // Create a function for setting a variable value
//   function myFunction_set() {
//     // Set the value of variable --blue to another value (in this case "lightblue")
//     r.style.setProperty('--blue', 'lightblue');
//   }
// // SET CSS VARIABLES USING JAVASCRIPT

  function closePopupMessage(){
    document.getElementById("popup-message").style.display="none";
  }
  
  function populateCopyrightNotice(){
    // console.log("copyright-notice display status:- " + document.getElementById("copyright-notice").style.display);
    var dt = new Date();
    // var dt1 = dt.toLocaleString().slice(6,10);
    var dt1 = dt.getFullYear();
    // document.getElementById("copyright-notice").innerHTML =  `<span class="material-icons material-icons">copyright</span><br>&copy all rights reserved 2019-${dt1}`;
    // document.getElementById("copyright-notice").innerHTML =  '<span class="material-icons material-icons">copyright</span><br>&copy Net IT Australia ' + dt1;
    document.getElementById("copyright-notice").innerHTML =  '&copy Turramurra Trotters ' + dt1;
    document.getElementById("copyright-notice").innerHTML +=  '<br><span style="font-size:0.8em">(Web site by Net IT Australia)</span>';
  }
  
//   function addEventListeners(){
//     // window.addEventListener("load",  (event) => {
//     //   boxElement = document.querySelector("#box");
//     //   createObserver(boxElement);
//     //   // createObserver(document.querySelector("#box"));
//     //   createObserver(document.getElementById("flip-tile-1of6")); 
//     //   createObserver(document.getElementById("flip-tile-2of6")); 
//     //   createObserver(document.getElementById("flip-tile-3of6")); 
//     //   createObserver(document.getElementById("flip-tile-4of6")); 
//     //   createObserver(document.getElementById("flip-tile-5of6")); 
//     //   createObserver(document.getElementById("flip-tile-6of6")); 
//     //   // const myElements = document.getElementsByClassName("flip-tile");
//     //   // console.log(myElements.length);
//     //   // let myElement; 
//     //   // for (i = 0; i < myElements.length; i++) {
//     //   //   myElement = document.getElementById(myElements[i].id);
//     //   //   console.log(myElement);
//     //   //   createObserver(myElement);
//     //   // }  
//     // },false);
//     document.getElementById("current-date-time").addEventListener("mouseover",function(){
//         console.log(document.getElementById("current-date-time").style.display);
//         var dt = new Date();
//         // document.getElementById("current-date-time-span").innerHTML=dt.toLocaleString().slice(0,25);    
//     }); 
//     // document.addEventListener("scroll",function(){
//     //     // check if element is in view
//     //     if (isInView("typewriter-text-animation")===true && typewriterCharInt === 0){
//     //       typeOutText();
//     //     }
//     // });
  
//     // document.getElementById("typewriter-text-animation").addEventListener("mouseover",function(){
//     //   // check if element is in view
//     //   // if (isInView("typewriter-text-animation")===true && typewriterCharInt >= typewriterText.length){
//     //   document.getElementById("typewriter-text-animation").innerHTML='';
//     //   typewriterCharInt = 0;
//     //   typeOutText();
//     //   // }
//     // });
  
//     // document.getElementById("increasing-text-size-container").addEventListener("mouseover",function(){
//     //   // check if element is in view
//     //  if (isInView("increasing-text-size-container")===true){
//     //     document.getElementById("increasing-text-size").classList.remove("increasing-text-size");
//     //     document.getElementById("increasing-text-size").offsetWidth;
//     //     document.getElementById("increasing-text-size").classList.add("increasing-text-size");
//     //   }
//     // });
  
//     // function isInView(e) {
//     //   var rect = document.getElementById(e).getBoundingClientRect();
//     //   // console.log({x0:rect.left,y1:rect.top,x1:rect.right,y0:rect.bottom});
//     //   if (rect.top >= 0 && rect.left >= 0 && rect.right <= window.innerWidth && rect.bottom <= window.innerHeight) {
//     //     return true;
//     //   } else{
//     //     document.getElementById("typewriter-text-animation").innerText="";
//     //     typewriterCharInt = 0;
//     //     return false;
//     //   }
//     // }
//   }

  
// READY STATE start ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
if(document.readyState === "complete") {
    // Fully loaded!
    // console.log('document.readyState === "complete"');
}
else if(document.readyState === "interactive") {
    // DOM ready! Images, frames, and other subresources are still downloading.
    // console.log(`document.readyState === "interactive"`);
}
else {
    // Loading still in progress.
    // To wait for it to complete, add "DOMContentLoaded" or "load" listeners.
    // console.log("Loading still in progress...");

    window.addEventListener("DOMContentLoaded", () => {
        // DOM ready! Images, frames, and other subresources are still downloading.
        // console.log(`window.addEventListener("DOMContentLoaded"`);
    });

    window.addEventListener("load", () => {
        // Fully loaded!
        // console.log(`window.addEventListener("load") completed`);

        var myBody = document.getElementsByTagName("BODY")[0];
        myBody.addEventListener("mousemove",(event)=>{
            logSiteVisit();
        },{once: true});
        myBody.addEventListener("touchstart",(event)=>{
            logSiteVisit();
        },{once: true});
        function logSiteVisit(){
            console.log("mousemove detected");
            // // GEOLOCATION start
            //     function getLocation() {
            //         if (navigator.geolocation) {
            //             navigator.geolocation.getCurrentPosition(showPosition);
            //         } else {
            //             // x.innerHTML = "Geolocation is not supported by this browser.";
            //             console.log("Geolocation is not supported by this browser.");
            //         }
            //     }
            //     getLocation();
            //     function showPosition(position) {
            //         // x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
            //         console.log("Latitude: " + position.coords.latitude + "\nLongitude: " + position.coords.longitude);
            //     }
            // // GEOLOCATION end
            // IPADDRESS start
                // // external source START
                //     fetch('https://api.ipify.org/?format=json')
                //     .then(res => res.json())
                //     .then(data => console.log(data.ip))
                //     .catch(err => console.log(err))
                // // external source END
                // mySERVER start
                    fetch('https://netit.com.au/myIPify_TT');
                // mySERVER end
            // IPADDRESS end
            // triggerSiteVisit();
        }

        document.body.addEventListener('click', function (evt) {

            // console.log(evt.target);

            // 1
            if (evt.target.classList.contains("popup-courses-open")) {
                document.getElementById("popup-courses").style.display = "block";
                document.getElementById("home-screen-marketing-deck").style.display = "none";
                document.getElementById("home-screen-flip-tiles").style.display = "none";
                document.getElementById("home-screen-grid-area").style.display = "none";
            }

            // 2
            if (evt.target.classList.contains("popup-popular-events-open")) {
                document.getElementById("popup-popular-events").style.display = "block";
                document.getElementById("home-screen-marketing-deck").style.display = "none";
                document.getElementById("home-screen-flip-tiles").style.display = "none";
                document.getElementById("home-screen-grid-area").style.display = "none";
                const e = document.getElementsByClassName("my-header");
                // console.log(e);
                for (i = 0; i < e.length; i++){
                    // e[i].style.height = 0;
                    // e[i].style.display = "none";
                    e[i].classList.add("my-header-hidden");
                }
            }

            // 3
            if (evt.target.classList.contains("popup-race-reports-open")) {
                alert("...coming soon");
                // document.getElementById("popup-race-reports").style.display = "block";
            }

            // 4
            if (evt.target.classList.contains("popup-course-records-open")) {
                document.getElementById("popup-course-records").style.display = "block";
                document.getElementById("home-screen-marketing-deck").style.display = "none";
                document.getElementById("home-screen-flip-tiles").style.display = "none";
                document.getElementById("home-screen-grid-area").style.display = "none";
            }

            // 5
            if (evt.target.classList.contains("popup-c2s-training-open")) {
                const weeklyScheduleHTML = createTable();
                // console.log(weeklyScheduleHTML);
                document.getElementById("weeklySchedule").innerHTML = weeklyScheduleHTML;
                document.getElementById("popup-c2s-training").style.display = "block";
                document.getElementById("home-screen-marketing-deck").style.display = "none";
                document.getElementById("home-screen-flip-tiles").style.display = "none";
                document.getElementById("home-screen-grid-area").style.display = "none";
            }

            // 6
            if (evt.target.classList.contains("popup-our-history-open")) {
                alert("...coming soon");
                // document.getElementById("popup-our-history").style.display = "block";
                // document.getElementById("popup-our-history-close-button").style.display = "inline-block";
            }

        }, false);
        document.getElementById("popup-courses-close-button").addEventListener("click", function (evt) {
            document.getElementById("popup-courses").style.display = "none";
            document.getElementById("home-screen-marketing-deck").style.display = "block";
            document.getElementById("home-screen-flip-tiles").style.display = "block";
            document.getElementById("home-screen-grid-area").style.display = "block";
            document.getElementById("popup-courses").scrollIntoView();
        });
        document.getElementById("popup-popular-events-close-button").addEventListener("click", function (evt) {
            document.getElementById("popup-popular-events").style.display = "none";
            document.getElementById("home-screen-marketing-deck").style.display = "block";
            document.getElementById("home-screen-flip-tiles").style.display = "block";
            document.getElementById("home-screen-grid-area").style.display = "block";
            const e = document.getElementsByClassName("my-header");
            for (i = 0; i < e.length; i++){
                // e[i].style.height = "unset";
                e[i].classList.remove("my-header-hidden");
            }
            document.getElementById("popup-popular-events").scrollIntoView();
        });
        // document.getElementById("popup-race-reports-close-button").addEventListener("click", function (evt) {
        //     document.getElementById("popup-race-reports").style.display = "none";
        //     document.getElementById("popup-race-reports-close-button").style.display = "none";
        // });
        document.getElementById("popup-course-records-close-button").addEventListener("click", function (evt) {
            document.getElementById("popup-course-records").style.display = "none";
            document.getElementById("home-screen-marketing-deck").style.display = "block";
            document.getElementById("home-screen-flip-tiles").style.display = "block";
            document.getElementById("home-screen-grid-area").style.display = "block";
            document.getElementById("popup-course-records").scrollIntoView();
        });
        document.getElementById("popup-c2s-training-close-button").addEventListener("click", function (evt) {
            document.getElementById("popup-c2s-training").style.display = "none";
            document.getElementById("home-screen-marketing-deck").style.display = "block";
            document.getElementById("home-screen-flip-tiles").style.display = "block";
            document.getElementById("home-screen-grid-area").style.display = "block";
            const e = document.getElementById("popup-c2s-training");
            e.scrollIntoView();
        });
        // document.getElementById("popup-our-history-close-button").addEventListener("click", function (evt) {
        //     document.getElementById("popup-our-history").style.display = "none";
        //     document.getElementById("popup-our-history-close-button").style.display = "none";
        // });

        // let myElements;
        // myElements = document.getElementsByClassName("popup-courses-button");
        // console.log(myElements);
        // for (i=0; i < myElements.length; i++){
        //     console.log(myElements[i]);
        //     myElements[i].addEventListener("click", (event) => {
        //         console.log(`${myElements[i]}`);
        //         myElements[i].style.display = "block";
        //     });
        // };

        // Fully loaded!

        const datval_city2SurfDate = document.getElementById("futureDate");

        // detect City-2-Surf date change
        datval_city2SurfDate.addEventListener("change", (event) => {
            city2SurfDateChange();
        });

        document.getElementById("daysCount").innerHTML = getDaysToFutureDate();

    });
}
// READY STATE end ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// city2SurfDateChange START
function city2SurfDateChange(){

    var d1 = new Date();
    // var d2 = document.getElementById("city2SurfDate").value;
    var d2 = document.getElementById("futureDate").value;

    // console.log("d2 ",d2);
    var nDays = (Date.UTC(d2.slice(0,4), d2.slice(5,7)*1-1, d2.slice(8,10)) -
                 Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate())) / 86400000;
                //  console.log("UTC calc date diff ",nDays);
    d2 = d2.slice(0,4)+ "-" + d2.slice(5,7)+ "-" + d2.slice(8,10);

    d1Year = d1.getFullYear();
    d1Month = d1.getMonth() + 1;
    if (d1Month < 10){d1Month="0" + d1Month};
    d1Day = d1.getDate();
    if (d1Day < 10){d1Day="0" + d1Day};
    d1 = d1Year + "-" + d1Month + "-" + d1Day;
    // console.log("d1 ",d1);

    document.getElementById("daysCount").innerHTML = daysDiff(d1,d2);

}
// city2SurfDateChange END

// daysDiff START
function daysDiff(d1,d2){

    const date1 = new Date(d1.slice(0,4), ((d1.slice(5,7)*1)-1), d1.slice(8,10));
    // console.log(date1.toDateString());
    const date2 = new Date(d2.slice(0,4), ((d2.slice(5,7)*1)-1), d2.slice(8,10));
    // console.log(date2.toDateString());

    // The number of milliseconds in one day
   const ONE_DAY = 1000 * 60 * 60 * 24;

   // Calculate the difference in milliseconds
   const differenceMs = Math.abs(date1 - date2);

   // Convert back to days and return
//    console.log(Math.round(differenceMs / ONE_DAY));
   return Math.round(differenceMs / ONE_DAY);
}
// daysDiff END

function getFutureDate(){
    var myDate = new Date();
    var myYear = myDate.getFullYear();
    var myFutureDate = new Date(myYear*1,7,1); /* 1 Jan yyyy*/
    var myTestDate = myFutureDate;
    var myCount = 0;
    var myMonth = 0;
    for (i=0;i<27;i++){
        myTestDate = new Date(myYear*1,7,i+1) /* i starts at 0 */ 
        // console.log(myTestDate);
        if (myTestDate.getDay()+1==1){ /* = 0 Sunday */
            myCount += 1;
            if (myCount===2){
                myMonth = ((myTestDate.getMonth()*1)+1);
                if (myMonth<10){myMonth = "0" + myMonth;}
                const myFutureDate = myTestDate.getFullYear() + "-" + myMonth + "-" + myTestDate.getDate();
                // console.log(myFutureDate);
                return myFutureDate;
            }
        }
    }
}
function getDaysToFutureDate(){
    var myDate = new Date();
    var myYear = myDate.getFullYear();
    var myFutureDate = new Date(myYear*1,7,1); /* 1 Jan yyyy*/
    var myTestDate = myFutureDate;
    var myCount = 0;
    var myDays = 0;
    for (i=0;i<27;i++){
        myTestDate = new Date(myYear*1,7,i+1) /* i starts at 0 */ 
        // console.log(myTestDate);
        if (myTestDate.getDay()+1==1){ /* = 0 Sunday */
            myCount += 1;
            if (myCount===2){
                myDays = ((myTestDate - myDate)/(24*60*60*1000)).toFixed(1);
                if(myDays < -1){
                // if(myDays < 0){
                    var myCount = 0;
                    var myDays = 0;
                    for (i=0;i<27;i++){
                        myTestDate = new Date((myYear*1)+1,7,i+1) /* i starts at 0 */ 
                        // console.log(myTestDate);
                        if (myTestDate.getDay()+1==1){ /* = 0 Sunday */
                            myCount += 1;
                            if (myCount===2){
                                myMonth = ((myTestDate.getMonth()*1)+1);
                                if (myMonth<10){myMonth = "0" + myMonth;}
                                const myFutureDate = myTestDate.getFullYear() + "-" + myMonth + "-" + myTestDate.getDate();
                                // console.log(myFutureDate);
                                document.getElementById("futureDate").value = myFutureDate;
                                myDays = ((myTestDate - myDate)/(24*60*60*1000)).toFixed(1);
                                return (myDays * 1 + 1) + " days.";
                            }
                        }
                    }
                }else{
                    if (myDays < 0){
                        myDays = 0;
                        // myDays = myDays.toFixed(1);
                    }
                    myMonth = ((myTestDate.getMonth()*1)+1);
                    if (myMonth<10){myMonth = "0" + myMonth;}
                    const myFutureDate = myTestDate.getFullYear() + "-" + myMonth + "-" + myTestDate.getDate();
                    // console.log(myFutureDate);
                    document.getElementById("futureDate").value = myFutureDate;
                    return (myDays * 1 + 1) + " days.";
                }
            }
        }
    }
}
function getFirstSaturdayDate(){
    var myDate = new Date();
    var myYear = myDate.getFullYear();
    var my1JanDate = new Date(myYear*1,0,1); /* 1 Jan yyyy*/
    var myTestDate = my1JanDate;
    for (i=0;i<27;i++){
        myTestDate = new Date(myYear*1,0,i+1) /* i starts at 0 */ 
        if (myTestDate.getDay()+1==7){ /* = 0 Sunday */
            return myTestDate;
        }
    }
}
const startDate = getFirstSaturdayDate();
// console.log(startDate);

function createTable(){
    var fromDate = startDate;
    var toDate = startDate;
    var v_initialOffsetDays = 0;
    var v_today = new Date();
    // alert(v_today.toISOString().slice(0,10));
    document.getElementById("xDate").value = v_today.toISOString().slice(0,10);
    v_today = v_today.toDateString().slice(0,15);
    var vHTML = ``;
    // vHTML += `<h1>Current training schedule</h1>`;
    vHTML += `<br><br><div class="beanie-heading"><h2>Prep for the City-2-Surf</h2></div>`;
    vHTML += `<table class="training-schedule-table">`;
        vHTML += `<tr>`;
            vHTML += `<th class="training-schedule-row">From: / To:</th>`;
            vHTML += `<th  class="training-schedule-row">Distance</th>`;
            vHTML += `<th  class="training-schedule-row">Repetitions</th>`;
            vHTML += `<th  class="training-schedule-row"></th>`;
        vHTML += `</tr>`;
        vHTML += `<tr>`;
            // 
            // 2 January	6 February	8.6km	6 times
            // 
            fromDate = startDate;
            vHTML += `<td class="training-schedule-row">${fromDate.toDateString().slice(0,15)}<br>`;
            toDate = new Date(fromDate.setDate(fromDate.getDate()+ (7 * 5)));
            vHTML += `${toDate.toDateString().slice(0,15)}</td>`;
            vHTML += `<td class="training-schedule-row">8.6km</td>`;
            vHTML += `<td class="training-schedule-row">6</td>`;
            if (fromDate.toDateString().slice(0,15) <= v_today && toDate.toDateString().slice(0,15) >= v_today){
                vHTML += `<td class="training-schedule-row"><span class="material-symbols-outlined">line_start_arrow_notch</span></td>`;
            } else {
                vHTML += `<td class="training-schedule-row"></td>`;
            }
        vHTML += `</tr>`;
        vHTML += `<tr>`;
            // 
            // 13 February	20 March	10.2km	6 times
            // 
            fromDate = new Date(fromDate.setDate(toDate.getDate()+ (7 * 1)));
            vHTML += `<td class="training-schedule-row">${fromDate.toDateString().slice(0,15)}<br>`;
            toDate = new Date(fromDate.setDate(fromDate.getDate()+ (7 * 5)));
            vHTML += `${toDate.toDateString().slice(0,15)}</td>`;
            vHTML += `<td class="training-schedule-row">10.2km</td>`;
            vHTML += `<td class="training-schedule-row">6</td>`;
            if (fromDate.toDateString().slice(0,15) <= v_today && toDate.toDateString().slice(0,15) >= v_today){
                vHTML += `<td class="training-schedule-row"><span class="material-symbols-outlined">line_start_arrow_notch</span></td>`;
            } else {
                vHTML += `<td class="training-schedule-row"></td>`;
                // alert(fromDate.toDateString().slice(0,15)+ " " + toDate.toDateString().slice(0,15) + " " + v_today);
            }
        vHTML += `</tr>`;
        vHTML += `<tr>`;
            // 
            // 27 March	1 May	12.0km	6 times
            // 
            fromDate = new Date(fromDate.setDate(toDate.getDate()+ (7 * 1)));
            vHTML += `<td class="training-schedule-row">${fromDate.toDateString().slice(0,15)}<br>`;
            toDate = new Date(fromDate.setDate(fromDate.getDate()+ (7 * 5)));
            vHTML += `${toDate.toDateString().slice(0,15)}</td>`;
            vHTML += `<td class="training-schedule-row">12.0km</td>`;
            vHTML += `<td class="training-schedule-row">6</td>`;
            if (fromDate.toDateString().slice(0,15) <= v_today && toDate.toDateString().slice(0,15) >= v_today){
                vHTML += `<td class="training-schedule-row"><span class="material-symbols-outlined">line_start_arrow_notch</span></td>`;
            } else {
                vHTML += `<td class="training-schedule-row"></td>`;
            }
        vHTML += `</tr>`;
        vHTML += `<tr>`;
            // 
            // 8 May	19 June	14.0km	7 times
            // 
            fromDate = new Date(fromDate.setDate(toDate.getDate()+ (7 * 1)));
            vHTML += `<td class="training-schedule-row">${fromDate.toDateString().slice(0,15)}<br>`;
            toDate = new Date(fromDate.setDate(fromDate.getDate()+ (7 * 6)));
            vHTML += `${toDate.toDateString().slice(0,15)}</td>`;
            vHTML += `<td class="training-schedule-row">14.0km</td>`;
            vHTML += `<td class="training-schedule-row">7</td>`;
            if (fromDate.toDateString().slice(0,15) <= v_today && toDate.toDateString().slice(0,15) >= v_today){
                vHTML += `<td class="training-schedule-row"><span class="material-symbols-outlined">line_start_arrow_notch</span></td>`;
            } else {
                vHTML += `<td class="training-schedule-row"></td>`;
            }
        vHTML += `</tr>`;
        vHTML += `<tr>`;
            // 
            // 26 June	31 July	15.1km	6 OR 7 times
            // 
            fromDate = new Date(fromDate.setDate(toDate.getDate()+ (7 * 1)));
            vHTML += `<td class="training-schedule-row">${fromDate.toDateString().slice(0,15)}<br>`;
            toDate = new Date(fromDate.setDate(fromDate.getDate()+ (7 * 5)));
            vHTML += `${toDate.toDateString().slice(0,15)}</td>`;
            vHTML += `<td class="training-schedule-row">15.1km</td>`;
            vHTML += `<td class="training-schedule-row">6</td>`;
            if (fromDate.toDateString().slice(0,15) <= v_today && toDate.toDateString().slice(0,15) >= v_today){
                vHTML += `<td class="training-schedule-row"><span class="material-symbols-outlined">line_start_arrow_notch</span></td>`;
            } else {
                vHTML += `<td class="training-schedule-row"></td>`;
            }
        vHTML += `</tr>`;
        vHTML += `<tr>`;
            // 
            // 6 August	OR 13 August Mass start, pre- C2S	6.5km	1 time
            // 
            fromDate = new Date(fromDate.setDate(toDate.getDate()+ (7 * 1)));
            vHTML += `<td class="training-schedule-row">${fromDate.toDateString().slice(0,15)}<br>`;
            toDate = new Date(fromDate.setDate(fromDate.getDate()+ (7 * 0)));
            vHTML += `${toDate.toDateString().slice(0,15)}</td>`;
            vHTML += `<td class="training-schedule-row">6.5km</td>`;
            vHTML += `<td class="training-schedule-row">1</td>`;
            if (fromDate.toDateString().slice(0,15) <= v_today && toDate.toDateString().slice(0,15) >= v_today){
                vHTML += `<td class="training-schedule-row"><span class="material-symbols-outlined">line_start_arrow_notch</span></td>`;
            } else {
                vHTML += `<td class="training-schedule-row"></td>`;
            }
        vHTML += `</tr>`;
        vHTML += `<tr>`;
            // 
            // 7 August	OR 14 August CITY 2 SURF (C2S)	14.0km	
            // 
            fromDate = new Date(fromDate.setDate(toDate.getDate()+ (7 * 0)+1));
            vHTML += `<td class="training-schedule-row">${fromDate.toDateString().slice(0,15)}</td>`;
            toDate = new Date(fromDate.setDate(fromDate.getDate()+ (7 * 0)));
            // vHTML += `<td class="training-schedule-row">${toDate.toDateString().slice(0,15)}</td>`;
            vHTML += `<td class="training-schedule-row">14.0km</td>`;
            vHTML += `<td class="training-schedule-row">City-2-Surf</td>`;
            if (fromDate.toDateString().slice(0,15) <= v_today && toDate.toDateString().slice(0,15) >= v_today){
                vHTML += `<td class="training-schedule-row"><span class="material-symbols-outlined">line_start_arrow_notch</span></td>`;
            } else {
                vHTML += `<td class="training-schedule-row"></td>`;
            }
        vHTML += `</tr>`;
        vHTML += `<tr>`;
            // 
            // 14 August	28 August	12.0km	3 times
            // 
            fromDate = new Date(fromDate.setDate(toDate.getDate()+ (7 * 1)-1));
            vHTML += `<td class="training-schedule-row">${fromDate.toDateString().slice(0,15)}<br>`;
            toDate = new Date(fromDate.setDate(fromDate.getDate()+ (7 * 2)));
            vHTML += `${toDate.toDateString().slice(0,15)}</td>`;
            vHTML += `<td class="training-schedule-row">12.0km</td>`;
            vHTML += `<td class="training-schedule-row">3</td>`;
            if (fromDate.toDateString().slice(0,15) <= v_today && toDate.toDateString().slice(0,15) >= v_today){
                vHTML += `<td class="training-schedule-row"><span class="material-symbols-outlined">line_start_arrow_notch</span></td>`;
            } else {
                vHTML += `<td class="training-schedule-row"></td>`;
            }
        vHTML += `</tr>`;
        vHTML += `<tr>`;
            // 
            // 4 September	18 September	10.2km	3 times
            // 
            fromDate = new Date(fromDate.setDate(toDate.getDate()+ (7 * 1)));
            vHTML += `<td class="training-schedule-row">${fromDate.toDateString().slice(0,15)}<br>`;
            toDate = new Date(fromDate.setDate(fromDate.getDate()+ (7 * 2)));
            vHTML += `${toDate.toDateString().slice(0,15)}</td>`;
            vHTML += `<td class="training-schedule-row">10.2km</td>`;
            vHTML += `<td class="training-schedule-row">3</td>`;
            if (fromDate.toDateString().slice(0,15) <= v_today && toDate.toDateString().slice(0,15) >= v_today){
                vHTML += `<td class="training-schedule-row"><span class="material-symbols-outlined">line_start_arrow_notch</span></td>`;
            } else {
                vHTML += `<td class="training-schedule-row"></td>`;
            }
        vHTML += `</tr>`;
        vHTML += `<tr>`;
            // 
            // 25 September	9 October	8.6km	3 times
            // 
            fromDate = new Date(fromDate.setDate(toDate.getDate()+ (7 * 1)));
            vHTML += `<td class="training-schedule-row">${fromDate.toDateString().slice(0,15)}<br>`;
            toDate = new Date(fromDate.setDate(fromDate.getDate()+ (7 * 2)));
            vHTML += `${toDate.toDateString().slice(0,15)}</td>`;
            vHTML += `<td class="training-schedule-row">8.6km</td>`;
            vHTML += `<td class="training-schedule-row">3</td>`;
            if (fromDate.toDateString().slice(0,15) <= v_today && toDate.toDateString().slice(0,15) >= v_today){
                vHTML += `<td class="training-schedule-row"><span class="material-symbols-outlined">line_start_arrow_notch</span></td>`;
            } else {
                vHTML += `<td class="training-schedule-row"></td>`;
            }
        vHTML += `</tr>`;
        vHTML += `<tr>`;
            // 
            // 16 October	25 December	6.5km	11 times
            // 
            fromDate = new Date(fromDate.setDate(toDate.getDate()+ (7 * 1)));
            vHTML += `<td class="training-schedule-row">${fromDate.toDateString().slice(0,15)}<br>`;
            toDate = new Date(fromDate.setDate(fromDate.getDate()+ (7 * 7)));
            // vHTML += `<td class="training-schedule-row">${toDate.toDateString().slice(0,15)}</td>`;
            vHTML += `...to end of year</td>`;
            vHTML += `<td class="training-schedule-row">6.5km</td>`;
            vHTML += `<td class="training-schedule-row"></td>`;
            if (fromDate.toDateString().slice(0,15) <= v_today && toDate.toDateString().slice(0,15) >= v_today){
                vHTML += `<td class="training-schedule-row"><span class="material-symbols-outlined">line_start_arrow_notch</span></td>`;
            } else {
                vHTML += `<td class="training-schedule-row"></td>`;
            }
        vHTML += `</tr>`;
    vHTML += `</table>`;
    // console.log(vHTML);
    return vHTML;
}