<template>
    <div class="d-flex float-left mt-3 ml-5">
        <font-awesome-icon class="mr-2" icon="fa-solid fa-calendar" /><h6>Date Range</h6>
    </div>
    <div>
        <v-data-table :headers="headers" :items="items" :height="700" :width="500"></v-data-table>
    </div>
</template>

<script>
export default {
    data() { 
        return {
            /**
             * Dummy data for data table
             */
            items: [
                {
                    'name'  : 'John Doe',
                    'Date'  : '03/16/2022',
                    'time'  : '01:34PM',
                    'IN/OUT': 'IN',
                    'Log Details' : '--',
                    'Location'  : '--',
                    'Project name': '--'
                },
            ],        
        }
    }
}
</script>

<style>

</style>