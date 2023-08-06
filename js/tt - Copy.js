// const { Transform } = require("nodemailer/lib/xoauth2");

function getClientOS() {
    // returns i)@ | Windows | Android
    const isIOS = [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod',
        ].indexOf(navigator.platform) !== -1;
    const isWindows = [
        'Win32'
        ].indexOf(navigator.platform) !== -1;
    const isAndroid = [
        'Linux armv8l'
        ].indexOf(navigator.platform) !== -1;
    // alert('navigator.platform:- '+navigator.platform); 
    // /* DETECTS "iPhone" on an iPhone using: Edge; Safari; Chrome */
    // /* DETECTS "Macintel" on an iPad using: Safari;  */
    // /* DETECTS "iPad" on an iPad using: Chrome;  */
    // /* DETECTS "Win32" on Windows10Pro using: Edge; Chrome; Mozilla */
    // /* DETECTS "Linux armv8l" on Android11 Nokia3.4 using: Chrome; */
    // /* DETECTS "Linux aarch64"  on Android11 Nokia3.4 using: Edge; */
    // alert('navigator.userAgent:- '+navigator.userAgent);
    // /* DETECTS "iPhone" on an iPhone using: Edge; Safari; Chrome */
    // /* DETECTS "Macintosh" on an iPad using: Safari;  */
    // /* DETECTS "iPad" on an iPad using: Chrome;  */
    // /* DETECTS "Windows NT 10" on Windows10Pro using: Edge; Chrome; Mozilla */
    // /* DETECTS "Linux; Android 10" on Android11 Nokia3.4 using: Edge; Chrome; */
    // alert('navigator.vendor:- '+navigator.vendor); 
    // /* DETECTS "Apple Computer, Inc." on an iPhone using: Edge; Safari; Chrome */
    // /* DETECTS "Apple Computer, Inc." on an iPad using: Safari; Chrome; */
    // /* DETECTS "Google Inc." on Windows10Pro using: Edge; Chrome */
    // /* DETECTS "Google Inc." on Android11 Nokia3.4 using: Edge; Chrome; */
        if (isIOS==true) {return 'iOS';}
        if (isWindows==true) {return 'Windows';}
        if (isAndroid==true) { return 'Android';}
}

// const v_clientOS="Windows";
const v_clientOS = getClientOS();


function scrollIndicator() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    // console.log(height);
    // console.log(scrolled);
    document.getElementById("scroll-indicator").style.width = scrolled + "%";
    document.getElementById("vertical-scroll-indicator").style.height = scrolled + "%";
}
window.onscroll = function() {scrollIndicator()};
function doThisOnLoad(){
    parseRawCSV_TTevents();
    // readRawCSV_TTevents();
    // return;
    let a = document.getElementsByClassName('section-collapsable-button');
    let aArray = Array.from(a);
    aArray.forEach(e => {
        e.style.position = "fixed";
    });
    let b = document.getElementsByClassName('section-collapsable-content');
    let bArray = Array.from(b);
    bArray.forEach(e => {
        e.style.display = "none";
    });
    document.getElementById("homeContent").style.display="grid";
    return;
}
function doThisPageHide(){
    return;
}
function ourYears(){
    var date = new Date();
    var year = date.getFullYear();
    var ourYears = year - 1974*1;
    let x = document.getElementsByClassName("ourYears");
    let xArray = Array.from(x);
    // console.log(xArray);
    xArray.forEach(element => {
        element.innerHTML = ourYears
    });
}
ourYears();
function slideOutMenu(){
    document.getElementById("nav-container").classList.toggle("nav-container-show");
    document.getElementById("nav-container").classList.toggle("nav-container-hide");
    // console.log(document.getElementById("nav-container").className);
    window.scrollTo(0,0);
}
function slideAwayMenu(){
    document.getElementById("nav-container").classList.toggle("nav-container-show");
    document.getElementById("nav-container").classList.toggle("nav-container-hide");
    // console.log(document.getElementById("nav-container").className);
    window.scrollTo(0,0);
}

// BUTTON PLACEMENT
function placeButtons(){
    let myButtons = document.getElementsByClassName("section-collapsable-button");
    let myButtonsArray = Array.from(myButtons);
    myButtonsArray.forEach(element => {
        element.style.top = element.getAttribute("data-top") + "%";
        element.style.left = element.getAttribute("data-left") + "%";
    });
}
placeButtons();

// BUTTON PLACEMENT

