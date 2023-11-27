// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'material-design-icons-iconfont/dist/material-design-icons.css'

import '@mdi/font/css/materialdesignicons.css'

/* import specific icons */
import { faCaretDown, faUserSecret, faMagnifyingGlass, faCalendar, faDownload, faUsers, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { faBell, faBuilding, faUser } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(
    faUserSecret, 
    faCaretDown, 
    faMagnifyingGlass, 
    faBell, 
    faCalendar, 
    faDownload, 
    faBuilding,
    faUsers,
    faLocationDot,
    faUser
)

/**
 * vuetify instantiation
 */
const vuetify = createVuetify({
    components,
    directives,
    date: {
      formats: {
        keyboardDate: { year: 'numeric', month: 'long', day: 'numeric' },
        dayOfMonth: (date, formatString, locale) => date.getDate(),
      }
    },
  })

  export {
    vuetify,
    FontAwesomeIcon
  }