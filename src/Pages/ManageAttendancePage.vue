<template>
    <div class="d-flex">
        <aside>
            <div class="manage-attendance-container ml-5">
                <h3 class="title mb-4">Manage Attendance</h3>
                <p class="description">
                    Attendance management is where you can generate, add, edit and export the logs of the employees.
                </p>
            </div>
            <div class="subpage-button-container">
                <router-link style="text-decoration: none; color: inherit" to="/sprout-hris/attendance-logs">
                    <ButtonSubPage :class="['attendance-logs', { 'selected' : bCheckIfAttendanceLogActive }]" name="Attendance Logs" iconPack="fa-solid fa-calendar" />
                </router-link>
                <router-link style="text-decoration: none; color: inherit" to="/sprout-hris/exported-files">
                    <ButtonSubPage :class="['exported-files', { 'selected' : !bCheckIfAttendanceLogActive }]" name="Exported Files" iconPack="fa-solid fa-download" />
                </router-link>
            </div>

            <div class="date-range">
                <h6 class="mt-5 mb-3">DATE RANGE</h6>
                <div class=" mt-2">
                    <Datepicker
                        label="Date From"
                        color="success"
                        class="mb-2"
                        :modelValue="oStartDate"
                        @changeDate="changeStartDate"
                        type="startDate"
                    ></Datepicker>
                    <Datepicker
                        label="Date To"
                        color="success"
                        class="mb-2"
                        :modelValue="oEndDate"
                        @changeDate="changeEndDate"
                        type="endDate"
                        :min="oStartDate"
                    ></Datepicker>
                </div>
            </div>
        
            <Filters />
            <div class="action-buttons w-100">
                <button type="button" class="btn-search"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /> Search</button>
                <button type="button" class="btn-export"><font-awesome-icon icon="fa-solid fa-download" /> Export</button>
            </div>
        </aside>
        <section class="w-75">
            <main>
                <article>
                    <router-view></router-view>
                </article>
            </main>
        </section>
    </div>
</template>

<script>
    import Datepicker from '../components/Reusable/DatePicker.vue'
    import ButtonSubPage from '../components/Reusable/ButtonSubPage.vue'
    import Filters from '../components/Reusable/Filters.vue/'
    import moment from 'moment';
    export default {
        name: 'ManageAttendancePage',
        components: {
            Datepicker,
            ButtonSubPage,
            Filters
        },

        data() {
            return {
                oStartDate: new Date(Date.now()),
                oEndDate: new Date(Date.now()),
                bDefaultButtonSelected: true,
            }
        },

        watch: {
            /**
             * watch the oStartDate changes. 
             * commits the changes to the vuex state
             * @param {object} oStartDate 
             */
            oStartDate(oStartDate) {
                this.$store.commit('setStartDate', moment(oStartDate).format('YYYY-MM-DD'));
            },

            /**
             * watch the oEndDate changes. 
             * commits the changes to the vuex state
             * @param {object} oStartDate 
             */
            oEndDate(oEndDate) {
                this.$store.commit('setEndDate', moment(oEndDate).format('YYYY-MM-DD'));
            }
        },

        computed: {
            /**
             * check current selected attendance log subcategory
             */
            bCheckIfAttendanceLogActive() {
                console.log(this.$route.path);
                return this.$route.path === '/sprout-hris/attendance-logs' || this.$route.path === '/sprout-hris' || this.$route.path === '/sprout-hris/';
            }
        },

        methods: {

            /**
             * Changes the start date
             * @param {string} oStartDate 
             */
            changeStartDate(oStartDate) {
                this.oStartDate = oStartDate;
            },
            /**
             * Changes the end date
             * @param {string} oEndDate 
             */
             changeEndDate(oEndDate) {
                this.oEndDate = oEndDate;
            },

            /**
             * Sets up initial state of data and state in vuex
             */
            setupInitialValues() {
                this.changeStartDate(this.oStartDate);
                this.changeEndDate(this.oEndDate);
            }
        },

        async mounted() {
            await this.setupInitialValues()
        },
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
    
    .show-all-btn {
        padding: 0;
        margin: 0;
        text-decoration: none;
    }

    .attendance-logs, .exported-files {
        padding: 0 1rem;
        width: 100%;
    }
    .sub-selected {
        background-color: #E6FFEE;
    }

    .btn-search {
        margin-top: 1rem;
        padding: 0.7rem;
        background-color: #17AD49;
        width: 100%;
        color: #FFFFFF;
    }
    .btn-export {
        border: 1px solid #C3CDC9;
        margin-top: 1rem;
        padding: 0.7rem;
        background-color: #FFFFFF;
        width: 100%;
        color: #000000;
    }

    .selected {
        background-color: #E6FFEE;
    }
</style>