// COLLAPSABLES start
function toggleCollapsables(buttonID){

    if(v_clientOS!=="Windows"){
        slideAwayMenu();
    }

    // document.getElementById("home-page-background").style.display="none";

    // window.scrollTo(0,0);
    document.getElementById("scroll-indicator").style.width = 0 + "%";
    document.getElementById("vertical-scroll-indicator").style.height = 0 + "%";

    // document.getElementById("nav-container").classList.toggle("nav-container-show");
    // document.getElementById("nav-container").classList.toggle("nav-container-hide");
    // // console.log(document.getElementById("nav-container").className);

    let contentID = buttonID + 'Content';
    // console.log(buttonID + " position:- " + document.getElementById(buttonID).style.position);
    // console.log(contentID + " display:- " + document.getElementById(contentID).style.display);
    let a = document.getElementsByClassName('section-collapsable-button');
    let aArray = Array.from(a);
    aArray.forEach(e => {
        e.style.display = "none";
    });
    let b = document.getElementsByClassName('section-collapsable-content');
    let bArray = Array.from(b);
    bArray.forEach(e => {
        e.style.display = "none";
        if(buttonID + 'Content' === e.id){
            e.style.display = "grid";
        }
        // console.log(e.id + " " + document.getElementById(e.id).style.display);
    });
    // if (document.getElementById(buttonID).style.position === "fixed"){
    //     console.log(contentID + " display:- " + document.getElementById(contentID).style.display);
    //     document.getElementById(buttonID).style.display = "block";
    //     document.getElementById(buttonID).style.position = "relative";
    //     // document.getElementById(buttonID).style.zIndex = "2000";
    //     document.getElementById(buttonID).style.top = "0";
    //     document.getElementById(buttonID).style.left = "0";
    //     // console.log(contentID + " " + document.getElementById(contentID).style);
    //     document.getElementById(contentID).style.display = "grid";
    //     window.scrollTop;
    //     alert("d")
    // }else{
    //     // window.location.reload();
        // window.scrollTop;
        // alert("e")
    // }
}
// COLLAPSABLES end

