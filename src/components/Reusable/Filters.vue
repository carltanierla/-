<template>
    <div class="filters">
        <div class="d-flex">
            <h6 class="flex-grow-1 align-self-center">FILTERS</h6>
            <button float-right class="show-all-btn text-primary" v-if="!bActiveFilters" @click="toggleFilters">Show All</button>
            <button float-right class="show-all-btn text-primary" v-if="bActiveFilters" @click="toggleFilters">Hide All</button>
        </div>
        <div class="filter-labels" v-if="!bActiveFilters">
            <div class="d-flex mt-3"> 
                <font-awesome-icon icon="fa-regular fa-building" />
                <p class="company-name ml-3">SAMPLE COMPANY</p>
            </div>
            <div class="d-flex"> 
                <font-awesome-icon icon="fa-solid fa-users" />
                <p class="department ml-3">ALL</p>
            </div>
            <div class="d-flex"> 
                <font-awesome-icon icon="fa-solid fa-location-dot" />
                <p class="location ml-3">ALL</p>
            </div>
            <div class="d-flex"> 
                <font-awesome-icon icon="fa-regular fa-user" />
                <p class="employee ml-3">ALL</p>
            </div>
        </div>

        <div class="filter-inputs" v-if="bActiveFilters">
            <div class="mt-2">
                <v-select
                    v-model="iSelectedCompanyID"
                    label="Company"
                    :items="aCompanies" 
                    :item-props="oCompanyProps"
                    variant="outlined"
                    hide-details
                    return-object 
                    filled
                ></v-select>
            </div>
            <div class="mt-2">
                <v-select
                    v-model="iSelectedDepartmentID"
                    label="Department"
                    :items="aDepartments" 
                    :item-props="oDepartmentProps"
                    variant="outlined"
                    hide-details
                    return-object 
                    filled
                ></v-select>
            </div>
            <div class="mt-2">
                <v-select
                    v-model="iSelectedLocationID"
                    label="Location"
                    :items="aLocations" 
                    :item-props="oLocationProps"
                    variant="outlined"
                    hide-details
                    return-object 
                    filled
                ></v-select>
            </div>
            <div class="mt-2">
                <v-select
                    v-model="iEmployeeID"
                    label="Employee"
                    variant="outlined"
                    hide-details
                    return-object 
                    filled
                ></v-select>
            </div>
        </div>
    </div>
</template>

<script>
import constant from '../../constants/constant.js'
export default {
    name: 'Filters',
    data() {
        return {
            bActiveFilters: true,
            aCompanies: constant.COMPANY,
            aDepartments: constant.DEPARTMENT,
            aLocations: constant.LOCATIONS,
            iSelectedCompanyID: null,
            iSelectedDepartmentID: null,
            iSelectedLocationID: null,
        }
    },

    watch: {
        /**
         * Watch for iSelectedCompanyID changes
         * @param {object} iValue 
         */
        iSelectedCompanyID(oValue) {
            this.aDepartments = constant.DEPARTMENT.filter(oData => oData.company_id === oValue.id);

        },

        /**
         * Watch for iSelectedDepartmentID changes
         * @param {object} oValue 
         */
        iSelectedDepartmentID(oValue) {
            this.aLocations = constant.LOCATIONS.filter(oData => oData.department_id === oValue.id);
        },

        /**
         * Watch for iSelectedLocationID changes
         * @param {object} oValue 
         */
         iSelectedLocationID(oValue) {
                this.aLocations = constant.LOCATIONS.filter(oData => oData.department_id === oValue.id);
        },

        
    },

    methods: {

        /**
         * Toggles filter label or select input fields
         */
        toggleFilters() {
            this.bActiveFilters = !this.bActiveFilters;
        },

        /**
         * binds props for company filter
         * @param {object} oItem 
         */
        oCompanyProps (oItem) {
            return {
                title: oItem.company_name,
                value: oItem.id,
            }
        },

        /**
         * binds props for department filter
         * @param {object} oItem 
         */
        oDepartmentProps (oItem) {
            return {
                title: oItem.department_name,
                value: oItem.id,
            }
        },

        
        /**
         * binds props for location filter
         * @param {object} oItem 
         */
        oLocationProps (oItem) {
            return {
                title: oItem.location_name,
                value: oItem.id,
            }
        },

        
    },
}
</script>

<style scoped>

    .company-name, .department, .location, .employee {
        font-size: 12px;
        color: #3C5B51;
    }
    
    .fa-users, .fa-user {
        width: 12px;
    }

</style>