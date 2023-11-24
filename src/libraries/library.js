// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCaretDown, faUserSecret, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faCaretDown, faMagnifyingGlass, faBell)

const vuetify = createVuetify({
    components,
    directives,
  })

  export {
    vuetify,
    FontAwesomeIcon
  }