function currentYearSchedule(){
    var v_date = new Date();
    var v_year = v_date.getFullYear();
    // v_year=2020
    // if(v_clientOS=="Windows"){console.log(v_year);}
    var v_yearStart = new Date(v_year*1,0,1); /* 1 Jan yyyy*/
    var v_testDate = v_yearStart;
    var v_trottersMeetDate = v_yearStart;
    var v_trottersMeetDateString = new Date(v_yearStart).toLocaleDateString("en-AU");
    var v_initialOffsetDays = 0;
    var v_today = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";
    var v_day = weekday[v_today.getDay()];
    var v_todayString = v_day + ', ' + v_today.toLocaleDateString("en-AU") ;
    var v_startDate = new Date();
    var v_endDate = new Date();
    var v_endDateLastWeek = v_startDate;
    // if(v_clientOS=="Windows"){console.log('v_today:- ',v_today,'\n\nv_todayString:- ',v_todayString,'\n\nv_startDate:- ',v_startDate,'\n\nv_endDate:- ',v_endDate);}
    // if(v_clientOS=="Windows"){console.log('v_today',v_today,'\nv_startDate',v_startDate,'\nv_endDate',v_endDate);}
//  find first Saturday
    for (i=0;i<27;i++){
        v_testDate = new Date(v_year*1,0,i+1) /* i starts at 0 */ 
        // if(v_clientOS=="Windows"){console.log('v_testDate:- ',v_testDate);}
        if (v_testDate.getDay()+1==7){ /* = 0 Sunday */
            v_trottersMeetDate = new Date(v_testDate);
            break;
        }
    }
    var v_html = ``;
    // v_html += `<h1>Current training schedule</h1>`;
    v_html += `<h2>Prep for the City-2-Surf</h2>`;
    v_html += `<table>`;
        v_html += `<tr>`;
            v_html += `<th class="table-simple">Start date</th>`;
            v_html += `<th class="table-simple">End date</th>`;
            v_html += `<th  class="table-simple">Course</th>`;
            v_html += `<th  class="table-simple">Repetitions</th>`;
            v_html += `<th  class="table-simple">Where are we now?</th>`;
        v_html += `</tr>`;
        v_html += `<tr>`;
            // 2 January	6 February	8.6km	6 times
                v_trottersMeetDate = new Date(v_trottersMeetDate.setDate(v_trottersMeetDate.getDate()));
                v_startDate = new Date(v_trottersMeetDate);
                v_endDateLastWeek = new Date(v_trottersMeetDate);
                v_endDateLastWeek = new Date(v_endDateLastWeek.setDate(v_endDateLastWeek.getDate()-7));
                // if(v_clientOS=="Windows"){console.log('v_startDate:- ',v_startDate,'v_endDateLastWeek:- ',v_endDateLastWeek);}
                v_trottersMeetDateString = new Date(v_trottersMeetDate).toLocaleDateString("en-AU");
            v_html += `<td class="table-simple">${v_trottersMeetDateString}</td>`;
                // if(v_clientOS=="Windows"){console.log('v_trottersMeetDate.getDate()+(7*(6-1)) :- ',v_trottersMeetDate.getDate()+(7*(6-1)-v_initialOffsetDays*0));}
                v_trottersMeetDate = new Date(v_trottersMeetDate.setDate(v_trottersMeetDate.getDate() + (7*(6-1)-v_initialOffsetDays*0)));
                v_endDate = new Date(v_trottersMeetDate);
                // if(v_clientOS=="Windows"){console.log('v_trottersMeetDate:- ',v_trottersMeetDate);}
                v_trottersMeetDateString = new Date(v_trottersMeetDate).toLocaleDateString("en-AU");
                // if(v_clientOS=="Windows"){console.log('v_trottersMeetDateString:- ',v_trottersMeetDateString);}
            v_html += `<td class="table-simple">${v_trottersMeetDateString}</td>`;
            v_html += `<td class="table-simple">8.6km</td>`;
            v_html += `<td class="table-simple">6</td>`;
            if (v_endDateLastWeek < v_today && v_endDate >= v_today){v_html += `<td class="table-simple">${v_todayString}</td>`;}else{v_html += `<td class="table-simple"></td>`;}
        v_html += `</tr>`;
        v_html += `<tr>`;
            // 13 February	20 March	10.2km	6 times
                v_trottersMeetDate = new Date(v_trottersMeetDate.setDate(v_trottersMeetDate.getDate() + 7));
                v_startDate = new Date(v_trottersMeetDate);
                v_endDateLastWeek = new Date(v_trottersMeetDate);
                v_endDateLastWeek = new Date(v_endDateLastWeek.setDate(v_endDateLastWeek.getDate()-7));
                // if(v_clientOS=="Windows"){console.log('v_startDate:- ',v_startDate,'v_endDateLastWeek:- ',v_endDateLastWeek);}
                v_trottersMeetDateString = new Date(v_trottersMeetDate).toLocaleDateString("en-AU");
            v_html += `<td class="table-simple">${v_trottersMeetDateString}</td>`;
                v_trottersMeetDate = new Date(v_trottersMeetDate.setDate(v_trottersMeetDate.getDate() + (7*(6-1))));
                v_endDate = new Date(v_trottersMeetDate);
                v_trottersMeetDateString = new Date(v_trottersMeetDate).toLocaleDateString("en-AU");
            v_html += `<td class="table-simple">${v_trottersMeetDateString}</td>`;
            v_html += `<td class="table-simple">10.2km</td>`;
            v_html += `<td class="table-simple">6</td>`;
            if (v_endDateLastWeek < v_today && v_endDate >= v_today){v_html += `<td class="table-simple">${v_todayString}</td>`;}else{v_html += `<td class="table-simple"></td>`;}
        v_html += `</tr>`;
        v_html += `<tr>`;
            // 27 March	1 May	12.0km	6 times
                v_trottersMeetDate = new Date(v_trottersMeetDate.setDate(v_trottersMeetDate.getDate() + 7));
                v_startDate = new Date(v_trottersMeetDate);
                v_endDateLastWeek = new Date(v_trottersMeetDate);
                v_endDateLastWeek = new Date(v_endDateLastWeek.setDate(v_endDateLastWeek.getDate()-7));
                // if(v_clientOS=="Windows"){console.log('v_startDate:- ',v_startDate,'v_endDateLastWeek:- ',v_endDateLastWeek);}
                v_trottersMeetDateString = new Date(v_trottersMeetDate).toLocaleDateString("en-AU");
            v_html += `<td class="table-simple">${v_trottersMeetDateString}</td>`;
                v_trottersMeetDate = new Date(v_trottersMeetDate.setDate(v_trottersMeetDate.getDate() + (7*(6-1))));
                v_endDate = new Date(v_trottersMeetDate);
                v_trottersMeetDateString = new Date(v_trottersMeetDate).toLocaleDateString("en-AU");
            v_html += `<td class="table-simple">${v_trottersMeetDateString}</td>`;
            v_html += `<td class="table-simple">12.0km</td>`;
            v_html += `<td class="table-simple">6</td>`;
            if (v_endDateLastWeek < v_today && v_endDate >= v_today){v_html += `<td class="table-simple">${v_todayString}</td>`;}else{v_html += `<td class="table-simple"></td>`;}
        v_html += `</tr>`;
        v_html += `<tr>`;
            // 8 May	19 June	14.0km	7 times
                v_trottersMeetDate = new Date(v_trottersMeetDate.setDate(v_trottersMeetDate.getDate() + 7));
                v_startDate = new Date(v_trottersMeetDate);
                v_endDateLastWeek = new Date(v_trottersMeetDate);
                v_endDateLastWeek = new Date(v_endDateLastWeek.setDate(v_endDateLastWeek.getDate()-7));
                // if(v_clientOS=="Windows"){console.log('v_startDate:- ',v_startDate,'v_endDateLastWeek:- ',v_endDateLastWeek);}
                v_trottersMeetDateString = new Date(v_trottersMeetDate).toLocaleDateString("en-AU");
            v_html += `<td class="table-simple">${v_trottersMeetDateString}</td>`;
                v_trottersMeetDate = new Date(v_trottersMeetDate.setDate(v_trottersMeetDate.getDate() + (7*(7-1))));
                v_endDate = new Date(v_trottersMeetDate);
                v_trottersMeetDateString = new Date(v_trottersMeetDate).toLocaleDateString("en-AU");
            v_html += `<td class="table-simple">${v_trottersMeetDateString}</td>`;
            v_html += `<td class="table-simple">14.0km</td>`;
            v_html += `<td class="table-simple">7</td>`;
            if (v_endDateLastWeek < v_today && v_endDate >= v_today){v_html += `<td class="table-simple">${v_todayString}</td>`;}else{v_html += `<td class="table-simple"></td>`;}
        v_html += `</tr>`;
        v_html += `<tr>`;
            // 26 June	31 July	15.1km	6 OR 7 times
                v_trottersMeetDate = new Date(v_trottersMeetDate.setDate(v_trottersMeetDate.getDate() + 7));
                v_startDate = new Date(v_trottersMeetDate);
                v_endDateLastWeek = new Date(v_trottersMeetDate);
                v_endDateLastWeek = new Date(v_endDateLastWeek.setDate(v_endDateLastWeek.getDate()-7));
                // if(v_clientOS=="Windows"){console.log('v_startDate:- ',v_startDate,'v_endDateLastWeek:- ',v_endDateLastWeek);}
                v_trottersMeetDateString = new Date(v_trottersMeetDate).toLocaleDateString("en-AU");
            v_html += `<td class="table-simple">${v_trottersMeetDateString}</td>`;
                v_trottersMeetDate = new Date(v_trottersMeetDate.setDate(v_trottersMeetDate.getDate() + (7*(7-1))));
                v_endDate = new Date(v_trottersMeetDate);
                v_trottersMeetDateString = new Date(v_trottersMeetDate).toLocaleDateString("en-AU");
            v_html += `<td class="table-simple">${v_trottersMeetDateString}</td>`;
            v_html += `<td class="table-simple">15.1km</td>`;
            v_html += `<td class="table-simple">7</td>`;
            if (v_endDateLastWeek < v_today && v_endDate >= v_today){v_html += `<td class="table-simple">${v_todayString}</td>`;}else{v_html += `<td class="table-simple"></td>`;}
        v_html += `</tr>`;
        v_html += `<tr>`;
            // 6 August	OR 13 August Mass start, pre- C2S	6.5km	1 time
                v_trottersMeetDate = new Date(v_trottersMeetDate.setDate(v_trottersMeetDate.getDate() + 7));
                v_startDate = new Date(v_trottersMeetDate);
                v_endDateLastWeek = new Date(v_trottersMeetDate);
                v_endDateLastWeek = new Date(v_endDateLastWeek.setDate(v_endDateLastWeek.getDate()-7));
                // if(v_clientOS=="Windows"){console.log('v_startDate:- ',v_startDate,'v_endDateLastWeek:- ',v_endDateLastWeek);}
                v_trottersMeetDateString = new Date(v_trottersMeetDate).toLocaleDateString("en-AU");
            v_html += `<td class="table-simple">${v_trottersMeetDateString}</td>`;
                v_trottersMeetDate = new Date(v_trottersMeetDate.setDate(v_trottersMeetDate.getDate()));
                v_endDate = new Date(v_trottersMeetDate);
                v_trottersMeetDateString = new Date(v_trottersMeetDate).toLocaleDateString("en-AU");
            v_html += `<td class="table-simple">${v_trottersMeetDateString}</td>`;
            v_html += `<td class="table-simple">6.5km</td>`;
            v_html += `<td class="table-simple">1</td>`;
            if (v_endDateLastWeek < v_today && v_endDate >= v_today){v_html += `<td class="table-simple">${v_todayString}</td>`;}else{v_html += `<td class="table-simple"></td>`;}
        v_html += `</tr>`;
        v_html += `<tr>`;
            // 7 August	OR 14 August City to Surf (C2S)	14.0km	
                v_trottersMeetDate = new Date(v_trottersMeetDate.setDate(v_trottersMeetDate.getDate() + 1));
                v_startDate = new Date(v_trottersMeetDate);
                v_endDateLastWeek = new Date(v_trottersMeetDate);
                v_endDateLastWeek = new Date(v_endDateLastWeek.setDate(v_endDateLastWeek.getDate()-7));
                // if(v_clientOS=="Windows"){console.log('v_startDate:- ',v_startDate,'v_endDateLastWeek:- ',v_endDateLastWeek);}
                v_trottersMeetDateString = new Date(v_trottersMeetDate).toLocaleDateString("en-AU");
            v_html += `<td class="table-simple">${v_trottersMeetDateString}</td>`;
                v_trottersMeetDate = new Date(v_trottersMeetDate.setDate(v_trottersMeetDate.getDate()));
                v_endDate = new Date(v_trottersMeetDate);
                v_trottersMeetDateString = new Date(v_trottersMeetDate).toLocaleDateString("en-AU");
            v_html += `<td class="table-simple">${v_trottersMeetDateString}</td>`;
            v_html += `<td class="table-simple">14.0km</td>`;
            v_html += `<td class="table-simple">City-2-Surf</td>`;
            if (v_endDateLastWeek < v_today && v_endDate >= v_today){v_html += `<td class="table-simple">${v_todayString}</td>`;}else{v_html += `<td class="table-simple"></td>`;}
        v_html += `</tr>`;
        v_html += `<tr>`;
            // 14 August	28 August	12.0km	3 times
                v_trottersMeetDate = new Date(v_trottersMeetDate.setDate(v_trottersMeetDate.getDate() + 6));
                v_startDate = new Date(v_trottersMeetDate);
                v_endDateLastWeek = new Date(v_trottersMeetDate);
                v_endDateLastWeek = new Date(v_endDateLastWeek.setDate(v_endDateLastWeek.getDate()-7));
                // if(v_clientOS=="Windows"){console.log('v_startDate:- ',v_startDate,'v_endDateLastWeek:- ',v_endDateLastWeek);}
                v_trottersMeetDateString = new Date(v_trottersMeetDate).toLocaleDateString("en-AU");
            v_html += `<td class="table-simple">${v_trottersMeetDateString}</td>`;
                v_trottersMeetDate = new Date(v_trottersMeetDate.setDate(v_trottersMeetDate.getDate() + (7*(3-1))));
                v_endDate = new Date(v_trottersMeetDate);
                v_trottersMeetDateString = new Date(v_trottersMeetDate).toLocaleDateString("en-AU");
            v_html += `<td class="table-simple">${v_trottersMeetDateString}</td>`;
            v_html += `<td class="table-simple">12.0km</td>`;
            v_html += `<td class="table-simple">3</td>`;
            if (v_endDateLastWeek < v_today && v_endDate >= v_today){v_html += `<td class="table-simple">${v_todayString}</td>`;}else{v_html += `<td class="table-simple"></td>`;}
        v_html += `</tr>`;
        v_html += `<tr>`;
            // 4 September	18 September	10.2km	3 times
                v_trottersMeetDate = new Date(v_trottersMeetDate.setDate(v_trottersMeetDate.getDate() + 7));
                v_startDate = new Date(v_trottersMeetDate);
                v_endDateLastWeek = new Date(v_trottersMeetDate);
                v_endDateLastWeek = new Date(v_endDateLastWeek.setDate(v_endDateLastWeek.getDate()-7));
                // if(v_clientOS=="Windows"){console.log('v_startDate:- ',v_startDate,'v_endDateLastWeek:- ',v_endDateLastWeek);}
                v_trottersMeetDateString = new Date(v_trottersMeetDate).toLocaleDateString("en-AU");
            v_html += `<td class="table-simple">${v_trottersMeetDateString}</td>`;
                v_trottersMeetDate = new Date(v_trottersMeetDate.setDate(v_trottersMeetDate.getDate() + (7*(3-1))));
                v_endDate = new Date(v_trottersMeetDate);
                v_trottersMeetDateString = new Date(v_trottersMeetDate).toLocaleDateString("en-AU");
            v_html += `<td class="table-simple">${v_trottersMeetDateString}</td>`;
            v_html += `<td class="table-simple">10.2km</td>`;
            v_html += `<td class="table-simple">3</td>`;
            if (v_endDateLastWeek < v_today && v_endDate >= v_today){v_html += `<td class="table-simple">${v_todayString}</td>`;}else{v_html += `<td class="table-simple"></td>`;}
        v_html += `</tr>`;
        v_html += `<tr>`;
            // 25 September	9 October	8.6km	3 times
                v_trottersMeetDate = new Date(v_trottersMeetDate.setDate(v_trottersMeetDate.getDate() + 7));
                v_startDate = new Date(v_trottersMeetDate);
                v_endDateLastWeek = new Date(v_trottersMeetDate);
                v_endDateLastWeek = new Date(v_endDateLastWeek.setDate(v_endDateLastWeek.getDate()-7));
                // if(v_clientOS=="Windows"){console.log('v_startDate:- ',v_startDate,'v_endDateLastWeek:- ',v_endDateLastWeek);}
                v_trottersMeetDateString = new Date(v_trottersMeetDate).toLocaleDateString("en-AU");
            v_html += `<td class="table-simple">${v_trottersMeetDateString}</td>`;
                v_trottersMeetDate = new Date(v_trottersMeetDate.setDate(v_trottersMeetDate.getDate() + (7*(3-1))));
                v_endDate = new Date(v_trottersMeetDate);
                v_trottersMeetDateString = new Date(v_trottersMeetDate).toLocaleDateString("en-AU");
            v_html += `<td class="table-simple">${v_trottersMeetDateString}</td>`;
            v_html += `<td class="table-simple">8.6km</td>`;
            v_html += `<td class="table-simple">3</td>`;
            if (v_endDateLastWeek < v_today && v_endDate >= v_today){v_html += `<td class="table-simple">${v_todayString}</td>`;}else{v_html += `<td class="table-simple"></td>`;}
        v_html += `</tr>`;
        v_html += `<tr>`;
            // 16 October	25 December	6.5km	11 times
                v_trottersMeetDate = new Date(v_trottersMeetDate.setDate(v_trottersMeetDate.getDate() + 7));
                v_startDate = new Date(v_trottersMeetDate);
                v_endDateLastWeek = new Date(v_trottersMeetDate);
                v_endDateLastWeek = new Date(v_endDateLastWeek.setDate(v_endDateLastWeek.getDate()-7));
                // if(v_clientOS=="Windows"){console.log('v_startDate:- ',v_startDate,'v_endDateLastWeek:- ',v_endDateLastWeek);}
                v_trottersMeetDateString = new Date(v_trottersMeetDate).toLocaleDateString("en-AU");
            v_html += `<td class="table-simple">${v_trottersMeetDateString}</td>`;
                v_trottersMeetDate = new Date(v_trottersMeetDate.setDate(v_trottersMeetDate.getDate() + (7*(11-1))));
                v_endDate = new Date(v_trottersMeetDate);
                v_trottersMeetDateString = new Date(v_trottersMeetDate).toLocaleDateString("en-AU");
            v_html += `<td class="table-simple">${v_trottersMeetDateString}</td>`;
            v_html += `<td class="table-simple">6.5km</td>`;
            v_html += `<td class="table-simple">11</td>`;
            if (v_endDateLastWeek < v_today && v_endDate >= v_today){v_html += `<td class="table-simple">${v_todayString}</td>`;}else{v_html += `<td class="table-simple"></td>`;}
        v_html += `</tr>`;
    v_html += `</table>`;

    document.getElementById('currentYearSchedule').innerHTML = v_html;

}
currentYearSchedule();

