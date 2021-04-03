'-import * as React from 'react';
import { Text, View, } from 'react-native';

updateAttendance(roll_on, status) {
  var id = "";
  if (roll_no <=9){
    id= "0" + roll_no;
  }  else {
  id = roll_no;
  }

var today = new Date();
var dd = today.getDay();
var mm = today.getMonth() + 1;

var yyy = today.getFullYear();
if (dd < 10) {
dd = "0" + dd;
}
if (mm < 10) {
mm = "0" + mm;
}

today = dd + "-" + mm + "-" + yyy;
var ref_path = id;
var class_ref = db.ref(ref_path);
class_ref.update({
  [today] : status,
  });
}