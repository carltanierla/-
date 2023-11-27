<template>
    <aside>
        <div class="manage-attendance-container ml-5">
            <h1 class="title mb-4">Manage Attendance</h1>
            <p class="description">
                Attendance management is where you can generate, add, edit and export the logs of the employees.
            </p>
        </div>
        <div class="subpage-button-container">
            <button class="attendance-logs d-flex">
                <font-awesome-icon icon="fa-solid fa-calendar" class="mr-2 mt-1"/>
                <h3 class="m-4">Attendace Logs</h3>
            </button>
            <button class="exported-files d-flex">
                <font-awesome-icon icon="fa-solid fa-download" class="mr-2 mt-1"/>
                <h3 class="m-4">Exported Files</h3>
            </button>
        </div>

        <div class="date-range">
            <h4 class="mt-7 mb-5">DATE RANGE</h4>
            <div class=" mt-2">
                <Datepicker
                    label="Date From"
                    color="success"
                    :modelValue="startDate"
                    @changeStartDate="changeDate"
                ></Datepicker>
                <Datepicker
                    label="Date To"
                    color="success"
                    :modelValue="endDate"
                    @changeEndDate="changeDate"
                ></Datepicker>
            </div>
        </div>
        <div class="filters">
            <div class="d-flex justify-content-between">
                <h4 class="flex-grow-1 align-self-center">FILTERS</h4>
                <button float-right class="show-all-btn text-primary">Show All</button>
            </div>
            <div class="d-flex mt-7 justify-content-between"> 
                <font-awesome-icon icon="fa-regular fa-building" />
                <p class="company-name ml-3">SPROUT SOLUTIONS</p>
            </div>
            <div class="d-flex mt-1 justify-content-between"> 
                <font-awesome-icon icon="fa-solid fa-users" />
                <p class="department ml-3">ALL</p>
            </div>
            <div class="d-flex mt-1 justify-content-between"> 
                <font-awesome-icon icon="fa-solid fa-location-dot" />
                <p class="location ml-3">ALL</p>
            </div>
            <div class="d-flex mt-1 justify-content-between"> 
                <font-awesome-icon icon="fa-regular fa-user" />
                <p class="employee ml-3">ALL</p>
            </div>
        </div>
        <div class="action-buttons">
            <button class="btn-success">
                Search
            </button>
        </div>
    </aside>
</template>

<script>
    import Datepicker from '../components/Reusable/DatePicker.vue'
    export default {
        name: 'ManageAttendancePage',
        components: {
            Datepicker
        },

        data() {
            return {
                startDate: new Date(Date.now()),
                endDate: new Date(Date.now())
            }
        },

        methods: {
            changeDate(oDate) {
                this.startDate = oDate;
            }
        }
    }
</script>

<style scoped>
    aside {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        overflow: hidden;
        padding: 2rem;   
        width: 400px;
        border-right: 2px solid black;
    }

    .subpage-button-container, .filters {
        padding: 1rem;
        border-bottom: 1px solid black;
    }

    .fa-download, .fa-calendar {
        color: #17AD49;
    }

    .attendance-logs, .exported-files {
        padding: 1rem;
        width: 100%;
    }
    .attendance-logs:hover, .exported-files:hover {
        background-color: #E6FFEE;
    }

    .show-all-btn {
        padding: 0;
        margin: 0;
        text-decoration: none;
    }

    .company-name, .department, .location, .employee {
        font-size: 12px;
        color: #3C5B51;
    }
    
    .fa-users, .fa-user {
        width: 12px;
    }
</style>