function timeToFutureDateTime(){
    const   v_second = 1000,
            v_minute = v_second * 60,
            v_hour = v_minute * 60,
            v_day = v_hour * 24;
    let dateTime = new Date();
    let thisYear = dateTime.getFullYear();

    // var v_futureDateTimeString = "Aug 13, 2023 07:30:00";
    var futureDateTimeString = `Aug 01, ${thisYear} 07:30:00`;
    // console.log(futureDateTimeString);

    var futureDateTime = new Date(futureDateTimeString);
    // console.log(dateTime);
    // console.log(dateTime.toDateString());
    // console.log(futureDateTime);
    // console.log(futureDateTime.toDateString());

    futureDateTime = new Date(futureDateTime.setDate(futureDateTime.getDate() + 6));
    if (futureDateTime.toDateString().slice(0,3) !== "Sun"){
        let i = 0;
        while (i < 10) {
            futureDateTime = new Date(futureDateTime.setDate(futureDateTime.getDate() + 1));
            if (futureDateTime.toDateString().slice(0,3) === "Sun"){
                // console.log(futureDateTime.toDateString().slice(0,3));
                // console.log(futureDateTime.toDateString());
                futureDateTimeString = new Date(futureDateTime);
                // console.log(futureDateTimeString);
                document.getElementById("c2sDate").innerText = futureDateTimeString; 
            }else{
                // console.log(futureDateTime.toDateString().slice(0,3));
            }
            i++;
        }
    }

    // console.log(v_futureDateTime);
    // do while 
    // v_futureDateTime = new Date(v_futureDateTimeString).setDate(v_futureDateTime.getDate());
    // console.log(v_futureDateTime.toLocaleDateString);
    // v_futureDateTime = new Date(v_futureDateTimeString).setDate(v_futureDateTime.getDate() + 1);
    // console.log(v_futureDateTime);

    futureDateTime = new Date(futureDateTimeString).getTime();
    // console.log(futureDateTime);
    var dateNow = new Date().getTime();
    var difference = futureDateTime - dateNow;
    document.getElementById("f_days").innerText = Math.floor(difference / v_day);
    document.getElementById("f_hours").innerText = Math.floor((difference % v_day) / v_hour);
    document.getElementById("f_minutes").innerText = Math.floor((difference % v_hour) / v_minute);
    document.getElementById("f_seconds").innerText = Math.floor((difference % v_minute) / v_second);
    // document.getElementById("f_futureDateTimeString").innerText = v_futureDateTimeString;
}
timeToFutureDateTime();

