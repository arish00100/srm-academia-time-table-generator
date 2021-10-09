
    //Get attn page from academia
    // $('#msgDiv').load('file:///C:/Users/khana/Desktop/timetable.html#');
    
    //Acess data
    // let list_obj=document.getElementById("list").children[0].children;
    let list_rows=document.getElementsByTagName('table')[24].children[0].children;

    
    //Maps slot to course name in an object
    for(let j=1;j<list_rows.length-1;j++){
      let list_row=list_rows[j];
			let keys=list_row.children[8].childNodes[0].data;
      let value= list_row.children[2].childNodes[0].data;
			let reg=/(P.*)-(P.*)-/;
			if(reg.test(keys))
			{
				let p1=keys.match(reg)[1],p2=keys.match(reg)[2];
				course_mapping[p1]=value;
				course_mapping[p2]=value;
				
			}
			else course_mapping[keys]=value;
//       let key_array=list_row[8].childNodes[0].data.search(/(.*?)-(.*?)-/);
//       key_array.forEach((key)=>course_mapping[key]=list_row[2].childNodes[0].data)
    }
// console.log(course_mapping)
    
    
    
    //Access time table
    // let time_table=document.getElementById("timetable").children[0].children;
    let time_table_rows=document.getElementsByTagName('table')[23].children[1].children;
        
    //Iterate and change timetable
    for (let i=3;i<time_table_rows.length;i++){
        let day_order_slots=time_table_rows[i].children;
        for(j=1;j<day_order_slots.length;j++){
                let slot=day_order_slots[j].childNodes[1];
                if(course_mapping.hasOwnProperty(slot.data))
                    slot.replaceWith(course_mapping[slot.data]);
            }
    }


    //Print function
    function print(){

    }



    //Insert button to print
    //Find place to insert
    //.addChild()
    

