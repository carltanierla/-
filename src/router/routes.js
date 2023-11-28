import { createRouter, createWebHistory } from 'vue-router'
import ManageAttendancePage from '../Pages/ManageAttendancePage.vue'
import AttendanceLogs from '../components/ManageAttendance/AttendanceLogs.vue'
import ExportedFiles from '../components/ManageAttendance/ExportedFiles.vue'

/**
 * Vue Router instance
 * 
 */
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: ManageAttendancePage,
            children: [
              {
                path: 'attendance-logs',
                component: AttendanceLogs,
              },
              {
                path: 'exported-files',
                component: ExportedFiles,
              },
            ],
          },
    ]
  })

export default router;