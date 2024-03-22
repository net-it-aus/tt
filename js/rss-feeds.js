// GET RSS FEED
async function getATOrssSuper(){
    const v_data = JSON.stringify(
        {
            v_variable: ""        }
    );
    const v_options = {method: 'POST', headers: {'Content-Type': 'application/json'},body: v_data};
    // if(getClientOS()=="Windows"){console.log('/getATOrssSuper options:- ',v_options)};
    // console.log('/getATOrssSuper options:- ',v_options);
    await fetch('/getATOrssSuper',v_options)
    .then(res => {
        // console.log('getATOrssSuper:- res:- ',res);
        // console.log('getATOrssSuper:- res.body:- ',res.body);
        // return res.json();
        return res.text();
    })
    .then((res_xml) => {
        // console.log('getATOrssSuper:- res_xml:- ',res_xml);
        //    res_xml = '<?xml version="1.0" encoding="utf-8"?><?xml-stylesheet type="text/xsl" href="xsl/atorss.xsl"?><rss version="2.0"><channel><title>ATO - Super</title><link>https://www.ato.gov.au</link><description /><language>en-au</language><pubDate>Thu, 16 Mar 2023 14:08:01</pubDate><image><url>img/logo-ato.gif</url><title>Australian Taxation Office</title><link>https://www.ato.gov.au</link></image><item><title>Self-managed super fund quarterly statistical report - December 2022</title><link>https://www.ato.gov.au/Super/Self-managed-super-funds/In-detail/Statistics/Quarterly-reports/Self-managed-super-fund-quarterly-statistical-report---December-2022/</link><description>What is included in our most recent statistical report for the self-managed super fund (SMSF) market.</description><pubDate>Thu, 9 Mar 2023 00:00:00</pubDate></item></channel></rss>'
        // ...what to look for
            // <item>
            //   <title>Self-managed super fund quarterly statistical report - December 2022</title>
            //   <link>https://www.ato.gov.au/Super/Self-managed-super-funds/In-detail/Statistics/Quarterly-reports/Self-managed-super-fund-quarterly-statistical-report---December-2022/</link>
            //   <description>
            //       What is included in our most recent statistical report for the self-managed super fund (SMSF) market.
            //   </description>
            //   <pubDate>Thu, 9 Mar 2023 00:00:00</pubDate>
            // </item>
        // ...what to look for
        let itemStart,itemEnd,titleStart, titleEnd,linkStart,linkEnd,descriptionStart,descriptionEnd,publishedStart,publishedEnd;
        let charStart=0;
        let charEnd=0;
        // console.log('LENGTH:-',res_xml.length);
        for (i=0; i<res_xml.length;i++){
            if (res_xml.slice(i,i+6)==="<item>"){
                itemStart = i;
                // console.log('itemStart:-',itemStart,res_xml.slice(i,i+6));
                for (a=i; a<res_xml.length;a++){
                    if (res_xml.slice(a,a+7)==="<title>"){
                        titleStart = a;
                        // console.log('titleStart:-',titleStart,res_xml.slice(a,a+7));
                        for (b=a; b<res_xml.length;b++){
                            if (res_xml.slice(b,b+8)==="</title>"){
                                titleEnd = b;
                                // console.log('titleEnd:-',titleEnd,res_xml.slice(b,b+8));
                                // console.log('title:-',res_xml.slice(titleStart+7,titleEnd));
                                for (c=b;c<res_xml.length;c++){
                                    if (res_xml.slice(c,c+6)==="<link>"){
                                        linkStart = c;
                                        // console.log('linkStart:-',linkStart,res_xml.slice(c,c+6));
                                        for (d=c;d<res_xml.length;d++){
                                            if (res_xml.slice(d,d+7)==="</link>"){
                                                linkEnd = d;
                                                // console.log('linkEnd:-',linkEnd,res_xml.slice(d,d+7));
                                                // console.log('link:-',res_xml.slice(linkStart+6,linkEnd));
                                                for (e=d;e<res_xml.length;e++){
                                                    if (res_xml.slice(e,e+9)==="<pubDate>"){
                                                        publishedStart = e;
                                                        // console.log('publishedStart:-',publishedStart,res_xml.slice(e,e+9));
                                                        for (f=e;f<res_xml.length;f++){
                                                            if (res_xml.slice(f,f+10)==="</pubDate>"){
                                                                publishedEnd = f;
                                                                // console.log('publishedEnd:-',publishedEnd,res_xml.slice(f,f+10));
                                                                // console.log('published:-',res_xml.slice(publishedStart+9,publishedEnd));
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        // writeToLocalStorage('clickedTickerPrice',res_data.price);
        // writeToLocalStorage('clickedTickerDateTime',v_dateTime);
        // writeToLocalStorage(`lastPrice_CommSec_${p_ticker}`,res_data.price);
        // writeToLocalStorage(`lastDateTime_CommSec_${p_ticker}`,v_dateTime);
        // return res_data.price;
    })
  }
  // GET RSS FEED