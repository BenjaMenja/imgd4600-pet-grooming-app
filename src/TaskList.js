export function initializeTasks() {
   setDay(1, "wash_done brush_done clip_done");
   setDay(2, "clip_missed brush_missed");
   setDay(3, "brush_missed");
   setDay(5, "brush_done");
   setDay(7, "brush_done wash_done");
   setDay(9, "brush_done");
   setDay(11, "brush_missed");
   setDay(13, "brush_done");
   setDay(15, "brush_done");
   setDay(17, "brush_done");
   setDay(19, "brush_done");
   setDay(21, "brush_done");
   setDay(22, "wash_done clip_done");
   setDay(23, "brush_done");
   setDay(25, "brush_done");
   setDay(26, "clip_missed");
   setDay(27, "brush_missed");
   setDay(28, "wash_missed");
   setDay(29, "brush_missed clip_missed wash_missed");

   setDay(30, "brush_missed");
   setDay(31, "brush_missed");
   setDay(35, "brush_missed wash_missed");
   setDay(37, "brush_missed");
   setDay(38, "clip_missed");
   setDay(39, "brush_missed");

   localStorage.setItem("dogapp-washstreak", "0");
   localStorage.setItem("dogapp-clipstreak", "0");
   localStorage.setItem("dogapp-brushstreak", "0");
   localStorage.setItem("dogapp-tasksinit", "0");
}

function setDay(day, to) {
   if(day < new Date().getDate()) {
      localStorage.setItem("dogapp-tasks" + day, to);
   }
   else {
      localStorage.setItem("dogapp-tasks" + day, to.replaceAll("_done", "").replaceAll("_missed", ""));
   }
}

export function checkOffToday(task) {
   let tmp = makeObjFromStringTasks(getTasksForToday());
   tmp[task] = "done";
   setTasksForToday(makeStringFromObjTasks(tmp));

   const curStr = Number(localStorage.getItem("dogapp-" + task + "streak"));
   localStorage.setItem("dogapp-" + task + "streak", String(curStr + 1));

   window.dispatchEvent(new Event("checklist"));
}

export function alreadyCheckedToday(task) {
   let tmp = makeObjFromStringTasks(getTasksForToday());
   return tmp[task] == "done";
}

export function allDoneToday() {
   let tmp = makeObjFromStringTasks(getTasksForToday());
   if(tmp.wash && tmp.wash != "done") {
      return false;
   }
   if(tmp.clip && tmp.clip != "done") {
      return false;
   }
   if(tmp.brush && tmp.brush != "done") {
      return false;
   }

   return true;
}

export function getTasksForDay(day) {
   const tasks = localStorage.getItem("dogapp-tasks" + day);
   return tasks == null? "":tasks;
}

export function getTasksForToday() {
   return getTasksForDay(new Date().getDate() + (new Date().getMonth() === 3? 29:0));
}

export function setTasksForDay(day, change) {
   localStorage.setItem("dogapp-tasks" + day, change);
}

export function setTasksForToday(change) {
   setTasksForDay(new Date().getDate() + (new Date().getMonth() === 3? 29:0), change);
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
      let tmp = objTasks.wash === "pending"? "":("_" + objTasks.wash);
      result += ("wash" + tmp + " ");
   }
   if(objTasks.brush) {
      let tmp = objTasks.brush === "pending"? "":("_" + objTasks.brush);
      result += ("brush" + tmp + " ");
   }
   if(objTasks.clip) {
      let tmp = objTasks.clip === "pending"? "":("_" + objTasks.clip);
      result += ("clip" + tmp + " ");
   }

   return result;
}