// PARSE TT-FAVOURITE-EVENTS start
// function readRawCSV_TTevents(){
//     // fetch('../resources/tt_favourite_events.csv');
//     const fr = new FileReader();
//     fr.readAsText('../resources/tt_favourite_events.csv');
//     fr.readAsBinaryString('../resources/tt_favourite_events.csv');
//     fr.addEventListener('load'), () => {
//         const res = fr.result;
//         console.log(res);
//     }
// }
async function parseRawCSV_TTevents(){
    // const p_fileName = "tt_favourite_events.csv";
    const p_fileName = "tt_favourite_events.txt";
    if(v_clientOS=="Windows"){console.log(p_fileName);}
    v_csvTitlesArray = new Array ("Date(s)","Day(s)","Event Name","Distances","Comments","info as at","URL");
    // document.getElementById("tt-favourite-events-CSV-parsed-titles").innerHTML = '';
    // C:\fakepath\
    // const v_sourceFilePathAndName = `C:\\!netIT\\hosting\\sites\\tt\\resources\\${p_fileName}`;
    // const v_sourceFilePathAndName = `C:\\! NetITdevelopment\\hosting\\sites\\tt\\resources\\${p_fileName}`;
    // const v_sourceFilePathAndName = "C:\\! NetITdevelopment\\hosting\\sites\\tt\\resources\\" + p_fileName;
    const v_sourceFilePathAndName = "resources\\" + p_fileName;
    if(v_clientOS=="Windows"){console.log(v_sourceFilePathAndName);}
    var v_rowsArray = [];
    var v_columnsArray = [];
    // const v_data = JSON.stringify(
    const v_data = JSON.stringify(
        {
            v_filePathAndName: v_sourceFilePathAndName
        }
    );
    // const options = {method: 'POST', headers: {'Content-Type': 'application/json'},body: v_data};
    // const v_data = (document.getElementById("uberStatement_FilePathAndName").value).toString();
    const options = {method: 'POST', headers: {'Content-Type': 'application/json'},body: v_data};
    // if(v_clientOS=="Windows"){console.log(JSON.stringify(options));}
    if(v_clientOS=="Windows"){console.log(options);}
    await fetch('/parseRawCSV_TTevents',options)
    .then(res => {
        return res.json();
    })
    .then(res_data => {
        // if(v_clientOS=="Windows"){console.log('res_data.v_csvData:- LENGTH: ',res_data.v_csvData.length + `\n DATA: \n`,res_data.v_csvData);}
        v_csvTableArray = res_data.v_csvData;
        // if(v_clientOS=="Windows"){console.log('v_csvTableArray:- ',v_csvTableArray.toString());}
        // if(v_clientOS=="Windows"){console.log('document.getElementById("events-table"):- ',document.getElementById("csvTableArray"));}
        document.getElementById("events-table").innerText = v_csvTableArray.toString();
        v_csvTitlesArray = res_data.v_csvData[0].split(",");
        // if(v_clientOS=="Windows"){console.log('v_csvTitlesArray:- LENGTH: ',v_csvTitlesArray.length + `\n DATA: \n`,v_csvTitlesArray);}
        v_html = `<table class="events-table"><tbody>`;
        for (i=0; i<v_csvTableArray.length;i++){
            v_csvRowArray = res_data.v_csvData[i].split(",");
            if (i===0){
                v_html += `<tr class="events-headings">`;
                for (i2=0; i2<v_csvRowArray.length; i2++){
                    v_html += `<th>` + v_csvRowArray[i2] + "</th>";
                }
                v_html += "</tr>";
            }else{
                v_html += `<tr class="events-row">`;
                for (i2=0; i2<v_csvRowArray.length; i2++){
                    if (i2===6){
                        v_html += `<td class="events-cell"><a href="${v_csvRowArray[i2]}" target="_blank" class="events-cell-link"><span class="material-symbols-outlined">link</span></a></td>`;
                    }else {
                        v_html += `<td class="events-cell">` + v_csvRowArray[i2] + `</td>`;
                    }
                }
                v_html += "</tr>";
            }
        }
        v_html += "</tbody></table>";
        document.getElementById("events-table").innerHTML = v_html;
    })
}
// PARSE TT-FAVOURITE-EVENTS end

