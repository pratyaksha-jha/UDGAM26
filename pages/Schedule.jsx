import { useEffect } from "react";
import ScheduleTemplate from "../src/Schedule/Template";
import "../src/Schedule/styles.css";
import { InitSchedule, CleanupSchedule } from "../src/Schedule/Behavior";

export default function Schedule() {
  useEffect(() => {
    InitSchedule();
    return () => CleanupSchedule();
  }, []);

  return <ScheduleTemplate />;
}
