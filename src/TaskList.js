export function initializeTasks() {
   localStorage.setItem("dogapp-tasks1", "wash_done brush_done");
   localStorage.setItem("dogapp-tasks2", "clip_missed");
   localStorage.setItem("dogapp-tasks3", "brush_missed");
   localStorage.setItem("dogapp-tasks4", "");
   localStorage.setItem("dogapp-tasks5", "brush_done");
   localStorage.setItem("dogapp-tasks6", "");
   localStorage.setItem("dogapp-tasks7", "brush_done");
   localStorage.setItem("dogapp-tasks8", "");
   localStorage.setItem("dogapp-tasks9", "brush_done");
   localStorage.setItem("dogapp-tasks10", "");
   localStorage.setItem("dogapp-tasks11", "brush_missed");
   localStorage.setItem("dogapp-tasks12", "");
   localStorage.setItem("dogapp-tasks13", "brush_done");
   localStorage.setItem("dogapp-tasks14", "");
   localStorage.setItem("dogapp-tasks15", "brush_done");
   localStorage.setItem("dogapp-tasks16", "");
   localStorage.setItem("dogapp-tasks17", "brush_done");
   localStorage.setItem("dogapp-tasks18", "");
   localStorage.setItem("dogapp-tasks19", "brush_done");
   localStorage.setItem("dogapp-tasks20", "");
   localStorage.setItem("dogapp-tasks21", "brush_done");
   localStorage.setItem("dogapp-tasks22", "wash clip");
   localStorage.setItem("dogapp-tasks23", "brush");
   localStorage.setItem("dogapp-tasks24", "");
   localStorage.setItem("dogapp-tasks25", "brush");
   localStorage.setItem("dogapp-tasks26", "clip");
   localStorage.setItem("dogapp-tasks27", "brush");
   localStorage.setItem("dogapp-tasks28", "");
   localStorage.setItem("dogapp-tasks29", "brush");

   localStorage.setItem("dogapp-tasksinit", "true");
}

export function checkOffToday(task) {
   let tmp = makeObjFromStringTasks(getTasksForToday());
   tmp[task] = "done";
   setTasksForToday(makeStringFromObjTasks(tmp));
}

export function getTasksForDay(day) {
   return localStorage.getItem("dogapp-tasks" + day);
}

export function getTasksForToday() {
   return getTasksForDay(new Date().getDate());
}

export function setTasksForDay(day, change) {
   localStorage.setItem("dogapp-tasks" + day, change);
}

export function setTasksForToday(change) {
   setTasksForDay(new Date().getDate(), change);
}


function makeObjFromStringTasks(stringTasks) {
   let result = {};

   if(stringTasks.includes("wash")) {
      if(stringTasks.includes("wash_done")) {
         result.wash = "done";
      }
      else if(stringTasks.includes("wash_missed")) {
         result.wash = "missed";
      }
      else {
         result.wash = "pending";
      }
   }
   if(stringTasks.includes("brush")) {
      if(stringTasks.includes("brush_done")) {
         result.brush = "done";
      }
      else if(stringTasks.includes("brush_missed")) {
         result.brush = "missed";
      }
      else {
         result.brush = "pending";
      }
   }
   if(stringTasks.includes("clip")) {
      if(stringTasks.includes("clip_done")) {
         result.clip = "done";
      }
      else if(stringTasks.includes("clip_missed")) {
         result.clip = "missed";
      }
      else {
         result.clip = "pending";
      }
   }

   return result;
}

function makeStringFromObjTasks(objTasks) {
   let result = "";

   if(objTasks.wash) {
      let tmp = objTasks.wash == "pending"? "":("_" + objTasks.wash);
      result += ("wash" + tmp + " ");
   }
   if(objTasks.brush) {
      let tmp = objTasks.brush == "pending"? "":("_" + objTasks.brush);
      result += ("brush" + tmp + " ");
   }
   if(objTasks.clip) {
      let tmp = objTasks.clip == "pending"? "":("_" + objTasks.clip);
      result += ("clip" + tmp + " ");
   }

   return result;
}