// CLOCK START CLOCK START CLOCK START CLOCK START CLOCK START CLOCK START CLOCK START CLOCK START CLOCK START CLOCK START CLOCK START CLOCK START
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

 function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
// setInterval(setDate, 1000);
// setDate();
// CLOCK END CLOCK END CLOCK END CLOCK END CLOCK END CLOCK END CLOCK END CLOCK END CLOCK END CLOCK END CLOCK END CLOCK END CLOCK END CLOCK END

    // BOUNCE IMAGE AROUND VIEWPORT start
    var v_speedH = 1;
    var v_speedV = 1;
    function bounceImageAroundViewport(){
        const v_image = document.getElementById('bounceAroundViewportImage');
        var v_top = v_image.style.top.replace('px','')*1;
        var v_left = v_image.style.left.replace('px','')*1;
        // if(v_clientOS=="Windows"){console.log(v_top ,v_left);}
        if (v_top <= 0){
            v_speedV = 1;
        }
        if (v_left <= 0){
            v_speedH = 1;
        }
        if (v_top + v_image.height >= window.innerHeight){
            v_speedV = -1;
        }
        if (v_left + v_image.width >= window.innerWidth){
            v_speedH = -1;
        }
        v_image.style.top = (v_image.style.top.replace('px','')*1 + v_speedV) + 'px';
        v_image.style.left = (v_image.style.left.replace('px','')*1 + v_speedH) + 'px';
        // if(v_clientOS=="Windows"){console.log(v_image.style.top + ' (' + window.innerHeight + ')',v_image.style.left + ' (' + window.innerWidth + ')');}
    }
    function stopAnimation(p_id){
        if (p_id=='bounceAroundViewportImage'){
            document.getElementById('bounceAroundViewportImage').style.display="none";
            clearInterval(v_interval);
            setTimeout(function() {
                // the code in here will run some time in the future
                // bounceImageAroundViewport();
                // document.getElementById('bounceAroundViewportImage').style.top=Math.round(window.innerHeight/2) + 'px';
                // document.getElementById('bounceAroundViewportImage').style.left=Math.round(window.innerWidth/2) + 'px';
                document.getElementById('bounceAroundViewportImage').style.display="block";
                v_interval = setInterval('bounceImageAroundViewport()', 10); // 1000 = every second
            }, 5000*2);
        }
    }
    // BOUNCE IMAGE AROUND VIEWPORT end

    // GET TEXT FILE start
    function getTextFile(){

        let file = "tt_favourite_events.txt"
        fetch (file)
        .then(x => x.text())
        .then(y => document.getElementById("demo").innerHTML = y);

    //     const url = "http://localhost:1974/tt_favourite_events.txt";
    //     // const url = "https://turramurratrotters.org/tt_favourite_events.txt";
    //     // const url = "https://www.turramurratrotters.org/popularEvents.html";
    //     const options = {method: 'GET', mode: 'same-origin', headers: {'Content-Type': 'text/plain'}};
    //     console.log(options);
    //     const response = await fetch(url,{
    //         method: 'GET', 
    //         // mode: 'no-cors', 
    //         mode: 'same-origin', 
    //         headers: {
    //             // 'Content-Type': 'text/plain'
    //             // 'Content-Type': 'application/json'
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //         }
    //     })
    //     .then( response => {
    //         console.log("response:- \n" + response.toString());
    //         return response.toString();
    //     })
    //     .then( res => {
    //         console.log("res:- \n" + res);
    //         //process your text! 
    //     })
    // }

        // // read text from URL location
        // var request = new XMLHttpRequest();
        // // request.open('GET', 'http://www.puzzlers.org/pub/wordlists/pocket.txt', true);
        // request.open('GET', 'localhost:tt_favourite_events.txt', true);
        // request.send(null);
        // request.onreadystatechange = function () {
        //     if (request.readyState === 4 && request.status === 200) {
        //         var type = request.getResponseHeader('Content-Type');
        //         if (type.indexOf("text") !== 1) {
        //             return request.responseText;
        //         }
        //     }
        // }
    // }
    }
    getTextFile();
    // GET TEXT FILE end