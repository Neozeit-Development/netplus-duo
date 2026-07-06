import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppShell } from "@/layouts/AppShell";
import { HomeScreen } from "@/screens/HomeScreen";
import { LessonIntroScreen } from "@/screens/LessonIntroScreen";
import { LessonScreen } from "@/screens/LessonScreen";
import { LessonSummaryScreen } from "@/screens/LessonSummaryScreen";
import { WeakIntroScreen } from "@/screens/WeakIntroScreen";
import {
  StudyDetailScreen,
  StudyDomainsScreen,
  StudyObjectivesScreen,
} from "@/screens/StudyScreen";
import { ExamIntroScreen } from "@/screens/ExamIntroScreen";
import { ExamRunScreen } from "@/screens/ExamRunScreen";
import { StatsScreen } from "@/screens/StatsScreen";
import { SettingsScreen } from "@/screens/SettingsScreen";

export function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<HomeScreen />} />
          <Route path="lesson/intro" element={<LessonIntroScreen />} />
          <Route path="lesson" element={<LessonScreen />} />
          <Route path="lesson/summary" element={<LessonSummaryScreen />} />
          <Route path="weak" element={<WeakIntroScreen />} />
          <Route path="study" element={<StudyDomainsScreen />} />
          <Route path="study/:zoneId" element={<StudyObjectivesScreen />} />
          <Route path="study/:zoneId/:objectiveId" element={<StudyDetailScreen />} />
          <Route path="exam" element={<ExamIntroScreen />} />
          <Route path="exam/run" element={<ExamRunScreen />} />
          <Route path="stats" element={<StatsScreen />} />
          <Route path="settings" element={<SettingsScreen />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
