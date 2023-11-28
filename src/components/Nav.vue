<template>
    <div id="nav">
        <Logo/>
        <div class="menu">
            <ul class="horizontal">
                <li><a @click.stop>My Request</a><font-awesome-icon icon="fa-solid fa-caret-down" /></li>
                <li><a @click.stop>My Team</a><font-awesome-icon icon="fa-solid fa-caret-down" /></li>
                <span class="dropdown">
                    <li><a class="dropbtn" @click.stop="toggleDropdown">Administration Tools</a><font-awesome-icon icon="fa-solid fa-caret-down" /></li>
                    <router-link style="text-decoration: none; color: inherit" to="/attendance-management">
                        <div class="dropdown-content" id="myDropdown">
                            <a @click.stop>Manage Attendance</a>
                        </div>
                    </router-link>
                </span>
                <li><a @click.stop>Maintenance</a><font-awesome-icon icon="fa-solid fa-caret-down" /></li>
                <li><a @click.stop>Company</a><font-awesome-icon icon="fa-solid fa-caret-down" /></li>
            </ul>
        </div>
        <div class="right-nav d-flex justify-content-between">
                <v-text-field
                    single-line
                    hide-details
                    class="search-txt"
                    placeholder="Search Employee"
                    variant="outlined"
                    append-inner-icon="mdi-magnify"
                    color="light"></v-text-field>
            <div class="notification d-flex justify-content-end">
                <font-awesome-icon icon="fa-regular fa-bell" size="xl" />
            </div>
            <div class="profile d-flex ml-5">
                <div class="avatar align-self-center">
                    <v-avatar size="36px">
                        <v-img
                        alt="Avatar"
                        src="/sprout-hris/blank-profile-picture-973460_1280.png"
                        >
                        </v-img>
                    </v-avatar>
                </div>
                <div class="settings align-self-center">
                    <a href="/#" class="text-primary">Admin</a><font-awesome-icon icon="fa-solid fa-caret-down" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Logo from '../components/Reusable/Logo.vue';
    export default {
        name: 'Nav',
        components: {
            Logo
        },
        methods: {
            toggleDropdown() {
                let myDropdown = document.getElementById('myDropdown');
                myDropdown.classList.toggle('show');
            }
        },
    
        mounted() {
            document.addEventListener('click', (e) => {
                if (!e.target.matches('.dropbtn')) {
                    var myDropdown = document.getElementById('myDropdown');
                    if (myDropdown.classList.contains('show')) {
                        myDropdown.classList.remove('show');
                    }
                }
            });
        }
    }
</script>



<style scoped>

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.v-text-field {
    color: #ffffff;
}

.fa-magnifying-glass {
    color: #919599
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.notification {
    flex: 5;
}

.v-field__append-inner, .mdi-magnify {
    cursor: pointer !important;
}

.show {
    display: block;
}

</style>