<template>
    <div id="nav">
        <Logo/>
        <div class="menu">
            <ul class="horizontal">
                <li><a href="/#">My Request</a><font-awesome-icon icon="fa-solid fa-caret-down" /></li>
                <li><a href="/#">My Team</a><font-awesome-icon icon="fa-solid fa-caret-down" /></li>
                <span class="dropdown">
                    <li><a class="dropbtn" @click="toggleDropdown" href="/#">Administration Tools</a><font-awesome-icon icon="fa-solid fa-caret-down" /></li>
                    <div class="dropdown-content" id="myDropdown">
                        <a href="#">Manage Attendance</a>
                    </div>
             
                </span>
                <li><a href="/#">Maintenance</a><font-awesome-icon icon="fa-solid fa-caret-down" /></li>
                <li><a href="/#">Company</a><font-awesome-icon icon="fa-solid fa-caret-down" /></li>
            </ul>
        </div>
        <div class="right-nav d-flex p-2 justify-content-center">
            <div class="search-field">
                <v-text-field
                class="search-input"
                placeholder="employee Search"
                variant="underlined"
                ></v-text-field>
            </div>
            <div class="search-btn mx-5 align-self-center">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" size="xl" />
            </div>
            <div class="notification mx-5 align-self-center">
                <font-awesome-icon icon="fa-regular fa-bell" size="xl" />
            </div>
            <div class="profile d-flex">
                <div class="avatar align-self-center">
                    <v-avatar size="36px">
                        <v-img
                        alt="Avatar"
                        src="/blank-profile-picture-973460_1280.png"
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
                let myDropdown = document.getElementById("myDropdown");
                myDropdown.classList.toggle("show");
            }
        },
    
        mounted() {
            document.addEventListener('click', (e) => {
                if (!e.target.matches('.dropbtn')) {
                    var myDropdown = document.getElementById("myDropdown");
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

.dropdown-content a:hover {
  background-color: #ddd;
}

.show {
  display: block;
}
</style>