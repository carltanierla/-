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
            path: '/sprout-hris',
            component: ManageAttendancePage,
            alias: ['/sprout-hris/'],
            sensitive: false,
            children: [
              {
                path: 'attendance-logs',
                component: AttendanceLogs,
                alias: ['/sprout-hris/', '/sprout-hris', '/sprout-hris/attendance-logs', '/sprout-hris/attendance-logs/'],
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